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
	    this.speed = 5500;
	    
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMax = 6000;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.rollSpeed = Math.PI / 25;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.rollSpeedMax = Math.PI / 10;
    }
}

export default EngineIM20;