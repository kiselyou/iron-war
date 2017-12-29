import Ship from './../Ship';
import EngineIM20 from './../../engine/I/EngineIM20';
import ParticleClassI from './../../../classes/ParticleClassI';
import * as THREE from 'three';

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
		
		// this.calibration.position.z = 0;
		// this.calibration.position.y = -2;
		// this.calibration.rotation.y = Math.PI;
		
		
		this.addEventListener(Ship.EVENT_MODEL_UPDATE, (model) => {
			// model.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);
			// model.position.y = -2;
			// model.position.z = 0;
			// model.position.y = -2;
			// model.rotation.y = Math.PI;
		});
	}
}

export default ShipExplorerI;