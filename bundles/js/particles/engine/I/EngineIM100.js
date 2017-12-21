import Engine from '../Engine';
import ParticleClassI from "../../../classes/ParticleClassI";

class EngineIM100 extends Engine {
    constructor() {
        super('EngineIM100', Engine.I_M100);
	
	    /**
	     *
	     * @type {(ParticleClassI|ParticleClass)}
	     */
	    this.particleClass = new ParticleClassI()
    }
}

export default EngineIM100;