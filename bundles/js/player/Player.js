import User from './User';
import ShipIncludes from './../particles/ships/ShipIncludes';
import KeyboardControls from './../keyboard/KeyboardControls';
import Listener from './../systems/Listener';

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
		 * @private
		 */
		this._isEnabled = false;
		
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
		
		/**
		 *
		 * @type {Listener}
		 * @private
		 */
		this._events = new Listener();
	}
	
	/**
	 *
	 * @returns {boolean}
	 */
	get isEnabled() {
		return this._isEnabled;
	}
	
	/**
	 *
	 * @param {boolean} hide
	 * @return {Player}
	 */
	cursor(hide) {
		this.container.style.cursor = hide ? 'none'  : '';
		return this;
	}
	
	/**
	 *
	 * @param {boolean} value
	 * @returns {Player}
	 */
	enable(value) {
		this._isEnabled = value;
		this._events.callListeners(value ? Player.EVENT_ENABLED : Player.EVENT_DISABLED);
		return this;
	}
	
	/**
	 * @callback playerListener
	 */
	
	/**
	 *
	 * @param {string} type
	 * @param {playerListener} listener
	 * @returns {Player}
	 */
	addEventListener(type, listener) {
		this._events.addEventListener(type, listener);
		return this;
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get EVENT_ENABLED() {
		return 'EVENT_ENABLED';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get EVENT_DISABLED() {
		return 'EVENT_DISABLED';
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
		this.ship.aim.draw();
		return this;
	}
}

export default Player;