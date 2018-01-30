import Target from './../particles/decoration/target/Target';
import TargetDirection from './../particles/decoration/target/TargetDirection';
import {THREE} from '../../api';

const TARGET_ANGLE_SIZE = 5;

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
			
			let size = Math.max(Math.max(x, y), z);
			
			this._target
				.setSize(TARGET_ANGLE_SIZE, size - TARGET_ANGLE_SIZE)
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