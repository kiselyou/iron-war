import * as THREE from 'three';

class HelperPoint {
	constructor() {
		/**
		 *
		 * @type {Mesh}
		 */
		this.model = new THREE.Mesh();
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._color = 0xFF0000;
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._size = 1;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {HelperPoint}
	 */
	setPosition(v) {
		this.model.position.copy(v);
		return this;
	}
	
	/**
	 *
	 * @param {number} value
	 * @returns {HelperPoint}
	 */
	setColor(value) {
		this._color = value;
		return this;
	}
	
	/**
	 *
	 * @param {number} value
	 * @returns {HelperPoint}
	 */
	setSize(value) {
		this._size = value;
		return this;
	}
	
	init() {
		this.model.geometry = new THREE.SphereGeometry(this._size, 15, 15);
		this.model.material = new THREE.MeshBasicMaterial({color: this._color});
	}
}

export default HelperPoint;