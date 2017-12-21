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
	static I_M20_KEY() {
        return 'I_M20_KEY';
    }
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static II_M20_KEY() {
		return 'II_M20_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static III_M20_KEY() {
		return 'III_M20_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static I_M50_KEY() {
        return 'I_M50_KEY';
    }
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static II_M50_KEY() {
		return 'II_M50_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static III_M50_KEY() {
		return 'III_M50_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static I_M100_KEY() {
		return 'I_M100_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static II_M100_KEY() {
		return 'II_M100_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static III_M100_KEY() {
		return 'III_M100_KEY';
	}
}

export default Engine;