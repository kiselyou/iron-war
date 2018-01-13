import Particle from './../../Particle';
import ParticleClassI from './../../classes/ParticleClassI';

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
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static I_C20_KEY() {
		return 'I_C20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static II_C20_KEY() {
		return 'II_C20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static III_C20_KEY() {
		return 'III_C20_KEY';
	}
}

export default Charge;