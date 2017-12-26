import * as THREE from 'three';
import Particle from './../../Particle';

class Aim extends Particle {
	constructor() {
		super('Aim', Aim.AIM_KEY);
		
		/**
		 *
		 * @type {Group}
		 */
		this.model = new THREE.Group();
		this.model.position.z = -900;
		this.model.rotation.x = Math.PI / 2;
		
		/**
		 *
		 * @type {number}
		 */
		this.scale = 0.1;
		
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
		this.color = 0xFF0000;
		this.update();
	}
	
	/**
	 * Build aim
	 *
	 * @returns {void}
	 */
	update() {
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
		
		let elTopRight = this._drawUnderLine();
		let elTopLeft = elTopRight.clone();
		let elBottomRight = elTopRight.clone();
		let elBottomLeft = elTopRight.clone();
		
		elTopRight.position.x = 100;
		elTopRight.position.z = - 100;
		elTopRight.rotation.x = - Math.PI / 2;
		this.model.add(elTopRight);
		
		elTopLeft.position.x = - 100;
		elTopLeft.position.z = - 100;
		elTopLeft.rotation.x = Math.PI / 2;
		elTopLeft.rotation.z = Math.PI;
		this.model.add(elTopLeft);
		
		elBottomLeft.position.x = - 100;
		elBottomLeft.position.z = 100;
		elBottomLeft.rotation.x = - Math.PI / 2;
		elBottomLeft.rotation.z = Math.PI;
		this.model.add(elBottomLeft);
		
		elBottomRight.position.x = 100;
		elBottomRight.position.z = 100;
		elBottomRight.rotation.x = Math.PI / 2;
		this.model.add(elBottomRight);
		
		
		this.model.scale.set(this.scale, this.scale, this.scale);
	}
	
	_drawUnderLine() {
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
		
		let line = new THREE.Line(geometry);
		line.material.color = new THREE.Color(this.color);
		line.material.needsUpdate = true;
		
		let el = new THREE.Object3D();
		el.add(line);
		
		return el;
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