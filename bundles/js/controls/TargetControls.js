
class TargetControls {
	
	constructor() {
		
		/**
		 *
		 * @type {?(Mesh|Group|Object3D)}
		 */
		this._selected = null;
	}
	
	/**
	 *
	 * @param {Array.<(Mesh|Group|Object3D)>} objects
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
		this._selected = object;
		console.log(this._selected, '---');
		return this;
	}
}

export default TargetControls;