import Ship from './../Ship';
import EngineIM20 from './../../engine/I/EngineIM20';
import ParticleClassI from './../../../classes/ParticleClassI';

class ShipExplorerI extends Ship {
	constructor() {
		super('ShipExplorerI', Ship.I_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassI();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new EngineIM20();
		
		/**
		 *
		 * @type {string}
		 */
		this.basePath = 'models/explorer/';
		
		/**
		 *
		 * @type {string}
		 */
		this.objFileName = 'explorer.obj';
		
		/**
		 *
		 * @type {string}
		 */
		this.mtlFileName = 'explorer.mtl';
	}
}

export default ShipExplorerI;