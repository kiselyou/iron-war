
class Keyboard {
	/**
	 *
	 * @param {number} keyCode
	 * @param {string} name
	 * @param {?string} [type]
	 */
	constructor(keyCode, name, type = Keyboard.TYPE_UP_AND_DOWN) {
		/**
		 *
		 * @type {number}
		 */
		this.keyCode = keyCode;
		
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
		this.valueDown = 1;
		
		/**
		 *
		 * @type {?number}
		 */
		this.valueUp = 0;
		
		/**
		 *
		 * @type {?number}
		 */
		this.value = 0;
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static TYPE_SWITCH() {
		return 'TYPE_SWITCH';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static TYPE_UP() {
		return 'TYPE_UP';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static TYPE_DOWN() {
		return 'TYPE_DOWN';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static TYPE_UP_AND_DOWN() {
		return 'TYPE_UP_AND_DOWN';
	}
}

export default Keyboard;