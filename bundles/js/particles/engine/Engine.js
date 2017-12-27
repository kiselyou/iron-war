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
		this.rollSpeedXY = 0;
		
		/**
		 * Speed rotation around axis Z
		 *
		 * @type {number}
		 */
		this.rollSpeedZ = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.accelerationForward = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.accelerationBack = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.deceleration = 0;
    }
	
	/**
	 *
	 * @param {string} direction
	 * @param {number} delta
	 * @returns {Engine}
	 */
	start(direction, delta) {
        switch (direction) {
	        case Engine.DIRECTION_FORWARD:
		        this.speedZ += delta * this.accelerationForward;
	        	break;
	        case Engine.DIRECTION_BACK:
		        this.speedZ -= delta * ((this.speedZ > 0) ? this.deceleration : this.accelerationBack);
		        break;
        }
	    return this;
    }
	
	/**
	 *
	 * @param {number} delta
	 * @returns {Engine}
	 */
	stop(delta) {
    	let v = Math.round(delta * this.deceleration);
    	if (this.speedZ > 0) {
    		if (this.speedZ - v > 0) {
			    this.speedZ -= v;
		    } else {
			    this.speedZ = 0;
		    }
    	} else if (this.speedZ < 0) {
    		if (this.speedZ + v < 0) {
			    this.speedZ += v;
		    } else {
			    this.speedZ = 0;
		    }
	    }
	    return this;
    }
	
	/**
	 *
	 * @returns {string}
	 */
    static get DIRECTION_FORWARD() {
    	return 'DIRECTION_FORWARD';
    }
	
	/**
	 *
	 * @returns {string}
	 */
	static get DIRECTION_BACK() {
		return 'DIRECTION_BACK';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static I_M20_KEY() {
        return 'I_M20_KEY';
    }
	
	/**
     *
	 * @returns {string}
	 */
	static II_M20_KEY() {
		return 'II_M20_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static III_M20_KEY() {
		return 'III_M20_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static I_M50_KEY() {
        return 'I_M50_KEY';
    }
	
	/**
     *
	 * @returns {string}
	 */
	static II_M50_KEY() {
		return 'II_M50_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static III_M50_KEY() {
		return 'III_M50_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static I_M100_KEY() {
		return 'I_M100_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static II_M100_KEY() {
		return 'II_M100_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static III_M100_KEY() {
		return 'III_M100_KEY';
	}
}

export default Engine;