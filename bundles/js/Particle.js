
class Particle {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		/**
		 *
		 * @type {string}
		 */
		this.id = '';
		
		/**
		 *
		 * @type {string|number}
		 */
		this.key = key;
		
		/**
		 *
		 * @type {string}
		 */
		this.type = type;
		
		/**
		 *
		 * @type {?string}
		 */
		this.name = null;
		
		/**
		 *
		 * @type {?string}
		 */
		this.label = null;
		
		/**
		 *
		 * @type {?string}
		 */
		this.description = null;
		
		/**
		 *
		 * @type {?ParticleClass}
		 */
		this.particleClass = null;
	}
}

export default Particle;