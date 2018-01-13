import Particle from './../../Particle';
import Charge from './../charge/Charge';
import ChargeIncludes from './../charge/ChargeIncludes';
import ParticleClassI from './../../classes/ParticleClassI';

class Arsenal extends Particle {
	
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
		
		/**
		 * If value is true then charges are endless
		 *
		 * @type {boolean}
		 */
		this.endless = true;
		
		/**
		 *
		 * @type {Charge}
		 */
		this.charge = ChargeIncludes.get().getSpecificObject(Charge.I_C20_KEY);
		
		/**
		 *
		 * @type {Array.<Charge>}
		 */
		this.charges = [];
		
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
	static I_A20_KEY() {
		return 'I_A20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static II_A20_KEY() {
		return 'II_A20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static III_A20_KEY() {
		return 'III_A20_KEY';
	}
}

export default Arsenal;