import {THREE} from '../../../../api';
import {
	COLOR_WHITE
} from './../../../constants';

/**
 *
 * @type {number}
 */
const HALF_PI = Math.PI / 2;

/**
 *
 * @type {number}
 */
const TARGET_CONTROLS_RAD = Math.PI / 20;

class TargetDirection {
	/**
	 *
	 * @param {SceneControls} sceneControls
	 */
	constructor(sceneControls) {
		
		/**
		 *
		 * @type {SceneControls}
		 */
		this._sceneControls = sceneControls;
		
		/**
		 *
		 * @type {Object3D}
		 */
		this.model = new THREE.Group();
		this.model.position.z = -5;
		this.model.scale.copy(new THREE.Vector3(0.0008, 0.0008, 0.0008));
		this._sceneControls.camera.add(this.model);
		
		/**
		 *
		 * @type {boolean}
		 * @private
		 */
		this._isExists = false;
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._color = COLOR_WHITE;
	}
	
	/**
	 *
	 * @param {number} value
	 * @returns {TargetDirection}
	 */
	setColor(value) {
		for (let element of this.model.children) {
			element.material.color.setHex(value);
		}
		return this;
	}
	
	/**
	 *
	 * @returns {TargetDirection}
	 */
	draw() {
		if (this.model.children.length === 0) {
			this._drawArrow(new THREE.Vector3(0, 200, 0));
			this._drawArrow(new THREE.Vector3(0, 230, 0));
			this._drawArrow(new THREE.Vector3(0, 260, 0));
			this._drawArrow(new THREE.Vector3(0, 290, 0));
			this._drawArrow(new THREE.Vector3(0, 320, 0));
		}
		this._isExists = true;
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} p
	 * @returns {void}
	 * @private
	 */
	_drawArrow(p) {
		let material = new THREE.LineBasicMaterial({color: this._color});
		let geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3(-30, 0, 0),
			new THREE.Vector3(0, 30, 0),
			new THREE.Vector3(30, 0, 0)
		);
		
		let line = new THREE.Line(geometry, material);
		line.position.copy(p);
		this.model.add(line);
	}
	
	/**
	 *
	 * @returns {TargetDirection}
	 */
	remove() {
		this.hide();
		this._isExists = false;
		return this;
	}
	
	/**
	 *
	 * @returns {TargetDirection}
	 */
	hide() {
		this.model.visible = false;
		return this;
	}
	
	/**
	 *
	 * @returns {TargetDirection}
	 */
	show() {
		if (this._isExists) {
			this.model.visible = true;
		}
		return this;
	}
	
	/**
	 *
	 * @param {Object3D} object
	 */
	update(object) {
		if (this._isExists) {
			let dir = this._sceneControls.getCameraDirection();
			let cameraAngle = dir.angleTo(object.position);
			
			if (cameraAngle < TARGET_CONTROLS_RAD) {
				this.hide();
			} else {
				this.show();
				let v = this._sceneControls.toScreenPosition(object);
				let c = this._sceneControls.getCenterScreenPosition();
				let a = Math.atan2(v.y - c.y, v.x - c.x);
				this.model.rotation.z = - a - HALF_PI;

				if (cameraAngle > HALF_PI) {
					this.model.rotation.z = - a + HALF_PI;
				}
			}
		}
	}
}

export default TargetDirection;