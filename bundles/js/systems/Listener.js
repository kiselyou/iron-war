
class Listener {
	constructor() {
		/**
		 *
		 * @type {Object.<Array.<eventListener>>}
		 * @private
		 */
		this._events = {};
	}
	
	/**
	 * @param {*} params
	 * @callback eventListener
	 */
	
	/**
	 *
	 * @param {string} type
	 * @param {playerListener} listener
	 * @returns {Listener}
	 */
	addEventListener(type, listener) {
		if (!this._events.hasOwnProperty(type)) {
			this._events[type] = [];
		}
		this._events[type].push(listener);
		return this;
	}
	
	/**
	 *
	 * @param {string} type
	 * @param {*} [params]
	 * @returns {void}
	 */
	callListeners(type, params = null) {
		if (this._events.hasOwnProperty(type)) {
			for (let listener of this._events[type]) {
				listener(params);
			}
		}
	}
}

export default Listener;