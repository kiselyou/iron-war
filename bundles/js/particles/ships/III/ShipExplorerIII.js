import Ship from './../Ship';
import ParticleClassIII from './../../../classes/ParticleClassIII';
import EngineIIIM20 from './../../engine/III/EngineIIIM20';

class ShipExplorerIII extends Ship {
	constructor() {
		super('ShipExplorerIII', Ship.III_EXPLORER);
		
		/**
		 *
		 * @type {ParticleClassIII|ParticleClass}
		 */
		this.particleClass = new ParticleClassIII();
		
		/**
		 *
		 * @type {(EngineIIIM20|Engine)}
		 */
		this.engine = new EngineIIIM20();
	}
}

export default ShipExplorerIII;