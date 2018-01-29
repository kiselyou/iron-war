import Particle from './../../Particle';
import ParticleClassI from './../../classes/ParticleClassI';
import {THREE} from './../../../api';

class Charge extends Particle {
	
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassI();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.target = new THREE.Vector3();
		
		/**
		 *
		 * @type {number}
		 */
		this.speed = 1000;
		
		/**
		 *
		 * @type {number}
		 */
		this.maxDistanceToDestroy = 2000;
		
		/**
		 *
		 * @type {Vector3}
         * @private
		 */
		this.direction = new THREE.Vector3();

        /**
         *
         * @type {Vector3}
         */
		this.startPosition = new THREE.Vector3();
	}

    /**
     *
     * @param {Vector} v
     * @returns {Charge}
     */
	setPosition(v) {
        this.model.position.copy(v);
        this.startPosition.copy(v);
        return this;
    }
	
	/**
	 *
	 * @param {Vector3} target
	 */
	prepare(target) {
		this.target.copy(target);
		return this;
	}
	
	/**
	 * @callback listenerToRemove
	 */
	
	/**
	 *
	 * @param {number} delta
	 * @param {listenerToRemove} destroyListener
	 * @returns {void}
	 */
	update(delta, destroyListener) {
        this.direction.copy(this.target);
        this.direction = this.direction.sub(this.model.position).normalize();
		this.model.position.addScaledVector(this.direction, this.speed * delta);

		if (this.startPosition.distanceTo(this.model.position) >= this.maxDistanceToDestroy) {
            destroyListener();
        }
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get I_C20_KEY() {
		return 'I_C20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get II_C20_KEY() {
		return 'II_C20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get III_C20_KEY() {
		return 'III_C20_KEY';
	}
}

export default Charge;