import User from './User';
import ShipIncludes from './../particles/ships/ShipIncludes';

class Player extends User {
	
	constructor() {
		super();
		
		/**
		 *
		 * @type {?Ship}
		 */
		this.ship = null;
	}
	
	/**
	 *
	 * @returns {Mesh|Group}
	 */
	getModel() {
		return this.ship.model;
	}
	
	/**
	 *
	 * @returns {Player}
	 */
	updateModel() {
		this.ship = ShipIncludes.get().getSpecific(this.shipKey);
		return this;
	}
}

export default Player;