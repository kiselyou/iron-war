import Engine from '../Engine';
import ParticleClassI from "../../../classes/ParticleClassI";

class EngineIM50 extends Engine {
    constructor() {
        super('EngineIM50', Engine.I_M50);
	
	    /**
	     *
	     * @type {(ParticleClassI|ParticleClass)}
	     */
	    this.particleClass = new ParticleClassI()
    }
}

export default EngineIM50;