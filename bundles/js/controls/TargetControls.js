import Target from './../particles/decoration/target/Target';
import TargetDirection from './../particles/decoration/target/TargetDirection';
import * as THREE from 'three';

class TargetControls {
	
	/**
	 *
	 * @param {SceneControls} sceneControls
	 */
	constructor(sceneControls) {
		/**
		 *
		 * @type {SceneControls}
		 * @private
		 */
		this._sceneControls = sceneControls;
		
		/**
		 *
		 * @type {Camera}
		 * @private
		 */
		this._scene = this._sceneControls.scene;
		
		/**
		 *
		 * @type {Camera}
		 * @private
		 */
		this._camera = this._sceneControls.camera;
		
		/**
		 *
		 * @type {?Particle}
		 * @private
		 */
		this._selected = null;
		
		/**
		 *
		 * @type {Box3}
		 * @private
		 */
		this._box = new THREE.Box3();
		
		/**
		 *
		 * @type {Target}
		 * @private
		 */
		this._target = new Target(this._sceneControls);
		this._target.model.position.z = -200;
		this._scene.add(this._target.model);
		
		/**
		 *
		 * @type {TargetDirection}
		 * @private
		 */
		this._targetDirection = new TargetDirection(this._sceneControls);
		
		/**
		 *
		 * @type {?targetListener}
		 * @private
		 */
		this._updateListener = null;
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._size = 0;
		
		
		
		
		// this._arrowDirect = new THREE.Object3D();
		// this._drawArrow(new THREE.Vector3(0, 0, 0));
		// this._drawArrow(new THREE.Vector3(0, 100, 0));
		// this._drawArrow(new THREE.Vector3(0, 200, 0));
		// this._drawArrow(new THREE.Vector3(0, 300, 0));
		// this._drawArrow(new THREE.Vector3(0, 400, 0));
		//
		// this._camera.add(this._arrowDirect);
		// this._arrowDirect.position.z = - 5;
		//
		// this._arrowDirect.rotation.z = - Math.PI / 2;
		// this._arrowDirect.scale.copy(new THREE.Vector3(0.0008, 0.0008, 0.0008));
		
	}
	
	// _drawArrow(p) {
	// 	let material = new THREE.LineBasicMaterial({
	// 		color: 0xffffff
	// 	});
	//
	// 	let geometry = new THREE.Geometry();
	// 	geometry.vertices.push(
	// 		new THREE.Vector3(-50, 0, 0),
	// 		new THREE.Vector3(0, 50, 0),
	// 		new THREE.Vector3(50, 0, 0)
	// 	);
	//
	// 	let line = new THREE.Line(geometry, material);
	// 	line.position.copy(p);
	// 	this._arrowDirect.add(line);
	// }
	
	/**
	 * @param {Particle}
	 * @param {Target}
	 * @param {Box3} box
	 * @callback targetListener
	 */
	
	/**
	 *
	 * @param {Array.<Particle>} objects
	 * @param {number} direction - possible values (-1|1) (-1 previous), (1 next)
	 * @param {targetListener} [onChangeListener]
	 * @param {targetListener} [onUpdateListener]
	 * @returns {TargetControls}
	 */
	changeTarget(objects, direction, onChangeListener, onUpdateListener) {
		this._updateListener = onUpdateListener;
		let len = objects.length;
		if (len === 0) {
			return this;
		}
		
		if (!this._selected && direction === -1) {
			// Last object
			this.setSelected(objects[len - 1], onChangeListener);
		} else if (!this._selected && direction === 1) {
			// First object
			this.setSelected(objects[0], onChangeListener);
		} else if (this._selected && direction === -1) {
			let isObject = false;
			for (let i = 0; i < len; i++) {
				if (this._selected === objects[i]) {
					let key = (i === 0) ? len - 1 : i - 1;
					this.setSelected(objects[key], onChangeListener);
					isObject = true;
					break;
				}
			}
			if (!isObject) {
				this.setSelected(null, onChangeListener);
			}
		} else if (this._selected && direction === 1) {
			let isObject = false;
			for (let i = 0; i < len; i++) {
				if (this._selected === objects[i]) {
					let key = (i === len - 1) ? 0 : i + 1;
					this.setSelected(objects[key], onChangeListener);
					isObject = true;
					break;
				}
			}
			if (!isObject) {
				this.setSelected(null, onChangeListener);
			}
		}
		return this;
	}
	
	/**
	 *
	 * @param {?Particle} object
	 * @param {targetListener} [onChangeListener]
	 * @returns {TargetControls}
	 */
	setSelected(object, onChangeListener) {
		this._selected = object;
		if (this._selected) {
			let box = this._box.setFromObject(this._selected.model);
			this._size = box.getSize();
			let x = this._size.x,
				y = this._size.y,
				z = this._size.z;
			
			let size = Math.max(Math.max(x, y), z) / 2;
			
			this._target
				.setSize(size)
				.draw();
			
			this._target.model.lookAt(this._camera.position);
			this._target.model.position.copy(this._selected.model.position);
			this._targetDirection.draw();
			
		} else {
			this._target.remove();
			this._targetDirection.remove();
		}
		
		if (onChangeListener) {
			onChangeListener(this._selected, this._target, this._size);
		}
		return this;
	}
	
	update() {
		if (this._selected) {
			this._target.model.lookAt(this._camera.position);
			this._target.model.rotation.z = this._camera.rotation.z;
			
			this._targetDirection
				.update(this._selected.model);
			
			if (this._updateListener) {
				this._updateListener(this._selected, this._target, this._size);
			}
		}
	}
}

export default TargetControls;