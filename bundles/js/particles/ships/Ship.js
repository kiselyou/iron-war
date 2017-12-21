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
	static I_EXPLORER_KEY() {
		return 'I_EXPLORER_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static II_EXPLORER_KEY() {
		return 'II_EXPLORER_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static III_EXPLORER_KEY() {
		return 'III_EXPLORER_KEY';
	}
}

export default Ship;