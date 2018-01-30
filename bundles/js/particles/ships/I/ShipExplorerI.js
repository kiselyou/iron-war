import Ship from './../Ship';
import EngineIM20 from './../../engine/I/EngineIM20';
import ParticleClassI from './../../../classes/ParticleClassI';
import ArsenalIncludes from './../../arsenal/ArsenalIncludes';
import Arsenal from './../../arsenal/Arsenal';
import {THREE} from '../../../../api';

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
		
		let arsenal = ArsenalIncludes.get();
		
		this.arsenalSlots.slot_a.arsenal = arsenal.getSpecificObject(Arsenal.I_A20_KEY);
		this.arsenalSlots.slot_a.enabled = true;
		this.arsenalSlots.slot_a.rotation.set(Math.PI / 2, 0, 0);
		this.arsenalSlots.slot_a.position.set(-2.3, -1.7, -4.5);
		
		this.arsenalSlots.slot_b.arsenal = arsenal.getSpecificObject(Arsenal.I_A20_KEY);
		this.arsenalSlots.slot_b.enabled = true;
		this.arsenalSlots.slot_b.rotation.set(Math.PI / 2, 0, 0);
		this.arsenalSlots.slot_b.position.set(2.3, -1.7, -4.5);
		
		this.addEventListener(Ship.EVENT_MODEL_UPDATE, (model) => {
			model.children[0].rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);
			model.children[0].position.y = -2;
			this.updateArsenal();
		});
	}
}

export default ShipExplorerI;