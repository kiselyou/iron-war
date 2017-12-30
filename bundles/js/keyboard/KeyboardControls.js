import Keyboard from './Keyboard';

class KeyboardControls {
	/**
	 *
	 * @param {HTMLElement|HTMLDocument} container
	 */
	constructor(container) {
		/**
		 *
		 * @type {HTMLElement|HTMLDocument}
		 */
		this.container = container;
		
		/**
		 *
		 * @type {Array}
		 * @private
		 */
		this._disabledGroups = [];
		
		/**
		 *
		 * @type {Object.<Object.<Array>>}
		 * @private
		 */
		this._listeners = {};
		
		/**
		 *
		 * @type {{forward: Keyboard, back: Keyboard, left: Keyboard, right: Keyboard, up: Keyboard, down: Keyboard, rollLeft: Keyboard, rollRight: Keyboard, yawLeft: Keyboard, yawRight: Keyboard, pitchUp: Keyboard, pitchDown: Keyboard, stop: Keyboard, openConsole: Keyboard}}
		 */
		this.fly = {
			forward: new Keyboard(87, 'W', 'forward')
				.setDescription('Увеличение скорости. Движение вперед.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			back: new Keyboard(83, 'S', 'back')
				.setDescription('Торможение или движение назад.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			left: new Keyboard(65, 'A', 'left')
				.setDescription('Баковые двигатели. Движение влево.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			right: new Keyboard(68, 'D', 'right')
				.setDescription('Баковые двигатели. Движение вправо.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			up: new Keyboard(82, 'R', 'up')
				.setDescription('Баковые двигатели. Движение вверх.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			down: new Keyboard(70, 'F', 'down')
				.setDescription('Баковые двигатели. Движение вниз.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			rollLeft: new Keyboard(81, 'Q', 'rollLeft')
				.setDescription('Вращение вокруг оси Z влево')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			rollRight: new Keyboard(69, 'E', 'rollRight')
				.setDescription('Вращение вокруг оси Z вправо')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			yawLeft: new Keyboard(37, 'Left', 'yawLeft')
				.setDescription('Изменение направления влево')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			yawRight: new Keyboard(39, 'Right', 'yawRight')
				.setDescription('Изменение направления вправо')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			pitchUp: new Keyboard(38, 'Up', 'pitchUp')
				.setDescription('Изменение направления вверх')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			pitchDown: new Keyboard(40, 'Down', 'pitchDown')
				.setDescription('Изменение направления вниз')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			stop: new Keyboard(32, 'Space', 'stop')
				.setDescription('Торможение')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			openConsole: new Keyboard(66, 'B', 'openConsole')
				.setEventType(Keyboard.EVENT_TYPE_UP_TOGGLE)
				.setDescription('Открыть консоль бортового компъютера')
				.setGroup(KeyboardControls.GROUP_PK)
		};
	}
	
	/**
	 * Add events to page. Use this method only for current user
	 *
	 * @return {KeyboardControls}
	 */
	initEvents() {
		this.container.addEventListener('contextmenu', (event) => {
			event.preventDefault();
		}, false);
		
		this.container.addEventListener('mousemove', (event) => {
			this._callListeners(KeyboardControls.EVENT_MOUSE_MOVE, event);
		}, false);
		
		this.container.addEventListener('mousedown', (event) => {
			this._callListeners(KeyboardControls.EVENT_MOUSE_DOWN, event);
		}, false);
		
		this.container.addEventListener('mouseup', (event) => {
			this._callListeners(KeyboardControls.EVENT_MOUSE_UP, event);
		}, false);
		
		this.container.addEventListener('wheel', (event) => {
			this._callListeners(KeyboardControls.EVENT_MOUSE_WHEEL, event);
		}, false);
		
		window.addEventListener('keydown', (event) => {
			this._keyDown(event);
		}, false);
		
		window.addEventListener('keyup', (event) => {
			this._keyUp(event);
		}, false);
		
		return this;
	}
	
	/**
	 * Disable group events and buttons
	 *
	 * @param {number} groupName - Constants of current class
	 * @return {KeyboardControls}
	 */
	disableGroup(groupName) {
		this._disabledGroups.push(groupName);
		return this;
	}
	
	/**
	 * Enable group events and buttons
	 *
	 * @param {number} groupName - Constants of current class
	 * @return {KeyboardControls}
	 */
	enableGroup(groupName) {
		for (let i = 0; i < this._disabledGroups.length; i++) {
			if (this._disabledGroups[i] === groupName) {
				this._disabledGroups.splice(i, 1);
			}
		}
		return this;
	}
	
	/**
	 * @param {KeyboardEvent|MouseEvent|WheelEvent} event
	 * @param {?Keyboard} [keyboard]
	 * @callback keyboardControlsListener
	 */
	
	/**
	 *
	 * @param {string} type - There are constants of current class
	 * @param {string|number} group - Constants of current class
	 * @param {keyboardControlsListener} listener
	 * @returns {KeyboardControls}
	 */
	addEventListener(type, group, listener) {
		if (!this._listeners.hasOwnProperty(type)) {
			this._listeners[type] = {};
		}
		if (!this._listeners[type].hasOwnProperty(group)) {
			this._listeners[type][group] = [];
		}
		this._listeners[type][group].push(listener);
		return this;
	}
	
	/**
	 *
	 * @param {KeyboardEvent} event
	 * @private
	 */
	_keyDown(event) {
		if (event.altKey) {
			return;
		}
		
		let keyboard = this._findKeyboard(event.keyCode);
		
		if (!keyboard || this._disabledGroups.indexOf(keyboard.group) >= 0) {
			return;
		}
		
		switch (keyboard.eventType) {
			case Keyboard.EVENT_TYPE_DOWN_TOGGLE:
				keyboard.toggle();
				this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
				break;
			case Keyboard.EVENT_TYPE_DOWN_OR_UP_CHANGE:
				keyboard.value = keyboard.valueOn;
				this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
				break;
			case Keyboard.EVENT_TYPE_DOWN_CHANGE:
				keyboard.value = keyboard.valueOn;
				this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
				break;
		}
	}
	
	/**
	 *
	 * @param {KeyboardEvent} event
	 * @private
	 */
	_keyUp(event) {
		let keyboard = this._findKeyboard(event.keyCode);
		
		if (!keyboard || this._disabledGroups.indexOf(keyboard.group) >= 0) {
			return;
		}
		
		switch (keyboard.eventType) {
			case Keyboard.EVENT_TYPE_UP_TOGGLE:
				keyboard.toggle();
				this._callListeners(KeyboardControls.EVENT_KEY_UP, event, keyboard);
				break;
			case Keyboard.EVENT_TYPE_DOWN_OR_UP_CHANGE:
				keyboard.value = keyboard.valueOff;
				this._callListeners(KeyboardControls.EVENT_KEY_UP, event, keyboard);
				break;
			case Keyboard.EVENT_TYPE_UP_CHANGE:
				keyboard.value = keyboard.valueOff;
				this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
				break;
		}
	}
	
	/**
	 *
	 * @param {string} type - this is event name, the constants of current class
	 * @param {KeyboardEvent|MouseEvent} event
	 * @param {?Keyboard} [keyboard]
	 * @private
	 */
	_callListeners(type, event, keyboard = null) {
		if (!this._listeners.hasOwnProperty(type)) {
			return;
		}
		let arr = this._listeners[type];
		for (let group in arr) {
			if (!arr.hasOwnProperty(group) || (keyboard && keyboard.group !== Number(group))) {
				continue;
			}
			
			if (this._disabledGroups.indexOf(Number(group)) < 0) {
				for (let listener of arr[group]) {
					listener(event, keyboard);
				}
			}
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
	
	// /**
	//  *
	//  * @param {{fly: {forward: {v: number, vOn: number, vOff: number}, back: {v: number, vOn: number, vOff: number}, stop: {v: number, vOn: number, vOff: number}, left: {v: number, vOn: number, vOff: number}, right: {v: number, vOn: number, vOff: number}, down: {v: number, vOn: number, vOff: number}, up: {v: number, vOn: number, vOff: number}, pitchDown: {v: number, vOn: number, vOff: number}, pitchUp: {v: number, vOn: number, vOff: number}, yawRight: {v: number, vOn: number, vOff: number}, yawLeft: {v: number, vOn: number, vOff: number}, rollRight: {v: number, vOn: number, vOff: number}, rollLeft: {v: number, vOn: number, vOff: number}}}} data
	//  * @returns {KeyboardControls}
	//  */
	// setSocketInfo(data) {
	// 	this.fly.forward.setSocketInfo(data['fly']['forward']);
	// 	this.fly.back.setSocketInfo(data['fly']['back']);
	// 	this.fly.stop.setSocketInfo(data['fly']['stop']);
	// 	this.fly.left.setSocketInfo(data['fly']['left']);
	// 	this.fly.right.setSocketInfo(data['fly']['right']);
	// 	this.fly.down.setSocketInfo(data['fly']['down']);
	// 	this.fly.up.setSocketInfo(data['fly']['up']);
	// 	this.fly.pitchDown.setSocketInfo(data['fly']['pitchDown']);
	// 	this.fly.pitchUp.setSocketInfo(data['fly']['pitchUp']);
	// 	this.fly.yawRight.setSocketInfo(data['fly']['yawRight']);
	// 	this.fly.yawLeft.setSocketInfo(data['fly']['yawLeft']);
	// 	this.fly.rollRight.setSocketInfo(data['fly']['rollRight']);
	// 	this.fly.rollLeft.setSocketInfo(data['fly']['rollLeft']);
	// 	return this;
	// }
	//
	// /**
	//  *
	//  * @returns {{fly: {forward: {v: number, vOn: number, vOff: number}, back: {v: number, vOn: number, vOff: number}, stop: {v: number, vOn: number, vOff: number}, left: {v: number, vOn: number, vOff: number}, right: {v: number, vOn: number, vOff: number}, down: {v: number, vOn: number, vOff: number}, up: {v: number, vOn: number, vOff: number}, pitchDown: {v: number, vOn: number, vOff: number}, pitchUp: {v: number, vOn: number, vOff: number}, yawRight: {v: number, vOn: number, vOff: number}, yawLeft: {v: number, vOn: number, vOff: number}, rollRight: {v: number, vOn: number, vOff: number}, rollLeft: {v: number, vOn: number, vOff: number}}}}
	//  */
	// getSocketInfo() {
	// 	return {
	// 		fly: {
	// 			forward: this.fly.forward.getSocketInfo(),
	// 			back: this.fly.back.getSocketInfo(),
	// 			stop: this.fly.stop.getSocketInfo(),
	// 			left: this.fly.left.getSocketInfo(),
	// 			right: this.fly.right.getSocketInfo(),
	// 			down: this.fly.down.getSocketInfo(),
	// 			up: this.fly.up.getSocketInfo(),
	// 			pitchDown: this.fly.pitchDown.getSocketInfo(),
	// 			pitchUp: this.fly.pitchUp.getSocketInfo(),
	// 			yawRight: this.fly.yawRight.getSocketInfo(),
	// 			yawLeft: this.fly.yawLeft.getSocketInfo(),
	// 			rollRight: this.fly.rollRight.getSocketInfo(),
	// 			rollLeft: this.fly.rollLeft.getSocketInfo()
	// 		}
	// 	};
	// }
	
	/**
	 * The group buttons to fly
	 *
	 * @returns {number}
	 */
	static get GROUP_FLY() {
		return 1;
	}
	
	/**
	 * The group buttons to console of ship
	 *
	 * @returns {number}
	 */
	static get GROUP_PK() {
		return 2;
	}
	
	/**
	 * The group of target
	 *
	 * @returns {number}
	 */
	static get GROUP_TARGET() {
		return 3;
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
	static get EVENT_MOUSE_WHEEL() {
		return 'EVENT_MOUSE_WHEEL';
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