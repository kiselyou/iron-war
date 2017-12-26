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
		this.speedMinX = 0;
		
		/**
         *
		 * @type {number}
		 */
        this.speedMaxX = 0;
        
        /**
         *
		 * @type {number}
		 */
		this.speedMinY = 0;
		
		/**
         *
		 * @type {number}
		 */
        this.speedMaxY = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.speedMinZ = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.speedMaxZ = 0;
		
		/**
		 * Left or right moving speed
         *
		 * @type {number}
		 */
		this.speedX = 0;
		
		/**
		 * Up or Down moving speed
		 *
		 * @type {number}
		 */
		this.speedY = 0;
		
		/**
		 * Direct moving speed
         *
		 * @type {number}
		 */
		this.speedZ = 0;
		
		/**
		 * Speed rotate to X or Y
		 *
		 * @type {number}
		 */
		this.rollSpeedXY = Math.PI / 45;
		
		/**
		 * Speed rotation around axis Z
		 *
		 * @type {number}
		 */
		this.rollSpeedZ = Math.PI / 5;
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