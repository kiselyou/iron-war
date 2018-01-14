import * as THREE from 'three';
import Particle from './../../Particle';

class ArsenalSlot extends Particle {
	
	constructor(name) {
		super('ArsenalSlot', ArsenalSlot.ARSENAL_SLOT);
		
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
	
	/**
	 *
	 * @returns {string}
	 */
	static get ARSENAL_SLOT() {
		return 'ARSENAL_SLOT';
	}
}

export default ArsenalSlot;