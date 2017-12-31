import Particle from './../../Particle';
import Aim from './../decoration/aim/Aim';

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