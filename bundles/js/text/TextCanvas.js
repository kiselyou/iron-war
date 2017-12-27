import FontLoader from './../loader/FontLoader';
import * as THREE from 'three';

class TextCanvas {
	constructor() {
		
		/**
		 *
		 * @type {number}
		 */
		this.size = 90;
		
		/**
		 *
		 * @type {string}
		 */
		this.font = 'Audiowide';
		
		/**
		 *
		 * @type {Mesh}
		 */
		this.model = new THREE.Mesh();
		
		/**
		 *
		 * @type {string}
		 */
		this.color = '#F5F5F5';
		
		/**
		 *
		 * @type {string}
		 */
		this.bold = 'bold';
		
		/**
		 *
		 * @type {Element}
		 */
		this.canvas = document.createElement('canvas');
		this.setWidth(2048);
		this.setHeight(128);
		
		/**
		 *
		 * @type {CanvasRenderingContext2D}
		 */
		this.context = this.canvas.getContext('2d');
	}
	
	/**
	 *
	 * @param {number} width
	 * @returns {TextCanvas}
	 */
	setWidth(width) {
		this.canvas.width = width;
		return this;
	}
	
	/**
	 *
	 * @param {number} height
	 * @returns {TextCanvas}
	 */
	setHeight(height) {
		this.canvas.height = height;
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {TextCanvas}
	 */
	setPosition(v) {
		this.model.position.copy(v);
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {TextCanvas}
	 */
	setRotation(v) {
		this.model.rotation.set(v.x, v.y, v.z);
		return this;
	}
	
	/**
	 *
	 * @param {string|number} text
	 * @returns {Mesh}
	 */
	write(text) {
		this.model.geometry = new THREE.PlaneGeometry(this.canvas.width, this.canvas.height, 1, 1);
		this._prepareBackground()._updateText(text);
		this.model.material = new THREE.MeshBasicMaterial({
			transparent: true,
			map: new THREE.Texture(this.canvas)
		});
		
		this.model.material.map.needsUpdate = true;
		return this.model;
	}
	
	/**
	 * @param {string|number} text
	 * @returns {TextCanvas}
	 */
	rewrite(text) {
		this._updateText(text);
		this.model.material.map.needsUpdate = true;
		return this;
	}
	
	/**
	 *
	 * @returns {TextCanvas}
	 * @private
	 */
	_prepareBackground() {
		let context = this.canvas.getContext('2d');
		context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		return this;
	}
	
	/**
	 *
	 * @param {string|number} text
	 * @returns {TextCanvas}
	 * @private
	 */
	_updateText(text) {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.font = this.bold + ' ' + this.size + 'px ' + this.font;
		this.context.fillStyle = this.color;
		this.context.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
		return this;
	}
	
	// /**
	//  *
	//  * @param {string} text
	//  * @returns {TextCanvas}
	//  */
	// write3D(text) {
	// 	this.model.geometry = new THREE.TextGeometry(
	// 		text,
	// 		{
	// 			font: FontLoader.font,
	// 			size: this.size,
	// 			height: 1
	// 		}
	// 	);
	// 	this.model.material = new THREE.MeshBasicMaterial({color: this.color});
	// 	return this;
	// }
	
	
}

export default TextCanvas;