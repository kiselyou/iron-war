import Ship from './../Ship';
import ParticleClassII from './../../../classes/ParticleClassII';
import EngineIIM20 from './../../engine/II/EngineIIM20';

class ShipExplorerII extends Ship {
	constructor() {
		super('ShipExplorerII', Ship.II_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassII();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new EngineIIM20();
	}
}

export default ShipExplorerII;