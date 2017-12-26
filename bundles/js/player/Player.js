import User from './User';
import ShipIncludes from './../particles/ships/ShipIncludes';
import KeyboardControls from './../keyboard/KeyboardControls';

class Player extends User {
	/**
	 *
	 * @param {HTMLElement} container
	 */
	constructor(container) {
		super();
		
		/**
		 *
		 * @type {HTMLElement|HTMLDocument}
		 */
		this.container = container;
		
		/**
		 * Disable player
		 *
		 * @type {boolean}
		 */
		this.isEnabled = true;
		
		/**
		 *
		 * @type {?Ship}
		 */
		this.ship = null;
		
		/**
		 *
		 * @type {KeyboardControls}
		 */
		this.keyboards = new KeyboardControls(this.container);
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
	 * @returns {Group}
	 */
	getAim() {
		return this.ship.aim.model;
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