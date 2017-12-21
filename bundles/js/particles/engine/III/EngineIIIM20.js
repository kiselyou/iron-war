import Engine from '../Engine';
import ParticleClassIII from "../../../classes/ParticleClassIII";

class EngineIIIM20 extends Engine {
	constructor() {
		super('EngineIIIM20', Engine.III_M20);
		
		/**
		 *
		 * @type {(ParticleClassIII|ParticleClass)}
		 */
		this.particleClass = new ParticleClassIII();
	}
}

export default EngineIIIM20;