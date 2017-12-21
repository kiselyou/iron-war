import Engine from '../Engine';
import ParticleClassII from "../../../classes/ParticleClassII";

class EngineIIM100 extends Engine {
	constructor() {
		super('EngineIIM100', Engine.II_M100);
		
		/**
		 *
		 * @type {(ParticleClassII|ParticleClass)}
		 */
		this.particleClass = new ParticleClassII();
	}
}

export default EngineIIM100;