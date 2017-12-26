import * as THREE from 'three';

let helper = null;

class HelperPoints {
	/**
	 *
	 * @param {(Scene|Mesh|Group)} obj
	 */
	constructor(obj) {
		/**
		 *
		 * @type {Array.<{name: (string|number), points: Array.<Mesh>}>}
		 * @private
		 */
		this._groups = [];
		
		/**
		 *
		 * @type {(Scene|Mesh|Group)}
		 * @private
		 */
		this._obj = obj;
	}
	
	/**
	 *
	 * @returns {*|HelperPoints}
	 */
	static get() {
		return helper;
	}
	
	/**
	 *
	 * @param {(Vector3|{x: number, y: number, z: number})} position
	 * @param {(string|number)} [group] - name of group points
	 * @param {number} [color]
	 * @param {number} [size]
	 * @returns {HelperPoints}
	 */
	add(position, group = 1, color = 0xff0000, size = 1) {
		let geometry = new THREE.SphereGeometry(size, 15, 15);
		let material = new THREE.MeshBasicMaterial({color: color});
		let mesh = new THREE.Mesh(geometry, material);
		this._addToGroup(group, mesh);
		mesh.position.copy(position);
		this._obj.add(mesh);
		return this;
	}
	
	/**
	 *
	 * @param {(string|number)} groupName - name of group points
	 * @returns {HelperPoints}
	 */
	remove(groupName) {
		for (let i = 0; i < this._groups.length; i++) {
			let group = this._groups[i];
			if (group['name'] === groupName) {
				for (let mesh of group['points']) {
					this._obj.remove(mesh);
				}
				this._groups.splice(i, 1);
				break;
			}
		}
		return this;
	}
	
	/**
	 *
	 * @param {(string|number)} groupName
	 * @param {Mesh} mesh
	 * @private
	 */
	_addToGroup(groupName, mesh) {
		let group = this._groups.find((item) => {
			return item['name'] === groupName;
		});
		if (group) {
			group['points'].push(mesh);
		} else {
			this._groups.push({
				name: groupName,
				points: [mesh]
			});
		}
	}
}

export default HelperPoints;