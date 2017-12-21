
class Includes {
	constructor() {
		/**
		 *
		 * @type {Array.<(Object|Particle)>}
		 * @private
		 */
		this._includes = [];
	}
	
	/**
	 * Get list of elements {Particle.key: Particle.name}
	 *
	 * @returns {{(string|number): string}}
	 */
	getKeyAndName() {
		let data = {};
		for (let element of this._includes) {
			data[element.key] = element.name;
		}
		return data;
	}
	
	/**
	 * Get list classes
	 *
	 * @returns {Array.<(Object|Particle)>}
	 */
	getAll() {
		return this._includes;
	};
	
	/**
	 * Get specific object
	 *
	 * @param {(number|string)} key
	 * @returns {?Object}
	 */
	get(key) {
		let element = this._includes.find((el) => {
			return el.key === key;
		});
		return element ? element : null;
	}
}

export default Includes;