import * as THREE from 'three';

class ArsenalSlot {
	constructor() {
		
		/**
		 *
		 * @type {boolean}
		 */
		this.enabled = false;
		
		/**
		 *
		 * @type {?Arsenal|Particle}
		 */
		this.arsenal = null;
		
		/**
		 * Current position
		 *
		 * @type {Vector3}
		 */
		this.position = new THREE.Vector3();
		
		/**
		 * Current rotation
		 *
		 * @type {Euler}
		 */
		this.rotation = new THREE.Euler();
	}
}

export default ArsenalSlot;