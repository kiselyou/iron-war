import Particle from './../../Particle';
import ParticleClassI from './../../classes/ParticleClassI';
import {Vector3} from 'three';

class Charge extends Particle {
	
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassI();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.target = new Vector3();
		
		/**
		 *
		 * @type {number}
		 */
		this.speed = 400;
		
		/**
		 *
		 * @type {number}
		 */
		this.maxDistance = 1000;
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.direction = new Vector3();
	}
	
	/**
	 *
	 * @param {Vector3} target
	 */
	prepare(target) {
		this.target.copy(target);
		this.direction = this.target.sub(this.model.position).normalize();
		return this;
	}
	
	/**
	 * @callback listenerToRemove
	 */
	
	/**
	 *
	 * @param {number} delta
	 * @param {listenerToRemove} listener
	 * @returns {void}
	 */
	update(delta, listener) {
		this.model.position.addScaledVector(this.direction, this.speed * delta);
		if (this.model.position.distanceTo(this.target) > this.maxDistance) {
			listener();
		}
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get I_C20_KEY() {
		return 'I_C20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get II_C20_KEY() {
		return 'II_C20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get III_C20_KEY() {
		return 'III_C20_KEY';
	}
}

export default Charge;