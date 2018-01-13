import * as THREE from 'three';
import Particle from './../../Particle';

class ArsenalSlot extends Particle {
	constructor() {
		super('ArsenalSlots', ArsenalSlot.ARTICLE_SORT);
		
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
	static ARTICLE_SORT() {
		return 'ARTICLE_SORT';
	}
}

export default ArsenalSlot;