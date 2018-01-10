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
		this.model = new THREE.Object3D();
		this.model.position.z = -5;
		this.model.rotation.z = -Math.PI / 2;
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
		 * @type {Vector3}
		 * @private
		 */
		this._vector = new THREE.Vector3(0, 0, -1);
		
		this.t = 0;
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
			
			let s = this._sceneControls.getScreenSize();
			
			let a = Math.atan2(v.y - c.y, v.x - c.x);
			let angle = - a - rad;
			if (angle < 0) {
				angle += 2 * Math.PI;
			}
			
			
			
			
			// if (v.x < 0 || v.y < 0 || v.x > s.x || v.y > s.y) {
			// 	if (angle < 0) {
			// 		angle = + angle;
			// 	} else {
			// 		angle = - angle;
			// 	}
			// }
			
			if (v.x < 0) {
			
			}
			
			
			this.t++;
			if (this.t === 60) {
				
				// this._vector.applyQuaternion(this._sceneControls.camera.quaternion);
				// let angle2 = this._vector.angleTo(object.position);
				
				// console.log(angle, angle2 * 180 / Math.PI);
				
				console.log(
					v
				);
				
				this.t = 0;
			}
			
			this.model.rotation.z = angle;
		}
	}
}

export default TargetDirection;