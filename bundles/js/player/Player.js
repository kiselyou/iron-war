import User from './User';
import ShipIncludes from './../particles/ships/ShipIncludes';
import KeyboardControls from './../keyboard/KeyboardControls';
import FlyControls from './../controls/FlyControls';
import Listener from './../systems/Listener';
import Ship from './../particles/ships/Ship';
import ArsenalSlot from './../particles/arsenal/ArsenalSlot';
import Charge from './../particles/charge/Charge';

import {THREE} from '../../api';

import HelperPoints from './../helpers/HelperPoints';

class Player extends User {
	/**
	 *
	 * @param {SceneControls} sceneControls
	 * @param {boolean} isUser
	 * @param {string|number} id
	 */
	constructor(sceneControls, isUser, id) {
		super();
		
		/**
		 *
		 * @type {SceneControls}
		 * @private
		 */
		this._sceneControls = sceneControls;
		
		/**
		 *
		 * @type {Element}
		 */
		this.container = this._sceneControls.container;
		
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
		
		/**
		 *
		 * @type {Array.<Charge>}
		 */
		this.charges = [];
		
		
		// this.point = HelperPoints.get().setPointTo(this._sceneControls.scene);
	}

    /**
	 *
     * @param {Charge} value
     * @returns {Player}
     */
	addCharge(value) {
        this.charges.push(value);
        return this;
	}

    /**
     *
     * @param {Charge} value
     * @returns {Player}
     */
    removeCharge(value) {
		for (let i = 0; i < this.charges.length; i++) {
			let charge = this.charges[i];
			if (charge.id === value.id) {
                charge.removeModelFromScene(this._sceneControls.scene);
                this.charges.splice(i, 1);
				break;
			}
		}
		return this;
    }

    /**
	 *
     * @returns {Array.<Charge>}
     */
    getCharges() {
		return this.charges;
    }

    /**
	 *
     * @param {string} value
     * @returns {?Charge}
     */
    getChargeById(value) {
        let res = this.charges.find((charge) => {
            return charge.id === value;
		});
        return res ? res : null;
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
	 * @param {Vector3} target
	 * @param {Object} [ids]
	 */
	shot(target, ids = {}, collisionListener) {
        let chargeIds = {};
		let slots = this.ship.arsenalSlots;
		this._sceneControls.scene.updateMatrixWorld();
		
		for (let slotName in slots) {
			if (slots.hasOwnProperty(slotName) && slots[slotName] instanceof ArsenalSlot) {
				/**
				 * @type {ArsenalSlot}
				 */
				let slot = slots[slotName];
                /**
				 * @type {Charge}
                 */
				let charge = slot.arsenal.getCharge().prepare(target);
				if (ids && ids.hasOwnProperty(slotName)) {
                    charge.id = ids[slotName];
				}
                chargeIds[slotName] = charge.id;
				
				let vector = new THREE.Vector3();
				for (let el of this.ship.model.children) {
					if (el.position.x === slot.position.x && el.position.y === slot.position.y && el.position.z === slot.position.z) {
						vector.setFromMatrixPosition(el.matrixWorld);
						// Sets default Charge position
						charge.setPosition(vector);
					}
				}

				charge
					.addModelToScene(this._sceneControls.scene)
					.setListenerCollision((charge, particle) => {

                        if (collisionListener) {
                            collisionListener(charge.model.position, charge.id);
                        }

                        charge
                            .setExplosionToScene(this._sceneControls.scene)
                            .removeModelFromScene(this._sceneControls.scene);

                        // TODO: This is a temporary action
                        this._sceneControls.removeObject(particle);

                        if (particle instanceof Ship) {
                            // TODO: This is a player -  do something
						}

						if (this._sceneControls.isTarget(particle)) {
                            this._sceneControls.hideTarget();
						}
					})
                    .setListenerRemoveCharge((charge, type) => {
                        this.removeCharge(charge);
                        if (type === Charge.REMOVE_TYPE_COLLISION) {
                            charge.removeExplosionFromScene(this._sceneControls.scene);
						}
                    });


				this.charges.push(charge);
			}
		}

		return chargeIds;
	}
	
	/**
	 *
	 * @param {number} delta
	 */
	update(delta) {
		if (!this.isUser) {
			this.ship.model.position.copy(this.position);
			this.ship.model.rotation.copy(this.rotation);
			this.flyControls.updatePlayerControl(delta);
		}

		let charges = this.getCharges();
		let needRemove = [];
		
		if (charges.length > 0) {
			for (let i = 0; i < charges.length; i++) {
                charges[i].update(delta, this._sceneControls.getObjects());
			}
		}
	}
}

export default Player;