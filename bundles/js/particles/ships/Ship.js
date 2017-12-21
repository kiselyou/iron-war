import Particle from './../../Particle';

class Ship extends Particle {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = null;
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static I_EXPLORER() {
		return 'I_EXPLORER';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static II_EXPLORER() {
		return 'II_EXPLORER';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static III_EXPLORER() {
		return 'III_EXPLORER';
	}
}

export default Ship;