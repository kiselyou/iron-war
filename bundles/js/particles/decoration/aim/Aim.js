import {THREE} from '../../../../api';
import Particle from './../../../Particle';
import AimSignature from './AimSignature';
import {
	COLOR_DEFAULT
} from './../../../constants';

class Aim extends Particle {
	constructor() {
		super('Aim', Aim.AIM_KEY);
		
		/**
		 *
		 * @type {Group}
		 */
		this.model = new THREE.Group();
		this.model.position.z = -5;
		this.model.rotation.x = Math.PI / 2;
		
		/**
		 *
		 * @type {number}
		 */
		this.scale = new THREE.Vector3(0.0008, 0.0008, 0.0008);
		
		/**
		 *
		 * @type {number}
		 */
		this.countArrows = 4;
		
		/**
		 *
		 * @type {number}
		 */
		this.radius = 10;
		
		/**
		 *
		 * @type {number}
		 */
		this.color = COLOR_DEFAULT;
		
		/**
		 *
		 * @type {AimSignature}
		 */
		this.signatureLeftTop = new AimSignature(AimSignature.SIDE_TL);
		
		/**
		 *
		 * @type {AimSignature}
		 */
		this.signatureLeftBottom = new AimSignature(AimSignature.SIDE_BL);
		
		/**
		 *
		 * @type {AimSignature}
		 */
		this.signatureRightTop = new AimSignature(AimSignature.SIDE_TR);
		
		/**
		 *
		 * @type {AimSignature}
		 */
		this.signatureRightBottom = new AimSignature(AimSignature.SIDE_BR);
	}
	
	/**
	 * Build aim
	 *
	 * @returns {Aim}
	 */
	draw() {
		let center = new THREE.Vector3(0, 0, 0),
			axis = new THREE.Vector3(1, 0, 0);
		
		let i = 0,
			x = 0,
			z = 0,
			angle = 0,
			half = Math.PI / 2,
			step = Math.PI * 2 / this.countArrows;
		
		while (i < this.countArrows) {
			x = center.x + this.radius * Math.cos(angle);
			z = center.z + this.radius * Math.sin(angle);
			let mesh = this._drawArrow();
			mesh.position.set(x, 0, z);
			mesh.lookAt(center);
			mesh.rotateOnAxis(axis, -half);
			this.model.add(mesh);
			angle += step;
			i++;
		}
		
		this.signatureRightTop
			.setText(0, 'distance')
			.setColor(this.color)
			.hide();
		
		this.model.add(this.signatureRightTop.model);
		
		this.signatureLeftTop
			.setText(0, 'speed')
			.setColor(this.color);
		
		this.model.add(this.signatureLeftTop.model);
		
		this.signatureLeftBottom
			.setText(0)
			.setColor(this.color)
			.hide();
		
		this.model.add(this.signatureLeftBottom.model);
		
		this.signatureRightBottom
			.setText(0)
			.setColor(this.color)
			.hide();
		
		this.model.add(this.signatureRightBottom.model);
		
		this.model.scale.copy(this.scale);
		
		return this;
	}
	
	/**
	 *
	 * @param {number} color
	 * @returns {Aim}
	 */
	setColor(color) {
		for (let model of this.model.children) {
			model.material.color = new THREE.Color(color);
			model.material.needsUpdate = true;
		}
		return this;
	}
	
	/**
	 *
	 * @returns {Mesh}
	 * @private
	 */
	_drawArrow() {
		let w = 10 / 2; // 10 - it is width of arrow
		let l = 90 / 2; // 90 - it is length of arrow
		let tw = 10; 	// 10 - distance from side arrow to tail
		let tl = 40; 	// 45 - it is tail length
		let x = 0,
			y = 0;
		
		let triangleShape = new THREE.Shape();
		triangleShape.moveTo(x, y);
		triangleShape.lineTo(x + w, y + l);
		triangleShape.lineTo(x + tw, y + l);
		triangleShape.lineTo(x + tw, y + tl);
		triangleShape.lineTo(x - tw, y + tl);
		triangleShape.lineTo(x - tw, y + l);
		triangleShape.lineTo(x - w, y + l);
		triangleShape.moveTo(x, y);
		
		let geometry = new THREE.ShapeGeometry(triangleShape);
		let material = new THREE.MeshBasicMaterial({
			color: this.color,
			overdraw: 0.5,
			side: THREE.DoubleSide
		});
		return new THREE.Mesh(geometry, material);
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get AIM_KEY() {
		return 'AIM_KEY';
	}
}

export default Aim;