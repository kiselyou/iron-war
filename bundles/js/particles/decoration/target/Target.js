import {THREE} from './../../../../api';
import {
	COLOR_WHITE
} from './../../../constants';

class Target {
	constructor() {
		
		/**
		 *
		 * @type {string}
		 */
		this.color = COLOR_WHITE;
		
		/**
		 *
		 * @type {Vector}
		 */
		this.size = new THREE.Vector2(5, 95);
		
		/**
		 *
		 * @type {Group}
		 */
		this.model = new THREE.Group();
		
		/**
		 *
		 * @type {null}
		 * @private
		 */
		this._tempModel = null;
	}
	
	/**
	 *
	 * @param {number} x
	 * @param {number} [y]
	 * @returns {Target}
	 */
	setSize(x, y) {
		this.size.x = x;
		this.size.y = y ? y : x;
		return this;
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	remove() {
		this.model.remove(this._tempModel);
		this._tempModel = null;
		return this;
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	draw() {
		if (this._tempModel) {
			this.remove();
		}
		let distance = this.size.x + this.size.y + this.size.x;
		
		this._tempModel = new THREE.Object3D();
		this._tempModel.position.x = - (distance / 2);
		this._tempModel.position.y = distance / 2;
		
		let cornerTL = this._drawCorner();
		// Top left
		this._tempModel.add(cornerTL);
		// Top Right
		let cornerTR = cornerTL.clone();
		cornerTR.rotation.y = Math.PI;
		cornerTR.position.x = distance;
		this._tempModel.add(cornerTR);
		// Bottom Left
		let cornerBL = cornerTL.clone();
		cornerBL.rotation.x = Math.PI;
		cornerBL.position.y = - distance;
		this._tempModel.add(cornerBL);
		// Bottom Right
		let cornerBR = cornerTL.clone();
		cornerBR.rotation.x = Math.PI;
		cornerBR.rotation.y = Math.PI;
		cornerBR.position.x = distance;
		cornerBR.position.y = - distance;
		this._tempModel.add(cornerBR);
		
		this.model.add(this._tempModel);
		return this;
	}
	
	_drawCorner() {
		let x = 0,
			y = - this.size.x;
		
		let geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3(x, y, 0));
		geometry.vertices.push(new THREE.Vector3(x, y + this.size.x, 0));
		geometry.vertices.push(new THREE.Vector3(x + this.size.x, y + this.size.x, 0));
		
		let material = new THREE.MeshBasicMaterial({
			color: this.color
		});
		
		return new THREE.Line(geometry, material);
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	hide() {
		this.model.visible = false;
		return this;
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	show() {
		this.model.visible = true;
		return this;
	}
}

export default Target;