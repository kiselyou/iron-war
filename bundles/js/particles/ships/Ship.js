import Particle from './../../Particle';
import Aim from './../decoration/Aim';

class Ship extends Particle {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = null;
		
		/**
		 * This is base path to model e.g "models/explorer/"
		 *
		 * @type {?string}
		 */
		this.basePath = null;
		
		/**
		 * This is a path to obj file
		 *
		 * @type {?string}
		 */
		this.objFileName = null;
		
		/**
		 * This is a path to mtl file
		 *
		 * @type {?string}
		 */
		this.mtlFileName = null;
		
		/**
		 *
		 * @type {?(Mesh|Group)}
		 */
		this.model = null;
		
		/**
		 *
		 * @type {Aim}
		 */
		this.aim = new Aim();
		
		/**
		 *
		 * @type {Array}
		 */
		this.listeners = [];
	}
	
	/**
	 * @param {Mesh|Group} model
	 * @callback shipUpdateListener
	 */
	
	/**
	 *
	 * @param {string} event
	 * @param {shipUpdateListener} listener
	 * @returns {Ship}
	 */
	addEventListener(event, listener) {
		this.listeners.push({
			event: event,
			listener: listener
		});
		return this;
	}
	
	/**
	 *
	 * @returns {void}
	 * @private
	 */
	_callListeners(event) {
		for (let item of this.listeners) {
			if (event === item.event) {
				switch (item.event) {
					case Ship.EVENT_MODEL_UPDATE:
						item.listener(this.model);
						break;
				}
			}
		}
	}
	
	/**
	 *
	 * @param {(Mesh|Group)} obj
	 * @returns {Ship}
	 */
	setModel(obj) {
		this.model = obj;
		this._callListeners(Ship.EVENT_MODEL_UPDATE);
		return this;
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static EVENT_MODEL_UPDATE() {
		return 'EVENT_MODEL_UPDATE'
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get I_EXPLORER_KEY() {
		return 'I_EXPLORER_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get II_EXPLORER_KEY() {
		return 'II_EXPLORER_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get III_EXPLORER_KEY() {
		return 'III_EXPLORER_KEY';
	}
}

export default Ship;