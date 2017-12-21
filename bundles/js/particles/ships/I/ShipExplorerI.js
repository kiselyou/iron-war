import Ship from './../Ship';
import ParticleClassI from './../../../classes/ParticleClassI';
import EngineIM20 from './../../engine/I/EngineIM20';

class ShipExplorerI extends Ship {
	constructor() {
		super('ShipExplorerI', Ship.I_EXPLORER);
		
		/**
		 *
		 * @type {ParticleClassI|ParticleClass}
		 */
		this.particleClass = new ParticleClassI();
		
		/**
		 *
		 * @type {(EngineIM20|Engine)}
		 */
		this.engine = new EngineIM20();
	}
}

export default ShipExplorerI;