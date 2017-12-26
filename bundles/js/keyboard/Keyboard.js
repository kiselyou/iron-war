
class Keyboard {
	/**
	 *
	 * @param {number} keyCode
	 * @param {string} name
	 * @param {string} key
	 * @param {string} [type]
	 */
	constructor(keyCode, name, key, type = Keyboard.DOWN_OR_UP_CHANGE) {
		/**
		 *
		 * @type {number}
		 */
		this.keyCode = keyCode;
		
		/**
		 *
		 * @type {string}
		 */
		this.key = key;
		
		/**
		 *
		 * @type {string}
		 */
		this.name = name;
		
		/**
		 *
		 * @type {?string}
		 */
		this.type = type;
		
		/**
		 *
		 * @type {?number}
		 */
		this.valueOn = 1;
		
		/**
		 *
		 * @type {?number}
		 */
		this.valueOff = 0;
		
		/**
		 *
		 * @type {?number}
		 */
		this.value = this.valueOff;
	}
	
	clear() {
		this.value = this.valueOff;
	}
	
	toggle() {
		this.value = (this.value === this.valueOff) ? this.valueOn : this.valueOff;
		return this;
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get DOWN_OR_UP_CHANGE() {
		return 'DOWN_OR_UP_CHANGE';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get DOWN_TOGGLE() {
		return 'DOWN_TOGGLE';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get UP_TOGGLE() {
		return 'UP_TOGGLE';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get UP_CHANGE() {
		return 'UP_CHANGE';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get DOWN_CHANGE() {
		return 'DOWN_CHANGE';
	}
}

export default Keyboard;