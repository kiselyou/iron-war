import * as THREE from 'three';

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
		this.model.rotation.z = -Math.PI / 2;
		this.model.scale.copy(new THREE.Vector3(0.0008, 0.0008, 0.0008));
		this._sceneControls.camera.add(this.model);
		// this._sceneControls.scene.add(this.model);
		
		
		/**
		 *
		 * @type {boolean}
		 * @private
		 */
		this._isExists = false;
		
		/**
		 *
		 * @type {Vector3}
		 * @private
		 */
		this._vector = new THREE.Vector3();
		
		this.t = 0;
		
		/**
		 *
		 * @type {Vector3}
		 * @private
		 */
		this._v1 = new THREE.Vector3();
		
		/**
		 *
		 * @type {Quaternion}
		 * @private
		 */
		this._worldQuaternion = new THREE.Quaternion();
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
		this.show();
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} p
	 * @returns {void}
	 * @private
	 */
	_drawArrow(p) {
		let material = new THREE.LineBasicMaterial({
			color: 0xffffff
		});
		
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
	
	remove() {
		this.hide();
		this._isExists = false;
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
			let rad = Math.PI / 2;
			let v = this._sceneControls.toScreenPosition(object);
			let c = this._sceneControls.getCenterScreenPosition();
			let dir = this._sceneControls.getCameraDirection();
			let a = Math.atan2(v.y - c.y, v.x - c.x);
			
			let angle = - a - rad;
			if (dir.angleTo(object.position) * 180 / Math.PI > 90) {
				angle = - a + rad;
			}
			
			this.model.rotation.z = angle;
		}
	}
}

export default TargetDirection;