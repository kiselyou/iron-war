import Particle from './../../Particle';

class Arsenal extends Particle {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
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