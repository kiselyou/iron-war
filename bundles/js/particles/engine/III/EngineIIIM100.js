import Engine from '../Engine';
import ParticleClassIII from "../../../classes/ParticleClassIII";

class EngineIIIM100 extends Engine {
    constructor() {
	    super('EngineIIIM100', Engine.III_M100_KEY);
	
	    /**
	     *
	     * @type {ParticleClassIII}
	     */
	    this.particleClass = new ParticleClassIII();
    }
}

export default EngineIIIM100;