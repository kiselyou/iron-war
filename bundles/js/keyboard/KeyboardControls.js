import Keyboard from './Keyboard';

class KeyboardControls {
	/**
	 *
	 * @param {HTMLElement} domElement
	 */
	constructor(domElement) {
		
		/**
		 *
		 * @type {Object}
		 */
		this.listeners = {};
		
		/**
		 *
		 * @type {{forward: Keyboard, back: Keyboard, left: Keyboard, right: Keyboard, rollLeft: Keyboard, rollRight: Keyboard, yawLeft: Keyboard, yawRight: Keyboard, pitchUp: Keyboard, pitchDown: Keyboard, up: Keyboard, down: Keyboard, space: Keyboard}}
		 */
		this.fly = {
			forward: new Keyboard(87, 'W'),
			back: new Keyboard(83, 'S'),
			left: new Keyboard(65, 'A'),
			right: new Keyboard(68, 'D'),
			rollLeft: new Keyboard(81, 'Q'),
			rollRight: new Keyboard(69, 'E'),
			yawLeft: new Keyboard(37, 'Left'),
			yawRight: new Keyboard(39, 'Right'),
			pitchUp: new Keyboard(38, 'Up'),
			pitchDown: new Keyboard(40, 'Down'),
			up: new Keyboard(82, 'R'),
			down: new Keyboard(70, 'F'),
			space: new Keyboard(8, 'Back Space', Keyboard.TYPE_SWITCH)
		};
		
		domElement.addEventListener('contextmenu', (event) => {
			event.preventDefault();
		}, false);
		
		domElement.addEventListener('mousemove', (event) => {
			this._callListeners(KeyboardControls.EVENT_MOUSE_MOVE, event);
		}, false);
		
		domElement.addEventListener('mousedown', (event) => {
			this._callListeners(KeyboardControls.EVENT_MOUSE_DOWN, event);
		}, false);
		
		domElement.addEventListener('mouseup', (event) => {
			this._callListeners(KeyboardControls.EVENT_MOUSE_UP, event);
		}, false);
		
		window.addEventListener('keydown', (event) => {
			this.keydown(event);
		}, false);
		
		window.addEventListener('keyup', (event) => {
			this.keyup(event);
		}, false);
	}
	
	/**
	 * @param {KeyboardEvent|MouseEvent} event
	 * @param {?Keyboard} [keyboard]
	 * @callback keyboardControlsListener
	 */
	
	/**
	 *
	 * @param {string} type
	 * @param {keyboardControlsListener} listener
	 * @returns {KeyboardControls}
	 */
	addEventListener(type, listener) {
		if (!this.listeners.hasOwnProperty(type)) {
			this.listeners[type] = [];
		}
		this.listeners[type].push(listener);
		return this;
	}
	
	/**
	 *
	 * @param {string} type
	 * @param {KeyboardEvent|MouseEvent} event
	 * @param {Keyboard} [keyboard]
	 * @private
	 */
	_callListeners(type, event, keyboard) {
		if (!this.listeners.hasOwnProperty(type)) {
			return;
		}
		for (let listener of this.listeners[type]) {
			listener(event, keyboard);
		}
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static EVENT_KEY_DOWN() {
		return 'EVENT_KEY_DOWN';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static EVENT_KEY_UP() {
		return 'EVENT_KEY_UP';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static EVENT_MOUSE_MOVE() {
		return 'EVENT_MOUSE_MOVE';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static EVENT_MOUSE_DOWN() {
		return 'EVENT_MOUSE_DOWN';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static EVENT_MOUSE_UP() {
		return 'EVENT_MOUSE_UP';
	}
	
	/**
	 *
	 * @param {KeyboardEvent} event
	 */
	keydown(event) {
		if (event.altKey) {
			return;
		}
		
		let keyboard = this._findKeyboard(event.keyCode);
		if (keyboard) {
			keyboard.value = keyboard.valueDown;
			this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
		}
	}
	
	/**
	 *
	 * @param {KeyboardEvent} event
	 */
	keyup(event) {
		let keyboard = this._findKeyboard(event.keyCode);
		if (keyboard) {
			keyboard.value = keyboard.valueUp;
			this._callListeners(KeyboardControls.EVENT_KEY_UP, event, keyboard);
		}
	}
	
	/**
	 *
	 * @param {number} keyCode
	 * @returns {Keyboard}
	 * @private
	 */
	_findKeyboard(keyCode) {
		for (let key in this.fly) {
			if (this.fly.hasOwnProperty(key)) {
				let keyboard = this.fly[key];
				if (this.fly[key]['keyCode'] === keyCode) {
					return this.fly[key];
				}
			}
		}
		return null;
	}
}

export default KeyboardControls;