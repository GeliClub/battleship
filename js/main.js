// Initialize Firebase
let config = {
	apiKey: "AIzaSyA9EYUXVL5WAh6Aam1qXlWyvi3b7HLcZ1U",
	authDomain: "esigamma.firebaseapp.com",
	databaseURL: "https://esigamma.firebaseio.com",
	projectId: "esigamma",
	storageBucket: "esigamma.appspot.com",
	messagingSenderId: "734163636039"
};
firebase.initializeApp(config);

let database = firebase.database();

let test;

function battleship() {
	
	// private
	let m_Constants = {
		GridScale: 4, 
		CameraYOffset: 8,
		OceanYOffset: 0,
		OceanPadding: 10,
		ShipYOffset: 0,
		SinkDistance: 5,
		BulletArc: 2,
		WaitTimePerTileMoved: 300,
		WaitTimeBetweenAction: 100 // in miliseconds
	};
	
	let m_entity = {}; // object with id to html dom element of ships

	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		let results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function startSimulation(inputs) {
		
		let doc = document.getElementById('scene');
		let track = document.createElement('a-curve');
		track.setAttribute('id', 'track');
		track.setAttribute('type', 'Line');
		doc.appendChild(track);
		
		let data = app.preprocess(inputs, m_Constants);
		let htmlElements = app.render(data, m_Constants);
		console.log(data);
		
		let model = {
			html: htmlElements,
			snapshots: data.snapshots
		};

		// begin simulation
		setTimeout(() => {
			app.simulate(model);
		}, 10000);
	}

	// public
	let app = {

		init: () => {
			let inputs = {};
			let code = getParameterByName('code');
			if (code) {
				let ref = database.ref('davy-jones-locker').child(code);
				ref.once('value', (res) => {
					inputs = {
						"ids": res.val().init.ships.map((s) => { return s.id }),
						"ships": res.val().init.ships,
						"turns": res.val().turns,
						"ocean": res.val().init.map
					};
				}, (err) => {
					console.warn("Unknown URL Code: "+code+", using default input");
					inputs = {
						"ids": input.init.ships.map((s) => { return s.id }),
						"ships": input.init.ships, 
						"turns": input.turns, 
						"ocean": input.init.map
					};
				}).then(() => {
					// Start simulation after populating the inputs
					startSimulation(inputs);
				});
			} else {
				console.log("Missing URL Code, using default input");
				inputs = {
					"ids": input.init.ships.map((s) => { return s.id }),
					"ships": input.init.ships, 
					"turns": input.turns, 
					"ocean": input.init.map
				};
				// Start simulation after populating the inputs
				startSimulation(inputs);
			}
		},

		reducer: (tree, action, OPTION) => {
			// Converts actions into state tree starting from inital states and list of actions
			console.log(tree);
			let structure = {
				"states": tree.states,
				"next": action
			};
			
			structure.states = tree.states.map((ship) => {
				if (action.id === ship.id) {
					switch(action.type) {
						case "Move":
							// iterate over all the chained actions and apply it the the state
							// function would need to check validity in movement, which not checked in the data
							// action.actions.forEach((a) => {
							// 	if (a.direction === "North") {
							// 		if (ship.z > 0)
							// 			ship.z -= OPTION.GridScale;
							// 	}
							// 	else if (a.direction === "South") {
							// 		ship.z += OPTION.GridScale;
							// 	}
							// 	else if (a.direction === "West") {
							// 		if (ship.x > 0)
							// 			ship.x -= OPTION.GridScale;
							// 	}
							// 	else if (a.direction === "East") {
							// 		ship.x += OPTION.GridScale;
							// 	}
							// });

							// shortcut, update state from the result of the last action list
							let last = action.actions[action.actions.length-1];
							ship.z = last.z;
							ship.x = last.x;
							return ship;
						case "Sunk":
							ship.sunk = true;
							return ship;

						default:
							return ship;
					}
				}
				else {
					return ship;
				}
			});

			return structure;
		},

		// TODO: Write Test Case
		// Map the 1x1 coordinate system into a given scale, e.g. 4x4 coordinate system
		transform: (data, scale, OPTION) => {
			console.log("transform: ", data);
			let result = data.map((entry) => {
				if (entry.hasOwnProperty("atX") && entry.hasOwnProperty("atY")) {
					entry.atX = scale * entry.atX;
					entry.atZ = scale * entry.atY; // 3D uses the xz plane as part of the ground
					entry.atY = OPTION.ShipYOffset;
				}
				entry.x = scale * entry.x;
				entry.z = scale * entry.y; // 3D uses the xz plane as part of the ground
				entry.y = OPTION.ShipYOffset;
				return entry;
			});
			// console.log(result);
			return result;
		},

		// TODO: Write Test Case
		// Map a list of atmoic actions into a chain-able list of actions for smooth animation and movements 
		actionChain: (data) => {
			let result = [];
			data.map((entry) => {
				if (result && result.length > 0) { 
					// result[i] will always have at least one item in its action attribute list
					let last = result[result.length-1].actions;
					// action can be chained if they are of the same type from the same ship id
					// console.log("Comparing: ", result[result.length-1], last, entry);
					if (last[0].id === entry.id && last[0].type === entry.type && 
						((last[0].type === "MOVE") || 
						 (last[0].type === "FIRE" && last[0].atX === entry.atX && last[0].atY === entry.atY) )) {
						// Movement can be chained and firing at the same location can be chained
						last.push(entry);
					} 
					else {
						result.push({
							type: entry.type,
							actions: [entry]
						});
					}
				} 
				else { // if result is empty, initial case
					result.push({
						type: entry.type,
						actions: [entry]
					});
				}
			});
			console.log(result);
			return result;
		},

		preprocess: (data, OPTION) => {
			let result = {};
			console.log(data);

			// preprocess initial map information
			// m_ocean = { "x": ((4*Math.floor(data.ocean.x/2))-2) + (m_Constants.OceanPadding/2),
			//             "y": m_Constants.OceanYOffset, 
			//             "z": ((4*Math.floor(data.ocean.y/2))) + (m_Constants.OceanPadding/2), 
			//             "width": (4*data.ocean.x)+m_Constants.OceanPadding, 
			//             "depth": (4*data.ocean.y)+m_Constants.OceanPadding, 
			//             "density": Math.min(3*data.ocean.x, 3*data.ocean.y)+m_Constants.OceanPadding
			//         };
			result.map = {
				"x": ((OPTION.GridScale*Math.floor(data.ocean.x/2))-2),
				"y": OPTION.OceanYOffset, 
				"z": ((OPTION.GridScale*Math.floor(data.ocean.y/2))),
				"width": 200, 
				"depth": 200,
				"density": 120
			};

			console.log(data);
			// scale up ship's initial locations 
			result.ships = app.transform(data.ships, OPTION.GridScale, OPTION);

			// add sunk property into the inital state of the ships
			result.ships.forEach((ship) => {
				ship.sunk = false;
			});

			// scale up action's coordinates, then aggregate chainable actions
			result.turns = app.actionChain( app.transform(data.turns, OPTION.GridScale, OPTION) );
			result.turns.push({type: "END", actions: undefined}); // add end turn

			console.log(result);
			// add a state tree attribute to the result
			result.snapshots = {
				past: [],
				present: {},
				future: []
			};

			console.log("initial state: ", result.ships);

			let currentState = {states: result.ships, next:result.turns[0]}; // initial state
			result.turns.forEach((turn) => {
				result.snapshots.future.push(currentState);
				currentState = app.reducer(currentState, turn, OPTION);
			});
			result.snapshots.future.reverse();
			result.snapshots.present = result.snapshots.future.pop(0);

			console.log(result);
			return result;
		},

		// Displays the ocean, and ships
		// TODO: check the edge cases with the map edges/sizes
		render: (data, OPTION) => {
			let htmlElement = {};
			let doc = document.getElementById('scene'); // <a-scene> reference

			// re-position camera: camera must be already present when html loads
			let camera = document.getElementById('camera');
			//camera.setAttribute('position', data.ocean.x + " " + data.ocean.y + " " + data.ocean.z);
			camera.setAttribute('position', data.map.x + " " + data.map.y + " " + (data.map.z+(1.5*data.map.x)));
			camera.setAttribute('camera', 'userHeight: ' + OPTION.CameraYOffset);
			camera.setAttribute('rotation', -Math.atan(OPTION.CameraYOffset/(data.map.z+data.map.x)));
			
			// Generate Map
			// TODO: Possible edge cases with the map edge not being big enough
			let map = document.createElement('a-ocean');

			map.setAttribute('position', data.map.x + " " + data.map.y + " " + data.map.z);
			map.setAttribute('width', String(data.map.width));
			map.setAttribute('depth', String(data.map.depth));
			map.setAttribute('density', String(data.map.density));
			doc.appendChild(map);

			// Spawn Ships
			data.ships.forEach((entry) => {
				let shipHull = document.createElement('a-entity');
				let shipMount = document.createElement('a-entity');
				let shipCannon = document.createElement('a-entity');
				let name = document.createElement('a-entity');
				
				name.setAttribute('position', "0 2 0");
				name.setAttribute('look-at', '#camera');
				name.setAttribute('text-geometry', "value: "+entry.name.substring(0, Math.min(entry.name.length, 24)) + "; font: #play");
				name.setAttribute('material', 'color: blue;');

				shipHull.setAttribute('position', entry.x + " " + entry.y + " " + entry.z);
				shipHull.dataset.id = entry.id;
				shipHull.dataset.name = entry.name;
				shipHull.dataset.owner = entry.owner;
				shipHull.dataset.x = entry.x;
				shipHull.dataset.y = entry.y;
				shipHull.dataset.z = entry.z;
				shipHull.dataset.health = entry.hull;
				shipHull.dataset.hull = entry.hull;
				shipHull.dataset.firepower = entry.firepower;
				shipHull.dataset.speed = entry.speed;
				shipHull.dataset.range = entry.range;
				// shipHull.setAttribute('src', '#ShipHull'); // for collada models
				shipHull.setAttribute('obj-model', 'obj: #shipHull');
				shipHull.setAttribute('material', 'color: '+entry.color+'; metalness: 0.4;');

				//shipMount.setAttribute('material', 'color: '+entry.color+';');
				shipMount.setAttribute('obj-model', 'obj: #shipMount');
				shipCannon.setAttribute('obj-model', 'obj: #shipCannon');


				doc.appendChild(shipHull);
				shipHull.appendChild(name);
				shipHull.appendChild(shipMount);
				shipHull.appendChild(shipCannon);
				m_entity[entry.id] = shipHull;
				htmlElement[entry.id] = shipHull;
			});
			console.log(m_entity);
			return htmlElement;
		},

		sinkShip: (data) => {
			return new Promise((resolve, reject) => {
				var doc = document.getElementById('scene');
				var track = document.getElementById('track');
				var shipDom = m_entity[data[0].id];

				var debug = document.createElement('a-draw-curve');
				debug.setAttribute('curveref', '#track');
				debug.setAttribute('material', 'shader: line; color: black;');
				doc.appendChild(debug);

				var point1 = document.createElement('a-curve-point');
				var point2 = document.createElement('a-curve-point');
				point1.setAttribute('position', data[0].x + " " + data[0].y + " " + data[0].z);
				point2.setAttribute('position', data[0].x + " " + (data[0].y-m_Constants.SinkDistance) + " " + data[0].z);
				track.appendChild(point1);
				track.appendChild(point2);

				shipDom.setAttribute('alongpath', 'curve: #track; rotate: true; constraint: 0 1 0; delay: '+m_Constants.WaitTimeBetweenAction+'; dur: 3000;');

				var done = (event) => {
					shipDom.removeAttribute('alongpath');
					if (debug.parentNode) {
						doc.removeChild(debug);
					}

					while(track.hasChildNodes()) {
						track.removeChild(track.childNodes[0]);
					}

					//shipDom.removeEventListener('movingended', done);

					if (shipDom.parentNode) {
						doc.removeChild(shipDom);
					}

					resolve(event);
				};

				shipDom.addEventListener('movingended', done);
				// resolve();
			});
		},

		// Data passed in are one ships action of firing at one and only one coordinate
		fireShip: (data) => {
			return new Promise((resolve, reject) => {
				var doc = document.getElementById('scene');
				var track = document.getElementById('track');

				var bullet = document.createElement('a-sphere');
				var source = document.createElement('a-curve-point');
				var arc = document.createElement('a-curve-point');
				var target = document.createElement('a-curve-point');
				bullet.setAttribute('color', 'gray');
				bullet.setAttribute('radius', '0.1');
				bullet.setAttribute('position', data[0].x + " " + data[0].y + " " + data[0].z);
				source.setAttribute('position', data[0].x + " " + data[0].y + " " + data[0].z);
				target.setAttribute('position', data[0].atX + " " + data[0].atY + " " + data[0].atZ);
				arc.setAttribute('position', (data[0].atX+data[0].x)/2 + " " + (((data[0].atY+data[0].y)/2)+m_Constants.BulletArc) + " " + (data[0].atZ+data[0].z)/2);
				track.appendChild(source);
				track.appendChild(arc);
				track.appendChild(target);

				var debug = document.createElement('a-draw-curve');
				debug.setAttribute('curveref', '#track');
				debug.setAttribute('material', 'shader: line; color: red;');
				doc.appendChild(debug);

				var tmp = doc.appendChild(bullet);
				tmp.setAttribute('alongpath', 'curve: #track; rotate: true; constant: 0 0 1; delay: 200; dur: 500');

				var done = (event) => {
					tmp.removeAttribute('alongpath');
					if (debug.parentNode) {
						doc.removeChild(debug);
					}
					while(track.hasChildNodes()) {
						track.removeChild(track.childNodes[0]);
					}

					//tmp.removeEventListener('movingended', done);
					if (tmp.parentNode) {
						doc.removeChild(tmp);
					}

					resolve(event);
				}

				tmp.addEventListener('movingended', done);
				//resolve();
			});
		},

		// Data passed in must be for movement of one ship
		moveShip: (data) => {
			return new Promise((resolve, reject) => {

				var shipDom = m_entity[data[0].id]; // html element
				// if statement is not working
				// if (data.length === 1 && data[0].x === shipDom.dataset.x && data[0].z === shipDom.dataset.z) {
				//     // if shipDom tries to move against edge or occupied place
				//     alert("Skipped");
				//     resolve("Skipped");
				// }

				var doc = document.getElementById('scene'); // <a-scene> reference
				var track = document.getElementById('track');
				//var startCoord = {"x": data[0].x};

				var debug = document.createElement('a-draw-curve');
				debug.setAttribute('curveref', '#track');
				debug.setAttribute('material', 'shader: line; color: blue;');
				doc.appendChild(debug);

				// add current location as a starting point of the curve
				var point = document.createElement('a-curve-point');
				point.setAttribute('position', String(shipDom.dataset.x + " " + shipDom.dataset.y + " " + shipDom.dataset.z));
				track.appendChild(point);
				// add chain-able goal locations to the curve
				var previous = {'x': shipDom.dataset.x, 'z': shipDom.dataset.z};
				var xDistance = 0;
				var zDistance = 0;
				// console.log("Moving: ", data);
				for (var i = 0; i < data.length; i++) {
					point = document.createElement('a-curve-point');
					point.setAttribute('position', data[i].x + " " + data[i].y + " " + data[i].z);
					xDistance += Math.abs(data[i].x - previous.x);
					zDistance += Math.abs(data[i].z - previous.z);
					if (i + 1 < data.length && data[i].x === data[i+1].x && data[i].z === data[i+1].z) {
						i++;
					}
					track.appendChild(point);
					previous = {'x': data[i].x, 'z': data[i].z};
				}
				var dur = (xDistance+zDistance)*m_Constants.WaitTimePerTileMoved;
				shipDom.setAttribute('alongpath', 'curve: #track; rotate: true; constraint: 0 0 1; delay: '+m_Constants.WaitTimeBetweenAction+'; dur: '+dur+';');

				var done = (event) => {
					// var list = document.getElementByTagName('a-draw-curve');
					// for (var i = 0; i < list.length; i++) {
					//     list[0].parentNode.removeChild(list[0]);
					// }
					if (debug.parentNode) {
						doc.removeChild(debug);
					}

					while(track.hasChildNodes()) {
						track.removeChild(track.childNodes[0]);
					}
					
					shipDom.removeAttribute('alongpath');
					shipDom.dataset.x = data[data.length-1].x;
					shipDom.dataset.z = data[data.length-1].z;
					shipDom.dataset.y = data[data.length-1].y;

					//shipDom.removeEventListener('movingended', done);
					resolve(event);
				};

				shipDom.addEventListener('movingended', done);

				
			});
		},

		interrupt: () => {
			return new Promise((resolve, reject) => {
				window.addEventListener('keypress', resolve, {once: true});
			});
		},

		simulate: (data) => {
			console.log("simulate: ", data);

			// app.interrupt().then((done) => {
			// 	console.log(done);
			// });

			let isDone = false;
			if (data.snapshots.future.length == 0) {
				isDone = true
			}
			let current = data.snapshots.future.pop();
			if (current && !isDone) {
				console.log("current: ", current);
				switch(current.next.type) {
					case "MOVE":
						app.moveShip(current.next.actions).then((done) => {
							//alert("Moved " + data.turns.length + " actions left");
							data.snapshots.past.push(data.snapshots.present);
							data.snapshots.present = current;
							app.simulate(data);
						}).catch((err) => {
							console.error(err);
						});
						break;
					case "FIRE":
						app.fireShip(current.next.actions).then((done) => {
							//alert("Fired " + data.turns.length + " actions left");
							data.snapshots.past.push(data.snapshots.present);
							data.snapshots.present = current;
							app.simulate(data);
						}).catch((err) => {
							console.error(err);
						});
						break;
					case "SINK":
						app.sinkShip(current.next.actions).then((done) => {
							//alert("Sunk "+ data.turns.length + " actions left");
							data.snapshots.past.push(data.snapshots.present);
							data.snapshots.present = current;
							app.simulate(data);
						}).catch((err) => {
							console.error(err);
						});
						break;
					case "END":
						setTimeout(() => {
							alert("Simulation Done");
						}, 10000);
						break;
					default:
						console.log("Unknown Action Type " + current.type + " in simulate function");
				}
			} else {
				setTimeout(() => {
					alert("Simulation Done");
				}, 10000);
			}

		},

		/** translates the coordinate in the java game to this scene's coordinate
			Java Game: Each ship spans one (x, y) unit
			Java Game: Coordinate system has (0, 0) at top left corner (without negatives)
			AFrame Scene: Each ship model is a 4x4 box
			AFrame Scene: Coordinate system is (0, 0) at the center (with negatives)
		*/

	}

	return app;
}

var app = battleship();
app.init();

// var BATTLE_SERVER_URL = 'https://battleship-vingkan.c9users.io/1v1?p1=esi17.cs.DestroyerShip&p2=esi17.hli109.Floater';// + Math.ceil(Math.random() * 100);

// $.get(BATTLE_SERVER_URL).then(data => {
// 	input = data;
// 	app.init();
// }).done(() => {
// 	console.log("Data successfully retrieved from server");
// }).fail(() => {
// 	console.log("Unable to retrieve data, starting with local data");
// 	app.init();
// });






