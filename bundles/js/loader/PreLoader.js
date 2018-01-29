import {THREE} from './../../api';

import OBJLoader from './OBJLoader';
import MTLLoader from './MTLLoader';
import FontLoader from './FontLoader';
import ShipIncludes from './../particles/ships/ShipIncludes';
import ChargeIncludes from './../particles/charge/ChargeIncludes';
import ArsenalIncludes from './../particles/arsenal/ArsenalIncludes';

class PreLoader {
	constructor() {
		
		/**
		 * 1
		 *
		 * @type {ChargeIncludes}
		 */
		this.chargeIncludes = new ChargeIncludes();
		
		/**
		 * 2
		 *
		 * @type {ArsenalIncludes}
		 */
		this.arsenalIncludes = new ArsenalIncludes();
		
		/**
		 * 3
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
	
	/**
	 *
	 * @param listener
	 */
	load(listener) {
		new FontLoader().load(() => {
			this._loadItem(0, listener);
		});
		return this;
	}
	
	/**
	 * @callback listenerPreLoader
	 */
	
	/**
	 *
	 * @param {number} start
	 * @param {listenerPreLoader} listener
	 * @private
	 */
	_loadItem(start, listener) {
		let ship = this.shipIncludes.includes[start];
		if (ship) {
			if (ship.objFileName) {
				this._mtl.setTexturePath(ship.basePath);
				this._mtl.load(ship.basePath + ship.mtlFileName, (materials) => {
					this._obj.setMaterials(materials);
					this._obj.load(ship.basePath + ship.objFileName, (object) => {
						ship.setModel(object);
						this._loadItem(++start, listener);
					});
				});
			} else {
				console.warn('You have not correct configuration of ship: ' + ship.type);
				this._loadItem(++start, listener);
			}
		} else {
			listener();
		}
	}
}

export default PreLoader;