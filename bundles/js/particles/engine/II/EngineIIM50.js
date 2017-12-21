import Engine from '../Engine';
import ParticleClassII from "../../../classes/ParticleClassII";

class EngineIIM50 extends Engine {
	constructor() {
		super('EngineIIM50', Engine.II_M50_KEY);
		
		/**
		 *
		 * @type {ParticleClassII}
		 */
		this.particleClass = new ParticleClassII();
	}
}

export default EngineIIM50;