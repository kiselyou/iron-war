import Engine from '../Engine';
import ParticleClassI from "../../../classes/ParticleClassI";

class EngineIM20 extends Engine {
    constructor() {
        super('EngineIM20', Engine.I_M20);
	
	    /**
         *
	     * @type {(ParticleClassI|ParticleClass)}
	     */
	    this.particleClass = new ParticleClassI();
    }
}

export default EngineIM20;