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
		 * @type {?Particle}
		 * @private
		 */
		this._previous = null;
		
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
		this._rarget = new Target();
		this._rarget.model.position.z = -200;
		
		this._scene.add(this._rarget.model);
	}
	
	/**
	 *
	 * @param {Array.<Particle>} objects
	 * @param {number} direction - possible values (-1|1) (-1 previous), (1 next)
	 * @returns {void}
	 */
	changeTarget(objects, direction) {
		let len = objects.length;
		
		if (len === 0) {
			return;
		}
		
		if (!this._selected && direction === -1) {
			// Last object
			this.setSelected(objects[len - 1]);
		} else if (!this._selected && direction === 1) {
			// First object
			this.setSelected(objects[0]);
		} else if (this._selected && direction === -1) {
			let isObject = false;
			for (let i = 0; i < len; i++) {
				if (this._selected === objects[i]) {
					let key = (i === 0) ? len - 1 : i - 1;
					this.setSelected(objects[key]);
					isObject = true;
					break;
				}
			}
			if (!isObject) {
				this.setSelected(null);
			}
		} else if (this._selected && direction === 1) {
			let isObject = false;
			for (let i = 0; i < len; i++) {
				if (this._selected === objects[i]) {
					let key = (i === len - 1) ? 0 : i + 1;
					this.setSelected(objects[key]);
					isObject = true;
					break;
				}
			}
			if (!isObject) {
				this.setSelected(null);
			}
		}
	}
	
	setSelected(object) {
		this._previous = this._selected;
		this._selected = object;
		
		if (this._previous) {
			// this._previous.model.remove(this._rarget.model);
		}
		
		if (this._selected) {
			
			this._rarget.model.lookAt(this._camera.position);
			this._rarget.model.position.copy(this._selected.model.position);
			
			
			
			let box = this._box.setFromObject(this._selected.model);
			let size = box.size();
			// this._rarget.model.position.x = this._selected.model.position.x - (size.x / 2);
			// this._rarget.model.position.y = this._selected.model.position.y - (size.y / 2);
			// this._rarget.model.position.z = this._selected.model.position.z - (size.z / 2);
			// console.log( box.min, box.max, box.size() );
			
		} else {
		
		}
		return this;
	}
	
	update() {
		if (this._selected) {
			this._rarget.model.lookAt(this._camera.position);
			this._rarget.model.rotation.z = this._camera.rotation.z;
		}
	}
}

export default TargetControls;