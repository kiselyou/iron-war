import Ship from './../Ship';
import ParticleClassII from './../../../classes/ParticleClassII';
import EngineIIM20 from './../../engine/II/EngineIIM20';

class ShipExplorerII extends Ship {
	constructor() {
		super('ShipExplorerII', Ship.II_EXPLORER);
		
		/**
		 *
		 * @type {ParticleClassII|ParticleClass}
		 */
		this.particleClass = new ParticleClassII();
		
		/**
		 *
		 * @type {(EngineIIM20|Engine)}
		 */
		this.engine = new EngineIIM20();
	}
}

export default ShipExplorerII;