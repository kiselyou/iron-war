import Ship from './../Ship';
import ParticleClassIII from './../../../classes/ParticleClassIII';
import EngineIIIM20 from './../../engine/III/EngineIIIM20';

class ShipExplorerIII extends Ship {
	constructor() {
		super('ShipExplorerIII', Ship.III_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassIII();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new EngineIIIM20();
	}
}

export default ShipExplorerIII;