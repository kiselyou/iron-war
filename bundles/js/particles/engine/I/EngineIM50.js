import Engine from '../Engine';
import ParticleClassI from "../../../classes/ParticleClassI";

class EngineIM50 extends Engine {
    constructor() {
        super('EngineIM50', Engine.I_M50_KEY);
	
	    /**
	     *
	     * @type {ParticleClassI}
	     */
	    this.particleClass = new ParticleClassI()
    }
}

export default EngineIM50;