import Particle from './../../Particle';
import ParticleClassI from './../../classes/ParticleClassI';
import {THREE} from '../../../api';

import ShaderFire from './../arsenal/I/ShaderFire';

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
		this.speed = 500;
		
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

        /**
		 *
         * @type {Vector3}
         */
		this.previousPosition = new THREE.Vector3();

        /**
		 *
         * @type {ShaderFire}
         */
        this.shader = new ShaderFire();

        /**
		 *
         * @type {boolean}
         * @private
         */
        this._enabled = true;

        /**
		 *
         * @type {Box3}
         * @private
         */
        this._box1 = new THREE.Box3();

        /**
         *
         * @type {Box3}
         * @private
         */
        this._box2 = new THREE.Box3();

        /**
		 *
         * @type {?removeCharge}
         * @private
         */
        this._listenerRemoveCharge = null;

        /**
		 *
         * @type {?listenerCollision}
         * @private
         */
        this._listenerCollision = null;
	}

    /**
     *
     * @param {Vector} v
     * @returns {Charge}
     */
	setPosition(v) {
        this.model.position.copy(v);
        this.startPosition.copy(v);
        this.previousPosition.copy(v);
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
	 * @param {Charge} charge
	 * @param {string} type
	 * @callback removeCharge
	 */

    /**
	 *
     * @param {removeCharge} listener
     * @returns {Charge}
     */
	setListenerRemoveCharge(listener) {
        this._listenerRemoveCharge = listener;
		return this;
	}
	
	/**
	 *
	 * @param {number} delta
	 * @param {Array.<Particle>} particles
	 * @returns {void}
	 */
	update(delta, particles) {
		if (this._enabled) {
            this.direction.copy(this.target);
            this.direction = this.direction.sub(this.model.position).normalize();
            this.previousPosition.copy(this.model.position);
            this.model.position.addScaledVector(this.direction, this.speed * delta);

            if (this._listenerCollision) {
                this.checkCollision(particles);
            }

            if (this._listenerRemoveCharge) {
                if (this.startPosition.distanceTo(this.model.position) >= this.maxDistanceToDestroy) {
                    this._listenerRemoveCharge(this, Charge.REMOVE_TYPE_MAX_DISTANCE);
                }
            }
        } else {
            this.shader.update();
		}
	}

    /**
	 *
     * @param {number} value - This is value from 0 to 1. If value is 0 then model is fully transparent
     * @returns {Charge}
     */
	opacity(value) {
        this.model.material.transparent = true;
        this.model.material.opacity = value;
        return this;
	}

    /**
	 * Make model fully transparent or show back if value is false
	 *
     * @param {boolean} [value]
     * @returns {Charge}
     */
    transparent(value = true) {
		this.opacity(value ? 0 : 1);
		return this;
	}

    /**
     *
     * @param {Scene} scene
     * @returns {Charge}
     */
    setExplosionToScene(scene) {
		if (this._enabled) {
            this._enabled = false;
            this.shader.setTo(scene, this.model.position);
        }
        return this;
    }

    /**
	 *
     * @param {Scene} scene
     * @returns {Charge}
     */
    removeExplosionFromScene(scene) {
        this.shader.removeFrom(scene);
        return this;
	}

    /**
     *
     * @param {Scene} scene
     * @returns {Charge}
     */
    addModelToScene(scene) {
        scene.add(this.model);
        return this;
    }

    /**
	 *
     * @param {Scene} scene
     * @returns {Charge}
     */
    removeModelFromScene(scene) {
        scene.remove(this.model);
        return this;
	}

    /**
	 * @param {Charge} charge
	 * @param {Particle} particle
	 * @callback listenerCollision
     */

    /**
     *
     * @param {listenerCollision} listener
     * @returns {Charge}
     */
    setListenerCollision(listener) {
        this._listenerCollision = listener;
        return this;
    }

    /**
	 *
     * @param {Array.<Particle>} particles
     * @returns {?Particle}
     */
    checkCollision(particles) {
        if (this._enabled) {
            let box1 = new THREE.Box3();
            box1.setFromObject(this.model);

            for (let particle of particles) {
                let box2 = new THREE.Box3();
                box2.setFromObject(particle.model);

                let intersects = box1.intersectsBox(box2);
                if (intersects) {
                    this._listenerCollision(this, particle);
                    if (this._listenerRemoveCharge) {
                        setTimeout(() => {
                            this._listenerRemoveCharge(this, Charge.REMOVE_TYPE_COLLISION);
                        }, this.shader.ageTime * 1000);
                    }
                    return particle;
                }
            }
        }
        return null;
	}

    /**
	 *
     * @returns {string}
     * @constructor
     */
    static get REMOVE_TYPE_MAX_DISTANCE() {
        return 'max-distance';
    }

    /**
	 *
     * @returns {string}
     * @constructor
     */
	static get REMOVE_TYPE_COLLISION() {
    	return 'collision';
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