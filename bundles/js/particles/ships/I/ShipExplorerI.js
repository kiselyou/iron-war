import Ship from './../Ship';
import Engine from "../../engine/Engine";
import EngineIncludes from './../../engine/EngineIncludes';
import ParticleClassI from './../../../classes/ParticleClassI';

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
		 * @type {EngineIncludes}
		 */
		let engine = new EngineIncludes();
		
		/**
		 *
		 * @type {(EngineIM20|Engine)}
		 */
		this.engine = engine.get(Engine.I_M20);
	}
}

export default ShipExplorerI;