import OBJLoader from './OBJLoader';
import MTLLoader from './MTLLoader';
import * as THREE from 'three';

let loader = null;

class PreLoader {
	constructor() {
		
		this.models = {};
		
		/**
		 *
		 * @type {LoadingManager}
		 */
		this._manager = new THREE.LoadingManager();
		
		/**
		 *
		 * @type {MTLLoader}
		 * @private
		 */
		this._mtl = new MTLLoader(this._manager);
		
		/**
		 *
		 * @type {OBJLoader}
		 * @private
		 */
		this._obj = new OBJLoader(this._manager);
	}
	
	load(listener) {
		this._mtl.setBaseUrl('models/explorer/');
		this._mtl.load('models/explorer/explorer.mtl', (materials) => {
			this._obj.setMaterials(materials);
			this._obj.load('models/explorer/explorer.obj', (object) => {
				listener(object);
			})
		});
		
	}
	
	// static get() {
	// 	return loader || (loader = new PreLoader());
	// }
	
}

export default PreLoader;