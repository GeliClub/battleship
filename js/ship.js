
function Ship() {
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

	function render() {
		if (attr.rendered) {
			console.warn('Ship element rendering already initialized.');
			return;
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
	}

}