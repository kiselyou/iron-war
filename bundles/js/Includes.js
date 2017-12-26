/**
 *
 * @type {Object}
 */
let include = {};

class Includes {
	/**
	 *
	 * @param {string} type
	 */
	constructor(type) {
		/**
		 *
		 * @type {Array.<(Object|Particle)>}
		 */
		this.includes = [];
		
		if (include.hasOwnProperty(type)) {
			throw new Error('Includes ' + type + ' has already exists. Try call static method Includes.get("' + type + '")');
		}
		
		include[type] = this;
		
		/**
		 *
		 * @type {string}
		 */
		this.type = type;
	}
	
	/**
	 *
	 * @param {string} type
	 * @returns {*}
	 */
	static get(type) {
		return include[type];
	}
	
	/**
	 * Get list of elements {Particle.key: Particle.name}
	 *
	 * @returns {{(string|number): string}}
	 */
	getKeyAndName() {
		let data = {};
		for (let element of this.includes) {
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
		return this.includes;
	};

	/**
	 * Get specific object
	 *
	 * @param {number|string} key
	 * @returns {?Object}
	 */
	getSpecific(key) {
		let element = this.includes.find((el) => {
			return el.key === key;
		});
		return element ? element.clone() : null;
	}
}

export default Includes;