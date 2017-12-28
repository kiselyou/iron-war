import * as THREE from 'three';
import Particle from './../../Particle';
import TextCanvas from './../../text/TextCanvas';

class AimSignature extends Particle {
	/**
	 *
	 * @param {number} side - possible values constants of current class
	 */
	constructor(side) {
		super('AimSignature', AimSignature.AIM_SIGNATURE_KEY);
		
		/**
		 *
		 * @type {number}
		 */
		this.side = side;
		
		/**
		 *
		 * @type {Line}
		 */
		this.model = new THREE.Line();
		
		/**
		 *
		 * @type {number}
		 */
		this.color = 0xFFFFFF;
		
		/**
		 *
		 * @type {number}
		 */
		this.moveDistance = 300;
		
		/**
		 *
		 * @type {?string}
		 */
		this.label = null;
		
		/**
		 *
		 * @type {?string}
		 */
		this.msg = null;
		
		/**
		 *
		 * @type {TextCanvas}
		 */
		this.text = new TextCanvas();
	}
	
	/**
	 *
	 * @returns {AimSignature}
	 */
	hide() {
		this.model.material.transparent = true;
		this.model.material.opacity = 0;
		this.text.model.material.opacity = 0;
		return this;
	}
	
	/**
	 *
	 * @returns {AimSignature}
	 */
	show() {
		this.model.material.transparent = false;
		this.model.material.opacity = 1;
		this.text.model.material.opacity = 1;
		return this;
	}
	
	/**
	 *
	 * @param {string|number} msg
	 * @param {?string|number} [label]
	 * @returns {AimSignature}
	 */
	setText(msg, label = null) {
		this.msg = msg;
		this.label = label;
		this._moveTo(this.side);
		return this;
	}
	
	/**
	 *
	 * @param {string|number} msg
	 * @returns {AimSignature}
	 */
	update(msg) {
		this.msg = msg;
		this.text.rewrite(this._getLabel());
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
	
	/**
	 *
	 * @returns {AimSignature}
	 * @private
	 */
	_draw() {
		let x = 0,
			y = 0,
			ax = 65,
			ay = 60,
			bx = 1024,
			by = 60;
		
		let geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3(x, y, 0));
		geometry.vertices.push(new THREE.Vector3(x + ax, x + ay, 0));
		geometry.vertices.push(new THREE.Vector3(x + bx, x + by, 0));
		
		this.model.geometry = geometry;
		return this;
	}
	
	/**
	 *
	 * @returns {string}
	 * @private
	 */
	_getLabel() {
		if (this.label !== null && this.msg !== null) {
			return this.label + ': ' + this.msg;
		} else if (this.label !== null && this.msg === null) {
			return this.label;
		} else if (this.label === null && this.msg !== null) {
			return this.msg;
		}
		return '';
	}
	
	/**
	 *
	 * @param {number} side - possible values constants of current class
	 * @returns {AimSignature}
	 * @private
	 */
	_moveTo(side) {
		switch (side) {
			case AimSignature.SIDE_TL:
				this
					.setPosition(new THREE.Vector3(- this.moveDistance, 0, - this.moveDistance))
					.setRotation(new THREE.Vector3(Math.PI / 2, 0, Math.PI));
				
				this.text
					.alignLeft()
					.setPosition(new THREE.Vector3(500, 100, 0))
					.setRotation(new THREE.Vector3(0, Math.PI, 0))
					.write(this._getLabel());
				
				break;
			case AimSignature.SIDE_TR:
				this
					.setPosition(new THREE.Vector3(this.moveDistance, 0, - this.moveDistance))
					.setRotation(new THREE.Vector3(- Math.PI / 2, 0, 0));
				
				this.text
					.alignRight()
					.setPosition(new THREE.Vector3(500, 100, 0))
					.write(this._getLabel());
				
				break;
			case AimSignature.SIDE_BL:
				this
					.setPosition(new THREE.Vector3(- this.moveDistance, 0, this.moveDistance))
					.setRotation(new THREE.Vector3(- Math.PI / 2, 0, Math.PI));
				
				this.text
					.alignLeft()
					.setPosition(new THREE.Vector3(500, 10, 0))
					.setRotation(new THREE.Vector3(Math.PI, Math.PI, 0))
					.write(this._getLabel());
				break;
			case AimSignature.SIDE_BR:
				this
					.setPosition(new THREE.Vector3(this.moveDistance, 0, this.moveDistance))
					.setRotation(new THREE.Vector3(Math.PI / 2, 0, 0));
				
				this.text
					.alignRight()
					.setPosition(new THREE.Vector3(500, 10, 0))
					.setRotation(new THREE.Vector3(Math.PI, 0, 0))
					.write(this._getLabel());
				break;
		}
		this.model.add(this.text.model);
		this._draw();
		return this;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get SIDE_TL() {
		return 0;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get SIDE_TR() {
		return 1;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get SIDE_BL() {
		return 2;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get SIDE_BR() {
		return 3;
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get AIM_SIGNATURE_KEY() {
		return 'AIM_SIGNATURE_KEY';
	}
}

export default AimSignature;
