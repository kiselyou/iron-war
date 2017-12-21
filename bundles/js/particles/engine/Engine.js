import Particle from './../../Particle';

class Engine extends Particle {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
    constructor(type, key) {
        super(type, key);
		
		/**
         *
		 * @type {number}
		 */
		this.speedMin = 0;
		
		/**
         *
		 * @type {number}
		 */
        this.speedMax = 0;
		
		/**
         *
		 * @type {number}
		 */
		this.speed = 0;
    }
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static I_M20() {
        return 'I_M20';
    }
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static II_M20() {
		return 'II_M20';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static III_M20() {
		return 'III_M20';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static I_M50() {
        return 'I_M50';
    }
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static II_M50() {
		return 'II_M50';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static III_M50() {
		return 'III_M50';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static I_M100() {
		return 'I_M100';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static II_M100() {
		return 'II_M100';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static III_M100() {
		return 'III_M100';
	}
}

export default Engine;