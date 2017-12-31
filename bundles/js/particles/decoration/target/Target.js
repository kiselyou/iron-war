import * as THREE from 'three';
import Aim from './../aim/Aim';

class Target {
	constructor() {
		
		/**
		 *
		 * @type {string}
		 */
		this.color = Aim.COLOR_DEFAULT;
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.size = new THREE.Vector2(50, 50);
		
		/**
		 *
		 * @type {boolean}
		 */
		this.calibrate = true;
		
		/**
		 *
		 * @type {Group}
		 */
		this.model = new THREE.Group();
		this._draw();
	}
	
	_draw() {
		let distance = this.size.x + this.size.y + this.size.x;
		
		let model = new THREE.Object3D();
		model.position.x = - (distance / 2);
		model.position.y = distance / 2;
		
		let cornerTL = this._drawCorner();
		// Top left
		model.add(cornerTL);
		// Top Right
		let cornerTR = cornerTL.clone();
		cornerTR.rotation.y = Math.PI;
		cornerTR.position.x = distance;
		model.add(cornerTR);
		// Bottom Left
		let cornerBL = cornerTL.clone();
		cornerBL.rotation.x = Math.PI;
		cornerBL.position.y = - distance;
		model.add(cornerBL);
		// Bottom Right
		let cornerBR = cornerTL.clone();
		cornerBR.rotation.x = Math.PI;
		cornerBR.rotation.y = Math.PI;
		cornerBR.position.x = distance;
		cornerBR.position.y = - distance;
		model.add(cornerBR);
		
		this.model.add(model);
	}
	
	_drawCorner() {
		let x = 0,
			y = - this.size.x;
		
		let geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3(x, y, 0));
		geometry.vertices.push(new THREE.Vector3(x, y + this.size.x, 0));
		geometry.vertices.push(new THREE.Vector3(x + this.size.x, y + this.size.x, 0));
		
		let material = new THREE.MeshBasicMaterial({
			color: this.color,
			// linewidth: 1
		});
		
		return new THREE.Line(geometry, material);
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	hide() {
		this.model.material.transparent = true;
		this.model.material.opacity = 0;
		return this;
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	show() {
		this.model.material.transparent = false;
		this.model.material.opacity = 1;
		return this;
	}
}

export default Target;