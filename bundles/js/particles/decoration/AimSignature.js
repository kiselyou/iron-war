import * as THREE from 'three';
import Particle from './../../Particle';

class AimSignature extends Particle {
	constructor() {
		super('AimSignature', AimSignature.AIM_SIGNATURE_KEY);
		
		/**
		 *
		 * @type {Line}
		 */
		this.model = new THREE.Line();
	}
	
	/**
	 *
	 * @returns {AimSignature}
	 */
	hide() {
		this.model.material.transparent = true;
		this.model.material.opacity = 0;
		return this;
	}
	
	/**
	 *
	 * @returns {AimSignature}
	 */
	show() {
		this.model.material.transparent = false;
		this.model.material.opacity = 1;
		return this;
	}
	
	/**
	 *
	 * @param {number} color
	 * @returns {AimSignature}
	 */
	setColor(color) {
		this.model.material.color = new THREE.Color(color);
		this.model.material.needsUpdate = true;
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {AimSignature}
	 */
	setPosition(v) {
		this.model.position.copy(v);
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {AimSignature}
	 */
	setRotation(v) {
		this.model.rotation.set(v.x, v.y, v.z);
		return this;
	}
	
	draw() {
		let x = 0,
			y = 0,
			ax = 65,
			ay = 60,
			bx = 720,
			by = 60;
		
		let geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3(x, y, 0));
		geometry.vertices.push(new THREE.Vector3(x + ax, x + ay, 0));
		geometry.vertices.push(new THREE.Vector3(x + bx, x + by, 0));
		
		this.model.geometry = geometry;
		this.model.material.color = new THREE.Color(0xFFFFFF);
		this.model.material.needsUpdate = true;
		return this;
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get AIM_SIGNATURE_KEY() {
		return 'AIM_SIGNATURE_KEY';
	}
}

export default AimSignature;
