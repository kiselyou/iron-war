import Engine from '../Engine';
import ParticleClassIII from "../../../classes/ParticleClassIII";

class EngineIIIM50 extends Engine {
	constructor() {
		super('EngineIIIM50', Engine.III_M50_KEY);
		
		/**
		 *
		 * @type {ParticleClassIII}
		 */
		this.particleClass = new ParticleClassIII();
	}
}

export default EngineIIIM50;