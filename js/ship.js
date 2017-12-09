
function Ship() {
	let action = {
		render: (data) => {
			let attr = {
				"rendered": false,
				// 3D component of the ship object
				"hull": null, 
				"mount": null,
				"cannon": null,
				// 3D status and attributes of ships
				"damage": null,
				"color": null,
				"tag": null,
				// Simulation related information 
				"name": null,
				"owner": null,
				"id": null,
				"x": null,
				"y": null,
				"z": null,
				"firepower": null,
				"health": null,
				"speed": null,
				"range": null,
				"sunked": null,
			}
			for (let keys in data) {
				attr[keys] = data[keys];
			}
			let doc = document.getElementById('scene');

			attr.tag = document.createElement('a-entity');
			attr.hull = document.createElement('a-entity');
			attr.mount = document.createElement('a-entity');
			attr.cannon = document.createElement('a-entity');

			attr.tag.setAttribute('position', '0 2 0');
			attr.tag.setAttribute('look-at', '#camera');
			attr.tag.setAttribute('text-geometry', attr.name)
			attr.tag.setAttribute('material', 'color: blue;');

			attr.hull.setAttribute('position', attr.x + ' ' + attr.y + ' ' + attr.z);
			attr.hull.setAttribute('obj-model', 'obj: #shipHull');
			attr.hull.setAttribute('material', ('color: '+attr.color+'; metalness: 0.4;')||('color: blue; metalness: 0.4;'));

			attr.mount.setAttribute('obj-model', 'obj: #shipMount');
			attr.cannon.setAttribute('obj-model', 'obj: #shipCannon');

			doc.appendChild(attr.hull);
			attr.hull.appendChild(attr.name);
			attr.hull.appendChild(attr.mount);
			attr.hull.appendChild(attr.cannon);

			return attr;
		},

		sinkShip: (data, OPTION) => {
			console.log('sink: ', data);
			return new Promise((resolve, reject) => {
				let doc = document.getElementById('scene');
				let track = document.getElementById('track');
				let action = data.present.next.actions[0]; // sink action should only have a size of one
				let shipDom = data.html[action.id];
				
				let debug = document.createElement('a-draw-curve');
				debug.setAttribute('curveref', '#track');
				debug.setAttribute('material', 'shader: line; color: black;');
				doc.appendChild(debug);

				var point1 = document.createElement('a-curve-point');
				var point2 = document.createElement('a-curve-point');
				point1.setAttribute('position', action.x + ' ' + action.y + ' ' + action.z);
				point2.setAttribute('position', action.x + ' ' + (action.y - OPTION.SinkDistance) + ' ' + action.z);
				track.appendChild(point1);
				track.appendChild(point2);

				shipDom.setAttribute('alongpath', 'curve: #track; rotate: true; constraint: 0 1 0; delay: ' + OPTION.WaitTimeBetweenAction + '; dur: 3000;');

				let done = () => {
					shipDom.removeAttribute('alongpath');
					if (debug.parentNode) {
						doc.removeChild(debug);
					}

					while(track.hasChildNodes()) {
						track.removeChild(track.childNodes[0]);
					}

					shipDom.removeAttribute('alongpath');
					shipDom.setAttribute('visible', false);
					shipDom.childNodes.forEach((node) => {
						node.setAttribute('visible', false);
					});

					resolve();
				};

				shipDom.addEventListener('movingended', done);
			});
		},

		fireShip: (data, OPTION) => {
			return new Promise((resolve, reject) => {
				let doc = document.getElementById('scene');
				let track = document.getElementById('track');

				let bullet = document.createElement('a-sphere');
				let source = document.createElement('a-curve-point');
				let arc = document.createElement('a-curve-point');
				let target = document.createElement('a-curve-point');
				bullet.setAttribute('color', 'gray');
				bullet.setAttribute('radius', '0.1');
				bullet.setAttribute('position', data[0].x + ' ' + data[0].y + ' ' + data[0].z);
				source.setAttribute('position', data[0].x + ' ' + data[0].y + ' ' + data[0].z);
				target.setAttribute('position', data[0].atX + ' ' + data[0].atY + ' ' + data[0].atZ);
				arc.setAttribute('position', (data[0].atX+data[0].x)/2 + " " + (((data[0].atY+data[0].y)/2)+OPTION.BulletArc) + " " + (data[0].atZ+data[0].z)/2);
				track.appendChild(source);
				track.appendChild(arc);
				track.appendChild(target);

				let debug = document.createElement('a-draw-curve');
				debug.setAttribute('curveref', '#track');
				debug.setAttribute('material', 'shader: line; color: red;');
				doc.appendChild(debug);

				let path = doc.appendChild(bullet);
				path.setAttribute('alongpath', 'curve: #track; rotate: true; constant: 0 0 1; delay: 200; dur: 500');

				let done = () => {
					path.removeAttribute('alongpath');
					if (debug.parentNode) {
						doc.removeChild(debug);
					}

					while(track.hasChildNodes()) {
						track.removeChild(track.childNodes[0]);
					}

					if (path.parentNode) {
						doc.removeChild(path);
					}

					resolve();
				};

				path.addEventListener('movingended', done);
			});
		},

		moveShip: (data) => {
			return new Promise((resolve, reject) => {

			});
		}
	}

	return action;
}