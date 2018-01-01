import Target from './../particles/decoration/target/Target';
import * as THREE from 'three';

class TargetControls {
	
	/**
	 *
	 * @param {Scene} scene
	 * @param {Camera} camera
	 */
	constructor(scene, camera) {
		/**
		 *
		 * @type {Camera}
		 * @private
		 */
		this._scene = scene;
		
		/**
		 *
		 * @type {Camera}
		 * @private
		 */
		this._camera = camera;
		
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
		this._target = new Target();
		this._target.model.position.z = -200;
		this._scene.add(this._target.model);
		
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
	}
	
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
	 * @param {Particle} object
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
		} else {
			this._target.remove();
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
			if (this._updateListener) {
				this._updateListener(this._selected, this._target, this._size);
			}
		}
	}
}

export default TargetControls;