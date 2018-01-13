import User from './User';
import ShipIncludes from './../particles/ships/ShipIncludes';
import KeyboardControls from './../keyboard/KeyboardControls';
import FlyControls from './../controls/FlyControls';
import Listener from './../systems/Listener';
import Ship from './../particles/ships/Ship';
import * as THREE from 'three';

class Player extends User {
	/**
	 *
	 * @param {boolean} isUser
	 * @param {string|number} id
	 * @param {HTMLElement} container
	 */
	constructor(isUser, id, container) {
		super();
		
		/**
		 *
		 * @type {boolean}
		 */
		this.isUser = isUser;
		
		/**
		 *
		 * @type {string|number}
		 */
		this.id = id;
		
		/**
		 *
		 * @type {string}
		 */
		this.shipKey = Ship.I_EXPLORER_KEY;
		
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
		
		if (isUser) {
			this.keyboards.initEvents();
		}
		
		/**
		 *
		 * @type {Listener}
		 * @private
		 */
		this._events = new Listener();
		
		/**
		 * Current position
		 *
		 * @type {Vector3}
		 */
		this.position = new THREE.Vector3(
			0,// * (2.0 * Math.random() - 1.0),
			0,// * (2.0 * Math.random() - 1.0),
			0//400 * (2.0 * Math.random() - 1.0)
		);
		
		/**
		 * Current rotation
		 *
		 * @type {Euler}
		 */
		this.rotation = new THREE.Euler();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.lookAt = new THREE.Vector3(0, 0, 0);
		
		/**
		 *
		 * @type {?FlyControls}
		 */
		this.flyControls = null;
	}
	
	/**
	 *
	 * @param {string} value
	 * @returns {Player}
	 */
	updateShipKey(value) {
		this.shipKey = value;
		return this;
	}
	
	/**
	 *
	 * @param {PlayerInfo} data
	 * @return {Player}
	 */
	setSocketInfo(data) {
		this.position.x = data['p']['x'];
		this.position.y = data['p']['y'];
		this.position.z = data['p']['z'];
		
		this.rotation.x = data['r']['x'];
		this.rotation.y = data['r']['y'];
		this.rotation.z = data['r']['z'];
		this.rotation.order = data['r']['o'];
		
		this.updateShipKey(data['sk']);
		return this;
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
	 * @param {boolean} tornOonListener
	 * @returns {Player}
	 */
	enable(value, tornOonListener = true) {
		this._isEnabled = value;
		if (tornOonListener) {
			this._events.callListeners(value ? Player.EVENT_ENABLED : Player.EVENT_DISABLED);
		}
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
	 * Gets element model
	 *
	 * @returns {Mesh|Group}
	 */
	getModel() {
		return this.ship.model;
	}
	
	/**
	 * Gets element aim
	 *
	 * @returns {Group}
	 */
	getAim() {
		return this.ship.aim.model;
	}
	
	/**
	 *
	 * @return {Player}
	 */
	prepareModel() {
		this.ship = ShipIncludes.get().getSpecificObject(this.shipKey);
		if (this.isUser) {
			this.ship.aim.draw();
		} else {
			this.flyControls = new FlyControls(this.getModel(), this);
		}
		return this;
	}
	
	/**
	 *
	 * @param {number} delta
	 */
	update(delta) {
		if (!this.isUser) {
			this.ship.model.position.copy(this.position);
			this.ship.model.rotation.copy(this.rotation);
			
			this.flyControls
				.updatePlayerControl(delta);
		}
	}
}

export default Player;