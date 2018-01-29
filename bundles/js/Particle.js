import ParticleError from './ParticleError';
import Listener from './systems/Listener';
import {THREE} from './../api';

class Particle {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		/**
		 *
		 * @type {string}
		 */
		this.id = '';
		
		/**
		 *
		 * @type {boolean}
		 */
		this.isClone = false;
		
		/**
		 *
		 * @type {string|number}
		 */
		this.key = key;
		
		/**
		 *
		 * @type {string}
		 */
		this.type = type;
		
		/**
		 *
		 * @type {?string}
		 */
		this.name = null;
		
		/**
		 *
		 * @type {?string}
		 */
		this.label = null;
		
		/**
		 *
		 * @type {?string}
		 */
		this.description = null;
		
		/**
		 *
		 * @type {?ParticleClass}
		 */
		this.particleClass = null;
		
		/**
		 *
		 * @type {Array.<Particle>}
		 */
		this.children = [];
		
		/**
		 *
		 * @type {?(Mesh|Group)}
		 */
		this.model = null;
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.size = new THREE.Vector3();
		
		/**
		 *
		 * @type {Listener}
		 * @private
		 */
		this._events = new Listener();
		
		/**
		 *
		 * @type {boolean}
		 */
		this.enabled = true;
	}
	
	/**
	 * @param {Object3D} model
	 * @callback shipUpdateListener
	 */
	
	/**
	 *
	 * @param {string} type
	 * @param {shipUpdateListener} listener
	 * @returns {Particle}
	 */
	addEventListener(type, listener) {
		this._events.addEventListener(type, listener);
		return this;
	}
	
	/**
	 *
	 * @param {(Mesh|Group)} obj
	 * @param {string|number} [eventType] - The event name if you wont use method "addEventListener"
	 * @returns {Particle}
	 */
	setModel(obj, eventType) {
		let mesh = new THREE.Object3D();
		mesh.add(obj);
		this.model = mesh;
		if (eventType) {
			this._events.callListeners(eventType, this.model);
		}
		return this;
	}
	
	/**
	 * Clone Particle
	 *
	 * @returns {Particle}
	 */
	clone() {
		/**
		 *
		 * @type {Particle}
		 */
		let clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		clone.isClone = true;
		for (let property in this) {
			if (this.hasOwnProperty(property)) {
				if (this[property] instanceof Particle) {
					clone[property] = clone[property].clone();
				} else if (this[property] instanceof THREE.Object3D) {
					clone[property] = clone[property].clone();
				} else if (this[property] instanceof THREE.Vector3) {
					clone[property] = clone[property].clone();
				} else if (this[property] instanceof THREE.Vector2) {
					clone[property] = clone[property].clone();
				}
			}
		}
		return clone;
	}
	
	/**
	 * Data to JSON
	 *
	 * @returns {string}
	 */
	toJson() {
		return JSON.stringify(this);
	}
	
	/**
	 * Set data from JSON
	 *
	 * @param {string} str
	 * @param {boolean} [strict]
	 * @returns {Particle}
	 */
	fromJson(str, strict = true) {
		try {
			let data = JSON.parse(str);
			if (data['type'] !== this.type && strict) {
				new ParticleError('You tried to set not correct object');
			}
			
			for (let property in data) {
				if (data.hasOwnProperty(property)) {
					if (this.hasOwnProperty(property)) {
						switch (property) {
							case 'children':
								
								break;
							default:
								this[property] = data[property];
								break;
						}
					} else if (strict) {
						console.warn('Property "' + property + '" does not exists in the "' + this.type + '"');
					}
				}
			}
		} catch (e) {
			console.error(e);
		}
		return this;
	}
}

export default Particle;