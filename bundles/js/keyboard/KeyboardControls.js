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
			forward: new Keyboard(87, 'W', 'forward'),
			back: new Keyboard(83, 'S', 'back'),
			left: new Keyboard(65, 'A', 'left'),
			right: new Keyboard(68, 'D', 'right'),
			rollLeft: new Keyboard(81, 'Q', 'rollLeft'),
			rollRight: new Keyboard(69, 'E', 'rollRight'),
			yawLeft: new Keyboard(37, 'Left', 'yawLeft'),
			yawRight: new Keyboard(39, 'Right', 'yawRight'),
			pitchUp: new Keyboard(38, 'Up', 'pitchUp'),
			pitchDown: new Keyboard(40, 'Down', 'pitchDown'),
			up: new Keyboard(82, 'R', 'up'),
			down: new Keyboard(70, 'F', 'down'),
			space: new Keyboard(32, 'Space', 'space')
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
	 * @param {string} type - There are constants of current class
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
	 * @param {KeyboardEvent} event
	 */
	keydown(event) {
		if (event.altKey) {
			return;
		}
		
		let keyboard = this._findKeyboard(event.keyCode);
		if (keyboard) {
			switch (keyboard.type) {
				case Keyboard.DOWN_TOGGLE:
					keyboard.toggle();
					this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
					break;
				case Keyboard.DOWN_OR_UP_CHANGE:
					keyboard.value = keyboard.valueOn;
					this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
					break;
				case Keyboard.DOWN_CHANGE:
					keyboard.value = keyboard.valueOn;
					this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
					break;
			}
		}
	}
	
	/**
	 *
	 * @param {KeyboardEvent} event
	 */
	keyup(event) {
		let keyboard = this._findKeyboard(event.keyCode);
		if (keyboard) {
			switch (keyboard.type) {
				case Keyboard.UP_TOGGLE:
					keyboard.toggle();
					this._callListeners(KeyboardControls.EVENT_KEY_UP, event, keyboard);
					break;
				case Keyboard.DOWN_OR_UP_CHANGE:
					keyboard.value = keyboard.valueOff;
					this._callListeners(KeyboardControls.EVENT_KEY_UP, event, keyboard);
					break;
				case Keyboard.UP_CHANGE:
					keyboard.value = keyboard.valueOff;
					this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
					break;
			}
		}
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
	 * @param {number} keyCode
	 * @returns {Keyboard}
	 * @private
	 */
	_findKeyboard(keyCode) {
		for (let key in this.fly) {
			if (this.fly.hasOwnProperty(key)) {
				let keyboard = this.fly[key];
				if (keyboard['keyCode'] === keyCode) {
					return keyboard;
				}
			}
		}
		return null;
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_KEY_DOWN() {
		return 'EVENT_KEY_DOWN';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_KEY_UP() {
		return 'EVENT_KEY_UP';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MOUSE_MOVE() {
		return 'EVENT_MOUSE_MOVE';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MOUSE_DOWN() {
		return 'EVENT_MOUSE_DOWN';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MOUSE_UP() {
		return 'EVENT_MOUSE_UP';
	}
}

export default KeyboardControls;