import FontLoader from './../loader/FontLoader';
import {THREE} from './../../api';

class TextCanvas {
	constructor() {
		
		/**
		 *
		 * @type {number}
		 */
		this.size = 50;
		
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
		 * @type {string}
		 * @private
		 */
		this._align = 'left';
		
		/**
		 *
		 * @type {Element}
		 */
		this.canvas = document.createElement('canvas');
		this.setWidth(1024);
		this.setHeight(128);
		
		/**
		 *
		 * @type {CanvasRenderingContext2D}
		 */
		this.context = this.canvas.getContext('2d');
	}
	
	/**
	 *
	 * @returns {TextCanvas}
	 */
	alignCenter() {
		this._align = 'center';
		return this;
	}
	
	/**
	 *
	 * @returns {TextCanvas}
	 */
	alignLeft() {
		this._align = 'left';
		return this;
	}
	
	/**
	 *
	 * @returns {TextCanvas}
	 */
	alignRight() {
		this._align = 'right';
		return this;
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
			side: THREE.DoubleSide,
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
		
		let x = 0,
			y = this.canvas.height / 2;
		
		switch (this._align) {
			case 'right':
			case 'end':
				x = this.canvas.width;
				break;
			case 'center':
				x = this.canvas.width / 2;
				break;
		}
		
		this.context.textAlign = this._align;
		this.context.fillText(text, x, y);
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