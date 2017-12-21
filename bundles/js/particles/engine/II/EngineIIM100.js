import Engine from '../Engine';
import ParticleClassII from "../../../classes/ParticleClassII";

class EngineIIM100 extends Engine {
	constructor() {
		super('EngineIIM100', Engine.II_M100_KEY);
		
		/**
		 *
		 * @type {ParticleClassII}
		 */
		this.particleClass = new ParticleClassII();
	}
}

export default EngineIIM100;