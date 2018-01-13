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
	    this.speedX = 15;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMaxX = 5;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedY = 15;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMaxY = 5;
	    
	    /**
	     *
	     * @type {number}
	     */
	    this.speedZ = 0;
	    
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMinZ = - 10;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMaxZ = 150;
	
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
	    this.accelerationForward = 25;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.accelerationBack = 15;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.deceleration = 80;
    }
}

export default EngineIM20;