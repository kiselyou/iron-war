import * as THREE from 'three';
import Engine from './../particles/engine/Engine';
import KeyboardControls from './../keyboard/KeyboardControls';

class FlyControls {
	
	/**
	 * @param {Camera} object
	 * @param {Player} player
	 */
	constructor(object, player) {
		
		/**
		 * @type {Camera}
		 */
		this.object = object;
		
		/**
		 *
		 * @type {Player}
		 */
		this.player = player;
		
		if (this.player.container) this.player.container.setAttribute('tabindex', '- 1');
		
		/**
		 *
		 * @type {{forward: Keyboard, back: Keyboard, left: Keyboard, right: Keyboard, up: Keyboard, down: Keyboard, rollLeft: Keyboard, rollRight: Keyboard, yawLeft: Keyboard, yawRight: Keyboard, pitchUp: Keyboard, pitchDown: Keyboard, stop: Keyboard, openConsole: Keyboard}}
		 */
		this.keyboards = player.keyboards.fly;
		
		// /**
		//  *
		//  * @type {boolean}
		//  */
		// this.autoForward = false;
		
		/**
		 *
		 * @type {Quaternion}
		 */
		this.tmpQuaternion = new THREE.Quaternion();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.moveVector = new THREE.Vector3(0, 0, 0);
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.rotationVector = new THREE.Vector3(0, 0, 0);
		
		this.updateMovementVector();
		this.updateRotationVector();
		
		this.player.keyboards.addEventListener(
			KeyboardControls.EVENT_MOUSE_MOVE,
			KeyboardControls.GROUP_FLY,
			(event) => {
				this.mouseMove(event);
			}
		);
		
		this.player.keyboards.addEventListener(
			KeyboardControls.EVENT_KEY_UP,
			KeyboardControls.GROUP_FLY,
			() => {
				this.updateMovementVector();
				this.updateRotationVector();
			}
		);
		
		this.player.keyboards.addEventListener(
			KeyboardControls.EVENT_KEY_DOWN,
			KeyboardControls.GROUP_FLY,
			() => {
				this.updateMovementVector();
				this.updateRotationVector();
			}
		);
	}
	
	/**
	 *
	 * @param {MouseEvent} event
	 * @returns {void}
	 */
	mouseMove(event) {
		if (!this.player.isEnabled) {
			return;
		}
		
		let container = this.getContainerDimensions();
		let halfWidth = container.size[0] / 2;
		let halfHeight = container.size[1] / 2;
		this.keyboards.yawLeft.value = - ((event.pageX - container.offset[0]) - halfWidth) / halfWidth;
		this.keyboards.pitchDown.value = ((event.pageY - container.offset[1]) - halfHeight) / halfHeight;
		this.updateRotationVector();
	}
	
	/**
	 *
	 * @param {number} delta
	 * @returns {void}
	 */
	update(delta) {
		if (!this.player.isEnabled) {
			return;
		}
		
		if (this.keyboards.forward.value === this.keyboards.forward.valueOn) {
			this.player.ship.engine.start(Engine.DIRECTION_FORWARD, delta);
		} else if (this.keyboards.back.value === this.keyboards.back.valueOn) {
			this.player.ship.engine.start(Engine.DIRECTION_BACK, delta);
		} else if (this.keyboards.stop.value === this.keyboards.stop.valueOn) {
			this.player.ship.engine.stop(delta);
		}
		
		let moveMultX = delta * this.player.ship.engine.speedX;
		let moveMultY = delta * this.player.ship.engine.speedY;
		let moveMultZ = delta * this.player.ship.engine.speedZ;
		let rotMultXY = delta * this.player.ship.engine.rollSpeedXY;
		let rotMultZ = delta * this.player.ship.engine.rollSpeedZ;

		this.object.translateX(this.moveVector.x * moveMultX);
		this.object.translateY(this.moveVector.y * moveMultY);
		this.object.translateZ(this.moveVector.z * moveMultZ);

		this.tmpQuaternion.set(
			this.rotationVector.x * rotMultXY,
			this.rotationVector.y * rotMultXY,
			this.rotationVector.z * rotMultZ,
			1
		).normalize();
		this.object.quaternion.multiply(this.tmpQuaternion);

		// expose the rotation vector for convenience
		this.object.rotation.setFromQuaternion(this.object.quaternion, this.object.rotation.order);
	}
	
	/**
	 * @returns {void}
	 */
	updateMovementVector() {
		// let forward = (this.keyboards.forward.value || (this.autoForward && ! this.keyboards.back.value)) ? 1 : 0;
		this.moveVector.x = (- this.keyboards.left.value + this.keyboards.right.value);
		this.moveVector.y = (- this.keyboards.down.value + this.keyboards.up.value);
		// this.moveVector.z = (- forward + this.keyboards.back.value);
		this.moveVector.z = -1;
	}
	
	/**
	 * @returns {void}
	 */
	updateRotationVector() {
		this.rotationVector.x = (- this.keyboards.pitchDown.value + this.keyboards.pitchUp.value);
		this.rotationVector.y = (- this.keyboards.yawRight.value  + this.keyboards.yawLeft.value);
		this.rotationVector.z = (- this.keyboards.rollRight.value + this.keyboards.rollLeft.value);
	}
	
	/**
	 *
	 * @returns {{size: Array, offset: Array}}
	 */
	getContainerDimensions() {
		if (this.player.container !== document) {
			return {
				size: [this.player.container.offsetWidth, this.player.container.offsetHeight],
				offset: [this.player.container.offsetLeft, this.player.container.offsetTop]
			};
		} else {
			return {
				size: [window.innerWidth, window.innerHeight],
				offset: [0, 0]
			};
		}
	}
}

export default FlyControls;
