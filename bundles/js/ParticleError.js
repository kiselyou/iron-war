
class ParticleError extends Error {
	/**
	 *
	 * @param {string} msg
	 * @param {?(string|number)} [id]
	 * @param {boolean} [strict]
	 */
	constructor(msg, id = null, strict = true) {
		super(msg, id);
		
		if (strict) {
			throw this;
		}
	}
}

export default ParticleError;