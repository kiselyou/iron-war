
class Keyboard {
	/**
	 *
	 * @param {number} keyCode
	 * @param {string} name
	 * @param {string} key
	 */
	constructor(keyCode, name, key) {
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
		this.eventType = Keyboard.EVENT_TYPE_DOWN_OR_UP_CHANGE;
		
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
		
		/**
		 *
		 * @type {?string}
		 */
		this.description = null;
		
		/**
		 *
		 * @type {number}
		 */
		this.group = 0;
	}
	
	// /**
	//  *
	//  * @param {{v: number, vOn: number, vOff: number}} data
	//  * @returns {Keyboard}
	//  */
	// setSocketInfo(data) {
	// 	this.value = data['v'];
	// 	this.valueOn = data['vOn'];
	// 	this.valueOff = data['vOff'];
	// 	return this;
	// }
	//
	// /**
	//  *
	//  * @returns {{v: number, vOn: number, vOff: number}}
	//  */
	// getSocketInfo() {
	// 	return {
	// 		v: this.value,
	// 		vOn: this.valueOn,
	// 		vOff: this.valueOff
	// 	}
	// }
	
	/**
	 *
	 * @param {number} value
	 * @returns {Keyboard}
	 */
	setGroup(value) {
		this.group = Number(value);
		return this;
	}
	
	/**
	 *
	 * @param {string} type
	 * @returns {Keyboard}
	 */
	setEventType(type) {
		this.eventType = type;
		return this;
	}
	
	/**
	 *
	 * @param {string} value
	 * @returns {Keyboard}
	 */
	setDescription(value) {
		this.description = value;
		return this;
	}
	
	/**
	 * 
	 * @returns {Keyboard}
	 */
	clear() {
		this.value = this.valueOff;
		return this;
	}
	
	/**
	 *
	 * @returns {Keyboard}
	 */
	toggle() {
		this.value = (this.value === this.valueOff) ? this.valueOn : this.valueOff;
		return this;
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get EVENT_TYPE_DOWN_OR_UP_CHANGE() {
		return 'DOWN_OR_UP_CHANGE';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get EVENT_TYPE_DOWN_TOGGLE() {
		return 'DOWN_TOGGLE';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get EVENT_TYPE_UP_TOGGLE() {
		return 'UP_TOGGLE';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get EVENT_TYPE_UP_CHANGE() {
		return 'UP_CHANGE';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get EVENT_TYPE_DOWN_CHANGE() {
		return 'DOWN_CHANGE';
	}
}

export default Keyboard;