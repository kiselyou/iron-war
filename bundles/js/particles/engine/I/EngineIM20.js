import Engine from '../Engine';
import ParticleClassI from "../../../classes/ParticleClassI";

class EngineIM20 extends Engine {
    constructor() {
        super('EngineIM20', Engine.I_M20_KEY);
	
	    /**
         *
	     * @type {ParticleClassI}
	     */
	    this.particleClass = new ParticleClassI();
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedX = 1500;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMaxX = 2000;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedY = 200;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMaxY = 200;
	    
	    /**
	     *
	     * @type {number}
	     */
	    this.speedZ = 0;
	    
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMinZ = - 1000;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMaxZ = 6000;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.rollSpeedXY = Math.PI / 15;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.rollSpeedZ = Math.PI / 5;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.accelerationForward = 1500;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.accelerationBack = 500;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.deceleration = 1000;
    }
}

export default EngineIM20;