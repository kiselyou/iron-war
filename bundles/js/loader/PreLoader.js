import OBJLoader from './OBJLoader';
import MTLLoader from './MTLLoader';
import * as THREE from 'three';
import ShipIncludes from './../particles/ships/ShipIncludes';

class PreLoader {
	constructor() {
		
		/**
		 *
		 * @type {ShipIncludes}
		 */
		this.shipIncludes = new ShipIncludes();
		
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
		this.loadItem(0, listener);
	}
	
	/**
	 * @callback listenerPreLoader
	 */
	
	/**
	 *
	 * @param {number} start
	 * @param {listenerPreLoader} listener
	 */
	loadItem(start, listener) {
		let ship = this.shipIncludes.includes[start];
		if (ship) {
			if (ship.objFileName) {
				this._mtl.setBaseUrl(ship.basePath);
				this._mtl.load(ship.basePath + ship.mtlFileName, (materials) => {
					this._obj.setMaterials(materials);
					this._obj.load(ship.basePath + ship.objFileName, (object) => {
						ship.setModel(object);
						this.loadItem(++start, listener);
					});
				});
			} else {
				console.warn('You have not correct configuration of ship: ' + ship.type);
				this.loadItem(++start, listener);
			}
		} else {
			listener();
		}
	}
}

export default PreLoader;