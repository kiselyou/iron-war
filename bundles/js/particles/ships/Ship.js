import Particle from './../../Particle';
import Aim from './../decoration/aim/Aim';
import ArsenalSlots from './../arsenal/ArsenalSlots';
import ArsenalSlot from './../arsenal/ArsenalSlot';

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
		 * @type {ArsenalSlots}
		 */
		this.arsenalSlots = new ArsenalSlots();
		
		/**
		 *
		 * @type {Aim}
		 */
		this.aim = new Aim();
	}
	/**
	 *
	 * @param {(Mesh|Group)} obj
	 * @returns {Ship}
	 */
	setModel(obj) {
		super.setModel(obj, Ship.EVENT_MODEL_UPDATE);
		return this;
	}
	
	/**
	 * Add models of arsenal to ship model
	 *
	 * @returns {Ship}
	 */
	updateArsenal() {
		for (let property in this.arsenalSlots) {
			if (this.arsenalSlots.hasOwnProperty(property) && this.arsenalSlots[property] instanceof ArsenalSlot) {
				let slot = this.arsenalSlots[property];
				let model = slot.arsenal.model;
				if (model) {
					model.position.copy(slot.position);
					model.rotation.copy(slot.rotation);
					model.matrixAutoUpdate = false;
					model.updateMatrix();
					this.model.remove(model);
					this.model.add(model);
				}
			}
		}
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