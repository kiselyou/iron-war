/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** @module three */
/** @class */
const THREE = window.THREE;
/* harmony export (immutable) */ __webpack_exports__["b"] = THREE;


const Stats = window.Stats;
/* harmony export (immutable) */ __webpack_exports__["a"] = Stats;


const UUID = ( function () {

    let lut = [];

    for ( let i = 0; i < 256; i ++ ) {

        lut[ i ] = ( i < 16 ? '0' : '' ) + ( i ).toString( 16 ).toUpperCase();

    }

    return function () {

        let d0 = Math.random() * 0xffffffff | 0;
        let d1 = Math.random() * 0xffffffff | 0;
        let d2 = Math.random() * 0xffffffff | 0;
        let d3 = Math.random() * 0xffffffff | 0;
        return lut[ d0 & 0xff ] + lut[ d0 >> 8 & 0xff ] + lut[ d0 >> 16 & 0xff ] + lut[ d0 >> 24 & 0xff ] + '-' +
            lut[ d1 & 0xff ] + lut[ d1 >> 8 & 0xff ] + '-' + lut[ d1 >> 16 & 0x0f | 0x40 ] + lut[ d1 >> 24 & 0xff ] + '-' +
            lut[ d2 & 0x3f | 0x80 ] + lut[ d2 >> 8 & 0xff ] + '-' + lut[ d2 >> 16 & 0xff ] + lut[ d2 >> 24 & 0xff ] +
            lut[ d3 & 0xff ] + lut[ d3 >> 8 & 0xff ] + lut[ d3 >> 16 & 0xff ] + lut[ d3 >> 24 & 0xff ];
    };
} )();
/* harmony export (immutable) */ __webpack_exports__["c"] = UUID;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParticleError__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systems_Listener__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__particles_arsenal_I_ShaderFire__ = __webpack_require__(23);





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
		this.id = Object(__WEBPACK_IMPORTED_MODULE_2__api__["c" /* UUID */])();
		
		/**
		 *
		 * @type {boolean}
		 */
		this.isClone = false;
		
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
		
		/**
		 *
		 * @type {Array.<Particle>}
		 */
		this.children = [];
		
		/**
		 *
		 * @type {?(Mesh|Group)}
		 */
		this.model = null;
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.size = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Vector3();
		
		/**
		 *
		 * @type {Listener}
		 * @private
		 */
		this._events = new __WEBPACK_IMPORTED_MODULE_1__systems_Listener__["a" /* default */]();
		
		/**
		 *
		 * @type {boolean}
		 */
		this.enabled = true;
	}
	
	/**
	 * @param {Object3D} model
	 * @callback shipUpdateListener
	 */
	
	/**
	 *
	 * @param {string} type
	 * @param {shipUpdateListener} listener
	 * @returns {Particle}
	 */
	addEventListener(type, listener) {
		this._events.addEventListener(type, listener);
		return this;
	}
	
	/**
	 *
	 * @param {(Mesh|Group)} obj
	 * @param {string|number} [eventType] - The event name if you wont use method "addEventListener"
	 * @returns {Particle}
	 */
	setModel(obj, eventType) {
		let mesh = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Object3D();
		mesh.add(obj);
		this.model = mesh;
		if (eventType) {
			this._events.callListeners(eventType, this.model);
		}
		return this;
	}
	
	/**
	 * Clone Particle
	 *
	 * @returns {Particle}
	 */
	clone() {
		/**
		 *
		 * @type {Particle}
		 */
		let clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		clone.isClone = true;
		clone.id = Object(__WEBPACK_IMPORTED_MODULE_2__api__["c" /* UUID */])();
		for (let property in this) {
			if (this.hasOwnProperty(property)) {
				if (this[property] instanceof Particle) {
					clone[property] = clone[property].clone();
				} else if (this[property] instanceof __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Object3D) {
					clone[property] = clone[property].clone();
				} else if (this[property] instanceof __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Vector3) {
					clone[property] = clone[property].clone();
				} else if (this[property] instanceof __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Vector2) {
					clone[property] = clone[property].clone();
                } else if (this[property] instanceof __WEBPACK_IMPORTED_MODULE_3__particles_arsenal_I_ShaderFire__["a" /* default */]) {
                    this[property] = new __WEBPACK_IMPORTED_MODULE_3__particles_arsenal_I_ShaderFire__["a" /* default */]();
				}
			}
		}
		return clone;
	}
	
	/**
	 * Data to JSON
	 *
	 * @returns {string}
	 */
	toJson() {
		return JSON.stringify(this);
	}
	
	/**
	 * Set data from JSON
	 *
	 * @param {string} str
	 * @param {boolean} [strict]
	 * @returns {Particle}
	 */
	fromJson(str, strict = true) {
		try {
			let data = JSON.parse(str);
			if (data['type'] !== this.type && strict) {
				new __WEBPACK_IMPORTED_MODULE_0__ParticleError__["a" /* default */]('You tried to set not correct object');
			}
			
			for (let property in data) {
				if (data.hasOwnProperty(property)) {
					if (this.hasOwnProperty(property)) {
						switch (property) {
							case 'children':
								
								break;
							default:
								this[property] = data[property];
								break;
						}
					} else if (strict) {
						console.warn('Property "' + property + '" does not exists in the "' + this.type + '"');
					}
				}
			}
		} catch (e) {
			console.error(e);
		}
		return this;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Particle);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(75);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParticleClass__ = __webpack_require__(11);


class ParticleClassI extends __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["a" /* default */] {
    constructor() {
        super('ParticleClassI', __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["a" /* default */].I_CLASS_KEY);
	
	    /**
         *
	     * @type {string}
	     */
	    this.name = 'I';
    }
}

/* harmony default export */ __webpack_exports__["a"] = (ParticleClassI);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var keys = __webpack_require__(84);
var hasBinary = __webpack_require__(33);
var sliceBuffer = __webpack_require__(85);
var after = __webpack_require__(86);
var utf8 = __webpack_require__(87);

var base64encoder;
if (global && global.ArrayBuffer) {
  base64encoder = __webpack_require__(89);
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(90);

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof global.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decoration_aim_Aim__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_I_EngineIM20__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arsenal_ArsenalSlots__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__arsenal_ArsenalSlot__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_ParticleClassI__ = __webpack_require__(4);







class Ship extends __WEBPACK_IMPORTED_MODULE_0__Particle__["a" /* default */] {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_5__classes_ParticleClassI__["a" /* default */]();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new __WEBPACK_IMPORTED_MODULE_2__engine_I_EngineIM20__["a" /* default */]();
		
		/**
		 * This is base path to model e.g "models/explorer/"
		 *
		 * @type {?string}
		 */
		this.basePath = null;
		
		/**
		 * This is a path to obj file
		 *
		 * @type {?string}
		 */
		this.objFileName = null;
		
		/**
		 * This is a path to mtl file
		 *
		 * @type {?string}
		 */
		this.mtlFileName = null;
		
		/**
		 *
		 * @type {ArsenalSlots}
		 */
		this.arsenalSlots = new __WEBPACK_IMPORTED_MODULE_3__arsenal_ArsenalSlots__["a" /* default */]();
		
		/**
		 *
		 * @type {Aim}
		 */
		this.aim = new __WEBPACK_IMPORTED_MODULE_1__decoration_aim_Aim__["a" /* default */]();
	}
	/**
	 *
	 * @param {(Mesh|Group)} obj
	 * @returns {Ship}
	 */
	setModel(obj) {
		super.setModel(obj, Ship.EVENT_MODEL_UPDATE);
		return this;
	}
	
	/**
	 * Add models of arsenal to ship model
	 *
	 * @returns {Ship}
	 */
	updateArsenal() {
		for (let property in this.arsenalSlots) {
			if (this.arsenalSlots.hasOwnProperty(property) && this.arsenalSlots[property] instanceof __WEBPACK_IMPORTED_MODULE_4__arsenal_ArsenalSlot__["a" /* default */]) {
				let slot = this.arsenalSlots[property];
				let model = slot.arsenal.model;
				if (model) {
					model.position.copy(slot.position);
					model.rotation.copy(slot.rotation);
					model.matrixAutoUpdate = false;
					model.updateMatrix();
					this.model.remove(model);
					this.model.add(model);
				}
			}
		}
		return this;
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MODEL_UPDATE() {
		return 'EVENT_MODEL_UPDATE'
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get I_EXPLORER_KEY() {
		return 'I_EXPLORER_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get II_EXPLORER_KEY() {
		return 'II_EXPLORER_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get III_EXPLORER_KEY() {
		return 'III_EXPLORER_KEY';
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Ship);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(4);



class Engine extends __WEBPACK_IMPORTED_MODULE_0__Particle__["a" /* default */] {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
    constructor(type, key) {
        super(type, key);
		
        
		/**
		 *
		 * @type {ParticleClassI}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__["a" /* default */]();
		
		/**
         *
		 * @type {number}
		 */
		this.speedMinX = 0;
		
		/**
         *
		 * @type {number}
		 */
        this.speedMaxX = 0;
        
        /**
         *
		 * @type {number}
		 */
		this.speedMinY = 0;
		
		/**
         *
		 * @type {number}
		 */
        this.speedMaxY = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.speedMinZ = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.speedMaxZ = 0;
		
		/**
		 * Left or right moving speed
         *
		 * @type {number}
		 */
		this.speedX = 0;
		
		/**
		 * Up or Down moving speed
		 *
		 * @type {number}
		 */
		this.speedY = 0;
		
		/**
		 * Direct moving speed
         *
		 * @type {number}
		 */
		this.speedZ = 0;
		
		/**
		 * Speed rotate to X or Y
		 *
		 * @type {number}
		 */
		this.rollSpeedXY = 0;
		
		/**
		 * Speed rotation around axis Z
		 *
		 * @type {number}
		 */
		this.rollSpeedZ = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.accelerationForward = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.accelerationBack = 0;
		
		/**
		 *
		 * @type {number}
		 */
		this.deceleration = 0;
    }
	
	/**
	 *
	 * @return {{sx: number, sy: number, sz: number, rxy: number, rz: number}}
	 */
	getSocketInfo() {
	    return {
		    sx: this.speedX,
		    sy: this.speedY,
		    sz: this.speedZ,
		    rxy: this.rollSpeedXY,
		    rz: this.rollSpeedZ
	    }
    }
	
	/**
	 *
	 * @param {{sx: number, sy: number, sz: number, rxy: number, rz: number}} data
	 * @return {Engine}
	 */
	setSocketInfo(data) {
	    this.speedX = data['sx'];
	    this.speedY = data['sy'];
	    this.speedZ = data['sz'];
	    this.rollSpeedZ = data['rz'];
	    this.rollSpeedXY = data['rxy'];
	    return this;
    }
	
	/**
	 *
	 * @param {string} direction
	 * @param {number} delta
	 * @returns {Engine}
	 */
	start(direction, delta) {
		let v;
        switch (direction) {
	        case Engine.DIRECTION_FORWARD:
	        	v = delta * this.accelerationForward;
	        	if (this.speedZ + v < this.speedMaxZ) {
			        this.speedZ += v;
		        } else {
	        		this.speedZ = this.speedMaxZ;
		        }
	        	break;
	        case Engine.DIRECTION_BACK:
	        	v = delta * ((this.speedZ > 0) ? this.deceleration : this.accelerationBack);
	        	if (this.speedZ - v > this.speedMinZ) {
	        		this.speedZ -= v;
		        } else {
	        		this.speedZ = this.speedMinZ;
		        }
		        break;
        }
	    return this;
    }
	
	/**
	 *
	 * @param {number} delta
	 * @returns {Engine}
	 */
	stop(delta) {
    	let v = Math.round(delta * this.deceleration);
    	if (this.speedZ > 0) {
    		if (this.speedZ - v > 0) {
			    this.speedZ -= v;
		    } else {
			    this.speedZ = 0;
		    }
    	} else if (this.speedZ < 0) {
    		if (this.speedZ + v < 0) {
			    this.speedZ += v;
		    } else {
			    this.speedZ = 0;
		    }
	    }
	    return this;
    }
	
	/**
	 *
	 * @returns {string}
	 */
    static get DIRECTION_FORWARD() {
    	return 'DIRECTION_FORWARD';
    }
	
	/**
	 *
	 * @returns {string}
	 */
	static get DIRECTION_BACK() {
		return 'DIRECTION_BACK';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static get I_M20_KEY() {
        return 'I_M20_KEY';
    }
	
	/**
     *
	 * @returns {string}
	 */
	static get II_M20_KEY() {
		return 'II_M20_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static get III_M20_KEY() {
		return 'III_M20_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static get I_M50_KEY() {
        return 'I_M50_KEY';
    }
	
	/**
     *
	 * @returns {string}
	 */
	static get II_M50_KEY() {
		return 'II_M50_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static get III_M50_KEY() {
		return 'III_M50_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static get I_M100_KEY() {
		return 'I_M100_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static get II_M100_KEY() {
		return 'II_M100_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 */
	static get III_M100_KEY() {
		return 'III_M100_KEY';
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Engine);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(2);


class ParticleClass extends __WEBPACK_IMPORTED_MODULE_0__Particle__["a" /* default */] {
    /**
     *
     * @param {string} type
     * @param {string|number} key
     */
    constructor(type, key) {
        super(type, key);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    static I_CLASS_KEY() {
        return 1;
    };

    /**
     *
     * @returns {number}
     * @constructor
     */
    static II_CLASS_KEY() {
        return 2;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    static III_CLASS_KEY() {
        return 3;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (ParticleClass);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Keyboard__ = __webpack_require__(48);


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
			forward: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](87, 'W', 'forward')
				.setDescription('Увеличение скорости. Движение вперед.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			back: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](83, 'S', 'back')
				.setDescription('Торможение или движение назад.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			left: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](65, 'A', 'left')
				.setDescription('Баковые двигатели. Движение влево.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			right: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](68, 'D', 'right')
				.setDescription('Баковые двигатели. Движение вправо.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			up: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](82, 'R', 'up')
				.setDescription('Баковые двигатели. Движение вверх.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			down: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](70, 'F', 'down')
				.setDescription('Баковые двигатели. Движение вниз.')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			rollLeft: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](81, 'Q', 'rollLeft')
				.setDescription('Вращение вокруг оси Z влево')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			rollRight: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](69, 'E', 'rollRight')
				.setDescription('Вращение вокруг оси Z вправо')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			yawLeft: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](37, 'Left', 'yawLeft')
				.setDescription('Изменение направления влево')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			yawRight: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](39, 'Right', 'yawRight')
				.setDescription('Изменение направления вправо')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			pitchUp: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](38, 'Up', 'pitchUp')
				.setDescription('Изменение направления вверх')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			pitchDown: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](40, 'Down', 'pitchDown')
				.setDescription('Изменение направления вниз')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			stop: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](32, 'Space', 'stop')
				.setDescription('Торможение')
				.setGroup(KeyboardControls.GROUP_FLY),
			
			openConsole: new __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */](66, 'B', 'openConsole')
				.setEventType(__WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */].EVENT_TYPE_UP_TOGGLE)
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
			switch (event.which) {
				case 1:
					this._callListeners(KeyboardControls.EVENT_MOUSE_DOWN_LEFT, event);
					break;
				case 2:
					this._callListeners(KeyboardControls.EVENT_MOUSE_DOWN_CENTER, event);
					break;
				case 3:
					this._callListeners(KeyboardControls.EVENT_MOUSE_DOWN_RIGHT, event);
					break;
				default:
					this._callListeners(KeyboardControls.EVENT_MOUSE_DOWN, event);
					break;
			}
		}, false);
		
		this.container.addEventListener('mouseup', (event) => {
			switch (event.width) {
				case 1:
					this._callListeners(KeyboardControls.EVENT_MOUSE_UP_LEFT, event);
					break;
				case 2:
					this._callListeners(KeyboardControls.EVENT_MOUSE_UP_CENTER, event);
					break;
				case 3:
					this._callListeners(KeyboardControls.EVENT_MOUSE_UP_RIGHT, event);
					break;
				default:
					this._callListeners(KeyboardControls.EVENT_MOUSE_UP, event);
					break;
			}
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
	 * @param {?Keyboard} keyboard
	 * @param {number} group
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
			case __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */].EVENT_TYPE_DOWN_TOGGLE:
				keyboard.toggle();
				this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
				break;
			case __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */].EVENT_TYPE_DOWN_OR_UP_CHANGE:
				keyboard.value = keyboard.valueOn;
				this._callListeners(KeyboardControls.EVENT_KEY_DOWN, event, keyboard);
				break;
			case __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */].EVENT_TYPE_DOWN_CHANGE:
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
			case __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */].EVENT_TYPE_UP_TOGGLE:
				keyboard.toggle();
				this._callListeners(KeyboardControls.EVENT_KEY_UP, event, keyboard);
				break;
			case __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */].EVENT_TYPE_DOWN_OR_UP_CHANGE:
				keyboard.value = keyboard.valueOff;
				this._callListeners(KeyboardControls.EVENT_KEY_UP, event, keyboard);
				break;
			case __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a" /* default */].EVENT_TYPE_UP_CHANGE:
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
					listener(event, keyboard, Number(group));
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
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MOUSE_DOWN_LEFT() {
		return 'EVENT_MOUSE_DOWN_LEFT';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MOUSE_UP_LEFT() {
		return 'EVENT_MOUSE_UP_LEFT';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MOUSE_DOWN_RIGHT() {
		return 'EVENT_MOUSE_DOWN_RIGHT';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MOUSE_UP_RIGHT() {
		return 'EVENT_MOUSE_UP_RIGHT';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MOUSE_DOWN_CENTER() {
		return 'EVENT_MOUSE_DOWN_CENTER';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MOUSE_UP_CENTER() {
		return 'EVENT_MOUSE_UP_CENTER';
	}
}

/* harmony default export */ __webpack_exports__["a"] = (KeyboardControls);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
		 * @type {Array.<Particle>}
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
		if (!include.hasOwnProperty(type)) {
			console.warn('Include class does not know about class "' + type + '". Try to call new ' + type + '()');
		}
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
	 * @returns {?(Object|Particle)}
	 */
	getSpecificObject(key) {
		let element = this.includes.find((el) => {
			return el.key === key;
		});
		
		return element ? element.clone() : null;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Includes);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const COLOR_DANGER = 0xFA0000;
/* unused harmony export COLOR_DANGER */

const COLOR_WARNING = 0xFAA000;
/* unused harmony export COLOR_WARNING */

const COLOR_DEFAULT = 0x0A9B9B;
/* harmony export (immutable) */ __webpack_exports__["a"] = COLOR_DEFAULT;

const COLOR_WHITE = 0xFFFFFF;
/* harmony export (immutable) */ __webpack_exports__["b"] = COLOR_WHITE;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Particle__ = __webpack_require__(2);



class ArsenalSlot extends __WEBPACK_IMPORTED_MODULE_1__Particle__["a" /* default */] {
	
	constructor(name) {
		super('ArsenalSlot', ArsenalSlot.ARSENAL_SLOT);
		
		/**
		 *
		 * @type {boolean}
		 */
		this.enabled = false;
		
		/**
		 *
		 * @type {?Arsenal|Particle}
		 */
		this.arsenal = null;
		
		/**
		 * Current position
		 *
		 * @type {Vector3}
		 */
		this.position = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3();
		
		/**
		 * Current rotation
		 *
		 * @type {Euler}
		 */
		this.rotation = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Euler();
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get ARSENAL_SLOT() {
		return 'ARSENAL_SLOT';
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ArsenalSlot);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arsenal_I_ShaderFire__ = __webpack_require__(23);






class Charge extends __WEBPACK_IMPORTED_MODULE_0__Particle__["a" /* default */] {
	
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__["a" /* default */]();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.target = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Vector3();
		
		/**
		 *
		 * @type {number}
		 */
		this.speed = 1000;
		
		/**
		 *
		 * @type {number}
		 */
		this.maxDistanceToDestroy = 3000;
		
		/**
		 *
		 * @type {Vector3}
         * @private
		 */
		this.direction = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Vector3();

        /**
         *
         * @type {Vector3}
         */
		this.startPosition = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Vector3();

        /**
		 *
         * @type {Vector3}
         */
		this.previousPosition = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Vector3();

        /**
		 *
         * @type {ShaderFire}
         */
        this.shader = new __WEBPACK_IMPORTED_MODULE_3__arsenal_I_ShaderFire__["a" /* default */]();

        /**
		 *
         * @type {boolean}
         * @private
         */
        this._enabled = true;

        /**
		 *
         * @type {Box3}
         * @private
         */
        this._box1 = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Box3();

        /**
         *
         * @type {Box3}
         * @private
         */
        this._box2 = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Box3();

        /**
		 *
         * @type {?removeCharge}
         * @private
         */
        this._listenerRemoveCharge = null;

        /**
		 *
         * @type {?listenerCollision}
         * @private
         */
        this._listenerCollision = null;
	}

    /**
     *
     * @param {Vector} v
     * @returns {Charge}
     */
	setPosition(v) {
        this.model.position.copy(v);
        this.startPosition.copy(v);
        this.previousPosition.copy(v);
        return this;
    }
	
	/**
	 *
	 * @param {Vector3} target
	 */
	prepare(target) {
		this.target.copy(target);
		return this;
	}
	
	/**
	 * @param {Charge} charge
	 * @param {string} type
	 * @callback removeCharge
	 */

    /**
	 *
     * @param {removeCharge} listener
     * @returns {Charge}
     */
	setListenerRemoveCharge(listener) {
        this._listenerRemoveCharge = listener;
		return this;
	}
	
	/**
	 *
	 * @param {number} delta
	 * @param {Array.<Particle>} particles
	 * @returns {void}
	 */
	update(delta, particles) {
		if (this._enabled) {
            this.direction.copy(this.target);
            this.direction = this.direction.sub(this.model.position).normalize();
            this.previousPosition.copy(this.model.position);
            this.model.position.addScaledVector(this.direction, this.speed * delta);

            if (this._listenerCollision) {
                this.checkCollision(particles);
            }

            if (this._listenerRemoveCharge) {
                if (this.startPosition.distanceTo(this.model.position) >= this.maxDistanceToDestroy) {
                    this._listenerRemoveCharge(this, Charge.REMOVE_TYPE_MAX_DISTANCE);
                }
            }
        } else {
            this.shader.update();
		}
	}

    /**
	 *
     * @param {number} value - This is value from 0 to 1. If value is 0 then model is fully transparent
     * @returns {Charge}
     */
	opacity(value) {
        this.model.material.transparent = true;
        this.model.material.opacity = value;
        return this;
	}

    /**
	 * Make model fully transparent or show back if value is false
	 *
     * @param {boolean} [value]
     * @returns {Charge}
     */
    transparent(value = true) {
		this.opacity(value ? 0 : 1);
		return this;
	}

    /**
     *
     * @param {Scene} scene
	 * @param {Vector3} [position]
     * @returns {Charge}
     */
    setExplosionToScene(scene, position = null) {
		if (this._enabled) {
            this._enabled = false;
            this.shader.setTo(scene, (position ? position : this.model.position));
        }
        return this;
    }

    /**
	 *
     * @param {Scene} scene
     * @returns {Charge}
     */
    removeExplosionFromScene(scene) {
        this.shader.removeFrom(scene);
        return this;
	}

    /**
     *
     * @param {Scene} scene
     * @returns {Charge}
     */
    addModelToScene(scene) {
        scene.add(this.model);
        return this;
    }

    /**
	 *
     * @param {Scene} scene
     * @returns {Charge}
     */
    removeModelFromScene(scene) {
        scene.remove(this.model);
        return this;
	}

    /**
	 * @param {Charge} charge
	 * @param {Particle} particle
	 * @callback listenerCollision
     */

    /**
     *
     * @param {listenerCollision} listener
     * @returns {Charge}
     */
    setListenerCollision(listener) {
        this._listenerCollision = listener;
        return this;
    }

    /**
	 *
     * @param {Array.<Particle>} particles
     * @returns {?Particle}
     */
    checkCollision(particles) {
        if (this._enabled) {
            let box1 = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Box3();
            box1.setFromObject(this.model);

            for (let particle of particles) {
                let box2 = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Box3();
                box2.setFromObject(particle.model);

                let intersects = box1.intersectsBox(box2);
                if (intersects) {
                    this._listenerCollision(this, particle);
                    if (this._listenerRemoveCharge) {
                        setTimeout(() => {
                            this._listenerRemoveCharge(this, Charge.REMOVE_TYPE_COLLISION);
                        }, this.shader.ageTime * 1000);
                    }
                    return particle;
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
    static get REMOVE_TYPE_MAX_DISTANCE() {
        return 'max-distance';
    }

    /**
	 *
     * @returns {string}
     * @constructor
     */
	static get REMOVE_TYPE_COLLISION() {
    	return 'collision';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get I_C20_KEY() {
		return 'I_C20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get II_C20_KEY() {
		return 'II_C20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get III_C20_KEY() {
		return 'III_C20_KEY';
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Charge);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HelperPoint__ = __webpack_require__(59);



let helper = null;

class HelperPoints {
	/**
	 *
	 * @param {(Scene|Mesh|Group)} obj
	 */
	constructor(obj) {
		/**
		 *
		 * @type {Array.<{name: (string|number), points: Array.<HelperPoint>}>}
		 * @private
		 */
		this._groups = [];
		
		/**
		 *
		 * @type {HelperPoints}
		 */
		helper = this;
	}
	
	/**
	 *
	 * @returns {HelperPoints}
	 */
	static get() {
		return helper ? helper : new HelperPoints();
	}
	
	/**
	 *
	 * @param {Object3D} object - the object there need set point
	 * @param {(string|number)} [group] - name of group points
	 * @returns {HelperPoint}
	 */
	setPointTo(object, group = 1, color = 0xFFFF00) {
		let point = this.getPoint();
		point.setColor(color);
		object.add(point.model);
		this._addToGroup(group, point);
		return point;
	}
	
	/**
	 *
	 * @returns {HelperPoint}
	 */
	getPoint() {
		let point = new __WEBPACK_IMPORTED_MODULE_1__HelperPoint__["a" /* default */]();
		point.init();
		return point;
	}
	
	/**
	 *
	 * @param {Object3D} obj - the object from there need delete point
	 * @param {(string|number)} groupName - name of group points
	 * @returns {HelperPoints}
	 */
	remove(obj, groupName) {
		for (let i = 0; i < this._groups.length; i++) {
			let group = this._groups[i];
			if (group['name'] === groupName) {
				for (let point of group['points']) {
					obj.remove(point.model);
				}
				this._groups.splice(i, 1);
				break;
			}
		}
		return this;
	}
	
	/**
	 *
	 * @param {(string|number)} groupName
	 * @param {HelperPoint} point
	 * @private
	 */
	_addToGroup(groupName, point) {
		let group = this._groups.find((item) => {
			return item['name'] === groupName;
		});
		if (group) {
			group['points'].push(point);
		} else {
			this._groups.push({
				name: groupName,
				points: [point]
			});
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (HelperPoints);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(3)('socket.io-parser');
var Emitter = __webpack_require__(5);
var hasBin = __webpack_require__(33);
var binary = __webpack_require__(78);
var isBuf = __webpack_require__(34);

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  if ((obj.type === exports.EVENT || obj.type === exports.ACK) && hasBin(obj.data)) {
    obj.type = obj.type === exports.EVENT ? exports.BINARY_EVENT : exports.BINARY_ACK;
  }

  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    str += JSON.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    p = tryParse(p, str.substr(i));
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(p, str) {
  try {
    p.data = JSON.parse(str);
  } catch(e){
    return error();
  }
  return p; 
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error() {
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(82);

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var parser = __webpack_require__(6);
var Emitter = __webpack_require__(5);

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particles_engine_Engine__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__ = __webpack_require__(12);




class FlyControls {
	
	/**
	 * @param {(Camera|Mesh|Group)} object
	 * @param {Player} player
	 */
	constructor(object, player) {
		
		/**
		 * @type {Camera}
		 */
		this.object = object;
		
		/**
		 *
		 * @type {Player}
		 */
		this.player = player;
		
		if (this.player.container) this.player.container.setAttribute('tabindex', '- 1');
		
		/**
		 *
		 * @type {{forward: Keyboard, back: Keyboard, left: Keyboard, right: Keyboard, up: Keyboard, down: Keyboard, rollLeft: Keyboard, rollRight: Keyboard, yawLeft: Keyboard, yawRight: Keyboard, pitchUp: Keyboard, pitchDown: Keyboard, stop: Keyboard, openConsole: Keyboard}}
		 */
		this.keyboards = player.keyboards.fly;
		
		// /**
		//  *
		//  * @type {boolean}
		//  */
		// this.autoForward = false;
		
		/**
		 *
		 * @type {Quaternion}
		 */
		this.tmpQuaternion = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Quaternion();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.moveVector = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 0, 0);
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.rotationVector = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 0, 0);
		
		this.updateMovementVector();
		this.updateRotationVector();
	}
	
	/**
	 * Add events to page. Use this method only for current user
	 *
	 * @return {FlyControls}
	 */
	initEvents() {
		this.player.keyboards.addEventListener(
			__WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__["a" /* default */].EVENT_MOUSE_MOVE,
			__WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY,
			(event) => {
				this.mouseMove(event);
			}
		);
		
		this.player.keyboards.addEventListener(
			__WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__["a" /* default */].EVENT_KEY_UP,
			__WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY,
			() => {
				this.updateMovementVector();
				this.updateRotationVector();
			}
		);
		
		this.player.keyboards.addEventListener(
			__WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__["a" /* default */].EVENT_KEY_DOWN,
			__WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY,
			() => {
				this.updateMovementVector();
				this.updateRotationVector();
			}
		);
		return this;
	}
	
	/**
	 *
	 * @param {MouseEvent} event
	 * @returns {void}
	 */
	mouseMove(event) {
		if (!this.player.isEnabled) {
			return;
		}
		
		let container = this.getContainerDimensions();
		let halfWidth = container.size[0] / 2;
		let halfHeight = container.size[1] / 2;
		this.keyboards.yawLeft.value = - ((event.pageX - container.offset[0]) - halfWidth) / halfWidth;
		this.keyboards.pitchDown.value = ((event.pageY - container.offset[1]) - halfHeight) / halfHeight;
		this.updateRotationVector();
	}
	
	/**
	 * Call animation. Use this method only for current user
	 *
	 * @param {number} delta
	 * @returns {void}
	 */
	updateUserControl(delta) {
		if (!this.player.isEnabled) {
			return;
		}
		
		if (this.keyboards.forward.value === this.keyboards.forward.valueOn) {
			this.player.ship.engine.start(__WEBPACK_IMPORTED_MODULE_1__particles_engine_Engine__["a" /* default */].DIRECTION_FORWARD, delta);
		} else if (this.keyboards.back.value === this.keyboards.back.valueOn) {
			this.player.ship.engine.start(__WEBPACK_IMPORTED_MODULE_1__particles_engine_Engine__["a" /* default */].DIRECTION_BACK, delta);
		} else if (this.keyboards.stop.value === this.keyboards.stop.valueOn) {
			this.player.ship.engine.stop(delta);
		}
		
		this.updatePlayerControl(delta);
	}
	
	/**
	 * Call animation. Use this method for any players except current user
	 *
	 * @param {number} delta
	 * @returns {void}
	 */
	updatePlayerControl(delta) {
		let moveMultX = delta * this.player.ship.engine.speedX;
		let moveMultY = delta * this.player.ship.engine.speedY;
		let moveMultZ = delta * this.player.ship.engine.speedZ;
		let rotMultXY = delta * this.player.ship.engine.rollSpeedXY;
		let rotMultZ = delta * this.player.ship.engine.rollSpeedZ;
		
		this.object.translateX(this.moveVector.x * moveMultX);
		this.object.translateY(this.moveVector.y * moveMultY);
		this.object.translateZ(this.moveVector.z * moveMultZ);
		
		this.tmpQuaternion.set(
			this.rotationVector.x * rotMultXY,
			this.rotationVector.y * rotMultXY,
			this.rotationVector.z * rotMultZ,
			1
		).normalize();
		this.object.quaternion.multiply(this.tmpQuaternion);
		
		// expose the rotation vector for convenience
		this.object.rotation.setFromQuaternion(this.object.quaternion, this.object.rotation.order);
	}
	
	/**
	 *
	 * @returns {FlyControls}
	 */
	updateMovementVector() {
		if (!this.player.isEnabled) {
			return this;
		}
		// let forward = (this.keyboards.forward.value || (this.autoForward && ! this.keyboards.back.value)) ? 1 : 0;
		this.moveVector.x = (- this.keyboards.left.value + this.keyboards.right.value);
		this.moveVector.y = (- this.keyboards.down.value + this.keyboards.up.value);
		// this.moveVector.z = (- forward + this.keyboards.back.value);
		this.moveVector.z = -1;
		return this;
	}
	
	/**
	 *
	 * @returns {FlyControls}
	 */
	updateRotationVector() {
		if (!this.player.isEnabled) {
			return this;
		}
		this.rotationVector.x = (- this.keyboards.pitchDown.value + this.keyboards.pitchUp.value);
		this.rotationVector.y = (- this.keyboards.yawRight.value  + this.keyboards.yawLeft.value);
		this.rotationVector.z = (- this.keyboards.rollRight.value + this.keyboards.rollLeft.value);
		return this;
	}
	
	/**
	 *
	 * @returns {{size: Array, offset: Array}}
	 */
	getContainerDimensions() {
		if (this.player.container !== document) {
			return {
				size: [this.player.container.offsetWidth, this.player.container.offsetHeight],
				offset: [this.player.container.offsetLeft, this.player.container.offsetTop]
			};
		} else {
			return {
				size: [window.innerWidth, window.innerHeight],
				offset: [0, 0]
			};
		}
	}
	
	/**
	 *
	 * @param {{rv: {x: *, y: *, z: *}, mv: {x: *, y: *, z: *}}} data
	 * @returns {FlyControls}
	 */
	setSocketInfo(data) {
		this.rotationVector.x = data['rv']['x'];
		this.rotationVector.y = data['rv']['y'];
		this.rotationVector.z = data['rv']['z'];
		this.moveVector.x = data['mv']['x'];
		this.moveVector.y = data['mv']['y'];
		this.moveVector.z = data['mv']['z'];
		
		// console.log('Other player: ', this.rotationVector, this.moveVector);
		
		return this;
	}
	
	/**
	 *
	 * @returns {{rv: {x: *, y: *, z: *}, mv: {x: *, y: *, z: *}}}
	 */
	getSocketInfo() {
		return {
			rv: {
				x: this.rotationVector.x,
				y: this.rotationVector.y,
				z: this.rotationVector.z
			},
			mv: {
				x: this.moveVector.x,
				y: this.moveVector.y,
				z: this.moveVector.z
			}
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (FlyControls);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/* harmony default export */ __webpack_exports__["a"] = (Listener);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_shader_particle_engine__);



class ShaderFire {
    constructor() {

        this.ageTime = 0.5;

        new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].TextureLoader();

        this.group = new __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.Group({
            texture: {
                value: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].TextureLoader().load('./textures/sprites/sprite-explosion2.png'),
                frames: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector2(5, 5),
                loop: 1
            },
            depthTest: true,
            depthWrite: false,
            blending: __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].AdditiveBlending,
            scale: 600,
            maxParticleCount: 200,
        });

        this.shockwaveGroup = new __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.Group({
            texture: {
                value: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].TextureLoader().load('./textures/sprites/smokeparticle.png'),
            },
            depthTest: false,
            depthWrite: true,
            blending: __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].NormalBlending,
            maxParticleCount: 200,
        });

        this.shockwave = new __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.Emitter({
            particleCount: 200,
            type: __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.distributions.DISC,
            position: {
                radius: 5,
                spread: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(5)
            },
            maxAge: {
                value: 2,
                spread: 0
            },
            // duration: 1,
            activeMultiplier: 2000,
            velocity: {
                value: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(40)
            },
            rotation: {
                axis: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(1, 0, 0),
                angle: Math.PI * 0.5,
                static: true
            },
            size: {
                value: 2
            },
            color: {
                value: [
                    new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(0.4, 0.2, 0.1),
                    new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(0.2, 0.2, 0.2)
                ]
            },
            opacity: {
                value: [0.5, 0.2, 0]
            }
        });

        this.debris = new __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.Emitter({
            particleCount: 100,
            type: __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.distributions.SPHERE,
            position: {
                radius: 0.1,
            },
            maxAge: {
                value: 2
            },
            // duration: 2,
            activeMultiplier: 40,
            velocity: {
                value: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(100)
            },
            acceleration: {
                value: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, -20, 0),
                distribution: __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.distributions.BOX
            },
            size: {
                value: 2
            },
            drag: {
                value: 1
            },
            color: {
                value: [
                    new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(1, 1, 1),
                    new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(1, 1, 0),
                    new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(1, 0, 0),
                    new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(0.4, 0.2, 0.1)
                ]
            },
            opacity: {
                value: [0.5, 0]
            }
        });

        this.fireball = new __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.Emitter({
            particleCount: 10,
            duration: 0.5,
            type: __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.distributions.SPHERE,
            position: {
                radius: 1
            },
            maxAge: {
                value: 0.5
            },
            activeMultiplier: 10,
            velocity: {
                value: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(30)
            },
            size: {
                value: [20, 500]
            },
            color: {
                value: [
                    new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(0.5, 0.1, 0.05),
                    new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(0.2, 0.2, 0.2)
                ]
            },
            opacity: {
                value: [0.5, 0.35, 0.2, 0.1, 0]
            }
        });

        this.mist = new __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.Emitter({
            particleCount: 50,
            position: {
                spread: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(10, 10, 10),
                distribution: __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.distributions.SPHERE
            },
            maxAge: {
                value: 4
            },
            // duration: 1,
            activeMultiplier: 2000,
            velocity: {
                value: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(8, 3, 10),
                distribution: __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.distributions.SPHERE
            },
            size: {
                value: 400
            },
            color: {
                value: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(0.2, 0.2, 0.2)
            },
            opacity: {
                value: [0, 0.6, 0]
            }
        });

        this.flash = new __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.Emitter({
            particleCount: 20,
            duration: 0.5,
            position: {
                spread: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(5, 5, 5)
            },
            velocity: {
                spread: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(20),
                distribution: __WEBPACK_IMPORTED_MODULE_1_shader_particle_engine___default.a.distributions.SPHERE
            },
            size: {
                value: [2, 20, 20, 20]
            },
            maxAge: {
                value: 0.5
            },
            activeMultiplier: 10,
            opacity: {
                value: [0.5, 0.25, 0, 0]
            }
        });
    }

    /**
     *
     * @param {Scene|Object3D} obj
     * @param {Vector3} position
     * @returns {ShaderFire}
     */
    setTo(obj, position) {
        this.group
            .addEmitter(this.fireball)
            .addEmitter(this.flash);

        // this.shockwaveGroup
        //     .addEmitter(this.debris)
        //     .addEmitter(this.mist);

        // this.group.mesh.position.z = -2000;
        // this.shockwaveGroup.mesh.position.z = -100;

        if (position) {
            this.group.mesh.position.copy(position);
            // this.shockwaveGroup.mesh.position.copy(position);
        }


        // obj.add(this.shockwaveGroup.mesh);
        obj.add(this.group.mesh);
        return this;
    }

    /**
     *
     * @param {Scene|Object3D} object
     * @returns {ShaderFire}
     */
    removeFrom(object) {
        object.remove(this.group.mesh);
        return this;
    }

    update() {
        this.group.tick();
        // this.shockwaveGroup.tick();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (ShaderFire);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Includes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__I_ShipExplorerI__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__II_ShipExplorerII__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__III_ShipExplorerIII__ = __webpack_require__(62);





class ShipIncludes extends __WEBPACK_IMPORTED_MODULE_0__Includes__["a" /* default */] {
	constructor() {
		super('ShipIncludes');
		
		/**
		 *
		 * @type {Array.<Ship>}
		 */
		this.includes = [
			new __WEBPACK_IMPORTED_MODULE_1__I_ShipExplorerI__["a" /* default */](),
			new __WEBPACK_IMPORTED_MODULE_2__II_ShipExplorerII__["a" /* default */](),
			new __WEBPACK_IMPORTED_MODULE_3__III_ShipExplorerIII__["a" /* default */]()
		];
	}
	
	/**
	 *
	 * @returns {ShipIncludes}
	 */
	static get() {
		return super.get('ShipIncludes');
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ShipIncludes);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);

const FONT = 'fonts/Audiowide/Audiowide_Regular.json';

/**
 *
 * @type {FontLoader}
 */
let fontLoader = null;

class FontLoader {
	constructor() {
		/**
		 *
		 * @type {?Font}
		 * @private
		 */
		this._font = null;
		
		if (fontLoader) {
			throw new Error('This class has already called. Try use FontLoader.font');
		}
		
		fontLoader = this;
	}
	
	/**
	 *
	 * @returns {?Font}
	 */
	static get font() {
		return fontLoader ? fontLoader._font : null;
	}
	
	/**
	 * @param {Font} font
	 * @callback fontLoadListener
	 */
	
	/**
	 *
	 * @param {fontLoadListener} listener
	 */
	load(listener) {
		if (this._font) {
			listener(this._font);
			return;
		}
		let loader = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].FontLoader();
		loader.load(FONT, (font) => {
			this._font = font;
			listener(this._font);
		});
	}
}

/* harmony default export */ __webpack_exports__["a"] = (FontLoader);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(4);



class EngineIM20 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["a" /* default */] {
    constructor() {
        super('EngineIM20', __WEBPACK_IMPORTED_MODULE_0__Engine__["a" /* default */].I_M20_KEY);
	
	    /**
         *
	     * @type {ParticleClassI}
	     */
	    this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__["a" /* default */]();
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedX = 15;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMaxX = 5;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedY = 15;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMaxY = 5;
	    
	    /**
	     *
	     * @type {number}
	     */
	    this.speedZ = 0;
	    
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMinZ = - 10;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.speedMaxZ = 150;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.rollSpeedXY = Math.PI / 15;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.rollSpeedZ = Math.PI / 5;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.accelerationForward = 25;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.accelerationBack = 15;
	
	    /**
	     *
	     * @type {number}
	     */
	    this.deceleration = 80;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (EngineIM20);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Includes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__I_ArsenalIA20__ = __webpack_require__(57);



class ArsenalIncludes extends __WEBPACK_IMPORTED_MODULE_0__Includes__["a" /* default */] {
	constructor() {
		super('ArsenalIncludes');
		
		/**
		 *
		 * @type {Array.<Arsenal>}
		 */
		this.includes = [
			new __WEBPACK_IMPORTED_MODULE_1__I_ArsenalIA20__["a" /* default */]()
		];
	}
	
	/**
	 *
	 * @returns {ArsenalIncludes}
	 */
	static get() {
		return super.get('ArsenalIncludes');
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ArsenalIncludes);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charge_Charge__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charge_ChargeIncludes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_ParticleClassI__ = __webpack_require__(4);





class Arsenal extends __WEBPACK_IMPORTED_MODULE_0__Particle__["a" /* default */] {
	
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
		
		/**
		 * If value is true then charges are endless
		 *
		 * @type {boolean}
		 */
		this.endless = true;
		
		/**
		 *
		 * @type {Charge}
		 */
		this.charge = __WEBPACK_IMPORTED_MODULE_2__charge_ChargeIncludes__["a" /* default */].get().getSpecificObject(__WEBPACK_IMPORTED_MODULE_1__charge_Charge__["a" /* default */].I_C20_KEY);
		
		/**
		 *
		 * @type {Array.<Charge>}
		 */
		this.charges = [];
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_3__classes_ParticleClassI__["a" /* default */]();
	}
	
	/**
	 *
	 * @returns {(Charge|Particle)}
	 */
	getCharge() {
		return this.charge.clone();
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get EVENT_MODEL_UPDATE() {
		return 'EVENT_MODEL_UPDATE'
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get I_A20_KEY() {
		return 'I_A20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get II_A20_KEY() {
		return 'II_A20_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get III_A20_KEY() {
		return 'III_A20_KEY';
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Arsenal);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Includes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__I_ChargeIA20__ = __webpack_require__(58);



class ChargeIncludes extends __WEBPACK_IMPORTED_MODULE_0__Includes__["a" /* default */] {
	constructor() {
		super('ChargeIncludes');
		
		/**
		 *
		 * @type {Array.<Charge>}
		 */
		this.includes = [
			new __WEBPACK_IMPORTED_MODULE_1__I_ChargeIA20__["a" /* default */]()
		];
	}
	
	/**
	 *
	 * @returns {ChargeIncludes}
	 */
	static get() {
		return super.get('ChargeIncludes');
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ChargeIncludes);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParticleClass__ = __webpack_require__(11);


class ParticleClassII extends __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["a" /* default */] {
    constructor() {
	    super('ParticleClassII', __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["a" /* default */].II_CLASS_KEY);
	
	    /**
         *
	     * @type {string}
	     */
	    this.name = 'II';
    }
}

/* harmony default export */ __webpack_exports__["a"] = (ParticleClassII);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParticleClass__ = __webpack_require__(11);


class ParticleClassIII extends __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["a" /* default */] {
    constructor() {
	    super('ParticleClassIII', __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["a" /* default */].III_CLASS_KEY);
	    
	    this.name = 'III';
    }
}

/* harmony default export */ __webpack_exports__["a"] = (ParticleClassIII);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(77);

var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof global.Buffer === 'function' && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
     (typeof global.ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
     (withNativeBlob && obj instanceof Blob) ||
     (withNativeFile && obj instanceof File)
    ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var eio = __webpack_require__(80);
var Socket = __webpack_require__(40);
var Emitter = __webpack_require__(5);
var parser = __webpack_require__(18);
var on = __webpack_require__(41);
var bind = __webpack_require__(42);
var debug = __webpack_require__(3)('socket.io-client:manager');
var indexOf = __webpack_require__(39);
var Backoff = __webpack_require__(95);

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(19);
var XHR = __webpack_require__(83);
var JSONP = __webpack_require__(91);
var websocket = __webpack_require__(92);

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(20);
var parseqs = __webpack_require__(9);
var parser = __webpack_require__(6);
var inherit = __webpack_require__(10);
var yeast = __webpack_require__(38);
var debug = __webpack_require__(3)('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(19);
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),
/* 39 */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parser = __webpack_require__(18);
var Emitter = __webpack_require__(5);
var toArray = __webpack_require__(94);
var on = __webpack_require__(41);
var bind = __webpack_require__(42);
var debug = __webpack_require__(3)('socket.io-client:socket');
var parseqs = __webpack_require__(9);

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = { type: parser.EVENT, data: args };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  delete this.flags;

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  if (packet.nsp !== this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags = this.flags || {};
  this.flags.compress = compress;
  return this;
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_controls_SceneControls__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_loader_PreLoader__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_config__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);







new __WEBPACK_IMPORTED_MODULE_1__js_loader_PreLoader__["a" /* default */]().load(() => {
	/**
	 * @type {Socket}
	 */
	const socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default()(__WEBPACK_IMPORTED_MODULE_2__socket_config__["a" /* socketConfig */].clientConnect());
	
	socket.on('connect', () => {
		socket.on('entry', (playerId) => {
			
			const controls = new __WEBPACK_IMPORTED_MODULE_0__js_controls_SceneControls__["a" /* default */](playerId, 'main-container-canvas');

			// console.log('SOCKET: Current Player is', controls.player, '=======================22=============================');
			
			controls
				.init()
				.start()
				.addPlayerListener(() => {
					// Send info about current form to other players
					socket.emit('send-updated-form-info', {
						id: playerId,
						p: controls.player.position,
						r: {
							x: controls.player.rotation.x,
							y: controls.player.rotation.y,
							z: controls.player.rotation.z,
							o: controls.player.rotation.order
						},
						e: controls.player.ship.engine.getSocketInfo(),
						fly: controls.flyControls.getSocketInfo(),
						sk: controls.player.shipKey,
					});
				})
				.shotListener((target, chargeIds) => {
                    // Send shot info to other players
                    socket.emit('send-shot-target', {
                        id: playerId,
                        t: target,
                        c: chargeIds
                    });
				});
			
			// Set default parameters of current form and send it info to other players
			socket.emit('set-form-info', {
				p: controls.player.position,
				r: {
					x: controls.player.rotation.x,
					y: controls.player.rotation.y,
					z: controls.player.rotation.z,
					o: controls.player.rotation.order
				},
				e: controls.player.ship.engine.getSocketInfo(),
				fly: controls.flyControls.getSocketInfo(),
				sk: controls.player.shipKey,
			});

			// Set target shot from specific model
            socket.on('update-shot-target', (data) => {
                let player = controls.getPlayer(data['id']);
                player.shot(data['t'], data['c']);
            });

			socket.on('update-form-info', (data) => {
				let player = controls.getPlayer(data['id']);
				if (player) {
					player.setSocketInfo(data);
					player.ship.engine.setSocketInfo(data['e']);
					player.flyControls.setSocketInfo(data['fly']);
				}
			});
			
			// Add new players to scene
			socket.on('add-new-form', (playerInfo) => {
				controls.addPlayer(playerInfo);
				// send information about current form
				socket.emit('send-form-info', {
					to: playerInfo['id'], // send to specific form
					id: playerId,
					p: controls.player.position,
					r: {
						x: controls.player.rotation.x,
						y: controls.player.rotation.y,
						z: controls.player.rotation.z,
						o: controls.player.rotation.order
					},
					e: controls.player.ship.engine.getSocketInfo(),
					fly: controls.flyControls.getSocketInfo(),
					sk: controls.player.shipKey,
				});
			});
			
			socket.on('add-old-form', (playerInfo) => {
				// Add form to scene that has already exist in other browsers
				controls.addPlayer(playerInfo);
			});
			
			socket.on('remove-specific-form', (id) => {
				controls.destroyPlayer(id);
			});
			
			socket.on('disconnect', () => {
				alert('Lost connection to server');
				controls.player.enable(false);
			});
			
			// window.addEventListener('beforeunload', () => {
			// 	// socket.emit('remove-form', playerId);
			// });
		});
	});
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SceneControlsPlugin__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FlyControls__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SkyeBoxControls__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_Player__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TargetControls__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__particles_ships_Ship__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_HelperPoints__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config_asteroids__ = __webpack_require__(67);















const FPS = 1000 / 30;

class SceneControls extends __WEBPACK_IMPORTED_MODULE_1__SceneControlsPlugin__["a" /* default */] {
	/**
	 *
	 * @param {string|number} playerId - Socket ID
	 * @param {string} [containerID]
	 */
	constructor(playerId, containerID) {
		super();
		/**
		 *
		 * @type {?Element}
		 */
		this.container = document.getElementById(containerID);
		
		if (!this.container) {
			throw new Error('Cannot find container with ID: ' + containerID);
		}
		
		/**
		 *
		 * @type {Clock}
		 * @private
		 */
		this._clockRender = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Clock();
		
		/**
		 *
		 * @type {Clock}
		 * @private
		 */
		this._clockAnimate = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Clock();
		
		/**
		 *
		 * @type {SkyeBoxControls}
		 */
		this.skyBoxControls = new __WEBPACK_IMPORTED_MODULE_3__SkyeBoxControls__["a" /* default */](this.scene);
		
		/**
		 *
		 * @type {Player}
		 */
		this.player = new __WEBPACK_IMPORTED_MODULE_4__player_Player__["a" /* default */](this, true, playerId);
		this.camera.position.copy(this.player.position);
		this.camera.rotation.copy(this.player.rotation);
		this.camera.lookAt(this.player.lookAt);
		
		/**
		 *
		 * @type {?FlyControls}
		 */
		this.flyControls = new __WEBPACK_IMPORTED_MODULE_2__FlyControls__["a" /* default */](this.camera, this.player);
		this.flyControls.initEvents();
		
		/**
		 *
		 * @type {Object.<Player>}
		 * @private
		 */
		this._players = {};
		
		/**
		 *
		 * @type {Array.<Particle>}
		 * @private
		 */
		this._objects = [];
		
		/**
		 *
		 * @type {Array.<updatePlayerListener>}
		 * @private
		 */
		this._updateListener = [];

		/**
		 *
		 * @type {Array.<shotPlayerListener>}
		 * @private
		 */
		this._shotListener = [];
		
		/**
		 *
		 * @type {TargetControls}
		 */
		this.targetControls = new __WEBPACK_IMPORTED_MODULE_6__TargetControls__["a" /* default */](this);
		
		// this.point = HelperPoints.get()
		// 	.setPointTo(this.scene)
		// 	.setPosition(
		// 		new THREE.Vector3(
		// 			this.camera.position.x,
		// 			this.camera.position.y,
		// 			this.camera.position.z - 50
		// 		)
		// 	);
        // this.point = HelperPoints.get().setPointTo(this.scene);





        this._stats = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* Stats */]();
        this._stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        // this._stats.showPanel(1);
        // this._stats.showPanel(2);
        document.body.appendChild(this._stats.dom);

	}
	
	/**
	 * @callback updatePlayerListener
	 */
	
	/**
	 *
	 * @param {updatePlayerListener} listener
	 * @return {SceneControls}
	 */
	addPlayerListener(listener) {
		this._updateListener.push(listener);
		return this;
	}

    /**
	 * @param {Vector3} target
	 * @param {Array} chargeIds
     * @callback shotPlayerListener
     */

    /**
     *
     * @param {shotPlayerListener} listener
     * @return {SceneControls}
     */
    shotListener(listener) {
        this._shotListener.push(listener);
        return this;
	}

	/**
	 *
	 * @param {PlayerInfo} playerInfo
	 * @return {SceneControls}
	 */
	addPlayer(playerInfo) {
		
		let id = playerInfo['id'];
		let player = new __WEBPACK_IMPORTED_MODULE_4__player_Player__["a" /* default */](this, false, id);
		
		// 1. set ship inf
		player.setSocketInfo(playerInfo);
		// 2. prepare model
		player.prepareModel();
		// 3. update engine
		player.ship.engine.setSocketInfo(playerInfo['e']);
		// 4. update fly control
		player.flyControls.setSocketInfo(playerInfo['fly']);
		player.enable(true, false);
		
		let model = player.getModel();
		model.position.copy(player.position);
		model.rotation.copy(player.rotation);
		
		this.scene.add(model);
		this._players[id] = player;
        this.addObject(player.ship);
		return this;
	}
	
	/**
	 *
	 * @param {string|number} id
	 * @returns {?Player}
	 */
	getPlayer(id) {
		return this._players.hasOwnProperty(id) ? this._players[id] : null;
	}
	
	/**
	 * Remove player from scene, and from properties (_players, _objects) by player ID
	 *
	 * @param {string|number} id - This is player ID
	 * @return {SceneControls}
	 */
	destroyPlayer(id) {
		if (this._players.hasOwnProperty(id)) {
			let player = this._players[id];
            this._removeObjectById(player.ship.id);
			delete this._players[id];
		}
		return this;
	}

    /**
	 * Remove player from scene, and from properties (_players, _objects) by ship ID's
	 *
     * @param {string|number} shipId - This is ID of ship
     * @returns {boolean}
     */
    destroyPlayerByShip(shipId) {
		for (let playerId in this._players) {
			if (this._players.hasOwnProperty(playerId)) {
				let player = this._players[playerId];
				if (player.ship.id === shipId) {
					this.destroyPlayer(playerId);
					return true;
				}
			}
		}
		return false;
	}

    /**
     *
     * @returns {Array.<Particle>}
     */
    getObjects() {
        return this._objects;
    }

    /**
     *
     * @param {Particle} value
     * @returns {SceneControls}
     */
    addObject(value) {
        this._objects.push(value);
        return this;
    }

    /**
	 * Remove object from scene. It can be any object from properties (_players.<Player.ship>, _objects.<Particle>)
     *
     * @param {Particle} value - This is particle
     * @returns {boolean}
     */
    destroyObject(value) {
        if (value instanceof __WEBPACK_IMPORTED_MODULE_8__particles_ships_Ship__["a" /* default */]) {
            return this.destroyPlayerByShip(value.id);
        }

        return this._removeObjectById(value.id);
    }

    /**
	 *
     * @param {string|number} id
     * @returns {boolean}
     * @private
     */
    _removeObjectById(id) {
        for (let i = 0; i < this._objects.length; i++) {
            let particle = this._objects[i];
            if (particle.id === id) {
                this._objects.splice(i, 1);
                this.scene.remove(particle.model);
                return true;
            }
        }
        return false;
	}

    /**
	 *
     * @returns {SceneControls}
     */
	hideTarget() {
        this.targetControls.setSelected(null);
        this.player.ship.aim.signatureRightTop.hide();
        return this;
	}

    /**
	 *
     * @param {Particle} particle
     * @returns {boolean}
     */
	isTarget(particle) {
        let targetSelected = this.targetControls.getSelectedParticle();
        return targetSelected && targetSelected.id === particle.id;
	}
	
	/**
	 *
	 * @returns {SceneControls}
	 */
	start() {

		this.player.prepareModel();
		this.camera.add(this.player.getAim());
		this.camera.add(this.player.getModel());
		this.scene.add(this.camera);
		
		this.player.keyboards.addEventListener(
			__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].EVENT_KEY_UP,
			__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_PK,
			(event, keyboard) => {
				if (keyboard.key === 'openConsole') {
					if (keyboard.value === keyboard.valueOn) {
						// Enable fly actions
						this.player.cursor(true);
						this.player.keyboards.enableGroup(__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY);
						// Hide console of ship
						// ...
					} else {
						// Disable fly actions
						this.player.cursor(false);
						this.player.keyboards.disableGroup(__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY);
						// Open console of ship
						// ...
					}
				}
			}
		);
		
		this.player.keyboards.addEventListener(
			__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].EVENT_MOUSE_DOWN_CENTER,
			__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_TARGET,
			() => {
				let openConsole = this.player.keyboards.fly.openConsole;
				if (openConsole.value === openConsole.valueOn) {
					this.hideTarget();
					// this.targetControls.setSelected(null);
					// this.player.ship.aim.signatureRightTop.hide();
				}
			}
		);
		
		this.player.keyboards.addEventListener(
			__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].EVENT_MOUSE_DOWN_LEFT,
			__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY,
			() => {
				let target = this.getNextPosition(this.camera, 250000);
				let chargeIds = this.player.shot(target);
                for (let shotPlayerListener of this._shotListener) {
                    shotPlayerListener(target, chargeIds);
                }
			}
		);
		
		this.player.keyboards.addEventListener(
			__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].EVENT_MOUSE_WHEEL,
			__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_TARGET,
			(event) => {
				let openConsole = this.player.keyboards.fly.openConsole;
				if (event.deltaY !== 0 && openConsole.value === openConsole.valueOn) {
					this.targetControls.changeTarget(
						this.getObjects(),
						event.deltaY < 0 ? -1 : 1,
						(element) => {
							let signature = this.player.ship.aim.signatureRightTop;
							if (element) {
								let distance = Math.round(this.camera.position.distanceTo(element.model.position));
								signature.setText(distance, element.label);
								signature.show();
							} else {
								signature.hide();
							}
						},
						(element, target, box) => {
							let signature = this.player.ship.aim.signatureRightTop;
							if (element) {
								let distance = Math.round(this.camera.position.distanceTo(element.model.position));
								signature.update(distance);

								let x = box.x,
									y = box.y,
									z = box.z;

								let size = Math.max(Math.max(x, y), z) / 2;

								if (distance < size) {
									target.hide();
								} else {
									target.show();
								}
							}
						}
					);
				}
			}
		);
		
		this.player
			.addEventListener(__WEBPACK_IMPORTED_MODULE_4__player_Player__["a" /* default */].EVENT_ENABLED, () => {
				// Enable fly actions
				this.player.cursor(true);
				this.player.keyboards.enableGroup(__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY);
			})
			.addEventListener(__WEBPACK_IMPORTED_MODULE_4__player_Player__["a" /* default */].EVENT_DISABLED, () => {
				// Disable fly actions
				this.player.cursor(false);
				this.player.keyboards.disableGroup(__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY);
			})
			.enable(true, true);

		// Disable fly actions before start
		this.player.cursor(false);
		this.player.keyboards.disableGroup(__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY);
		// Open console of ship before start fly
		// ...
		
		this._animate();
		this._render();
		
		return this;
	}
	
	/**
	 *
	 * @returns {SceneControls}
	 */
	init() {

		// let temp = [];

		let s = 50;
		let cube = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].BoxGeometry(s, s, s);
		let material = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].MeshPhongMaterial({color: 0xffffff, specular: 0xffffff, shininess: 50});
		for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_10__config_asteroids__["a" /* default */].length; i ++) {
			let conf = __WEBPACK_IMPORTED_MODULE_10__config_asteroids__["a" /* default */][i];

			let mesh = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Mesh(cube, material);
            mesh.position.copy(conf['p']);
            mesh.rotation.copy(conf['r']);
			mesh.matrixAutoUpdate = false;
			mesh.updateMatrix();

			this.scene.add(mesh);
			
			let particle = new __WEBPACK_IMPORTED_MODULE_7__Particle__["a" /* default */]('Particle', 'test-cube');
            particle.id = conf['id'];
			particle.model = mesh;
			particle.label = 'Cube - ' + i;
			this.addObject(particle);

            // temp.push({
            //     p: mesh.position,
            //     r: mesh.rotation,
            //     id: particle.id
            // });
		}

		// console.log(JSON.stringify(temp));

		
		// lights
		let dirLight = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].DirectionalLight(0xffffff, 0.05);
		dirLight.position.set(0, -1, 0).normalize();
		this.scene.add(dirLight);
		dirLight.color.setHSL(0.1, 0.7, 0.5);
		
		
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setClearColor(0xf0f0f0);
		this.renderer.setSize(__WEBPACK_IMPORTED_MODULE_1__SceneControlsPlugin__["a" /* default */].width, __WEBPACK_IMPORTED_MODULE_1__SceneControlsPlugin__["a" /* default */].height);
		this.container.appendChild(this.renderer.domElement);
		this.renderer.gammaInput = false;
		this.renderer.gammaOutput = false;
		// this.renderer.sortObjects = false;
		this._onWindowResize();
		return this;
	}
	
	/**
	 * Animation elements
	 *
	 * @private
	 */
	_animate() {
		setTimeout(() => {
			this._animate();
			let delta = this._clockAnimate.getDelta();
			if (this.player.isEnabled) {
				this.player.ship.aim.signatureLeftTop.update(
					Math.round(this.player.ship.engine.speedZ)
				);

				for (let listener of this._updateListener) {
					listener();
				}
			}
		}, FPS);
	}
	
	/**
	 * Main render elements
	 *
	 * @returns {void}
	 * @private
	 */
	_render() {

        this._stats.begin();

		window.requestAnimationFrame(() => {
			this._render();
		});
		
		let delta = this._clockRender.getDelta();
		if (this.player.isEnabled) {
			this.flyControls.updateUserControl(delta);
			this.skyBoxControls.update(this.camera.position);
			this.player.position.copy(this.camera.position);
			this.player.rotation.copy(this.camera.rotation);
			this.player.update(delta);
			this.targetControls.update();

            for (let playerId in this._players) {
                if (this._players.hasOwnProperty(playerId)) {
                    this._players[playerId].update(delta);
                }
            }
		}
		
		this.renderer.render(this.scene, this.camera);

        this._stats.end();
	}
	
	/**
	 *
	 * @returns {void}
	 * @private
	 */
	_onWindowResize() {
		window.addEventListener(
			'resize',
			() => {
				this.camera.aspect = __WEBPACK_IMPORTED_MODULE_1__SceneControlsPlugin__["a" /* default */].aspect;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize(__WEBPACK_IMPORTED_MODULE_1__SceneControlsPlugin__["a" /* default */].width, __WEBPACK_IMPORTED_MODULE_1__SceneControlsPlugin__["a" /* default */].height);
			},
			false
		);
	}
	
	/**
	 *
	 * @param {Object} obj
	 */
	doDispose(obj) {
		if (obj !== null) {
			for (let i = 0; i < obj.children.length; i++) {
				this.doDispose(obj.children[i]);
			}
			if (obj.geometry) {
				obj.geometry.dispose();
				obj.geometry = undefined;
			}
			if (obj.material) {
				if (obj.material.map) {
					obj.material.map.dispose();
					obj.material.map = undefined;
				}
				obj.material.dispose();
				obj.material = undefined;
			}
		}
		obj = undefined;
	};
}

/* harmony default export */ __webpack_exports__["a"] = (SceneControls);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);


const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

class SceneControlsPlugin {
	constructor() {
		
		/**
		 *
		 * @type {WebGLRenderer}
		 */
		this.renderer = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].WebGLRenderer({
			antialias: true,
			alpha: true
		});
		
		/**
		 *
		 * @type {Scene}
		 */
		this.scene = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Scene();
		this.scene.background = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color().setHSL(0.7, 0.4, 0.03);
		// this.scene.fog = new THREE.Fog(this.scene.background, 35000, SceneControlsPlugin.FAR);
        this.scene.fog = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Fog(this.scene.background, 2000, SceneControlsPlugin.FAR);
		
		/**
		 *
		 * @type {PerspectiveCamera}
		 */
		this.camera = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].PerspectiveCamera(40, SceneControlsPlugin.width / SceneControlsPlugin.height, 1, SceneControlsPlugin.FAR);
		
		/**
		 *
		 * @type {Vector2}
		 * @private
		 */
		this._sizeScreen = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector2();
		
		/**
		 *
		 * @type {Vector2}
		 * @private
		 */
		this._toScreenPosition = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector2();
		
		/**
		 *
		 * @type {Vector3}
		 * @private
		 */
		this._vectorToScreenPosition = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.pointLocal = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 0, -1);
		
		this.direction = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 0, -1);
	}
	
	/**
	 *
	 * @returns {number}
	 * @constructor
	 */
	static get FAR() {
		return 10000;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get aspect() {
		return SceneControlsPlugin.width / SceneControlsPlugin.height;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get width() {
		return window.innerWidth;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get height() {
		return window.innerHeight;
	};
	
	/**
	 *
	 * @param {Object3D} obj
	 * @returns {Vector2}
	 */
	toScreenPosition(obj) {
		let v = this.getCenterScreenPosition();
		obj.updateMatrixWorld();
		this._vectorToScreenPosition.setFromMatrixPosition(obj.matrixWorld);
		this._vectorToScreenPosition.project(this.camera);

		this._toScreenPosition.set(
			(this._vectorToScreenPosition.x * v.x) + v.x,
			- (this._vectorToScreenPosition.y * v.y) + v.y
		);

		return this._toScreenPosition.clone();
	}
	
	/**
	 *
	 * @returns {Vector2}
	 */
	getCenterScreenPosition() {
		let s = this.getScreenSize();
		this._toScreenPosition.set(0.5 * s.x, 0.5 * s.y);
		return this._toScreenPosition.clone();
	}
	
	/**
	 *
	 * @returns {Vector2}
	 */
	getScreenSize() {
		this._sizeScreen.set(
			this.renderer.context.canvas.width,
			this.renderer.context.canvas.height
		);
		return this._sizeScreen;
	}
	
	/**
	 *
	 * @returns {Vector3}
	 */
	getCameraDirection() {
		return this.getDirection(this.camera);
	}
	
	/**
	 *
	 * @returns {Vector3}
	 */
	getDirection(obj) {
		this.direction.applyQuaternion(obj.quaternion);
		obj.getWorldDirection(this.direction);
		return this.direction.clone();
	}
	
	/**
	 * Get next position on current angle of object
	 *
	 * @param {Object3D} obj
	 * @param {number} speed
	 * @returns {*}
	 */
	getNextPosition(obj, speed) {
		let v = this.getDirection(obj).multiplyScalar(speed);
		return obj.position.clone().add(v);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (SceneControlsPlugin);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/* harmony default export */ __webpack_exports__["a"] = (ParticleError);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* shader-particle-engine 1.0.6
 * 
 * (c) 2015 Luke Moody (http://www.github.com/squarefeet)
 *     Originally based on Lee Stemkoski's original work (https://github.com/stemkoski/stemkoski.github.com/blob/master/Three.js/js/ParticleEngine.js).
 *
 * shader-particle-engine may be freely distributed under the MIT license (See LICENSE at root of this repository.)
 */
var SPE={distributions:{BOX:1,SPHERE:2,DISC:3},valueOverLifetimeLength:4}; true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (SPE),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof exports&&"undefined"!=typeof module&&(module.exports=SPE),SPE.TypedArrayHelper=function(a,b,c,d){"use strict";this.componentSize=c||1,this.size=b||1,this.TypedArrayConstructor=a||Float32Array,this.array=new a(b*this.componentSize),this.indexOffset=d||0},SPE.TypedArrayHelper.constructor=SPE.TypedArrayHelper,SPE.TypedArrayHelper.prototype.setSize=function(a,b){"use strict";var c=this.array.length;return b||(a*=this.componentSize),c>a?this.shrink(a):a>c?this.grow(a):void console.info("TypedArray is already of size:",a+".","Will not resize.")},SPE.TypedArrayHelper.prototype.shrink=function(a){"use strict";return this.array=this.array.subarray(0,a),this.size=a,this},SPE.TypedArrayHelper.prototype.grow=function(a){"use strict";var b=this.array,c=new this.TypedArrayConstructor(a);return c.set(b),this.array=c,this.size=a,this},SPE.TypedArrayHelper.prototype.splice=function(a,b){
"use strict";a*=this.componentSize,b*=this.componentSize;for(var c=[],d=this.array,e=d.length,f=0;e>f;++f)(a>f||f>=b)&&c.push(d[f]);return this.setFromArray(0,c),this},SPE.TypedArrayHelper.prototype.setFromArray=function(a,b){"use strict";var c=b.length,d=a+c;return d>this.array.length?this.grow(d):d<this.array.length&&this.shrink(d),this.array.set(b,this.indexOffset+a),this},SPE.TypedArrayHelper.prototype.setVec2=function(a,b){"use strict";return this.setVec2Components(a,b.x,b.y)},SPE.TypedArrayHelper.prototype.setVec2Components=function(a,b,c){"use strict";var d=this.array,e=this.indexOffset+a*this.componentSize;return d[e]=b,d[e+1]=c,this},SPE.TypedArrayHelper.prototype.setVec3=function(a,b){"use strict";return this.setVec3Components(a,b.x,b.y,b.z)},SPE.TypedArrayHelper.prototype.setVec3Components=function(a,b,c,d){"use strict";var e=this.array,f=this.indexOffset+a*this.componentSize;return e[f]=b,e[f+1]=c,e[f+2]=d,this},SPE.TypedArrayHelper.prototype.setVec4=function(a,b){"use strict";
return this.setVec4Components(a,b.x,b.y,b.z,b.w)},SPE.TypedArrayHelper.prototype.setVec4Components=function(a,b,c,d,e){"use strict";var f=this.array,g=this.indexOffset+a*this.componentSize;return f[g]=b,f[g+1]=c,f[g+2]=d,f[g+3]=e,this},SPE.TypedArrayHelper.prototype.setMat3=function(a,b){"use strict";return this.setFromArray(this.indexOffset+a*this.componentSize,b.elements)},SPE.TypedArrayHelper.prototype.setMat4=function(a,b){"use strict";return this.setFromArray(this.indexOffset+a*this.componentSize,b.elements)},SPE.TypedArrayHelper.prototype.setColor=function(a,b){"use strict";return this.setVec3Components(a,b.r,b.g,b.b)},SPE.TypedArrayHelper.prototype.setNumber=function(a,b){"use strict";return this.array[this.indexOffset+a*this.componentSize]=b,this},SPE.TypedArrayHelper.prototype.getValueAtIndex=function(a){"use strict";return this.array[this.indexOffset+a]},SPE.TypedArrayHelper.prototype.getComponentValueAtIndex=function(a){"use strict";return this.array.subarray(this.indexOffset+a*this.componentSize);
},SPE.ShaderAttribute=function(a,b,c){"use strict";var d=SPE.ShaderAttribute.typeSizeMap;this.type="string"==typeof a&&d.hasOwnProperty(a)?a:"f",this.componentSize=d[this.type],this.arrayType=c||Float32Array,this.typedArray=null,this.bufferAttribute=null,this.dynamicBuffer=!!b,this.updateMin=0,this.updateMax=0},SPE.ShaderAttribute.constructor=SPE.ShaderAttribute,SPE.ShaderAttribute.typeSizeMap={f:1,v2:2,v3:3,v4:4,c:3,m3:9,m4:16},SPE.ShaderAttribute.prototype.setUpdateRange=function(a,b){"use strict";this.updateMin=Math.min(a*this.componentSize,this.updateMin*this.componentSize),this.updateMax=Math.max(b*this.componentSize,this.updateMax*this.componentSize)},SPE.ShaderAttribute.prototype.flagUpdate=function(){"use strict";var a=this.bufferAttribute,b=a.updateRange;b.offset=this.updateMin,b.count=Math.min(this.updateMax-this.updateMin+this.componentSize,this.typedArray.array.length),a.needsUpdate=!0},SPE.ShaderAttribute.prototype.resetUpdateRange=function(){"use strict";this.updateMin=0,this.updateMax=0;
},SPE.ShaderAttribute.prototype.resetDynamic=function(){"use strict";this.bufferAttribute.dynamic=this.dynamicBuffer},SPE.ShaderAttribute.prototype.splice=function(a,b){"use strict";this.typedArray.splice(a,b),this.forceUpdateAll()},SPE.ShaderAttribute.prototype.forceUpdateAll=function(){"use strict";this.bufferAttribute.array=this.typedArray.array,this.bufferAttribute.updateRange.offset=0,this.bufferAttribute.updateRange.count=-1,this.bufferAttribute.dynamic=!1,this.bufferAttribute.needsUpdate=!0},SPE.ShaderAttribute.prototype._ensureTypedArray=function(a){"use strict";null!==this.typedArray&&this.typedArray.size===a*this.componentSize||(null!==this.typedArray&&this.typedArray.size!==a?this.typedArray.setSize(a):null===this.typedArray&&(this.typedArray=new SPE.TypedArrayHelper(this.arrayType,a,this.componentSize)))},SPE.ShaderAttribute.prototype._createBufferAttribute=function(a){"use strict";return this._ensureTypedArray(a),null!==this.bufferAttribute?(this.bufferAttribute.array=this.typedArray.array,
parseFloat(THREE.REVISION)>=81&&(this.bufferAttribute.count=this.bufferAttribute.array.length/this.bufferAttribute.itemSize),void(this.bufferAttribute.needsUpdate=!0)):(this.bufferAttribute=new THREE.BufferAttribute(this.typedArray.array,this.componentSize),void(this.bufferAttribute.dynamic=this.dynamicBuffer))},SPE.ShaderAttribute.prototype.getLength=function(){"use strict";return null===this.typedArray?0:this.typedArray.array.length},SPE.shaderChunks={defines:["#define PACKED_COLOR_SIZE 256.0","#define PACKED_COLOR_DIVISOR 255.0"].join("\n"),uniforms:["uniform float deltaTime;","uniform float runTime;","uniform sampler2D texture;","uniform vec4 textureAnimation;","uniform float scale;"].join("\n"),attributes:["attribute vec4 acceleration;","attribute vec3 velocity;","attribute vec4 rotation;","attribute vec3 rotationCenter;","attribute vec4 params;","attribute vec4 size;","attribute vec4 angle;","attribute vec4 color;","attribute vec4 opacity;"].join("\n"),varyings:["varying vec4 vColor;","#ifdef SHOULD_ROTATE_TEXTURE","    varying float vAngle;","#endif","#ifdef SHOULD_CALCULATE_SPRITE","    varying vec4 vSpriteSheet;","#endif"].join("\n"),
branchAvoidanceFunctions:["float when_gt(float x, float y) {","    return max(sign(x - y), 0.0);","}","float when_lt(float x, float y) {","    return min( max(1.0 - sign(x - y), 0.0), 1.0 );","}","float when_eq( float x, float y ) {","    return 1.0 - abs( sign( x - y ) );","}","float when_ge(float x, float y) {","  return 1.0 - when_lt(x, y);","}","float when_le(float x, float y) {","  return 1.0 - when_gt(x, y);","}","float and(float a, float b) {","    return a * b;","}","float or(float a, float b) {","    return min(a + b, 1.0);","}"].join("\n"),unpackColor:["vec3 unpackColor( in float hex ) {","   vec3 c = vec3( 0.0 );","   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );","   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );","   float b = mod( hex, PACKED_COLOR_SIZE );","   c.r = r / PACKED_COLOR_DIVISOR;","   c.g = g / PACKED_COLOR_DIVISOR;","   c.b = b / PACKED_COLOR_DIVISOR;","   return c;","}"].join("\n"),unpackRotationAxis:["vec3 unpackRotationAxis( in float hex ) {","   vec3 c = vec3( 0.0 );","   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );","   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );","   float b = mod( hex, PACKED_COLOR_SIZE );","   c.r = r / PACKED_COLOR_DIVISOR;","   c.g = g / PACKED_COLOR_DIVISOR;","   c.b = b / PACKED_COLOR_DIVISOR;","   c *= vec3( 2.0 );","   c -= vec3( 1.0 );","   return c;","}"].join("\n"),
floatOverLifetime:["float getFloatOverLifetime( in float positionInTime, in vec4 attr ) {","    highp float value = 0.0;","    float deltaAge = positionInTime * float( VALUE_OVER_LIFETIME_LENGTH - 1 );","    float fIndex = 0.0;","    float shouldApplyValue = 0.0;","    value += attr[ 0 ] * when_eq( deltaAge, 0.0 );","","    for( int i = 0; i < VALUE_OVER_LIFETIME_LENGTH - 1; ++i ) {","       fIndex = float( i );","       shouldApplyValue = and( when_gt( deltaAge, fIndex ), when_le( deltaAge, fIndex + 1.0 ) );","       value += shouldApplyValue * mix( attr[ i ], attr[ i + 1 ], deltaAge - fIndex );","    }","","    return value;","}"].join("\n"),colorOverLifetime:["vec3 getColorOverLifetime( in float positionInTime, in vec3 color1, in vec3 color2, in vec3 color3, in vec3 color4 ) {","    vec3 value = vec3( 0.0 );","    value.x = getFloatOverLifetime( positionInTime, vec4( color1.x, color2.x, color3.x, color4.x ) );","    value.y = getFloatOverLifetime( positionInTime, vec4( color1.y, color2.y, color3.y, color4.y ) );","    value.z = getFloatOverLifetime( positionInTime, vec4( color1.z, color2.z, color3.z, color4.z ) );","    return value;","}"].join("\n"),
paramFetchingFunctions:["float getAlive() {","   return params.x;","}","float getAge() {","   return params.y;","}","float getMaxAge() {","   return params.z;","}","float getWiggle() {","   return params.w;","}"].join("\n"),forceFetchingFunctions:["vec4 getPosition( in float age ) {","   return modelViewMatrix * vec4( position, 1.0 );","}","vec3 getVelocity( in float age ) {","   return velocity * age;","}","vec3 getAcceleration( in float age ) {","   return acceleration.xyz * age;","}"].join("\n"),rotationFunctions:["#ifdef SHOULD_ROTATE_PARTICLES","   mat4 getRotationMatrix( in vec3 axis, in float angle) {","       axis = normalize(axis);","       float s = sin(angle);","       float c = cos(angle);","       float oc = 1.0 - c;","","       return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,","                   oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,","                   oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,","                   0.0,                                0.0,                                0.0,                                1.0);","   }","","   vec3 getRotation( in vec3 pos, in float positionInTime ) {","      if( rotation.y == 0.0 ) {","           return pos;","      }","","      vec3 axis = unpackRotationAxis( rotation.x );","      vec3 center = rotationCenter;","      vec3 translated;","      mat4 rotationMatrix;","      float angle = 0.0;","      angle += when_eq( rotation.z, 0.0 ) * rotation.y;","      angle += when_gt( rotation.z, 0.0 ) * mix( 0.0, rotation.y, positionInTime );","      translated = rotationCenter - pos;","      rotationMatrix = getRotationMatrix( axis, angle );","      return center - vec3( rotationMatrix * vec4( translated, 0.0 ) );","   }","#endif"].join("\n"),
rotateTexture:["    vec2 vUv = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );","","    #ifdef SHOULD_ROTATE_TEXTURE","       float x = gl_PointCoord.x - 0.5;","       float y = 1.0 - gl_PointCoord.y - 0.5;","       float c = cos( -vAngle );","       float s = sin( -vAngle );","       vUv = vec2( c * x + s * y + 0.5, c * y - s * x + 0.5 );","    #endif","","    #ifdef SHOULD_CALCULATE_SPRITE","        float framesX = vSpriteSheet.x;","        float framesY = vSpriteSheet.y;","        float columnNorm = vSpriteSheet.z;","        float rowNorm = vSpriteSheet.w;","        vUv.x = gl_PointCoord.x * framesX + columnNorm;","        vUv.y = 1.0 - (gl_PointCoord.y * framesY + rowNorm);","    #endif","","    vec4 rotatedTexture = texture2D( texture, vUv );"].join("\n")},SPE.shaders={vertex:[SPE.shaderChunks.defines,SPE.shaderChunks.uniforms,SPE.shaderChunks.attributes,SPE.shaderChunks.varyings,THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,THREE.ShaderChunk.fog_pars_vertex,SPE.shaderChunks.branchAvoidanceFunctions,SPE.shaderChunks.unpackColor,SPE.shaderChunks.unpackRotationAxis,SPE.shaderChunks.floatOverLifetime,SPE.shaderChunks.colorOverLifetime,SPE.shaderChunks.paramFetchingFunctions,SPE.shaderChunks.forceFetchingFunctions,SPE.shaderChunks.rotationFunctions,"void main() {","    highp float age = getAge();","    highp float alive = getAlive();","    highp float maxAge = getMaxAge();","    highp float positionInTime = (age / maxAge);","    highp float isAlive = when_gt( alive, 0.0 );","    #ifdef SHOULD_WIGGLE_PARTICLES","        float wiggleAmount = positionInTime * getWiggle();","        float wiggleSin = isAlive * sin( wiggleAmount );","        float wiggleCos = isAlive * cos( wiggleAmount );","    #endif","    vec3 vel = getVelocity( age );","    vec3 accel = getAcceleration( age );","    vec3 force = vec3( 0.0 );","    vec3 pos = vec3( position );","    float drag = 1.0 - (positionInTime * 0.5) * acceleration.w;","    force += vel;","    force *= drag;","    force += accel * age;","    pos += force;","    #ifdef SHOULD_WIGGLE_PARTICLES","        pos.x += wiggleSin;","        pos.y += wiggleCos;","        pos.z += wiggleSin;","    #endif","    #ifdef SHOULD_ROTATE_PARTICLES","        pos = getRotation( pos, positionInTime );","    #endif","    vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );","    highp float pointSize = getFloatOverLifetime( positionInTime, size ) * isAlive;","    #ifdef HAS_PERSPECTIVE","        float perspective = scale / length( mvPosition.xyz );","    #else","        float perspective = 1.0;","    #endif","    float pointSizePerspective = pointSize * perspective;","    #ifdef COLORIZE","       vec3 c = isAlive * getColorOverLifetime(","           positionInTime,","           unpackColor( color.x ),","           unpackColor( color.y ),","           unpackColor( color.z ),","           unpackColor( color.w )","       );","    #else","       vec3 c = vec3(1.0);","    #endif","    float o = isAlive * getFloatOverLifetime( positionInTime, opacity );","    vColor = vec4( c, o );","    #ifdef SHOULD_ROTATE_TEXTURE","        vAngle = isAlive * getFloatOverLifetime( positionInTime, angle );","    #endif","    #ifdef SHOULD_CALCULATE_SPRITE","        float framesX = textureAnimation.x;","        float framesY = textureAnimation.y;","        float loopCount = textureAnimation.w;","        float totalFrames = textureAnimation.z;","        float frameNumber = mod( (positionInTime * loopCount) * totalFrames, totalFrames );","        float column = floor(mod( frameNumber, framesX ));","        float row = floor( (frameNumber - column) / framesX );","        float columnNorm = column / framesX;","        float rowNorm = row / framesY;","        vSpriteSheet.x = 1.0 / framesX;","        vSpriteSheet.y = 1.0 / framesY;","        vSpriteSheet.z = columnNorm;","        vSpriteSheet.w = rowNorm;","    #endif","    gl_PointSize = pointSizePerspective;","    gl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.fog_vertex,"}"].join("\n"),
fragment:[SPE.shaderChunks.uniforms,THREE.ShaderChunk.common,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,SPE.shaderChunks.varyings,SPE.shaderChunks.branchAvoidanceFunctions,"void main() {","    vec3 outgoingLight = vColor.xyz;","    ","    #ifdef ALPHATEST","       if ( vColor.w < float(ALPHATEST) ) discard;","    #endif",SPE.shaderChunks.rotateTexture,THREE.ShaderChunk.logdepthbuf_fragment,"    outgoingLight = vColor.xyz * rotatedTexture.xyz;","    gl_FragColor = vec4( outgoingLight.xyz, rotatedTexture.w * vColor.w );",THREE.ShaderChunk.fog_fragment,"}"].join("\n")},SPE.utils={types:{BOOLEAN:"boolean",STRING:"string",NUMBER:"number",OBJECT:"object"},ensureTypedArg:function(a,b,c){"use strict";return typeof a===b?a:c},ensureArrayTypedArg:function(a,b,c){"use strict";if(Array.isArray(a)){for(var d=a.length-1;d>=0;--d)if(typeof a[d]!==b)return c;return a}return this.ensureTypedArg(a,b,c)},ensureInstanceOf:function(a,b,c){"use strict";return void 0!==b&&a instanceof b?a:c;
},ensureArrayInstanceOf:function(a,b,c){"use strict";if(Array.isArray(a)){for(var d=a.length-1;d>=0;--d)if(void 0!==b&&a[d]instanceof b==!1)return c;return a}return this.ensureInstanceOf(a,b,c)},ensureValueOverLifetimeCompliance:function(a,b,c){"use strict";b=b||3,c=c||3,Array.isArray(a._value)===!1&&(a._value=[a._value]),Array.isArray(a._spread)===!1&&(a._spread=[a._spread]);var d=this.clamp(a._value.length,b,c),e=this.clamp(a._spread.length,b,c),f=Math.max(d,e);a._value.length!==f&&(a._value=this.interpolateArray(a._value,f)),a._spread.length!==f&&(a._spread=this.interpolateArray(a._spread,f))},interpolateArray:function(a,b){"use strict";for(var c=a.length,d=["function"==typeof a[0].clone?a[0].clone():a[0]],e=(c-1)/(b-1),f=1;b-1>f;++f){var g=f*e,h=Math.floor(g),i=Math.ceil(g),j=g-h;d[f]=this.lerpTypeAgnostic(a[h],a[i],j)}return d.push("function"==typeof a[c-1].clone?a[c-1].clone():a[c-1]),d},clamp:function(a,b,c){"use strict";return Math.max(b,Math.min(a,c))},zeroToEpsilon:function(a,b){
"use strict";var c=1e-5,d=a;return d=b?Math.random()*c*10:c,0>a&&a>-c&&(d=-d),d},lerpTypeAgnostic:function(a,b,c){"use strict";var d,e=this.types;return typeof a===e.NUMBER&&typeof b===e.NUMBER?a+(b-a)*c:a instanceof THREE.Vector2&&b instanceof THREE.Vector2?(d=a.clone(),d.x=this.lerp(a.x,b.x,c),d.y=this.lerp(a.y,b.y,c),d):a instanceof THREE.Vector3&&b instanceof THREE.Vector3?(d=a.clone(),d.x=this.lerp(a.x,b.x,c),d.y=this.lerp(a.y,b.y,c),d.z=this.lerp(a.z,b.z,c),d):a instanceof THREE.Vector4&&b instanceof THREE.Vector4?(d=a.clone(),d.x=this.lerp(a.x,b.x,c),d.y=this.lerp(a.y,b.y,c),d.z=this.lerp(a.z,b.z,c),d.w=this.lerp(a.w,b.w,c),d):a instanceof THREE.Color&&b instanceof THREE.Color?(d=a.clone(),d.r=this.lerp(a.r,b.r,c),d.g=this.lerp(a.g,b.g,c),d.b=this.lerp(a.b,b.b,c),d):void console.warn("Invalid argument types, or argument types do not match:",a,b)},lerp:function(a,b,c){"use strict";return a+(b-a)*c},roundToNearestMultiple:function(a,b){"use strict";var c=0;return 0===b?a:(c=Math.abs(a)%b,
0===c?a:0>a?-(Math.abs(a)-c):a+b-c)},arrayValuesAreEqual:function(a){"use strict";for(var b=0;b<a.length-1;++b)if(a[b]!==a[b+1])return!1;return!0},randomFloat:function(a,b){"use strict";return a+b*(Math.random()-.5)},randomVector3:function(a,b,c,d,e){"use strict";var f=c.x+(Math.random()*d.x-.5*d.x),g=c.y+(Math.random()*d.y-.5*d.y),h=c.z+(Math.random()*d.z-.5*d.z);e&&(f=.5*-e.x+this.roundToNearestMultiple(f,e.x),g=.5*-e.y+this.roundToNearestMultiple(g,e.y),h=.5*-e.z+this.roundToNearestMultiple(h,e.z)),a.typedArray.setVec3Components(b,f,g,h)},randomColor:function(a,b,c,d){"use strict";var e=c.r+Math.random()*d.x,f=c.g+Math.random()*d.y,g=c.b+Math.random()*d.z;e=this.clamp(e,0,1),f=this.clamp(f,0,1),g=this.clamp(g,0,1),a.typedArray.setVec3Components(b,e,f,g)},randomColorAsHex:function(){"use strict";var a=new THREE.Color;return function(b,c,d,e){for(var f=d.length,g=[],h=0;f>h;++h){var i=e[h];a.copy(d[h]),a.r+=Math.random()*i.x-.5*i.x,a.g+=Math.random()*i.y-.5*i.y,a.b+=Math.random()*i.z-.5*i.z,
a.r=this.clamp(a.r,0,1),a.g=this.clamp(a.g,0,1),a.b=this.clamp(a.b,0,1),g.push(a.getHex())}b.typedArray.setVec4Components(c,g[0],g[1],g[2],g[3])}}(),randomVector3OnSphere:function(a,b,c,d,e,f,g,h){"use strict";var i=2*Math.random()-1,j=6.2832*Math.random(),k=Math.sqrt(1-i*i),l=this.randomFloat(d,e),m=0,n=0,o=0;g&&(l=Math.round(l/g)*g),m=k*Math.cos(j)*l,n=k*Math.sin(j)*l,o=i*l,m*=f.x,n*=f.y,o*=f.z,m+=c.x,n+=c.y,o+=c.z,a.typedArray.setVec3Components(b,m,n,o)},seededRandom:function(a){var b=1e4*Math.sin(a);return b-(0|b)},randomVector3OnDisc:function(a,b,c,d,e,f,g){"use strict";var h=6.2832*Math.random(),i=Math.abs(this.randomFloat(d,e)),j=0,k=0,l=0;g&&(i=Math.round(i/g)*g),j=Math.cos(h)*i,k=Math.sin(h)*i,j*=f.x,k*=f.y,j+=c.x,k+=c.y,l+=c.z,a.typedArray.setVec3Components(b,j,k,l)},randomDirectionVector3OnSphere:function(){"use strict";var a=new THREE.Vector3;return function(b,c,d,e,f,g,h,i){a.copy(g),a.x-=d,a.y-=e,a.z-=f,a.normalize().multiplyScalar(-this.randomFloat(h,i)),b.typedArray.setVec3Components(c,a.x,a.y,a.z);
}}(),randomDirectionVector3OnDisc:function(){"use strict";var a=new THREE.Vector3;return function(b,c,d,e,f,g,h,i){a.copy(g),a.x-=d,a.y-=e,a.z-=f,a.normalize().multiplyScalar(-this.randomFloat(h,i)),b.typedArray.setVec3Components(c,a.x,a.y,0)}}(),getPackedRotationAxis:function(){"use strict";var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Color,d=new THREE.Vector3(1,1,1);return function(e,f){return a.copy(e).normalize(),b.copy(f).normalize(),a.x+=.5*-f.x+Math.random()*f.x,a.y+=.5*-f.y+Math.random()*f.y,a.z+=.5*-f.z+Math.random()*f.z,a.normalize().add(d).multiplyScalar(.5),c.setRGB(a.x,a.y,a.z),c.getHex()}}()},SPE.Group=function(a){"use strict";var b=SPE.utils,c=b.types;a=b.ensureTypedArg(a,c.OBJECT,{}),a.texture=b.ensureTypedArg(a.texture,c.OBJECT,{}),this.uuid=THREE.Math.generateUUID(),this.fixedTimeStep=b.ensureTypedArg(a.fixedTimeStep,c.NUMBER,.016),this.texture=b.ensureInstanceOf(a.texture.value,THREE.Texture,null),this.textureFrames=b.ensureInstanceOf(a.texture.frames,THREE.Vector2,new THREE.Vector2(1,1)),
this.textureFrameCount=b.ensureTypedArg(a.texture.frameCount,c.NUMBER,this.textureFrames.x*this.textureFrames.y),this.textureLoop=b.ensureTypedArg(a.texture.loop,c.NUMBER,1),this.textureFrames.max(new THREE.Vector2(1,1)),this.hasPerspective=b.ensureTypedArg(a.hasPerspective,c.BOOLEAN,!0),this.colorize=b.ensureTypedArg(a.colorize,c.BOOLEAN,!0),this.maxParticleCount=b.ensureTypedArg(a.maxParticleCount,c.NUMBER,null),this.blending=b.ensureTypedArg(a.blending,c.NUMBER,THREE.AdditiveBlending),this.transparent=b.ensureTypedArg(a.transparent,c.BOOLEAN,!0),this.alphaTest=parseFloat(b.ensureTypedArg(a.alphaTest,c.NUMBER,0)),this.depthWrite=b.ensureTypedArg(a.depthWrite,c.BOOLEAN,!1),this.depthTest=b.ensureTypedArg(a.depthTest,c.BOOLEAN,!0),this.fog=b.ensureTypedArg(a.fog,c.BOOLEAN,!0),this.scale=b.ensureTypedArg(a.scale,c.NUMBER,300),this.emitters=[],this.emitterIDs=[],this._pool=[],this._poolCreationSettings=null,this._createNewWhenPoolEmpty=0,this._attributesNeedRefresh=!1,this._attributesNeedDynamicReset=!1,
this.particleCount=0,this.uniforms={texture:{type:"t",value:this.texture},textureAnimation:{type:"v4",value:new THREE.Vector4(this.textureFrames.x,this.textureFrames.y,this.textureFrameCount,Math.max(Math.abs(this.textureLoop),1))},fogColor:{type:"c",value:null},fogNear:{type:"f",value:10},fogFar:{type:"f",value:200},fogDensity:{type:"f",value:.5},deltaTime:{type:"f",value:0},runTime:{type:"f",value:0},scale:{type:"f",value:this.scale}},this.defines={HAS_PERSPECTIVE:this.hasPerspective,COLORIZE:this.colorize,VALUE_OVER_LIFETIME_LENGTH:SPE.valueOverLifetimeLength,SHOULD_ROTATE_TEXTURE:!1,SHOULD_ROTATE_PARTICLES:!1,SHOULD_WIGGLE_PARTICLES:!1,SHOULD_CALCULATE_SPRITE:this.textureFrames.x>1||this.textureFrames.y>1},this.attributes={position:new SPE.ShaderAttribute("v3",!0),acceleration:new SPE.ShaderAttribute("v4",!0),velocity:new SPE.ShaderAttribute("v3",!0),rotation:new SPE.ShaderAttribute("v4",!0),rotationCenter:new SPE.ShaderAttribute("v3",!0),params:new SPE.ShaderAttribute("v4",!0),size:new SPE.ShaderAttribute("v4",!0),
angle:new SPE.ShaderAttribute("v4",!0),color:new SPE.ShaderAttribute("v4",!0),opacity:new SPE.ShaderAttribute("v4",!0)},this.attributeKeys=Object.keys(this.attributes),this.attributeCount=this.attributeKeys.length,this.material=new THREE.ShaderMaterial({uniforms:this.uniforms,vertexShader:SPE.shaders.vertex,fragmentShader:SPE.shaders.fragment,blending:this.blending,transparent:this.transparent,alphaTest:this.alphaTest,depthWrite:this.depthWrite,depthTest:this.depthTest,defines:this.defines,fog:this.fog}),this.geometry=new THREE.BufferGeometry,this.mesh=new THREE.Points(this.geometry,this.material),null===this.maxParticleCount&&console.warn("SPE.Group: No maxParticleCount specified. Adding emitters after rendering will probably cause errors.")},SPE.Group.constructor=SPE.Group,SPE.Group.prototype._updateDefines=function(){"use strict";var a,b=this.emitters,c=b.length-1,d=this.defines;for(c;c>=0;--c)a=b[c],d.SHOULD_CALCULATE_SPRITE||(d.SHOULD_ROTATE_TEXTURE=d.SHOULD_ROTATE_TEXTURE||!!Math.max(Math.max.apply(null,a.angle.value),Math.max.apply(null,a.angle.spread))),
d.SHOULD_ROTATE_PARTICLES=d.SHOULD_ROTATE_PARTICLES||!!Math.max(a.rotation.angle,a.rotation.angleSpread),d.SHOULD_WIGGLE_PARTICLES=d.SHOULD_WIGGLE_PARTICLES||!!Math.max(a.wiggle.value,a.wiggle.spread);this.material.needsUpdate=!0},SPE.Group.prototype._applyAttributesToGeometry=function(){"use strict";var a,b,c=this.attributes,d=this.geometry,e=d.attributes;for(var f in c)c.hasOwnProperty(f)&&(a=c[f],b=e[f],b?b.array=a.typedArray.array:d.addAttribute(f,a.bufferAttribute),a.bufferAttribute.needsUpdate=!0);this.geometry.setDrawRange(0,this.particleCount)},SPE.Group.prototype.addEmitter=function(a){"use strict";if(a instanceof SPE.Emitter==!1)return void console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:",a);if(this.emitterIDs.indexOf(a.uuid)>-1)return void console.error("Emitter already exists in this group. Will not add again.");if(null!==a.group)return void console.error("Emitter already belongs to another group. Will not add to requested group.");var b=this.attributes,c=this.particleCount,d=c+a.particleCount;
this.particleCount=d,null!==this.maxParticleCount&&this.particleCount>this.maxParticleCount&&console.warn("SPE.Group: maxParticleCount exceeded. Requesting",this.particleCount,"particles, can support only",this.maxParticleCount),a._calculatePPSValue(a.maxAge._value+a.maxAge._spread),a._setBufferUpdateRanges(this.attributeKeys),a._setAttributeOffset(c),a.group=this,a.attributes=this.attributes;for(var e in b)b.hasOwnProperty(e)&&b[e]._createBufferAttribute(null!==this.maxParticleCount?this.maxParticleCount:this.particleCount);for(var f=c;d>f;++f)a._assignPositionValue(f),a._assignForceValue(f,"velocity"),a._assignForceValue(f,"acceleration"),a._assignAbsLifetimeValue(f,"opacity"),a._assignAbsLifetimeValue(f,"size"),a._assignAngleValue(f),a._assignRotationValue(f),a._assignParamsValue(f),a._assignColorValue(f);return this._applyAttributesToGeometry(),this.emitters.push(a),this.emitterIDs.push(a.uuid),this._updateDefines(a),this.material.needsUpdate=!0,this.geometry.needsUpdate=!0,this._attributesNeedRefresh=!0,
this},SPE.Group.prototype.removeEmitter=function(a){"use strict";var b=this.emitterIDs.indexOf(a.uuid);if(a instanceof SPE.Emitter==!1)return void console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:",a);if(-1===b)return void console.error("Emitter does not exist in this group. Will not remove.");for(var c=a.attributeOffset,d=c+a.particleCount,e=this.attributes.params.typedArray,f=c;d>f;++f)e.array[4*f]=0,e.array[4*f+1]=0;this.emitters.splice(b,1),this.emitterIDs.splice(b,1);for(var g in this.attributes)this.attributes.hasOwnProperty(g)&&this.attributes[g].splice(c,d);this.particleCount-=a.particleCount,a._onRemove(),this._attributesNeedRefresh=!0},SPE.Group.prototype.getFromPool=function(){"use strict";var a=this._pool,b=this._createNewWhenPoolEmpty;if(a.length)return a.pop();if(b){var c=new SPE.Emitter(this._poolCreationSettings);return this.addEmitter(c),c}return null},SPE.Group.prototype.releaseIntoPool=function(a){"use strict";return a instanceof SPE.Emitter==!1?void console.error("Argument is not instanceof SPE.Emitter:",a):(a.reset(),
this._pool.unshift(a),this)},SPE.Group.prototype.getPool=function(){"use strict";return this._pool},SPE.Group.prototype.addPool=function(a,b,c){"use strict";var d;this._poolCreationSettings=b,this._createNewWhenPoolEmpty=!!c;for(var e=0;a>e;++e)d=Array.isArray(b)?new SPE.Emitter(b[e]):new SPE.Emitter(b),this.addEmitter(d),this.releaseIntoPool(d);return this},SPE.Group.prototype._triggerSingleEmitter=function(a){"use strict";var b=this.getFromPool(),c=this;return null===b?void console.log("SPE.Group pool ran out."):(a instanceof THREE.Vector3&&(b.position.value.copy(a),b.position.value=b.position.value),b.enable(),setTimeout(function(){b.disable(),c.releaseIntoPool(b)},1e3*Math.max(b.duration,b.maxAge.value+b.maxAge.spread)),this)},SPE.Group.prototype.triggerPoolEmitter=function(a,b){"use strict";if("number"==typeof a&&a>1)for(var c=0;a>c;++c)this._triggerSingleEmitter(b);else this._triggerSingleEmitter(b);return this},SPE.Group.prototype._updateUniforms=function(a){"use strict";this.uniforms.runTime.value+=a,
this.uniforms.deltaTime.value=a},SPE.Group.prototype._resetBufferRanges=function(){"use strict";var a=this.attributeKeys,b=this.attributeCount-1,c=this.attributes;for(b;b>=0;--b)c[a[b]].resetUpdateRange()},SPE.Group.prototype._updateBuffers=function(a){"use strict";var b,c,d,e=this.attributeKeys,f=this.attributeCount-1,g=this.attributes,h=a.bufferUpdateRanges;for(f;f>=0;--f)b=e[f],c=h[b],d=g[b],d.setUpdateRange(c.min,c.max),d.flagUpdate()},SPE.Group.prototype.tick=function(a){"use strict";var b,c=this.emitters,d=c.length,e=a||this.fixedTimeStep,f=this.attributeKeys,g=this.attributes;if(this._updateUniforms(e),this._resetBufferRanges(),0!==d||this._attributesNeedRefresh!==!1||this._attributesNeedDynamicReset!==!1){for(var h,b=0;d>b;++b)h=c[b],h.tick(e),this._updateBuffers(h);if(this._attributesNeedDynamicReset===!0){for(b=this.attributeCount-1;b>=0;--b)g[f[b]].resetDynamic();this._attributesNeedDynamicReset=!1}if(this._attributesNeedRefresh===!0){for(b=this.attributeCount-1;b>=0;--b)g[f[b]].forceUpdateAll();
this._attributesNeedRefresh=!1,this._attributesNeedDynamicReset=!0}}},SPE.Group.prototype.dispose=function(){"use strict";return this.geometry.dispose(),this.material.dispose(),this},SPE.Emitter=function(a){"use strict";var b=SPE.utils,c=b.types,d=SPE.valueOverLifetimeLength;a=b.ensureTypedArg(a,c.OBJECT,{}),a.position=b.ensureTypedArg(a.position,c.OBJECT,{}),a.velocity=b.ensureTypedArg(a.velocity,c.OBJECT,{}),a.acceleration=b.ensureTypedArg(a.acceleration,c.OBJECT,{}),a.radius=b.ensureTypedArg(a.radius,c.OBJECT,{}),a.drag=b.ensureTypedArg(a.drag,c.OBJECT,{}),a.rotation=b.ensureTypedArg(a.rotation,c.OBJECT,{}),a.color=b.ensureTypedArg(a.color,c.OBJECT,{}),a.opacity=b.ensureTypedArg(a.opacity,c.OBJECT,{}),a.size=b.ensureTypedArg(a.size,c.OBJECT,{}),a.angle=b.ensureTypedArg(a.angle,c.OBJECT,{}),a.wiggle=b.ensureTypedArg(a.wiggle,c.OBJECT,{}),a.maxAge=b.ensureTypedArg(a.maxAge,c.OBJECT,{}),a.onParticleSpawn&&console.warn("onParticleSpawn has been removed. Please set properties directly to alter values at runtime."),
this.uuid=THREE.Math.generateUUID(),this.type=b.ensureTypedArg(a.type,c.NUMBER,SPE.distributions.BOX),this.position={_value:b.ensureInstanceOf(a.position.value,THREE.Vector3,new THREE.Vector3),_spread:b.ensureInstanceOf(a.position.spread,THREE.Vector3,new THREE.Vector3),_spreadClamp:b.ensureInstanceOf(a.position.spreadClamp,THREE.Vector3,new THREE.Vector3),_distribution:b.ensureTypedArg(a.position.distribution,c.NUMBER,this.type),_randomise:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1),_radius:b.ensureTypedArg(a.position.radius,c.NUMBER,10),_radiusScale:b.ensureInstanceOf(a.position.radiusScale,THREE.Vector3,new THREE.Vector3(1,1,1)),_distributionClamp:b.ensureTypedArg(a.position.distributionClamp,c.NUMBER,0)},this.velocity={_value:b.ensureInstanceOf(a.velocity.value,THREE.Vector3,new THREE.Vector3),_spread:b.ensureInstanceOf(a.velocity.spread,THREE.Vector3,new THREE.Vector3),_distribution:b.ensureTypedArg(a.velocity.distribution,c.NUMBER,this.type),_randomise:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1)
},this.acceleration={_value:b.ensureInstanceOf(a.acceleration.value,THREE.Vector3,new THREE.Vector3),_spread:b.ensureInstanceOf(a.acceleration.spread,THREE.Vector3,new THREE.Vector3),_distribution:b.ensureTypedArg(a.acceleration.distribution,c.NUMBER,this.type),_randomise:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1)},this.drag={_value:b.ensureTypedArg(a.drag.value,c.NUMBER,0),_spread:b.ensureTypedArg(a.drag.spread,c.NUMBER,0),_randomise:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1)},this.wiggle={_value:b.ensureTypedArg(a.wiggle.value,c.NUMBER,0),_spread:b.ensureTypedArg(a.wiggle.spread,c.NUMBER,0)},this.rotation={_axis:b.ensureInstanceOf(a.rotation.axis,THREE.Vector3,new THREE.Vector3(0,1,0)),_axisSpread:b.ensureInstanceOf(a.rotation.axisSpread,THREE.Vector3,new THREE.Vector3),_angle:b.ensureTypedArg(a.rotation.angle,c.NUMBER,0),_angleSpread:b.ensureTypedArg(a.rotation.angleSpread,c.NUMBER,0),_static:b.ensureTypedArg(a.rotation["static"],c.BOOLEAN,!1),_center:b.ensureInstanceOf(a.rotation.center,THREE.Vector3,this.position._value.clone()),
_randomise:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1)},this.maxAge={_value:b.ensureTypedArg(a.maxAge.value,c.NUMBER,2),_spread:b.ensureTypedArg(a.maxAge.spread,c.NUMBER,0)},this.color={_value:b.ensureArrayInstanceOf(a.color.value,THREE.Color,new THREE.Color),_spread:b.ensureArrayInstanceOf(a.color.spread,THREE.Vector3,new THREE.Vector3),_randomise:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1)},this.opacity={_value:b.ensureArrayTypedArg(a.opacity.value,c.NUMBER,1),_spread:b.ensureArrayTypedArg(a.opacity.spread,c.NUMBER,0),_randomise:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1)},this.size={_value:b.ensureArrayTypedArg(a.size.value,c.NUMBER,1),_spread:b.ensureArrayTypedArg(a.size.spread,c.NUMBER,0),_randomise:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1)},this.angle={_value:b.ensureArrayTypedArg(a.angle.value,c.NUMBER,0),_spread:b.ensureArrayTypedArg(a.angle.spread,c.NUMBER,0),_randomise:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1)},this.particleCount=b.ensureTypedArg(a.particleCount,c.NUMBER,100),
this.duration=b.ensureTypedArg(a.duration,c.NUMBER,null),this.isStatic=b.ensureTypedArg(a.isStatic,c.BOOLEAN,!1),this.activeMultiplier=b.ensureTypedArg(a.activeMultiplier,c.NUMBER,1),this.direction=b.ensureTypedArg(a.direction,c.NUMBER,1),this.alive=b.ensureTypedArg(a.alive,c.BOOLEAN,!0),this.particlesPerSecond=0,this.activationIndex=0,this.attributeOffset=0,this.attributeEnd=0,this.age=0,this.activeParticleCount=0,this.group=null,this.attributes=null,this.paramsArray=null,this.resetFlags={position:b.ensureTypedArg(a.position.randomise,c.BOOLEAN,!1)||b.ensureTypedArg(a.radius.randomise,c.BOOLEAN,!1),velocity:b.ensureTypedArg(a.velocity.randomise,c.BOOLEAN,!1),acceleration:b.ensureTypedArg(a.acceleration.randomise,c.BOOLEAN,!1)||b.ensureTypedArg(a.drag.randomise,c.BOOLEAN,!1),rotation:b.ensureTypedArg(a.rotation.randomise,c.BOOLEAN,!1),rotationCenter:b.ensureTypedArg(a.rotation.randomise,c.BOOLEAN,!1),size:b.ensureTypedArg(a.size.randomise,c.BOOLEAN,!1),color:b.ensureTypedArg(a.color.randomise,c.BOOLEAN,!1),
opacity:b.ensureTypedArg(a.opacity.randomise,c.BOOLEAN,!1),angle:b.ensureTypedArg(a.angle.randomise,c.BOOLEAN,!1)},this.updateFlags={},this.updateCounts={},this.updateMap={maxAge:"params",position:"position",velocity:"velocity",acceleration:"acceleration",drag:"acceleration",wiggle:"params",rotation:"rotation",size:"size",color:"color",opacity:"opacity",angle:"angle"};for(var e in this.updateMap)this.updateMap.hasOwnProperty(e)&&(this.updateCounts[this.updateMap[e]]=0,this.updateFlags[this.updateMap[e]]=!1,this._createGetterSetters(this[e],e));this.bufferUpdateRanges={},this.attributeKeys=null,this.attributeCount=0,b.ensureValueOverLifetimeCompliance(this.color,d,d),b.ensureValueOverLifetimeCompliance(this.opacity,d,d),b.ensureValueOverLifetimeCompliance(this.size,d,d),b.ensureValueOverLifetimeCompliance(this.angle,d,d)},SPE.Emitter.constructor=SPE.Emitter,SPE.Emitter.prototype._createGetterSetters=function(a,b){"use strict";var c=this;for(var d in a)if(a.hasOwnProperty(d)){var e=d.replace("_","");
Object.defineProperty(a,e,{get:function(a){return function(){return this[a]}}(d),set:function(a){return function(d){var e=c.updateMap[b],f=this[a],g=SPE.valueOverLifetimeLength;"_rotationCenter"===a?(c.updateFlags.rotationCenter=!0,c.updateCounts.rotationCenter=0):"_randomise"===a?c.resetFlags[e]=d:(c.updateFlags[e]=!0,c.updateCounts[e]=0),c.group._updateDefines(),this[a]=d,Array.isArray(f)&&SPE.utils.ensureValueOverLifetimeCompliance(c[b],g,g)}}(d)})}},SPE.Emitter.prototype._setBufferUpdateRanges=function(a){"use strict";this.attributeKeys=a,this.attributeCount=a.length;for(var b=this.attributeCount-1;b>=0;--b)this.bufferUpdateRanges[a[b]]={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY}},SPE.Emitter.prototype._calculatePPSValue=function(a){"use strict";var b=this.particleCount;this.duration?this.particlesPerSecond=b/(a<this.duration?a:this.duration):this.particlesPerSecond=b/a},SPE.Emitter.prototype._setAttributeOffset=function(a){this.attributeOffset=a,this.activationIndex=a,
this.activationEnd=a+this.particleCount},SPE.Emitter.prototype._assignValue=function(a,b){"use strict";switch(a){case"position":this._assignPositionValue(b);break;case"velocity":case"acceleration":this._assignForceValue(b,a);break;case"size":case"opacity":this._assignAbsLifetimeValue(b,a);break;case"angle":this._assignAngleValue(b);break;case"params":this._assignParamsValue(b);break;case"rotation":this._assignRotationValue(b);break;case"color":this._assignColorValue(b)}},SPE.Emitter.prototype._assignPositionValue=function(a){"use strict";var b=SPE.distributions,c=SPE.utils,d=this.position,e=this.attributes.position,f=d._value,g=d._spread,h=d._distribution;switch(h){case b.BOX:c.randomVector3(e,a,f,g,d._spreadClamp);break;case b.SPHERE:c.randomVector3OnSphere(e,a,f,d._radius,d._spread.x,d._radiusScale,d._spreadClamp.x,d._distributionClamp||this.particleCount);break;case b.DISC:c.randomVector3OnDisc(e,a,f,d._radius,d._spread.x,d._radiusScale,d._spreadClamp.x)}},SPE.Emitter.prototype._assignForceValue=function(a,b){
"use strict";var c,d,e,f,g,h=SPE.distributions,i=SPE.utils,j=this[b],k=j._value,l=j._spread,m=j._distribution;switch(m){case h.BOX:i.randomVector3(this.attributes[b],a,k,l);break;case h.SPHERE:c=this.attributes.position.typedArray.array,g=3*a,d=c[g],e=c[g+1],f=c[g+2],i.randomDirectionVector3OnSphere(this.attributes[b],a,d,e,f,this.position._value,j._value.x,j._spread.x);break;case h.DISC:c=this.attributes.position.typedArray.array,g=3*a,d=c[g],e=c[g+1],f=c[g+2],i.randomDirectionVector3OnDisc(this.attributes[b],a,d,e,f,this.position._value,j._value.x,j._spread.x)}if("acceleration"===b){var n=i.clamp(i.randomFloat(this.drag._value,this.drag._spread),0,1);this.attributes.acceleration.typedArray.array[4*a+3]=n}},SPE.Emitter.prototype._assignAbsLifetimeValue=function(a,b){"use strict";var c,d=this.attributes[b].typedArray,e=this[b],f=SPE.utils;f.arrayValuesAreEqual(e._value)&&f.arrayValuesAreEqual(e._spread)?(c=Math.abs(f.randomFloat(e._value[0],e._spread[0])),d.setVec4Components(a,c,c,c,c)):d.setVec4Components(a,Math.abs(f.randomFloat(e._value[0],e._spread[0])),Math.abs(f.randomFloat(e._value[1],e._spread[1])),Math.abs(f.randomFloat(e._value[2],e._spread[2])),Math.abs(f.randomFloat(e._value[3],e._spread[3])));
},SPE.Emitter.prototype._assignAngleValue=function(a){"use strict";var b,c=this.attributes.angle.typedArray,d=this.angle,e=SPE.utils;e.arrayValuesAreEqual(d._value)&&e.arrayValuesAreEqual(d._spread)?(b=e.randomFloat(d._value[0],d._spread[0]),c.setVec4Components(a,b,b,b,b)):c.setVec4Components(a,e.randomFloat(d._value[0],d._spread[0]),e.randomFloat(d._value[1],d._spread[1]),e.randomFloat(d._value[2],d._spread[2]),e.randomFloat(d._value[3],d._spread[3]))},SPE.Emitter.prototype._assignParamsValue=function(a){"use strict";this.attributes.params.typedArray.setVec4Components(a,this.isStatic?1:0,0,Math.abs(SPE.utils.randomFloat(this.maxAge._value,this.maxAge._spread)),SPE.utils.randomFloat(this.wiggle._value,this.wiggle._spread))},SPE.Emitter.prototype._assignRotationValue=function(a){"use strict";this.attributes.rotation.typedArray.setVec3Components(a,SPE.utils.getPackedRotationAxis(this.rotation._axis,this.rotation._axisSpread),SPE.utils.randomFloat(this.rotation._angle,this.rotation._angleSpread),this.rotation._static?0:1),
this.attributes.rotationCenter.typedArray.setVec3(a,this.rotation._center)},SPE.Emitter.prototype._assignColorValue=function(a){"use strict";SPE.utils.randomColorAsHex(this.attributes.color,a,this.color._value,this.color._spread)},SPE.Emitter.prototype._resetParticle=function(a){"use strict";for(var b,c,d=this.resetFlags,e=this.updateFlags,f=this.updateCounts,g=this.attributeKeys,h=this.attributeCount-1;h>=0;--h)b=g[h],c=e[b],d[b]!==!0&&c!==!0||(this._assignValue(b,a),this._updateAttributeUpdateRange(b,a),c===!0&&f[b]===this.particleCount?(e[b]=!1,f[b]=0):1==c&&++f[b])},SPE.Emitter.prototype._updateAttributeUpdateRange=function(a,b){"use strict";var c=this.bufferUpdateRanges[a];c.min=Math.min(b,c.min),c.max=Math.max(b,c.max)},SPE.Emitter.prototype._resetBufferRanges=function(){"use strict";var a,b=this.bufferUpdateRanges,c=this.bufferUpdateKeys,d=this.bufferUpdateCount-1;for(d;d>=0;--d)a=c[d],b[a].min=Number.POSITIVE_INFINITY,b[a].max=Number.NEGATIVE_INFINITY},SPE.Emitter.prototype._onRemove=function(){
"use strict";this.particlesPerSecond=0,this.attributeOffset=0,this.activationIndex=0,this.activeParticleCount=0,this.group=null,this.attributes=null,this.paramsArray=null,this.age=0},SPE.Emitter.prototype._decrementParticleCount=function(){"use strict";--this.activeParticleCount},SPE.Emitter.prototype._incrementParticleCount=function(){"use strict";++this.activeParticleCount},SPE.Emitter.prototype._checkParticleAges=function(a,b,c,d){"use strict";for(var e,f,g,h,i=b-1;i>=a;--i)e=4*i,h=c[e],0!==h&&(g=c[e+1],f=c[e+2],1===this.direction?(g+=d,g>=f&&(g=0,h=0,this._decrementParticleCount())):(g-=d,0>=g&&(g=f,h=0,this._decrementParticleCount())),c[e]=h,c[e+1]=g,this._updateAttributeUpdateRange("params",i))},SPE.Emitter.prototype._activateParticles=function(a,b,c,d){"use strict";for(var e,f,g=this.direction,h=a;b>h;++h)e=4*h,0!=c[e]&&1!==this.particleCount||(this._incrementParticleCount(),c[e]=1,this._resetParticle(h),f=d*(h-a),c[e+1]=-1===g?c[e+2]-f:f,this._updateAttributeUpdateRange("params",h));
},SPE.Emitter.prototype.tick=function(a){"use strict";if(!this.isStatic){null===this.paramsArray&&(this.paramsArray=this.attributes.params.typedArray.array);var b=this.attributeOffset,c=b+this.particleCount,d=this.paramsArray,e=this.particlesPerSecond*this.activeMultiplier*a,f=this.activationIndex;if(this._resetBufferRanges(),this._checkParticleAges(b,c,d,a),this.alive===!1)return void(this.age=0);if(null!==this.duration&&this.age>this.duration)return this.alive=!1,void(this.age=0);var g=1===this.particleCount?f:0|f,h=Math.min(g+e,this.activationEnd),i=h-this.activationIndex|0,j=i>0?a/i:0;this._activateParticles(g,h,d,j),this.activationIndex+=e,this.activationIndex>c&&(this.activationIndex=b),this.age+=a}},SPE.Emitter.prototype.reset=function(a){"use strict";if(this.age=0,this.alive=!1,a===!0){for(var b,c=this.attributeOffset,d=c+this.particleCount,e=this.paramsArray,f=this.attributes.params.bufferAttribute,g=d-1;g>=c;--g)b=4*g,e[b]=0,e[b+1]=0;f.updateRange.offset=0,f.updateRange.count=-1,
f.needsUpdate=!0}return this},SPE.Emitter.prototype.enable=function(){"use strict";return this.alive=!0,this},SPE.Emitter.prototype.disable=function(){"use strict";return this.alive=!1,this},SPE.Emitter.prototype.remove=function(){"use strict";return null!==this.group?this.group.removeEmitter(this):console.error("Emitter does not belong to a group, cannot remove."),this};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/* harmony default export */ __webpack_exports__["a"] = (Keyboard);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);


class SkyeBoxControls {
	/**
	 *
	 * @param {Scene} scene
	 */
	constructor(scene) {
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._size = 1500;
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this.wSegments = 25;
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this.hSegments = 25;
		
		/**
		 *
		 * @type {Scene}
		 */
		this.scene = scene;
		
		let textureLoader = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].TextureLoader();
		this.textureFlare0 = textureLoader.load('textures/lensflare/lensflare0.png');
		this.textureFlare3 = textureLoader.load('textures/lensflare/lensflare3.png');
		this.textureSky = textureLoader.load('textures/skybox/003_space.jpg');
		
		this.position = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, -1500, -10000);
		
		this.sky = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Mesh();
		
		this.sky.renderOrder = -100000;
		
		this.initSky(this.textureSky);
		
		this.initLight(0.1, 0.4, 0.8, 1700, new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 1300, -100));
		
		this.scene.add(this.sky);
	}
	
	/**
	 *
	 * @param {number} h
	 * @param {number} s
	 * @param {number} l
	 * @param {number} size
	 * @param {Vector3} v
	 * @returns {LensFlare}
	 */
	initLight(h, s, l, size, v) {
		let light = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].PointLight(0xffffff, 1.4);
		light.color.setHSL(h, s, l);
		light.position.copy(v);
		this.sky.add(light);
		let flareColor = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(0xffffff);
		flareColor.setHSL(h, s, l + 0.5);
		
		let lensFlare = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].LensFlare(this.textureFlare0, size, 0.0, __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].AdditiveBlending, flareColor);
		lensFlare.add(this.textureFlare3, 60, 0.6, __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].AdditiveBlending);
		lensFlare.add(this.textureFlare3, 70, 0.7, __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].AdditiveBlending);
		lensFlare.add(this.textureFlare3, 120, 0.9, __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].AdditiveBlending);
		lensFlare.add(this.textureFlare3, 70, 1.0, __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].AdditiveBlending);
		
		lensFlare.customUpdateCallback = (object) => {
			let f, fl = object.lensFlares.length;
			let flare;
			let vecX = - object.positionScreen.x * 2;
			let vecY = - object.positionScreen.y * 2;
			for(f = 0; f < fl; f++) {
				flare = object.lensFlares[f];
				flare.x = object.positionScreen.x + vecX * flare.distance;
				flare.y = object.positionScreen.y + vecY * flare.distance;
				flare.rotation = 0;
			}
			object.lensFlares[2].y += 0.025;
			object.lensFlares[3].rotation = object.positionScreen.x * 0.5 + __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Math.degToRad(45);
		};
		
		lensFlare.position.copy(light.position);
		this.sky.add(lensFlare);
		return lensFlare;
	}
	
	/**
	 * Build sky box and add it to scene.
	 *
	 * @param {Texture} texture
	 * @returns {void}
	 */
	initSky(texture) {
		this.sky.material = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].MeshStandardMaterial({
			map: texture,
			side: __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].BackSide,
			depthWrite: false,
			roughness: 1,
			metalness: 0
		});
		
		this.sky.geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].SphereGeometry(this._size, this.wSegments, this.hSegments);
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {void}
	 */
	update(v) {
		this.sky.position.set(v.x, v.y, v.z);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (SkyeBoxControls);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particles_ships_ShipIncludes__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_FlyControls__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systems_Listener__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__particles_ships_Ship__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__particles_arsenal_ArsenalSlot__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__particles_charge_Charge__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_HelperPoints__ = __webpack_require__(17);













class Player extends __WEBPACK_IMPORTED_MODULE_0__User__["a" /* default */] {
	/**
	 *
	 * @param {SceneControls} sceneControls
	 * @param {boolean} isUser
	 * @param {string|number} id
	 */
	constructor(sceneControls, isUser, id) {
		super();
		
		/**
		 *
		 * @type {SceneControls}
		 * @private
		 */
		this._sceneControls = sceneControls;
		
		/**
		 *
		 * @type {Element}
		 */
		this.container = this._sceneControls.container;
		
		/**
		 *
		 * @type {boolean}
		 */
		this.isUser = isUser;
		
		/**
		 *
		 * @type {string|number}
		 */
		this.id = id;
		
		/**
		 *
		 * @type {string}
		 */
		this.shipKey = __WEBPACK_IMPORTED_MODULE_5__particles_ships_Ship__["a" /* default */].I_EXPLORER_KEY;
		
		/**
		 * Disable player
		 *
		 * @type {boolean}
		 * @private
		 */
		this._isEnabled = false;
		
		/**
		 *
		 * @type {?Ship}
		 */
		this.ship = null;
		
		/**
		 *
		 * @type {KeyboardControls}
		 */
		this.keyboards = new __WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__["a" /* default */](this.container);
		
		if (isUser) {
			this.keyboards.initEvents();
		}
		
		/**
		 *
		 * @type {Listener}
		 * @private
		 */
		this._events = new __WEBPACK_IMPORTED_MODULE_4__systems_Listener__["a" /* default */]();
		
		/**
		 * Current position
		 *
		 * @type {Vector3}
		 */
		this.position = new __WEBPACK_IMPORTED_MODULE_8__api__["b" /* THREE */].Vector3(
			0,// * (2.0 * Math.random() - 1.0),
			0,// * (2.0 * Math.random() - 1.0),
			0//400 * (2.0 * Math.random() - 1.0)
		);
		
		/**
		 * Current rotation
		 *
		 * @type {Euler}
		 */
		this.rotation = new __WEBPACK_IMPORTED_MODULE_8__api__["b" /* THREE */].Euler();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.lookAt = new __WEBPACK_IMPORTED_MODULE_8__api__["b" /* THREE */].Vector3(0, 0, 0);
		
		/**
		 *
		 * @type {?FlyControls}
		 */
		this.flyControls = null;
		
		/**
		 *
		 * @type {Array.<Charge>}
		 */
		this.charges = [];
		
		
		// this.point = HelperPoints.get().setPointTo(this._sceneControls.scene);
	}

    /**
	 *
     * @param {Charge} value
     * @returns {Player}
     */
	addCharge(value) {
        this.charges.push(value);
        return this;
	}

    /**
     *
     * @param {Charge} value
     * @returns {Player}
     */
    removeCharge(value) {
		for (let i = 0; i < this.charges.length; i++) {
			let charge = this.charges[i];
			if (charge.id === value.id) {
                charge.removeModelFromScene(this._sceneControls.scene);
                this.charges.splice(i, 1);
				break;
			}
		}
		return this;
    }

    /**
	 *
     * @returns {Array.<Charge>}
     */
    getCharges() {
		return this.charges;
    }

    /**
	 *
     * @param {string} value
     * @returns {?Charge}
     */
    getChargeById(value) {
        let res = this.charges.find((charge) => {
            return charge.id === value;
		});
        return res ? res : null;
	}
	
	/**
	 *
	 * @param {string} value
	 * @returns {Player}
	 */
	updateShipKey(value) {
		this.shipKey = value;
		return this;
	}
	
	/**
	 *
	 * @param {PlayerInfo} data
	 * @return {Player}
	 */
	setSocketInfo(data) {
		this.position.x = data['p']['x'];
		this.position.y = data['p']['y'];
		this.position.z = data['p']['z'];
		
		this.rotation.x = data['r']['x'];
		this.rotation.y = data['r']['y'];
		this.rotation.z = data['r']['z'];
		this.rotation.order = data['r']['o'];
		
		this.updateShipKey(data['sk']);
		return this;
	}
	
	/**
	 *
	 * @returns {boolean}
	 */
	get isEnabled() {
		return this._isEnabled;
	}
	
	/**
	 *
	 * @param {boolean} hide
	 * @return {Player}
	 */
	cursor(hide) {
		this.container.style.cursor = hide ? 'none'  : '';
		return this;
	}
	
	/**
	 *
	 * @param {boolean} value
	 * @param {boolean} tornOonListener
	 * @returns {Player}
	 */
	enable(value, tornOonListener = true) {
		this._isEnabled = value;
		if (tornOonListener) {
			this._events.callListeners(value ? Player.EVENT_ENABLED : Player.EVENT_DISABLED);
		}
		return this;
	}
	
	/**
	 * @callback playerListener
	 */
	
	/**
	 *
	 * @param {string} type
	 * @param {playerListener} listener
	 * @returns {Player}
	 */
	addEventListener(type, listener) {
		this._events.addEventListener(type, listener);
		return this;
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get EVENT_ENABLED() {
		return 'EVENT_ENABLED';
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get EVENT_DISABLED() {
		return 'EVENT_DISABLED';
	}
	
	/**
	 * Gets element model
	 *
	 * @returns {Mesh|Group}
	 */
	getModel() {
		return this.ship.model;
	}
	
	/**
	 * Gets element aim
	 *
	 * @returns {Group}
	 */
	getAim() {
		return this.ship.aim.model;
	}
	
	/**
	 *
	 * @return {Player}
	 */
	prepareModel() {
		this.ship = __WEBPACK_IMPORTED_MODULE_1__particles_ships_ShipIncludes__["a" /* default */].get().getSpecificObject(this.shipKey);
		if (this.isUser) {
			this.ship.aim.draw();
		} else {
			this.flyControls = new __WEBPACK_IMPORTED_MODULE_3__controls_FlyControls__["a" /* default */](this.getModel(), this);
		}
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} target
	 */
	shot(target) {
		let slots = this.ship.arsenalSlots;
		this._sceneControls.scene.updateMatrixWorld();
		
		for (let slotName in slots) {
			if (slots.hasOwnProperty(slotName) && slots[slotName] instanceof __WEBPACK_IMPORTED_MODULE_6__particles_arsenal_ArsenalSlot__["a" /* default */]) {
				/**
				 * @type {ArsenalSlot}
				 */
				let slot = slots[slotName];
                /**
				 * @type {Charge}
                 */
				let charge = slot.arsenal.getCharge().prepare(target);
				
				let vector = new __WEBPACK_IMPORTED_MODULE_8__api__["b" /* THREE */].Vector3();
				for (let el of this.ship.model.children) {
					if (el.position.x === slot.position.x && el.position.y === slot.position.y && el.position.z === slot.position.z) {
						vector.setFromMatrixPosition(el.matrixWorld);
						// Sets default Charge position
						charge.setPosition(vector);
					}
				}

				charge
					.addModelToScene(this._sceneControls.scene)
					.setListenerCollision((charge, particle) => {
                        charge
                            .setExplosionToScene(this._sceneControls.scene)
                            .removeModelFromScene(this._sceneControls.scene);

                        // TODO: This is a temporary action
                        this._sceneControls.destroyObject(particle);

                        if (particle instanceof __WEBPACK_IMPORTED_MODULE_5__particles_ships_Ship__["a" /* default */]) {
                            // TODO: This is a player -  do something
						}

						if (this._sceneControls.isTarget(particle)) {
                            this._sceneControls.hideTarget();
						}
					})
                    .setListenerRemoveCharge((charge, type) => {
                        this.removeCharge(charge);
                        if (type === __WEBPACK_IMPORTED_MODULE_7__particles_charge_Charge__["a" /* default */].REMOVE_TYPE_COLLISION) {
                            charge.removeExplosionFromScene(this._sceneControls.scene);
						}
                    });


				this.charges.push(charge);
			}
		}
	}
	
	/**
	 *
	 * @param {number} delta
	 */
	update(delta) {
		if (!this.isUser) {
			this.ship.model.position.copy(this.position);
			this.ship.model.rotation.copy(this.rotation);
			this.flyControls.updatePlayerControl(delta);
		}

		let charges = this.getCharges();
		let needRemove = [];
		
		if (charges.length > 0) {
			for (let i = 0; i < charges.length; i++) {
                charges[i].update(delta, this._sceneControls.getObjects());
			}
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class User {
	constructor() {
	
	}
}

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_I_EngineIM20__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_ParticleClassI__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arsenal_ArsenalIncludes__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__arsenal_Arsenal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__(0);







class ShipExplorerI extends __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* default */] {
	constructor() {
		super('ShipExplorerI', __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* default */].I_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_2__classes_ParticleClassI__["a" /* default */]();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new __WEBPACK_IMPORTED_MODULE_1__engine_I_EngineIM20__["a" /* default */]();
		
		/**
		 *
		 * @type {string}
		 */
		this.basePath = 'models/explorer/';
		
		/**
		 *
		 * @type {string}
		 */
		this.objFileName = 'explorer.obj';
		
		/**
		 *
		 * @type {string}
		 */
		this.mtlFileName = 'explorer.mtl';
		
		let arsenal = __WEBPACK_IMPORTED_MODULE_3__arsenal_ArsenalIncludes__["a" /* default */].get();
		
		this.arsenalSlots.slot_a.arsenal = arsenal.getSpecificObject(__WEBPACK_IMPORTED_MODULE_4__arsenal_Arsenal__["a" /* default */].I_A20_KEY);
		this.arsenalSlots.slot_a.enabled = true;
		this.arsenalSlots.slot_a.rotation.set(Math.PI / 2, 0, 0);
		this.arsenalSlots.slot_a.position.set(-2.3, -1.7, -4.5);
		
		this.arsenalSlots.slot_b.arsenal = arsenal.getSpecificObject(__WEBPACK_IMPORTED_MODULE_4__arsenal_Arsenal__["a" /* default */].I_A20_KEY);
		this.arsenalSlots.slot_b.enabled = true;
		this.arsenalSlots.slot_b.rotation.set(Math.PI / 2, 0, 0);
		this.arsenalSlots.slot_b.position.set(2.3, -1.7, -4.5);
		
		this.addEventListener(__WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* default */].EVENT_MODEL_UPDATE, (model) => {
			model.children[0].rotateOnAxis(new __WEBPACK_IMPORTED_MODULE_5__api__["b" /* THREE */].Vector3(0, 1, 0), Math.PI);
			model.children[0].position.y = -2;
			this.updateArsenal();
		});
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ShipExplorerI);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AimSignature__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(14);





class Aim extends __WEBPACK_IMPORTED_MODULE_1__Particle__["a" /* default */] {
	constructor() {
		super('Aim', Aim.AIM_KEY);
		
		/**
		 *
		 * @type {Group}
		 */
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Group();
		this.model.position.z = -5;
		this.model.rotation.x = Math.PI / 2;
		
		/**
		 *
		 * @type {number}
		 */
		this.scale = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0.0008, 0.0008, 0.0008);
		
		/**
		 *
		 * @type {number}
		 */
		this.countArrows = 4;
		
		/**
		 *
		 * @type {number}
		 */
		this.radius = 10;
		
		/**
		 *
		 * @type {number}
		 */
		this.color = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* COLOR_DEFAULT */];
		
		/**
		 *
		 * @type {AimSignature}
		 */
		this.signatureLeftTop = new __WEBPACK_IMPORTED_MODULE_2__AimSignature__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__AimSignature__["a" /* default */].SIDE_TL);
		
		/**
		 *
		 * @type {AimSignature}
		 */
		this.signatureLeftBottom = new __WEBPACK_IMPORTED_MODULE_2__AimSignature__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__AimSignature__["a" /* default */].SIDE_BL);
		
		/**
		 *
		 * @type {AimSignature}
		 */
		this.signatureRightTop = new __WEBPACK_IMPORTED_MODULE_2__AimSignature__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__AimSignature__["a" /* default */].SIDE_TR);
		
		/**
		 *
		 * @type {AimSignature}
		 */
		this.signatureRightBottom = new __WEBPACK_IMPORTED_MODULE_2__AimSignature__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__AimSignature__["a" /* default */].SIDE_BR);
	}
	
	/**
	 * Build aim
	 *
	 * @returns {Aim}
	 */
	draw() {
		let center = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 0, 0),
			axis = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(1, 0, 0);
		
		let i = 0,
			x = 0,
			z = 0,
			angle = 0,
			half = Math.PI / 2,
			step = Math.PI * 2 / this.countArrows;
		
		while (i < this.countArrows) {
			x = center.x + this.radius * Math.cos(angle);
			z = center.z + this.radius * Math.sin(angle);
			let mesh = this._drawArrow();
			mesh.position.set(x, 0, z);
			mesh.lookAt(center);
			mesh.rotateOnAxis(axis, -half);
			this.model.add(mesh);
			angle += step;
			i++;
		}
		
		this.signatureRightTop
			.setText(0, 'distance')
			.setColor(this.color)
			.hide();
		
		this.model.add(this.signatureRightTop.model);
		
		this.signatureLeftTop
			.setText(0, 'speed')
			.setColor(this.color);
		
		this.model.add(this.signatureLeftTop.model);
		
		this.signatureLeftBottom
			.setText(0)
			.setColor(this.color)
			.hide();
		
		this.model.add(this.signatureLeftBottom.model);
		
		this.signatureRightBottom
			.setText(0)
			.setColor(this.color)
			.hide();
		
		this.model.add(this.signatureRightBottom.model);
		
		this.model.scale.copy(this.scale);
		
		return this;
	}
	
	/**
	 *
	 * @param {number} color
	 * @returns {Aim}
	 */
	setColor(color) {
		for (let model of this.model.children) {
			model.material.color = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(color);
			model.material.needsUpdate = true;
		}
		return this;
	}
	
	/**
	 *
	 * @returns {Mesh}
	 * @private
	 */
	_drawArrow() {
		let w = 10 / 2; // 10 - it is width of arrow
		let l = 90 / 2; // 90 - it is length of arrow
		let tw = 10; 	// 10 - distance from side arrow to tail
		let tl = 40; 	// 45 - it is tail length
		let x = 0,
			y = 0;
		
		let triangleShape = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Shape();
		triangleShape.moveTo(x, y);
		triangleShape.lineTo(x + w, y + l);
		triangleShape.lineTo(x + tw, y + l);
		triangleShape.lineTo(x + tw, y + tl);
		triangleShape.lineTo(x - tw, y + tl);
		triangleShape.lineTo(x - tw, y + l);
		triangleShape.lineTo(x - w, y + l);
		triangleShape.moveTo(x, y);
		
		let geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].ShapeGeometry(triangleShape);
		let material = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].MeshBasicMaterial({
			color: this.color,
			overdraw: 0.5,
			side: __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].DoubleSide
		});
		return new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Mesh(geometry, material);
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static get AIM_KEY() {
		return 'AIM_KEY';
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Aim);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_TextCanvas__ = __webpack_require__(55);




class AimSignature extends __WEBPACK_IMPORTED_MODULE_1__Particle__["a" /* default */] {
	/**
	 *
	 * @param {number} side - possible values constants of current class
	 */
	constructor(side) {
		super('AimSignature', AimSignature.AIM_SIGNATURE_KEY);
		
		/**
		 *
		 * @type {number}
		 */
		this.side = side;
		
		/**
		 *
		 * @type {Line}
		 */
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Line();
		
		/**
		 *
		 * @type {number}
		 */
		this.color = 0xFFFFFF;
		
		/**
		 *
		 * @type {number}
		 */
		this.moveDistance = 300;
		
		/**
		 *
		 * @type {?string}
		 */
		this.label = null;
		
		/**
		 *
		 * @type {?string}
		 */
		this.msg = null;
		
		/**
		 *
		 * @type {TextCanvas}
		 */
		this.text = new __WEBPACK_IMPORTED_MODULE_2__text_TextCanvas__["a" /* default */]();
		
		/**
		 *
		 * @type {boolean}
		 * @private
		 */
		this._revertText = false;
	}
	
	/**
	 *
	 * @returns {AimSignature}
	 */
	hide() {
		this.model.material.transparent = true;
		this.model.material.opacity = 0;
		this.text.model.material.opacity = 0;
		return this;
	}
	
	/**
	 *
	 * @returns {AimSignature}
	 */
	show() {
		this.model.material.transparent = false;
		this.model.material.opacity = 1;
		this.text.model.material.opacity = 1;
		return this;
	}
	
	/**
	 *
	 * @param {string|number} msg
	 * @param {?string|number} [label]
	 * @returns {AimSignature}
	 */
	setText(msg, label = null) {
		this.msg = msg;
		this.label = label;
		this._moveTo(this.side);
		return this;
	}
	
	/**
	 *
	 * @param {string|number} msg
	 * @returns {AimSignature}
	 */
	update(msg) {
		this.msg = msg;
		this.text.rewrite(this._getLabel());
		return this;
	}
	
	/**
	 *
	 * @param {number} color
	 * @returns {AimSignature}
	 */
	setColor(color) {
		this.model.material.color = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color(color);
		this.model.material.needsUpdate = true;
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {AimSignature}
	 */
	setPosition(v) {
		this.model.position.copy(v);
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {AimSignature}
	 */
	setRotation(v) {
		this.model.rotation.set(v.x, v.y, v.z);
		return this;
	}
	
	/**
	 *
	 * @returns {AimSignature}
	 * @private
	 */
	_draw() {
		let x = 0,
			y = 0,
			ax = 65,
			ay = 60,
			bx = 1024,
			by = 60;
		
		let geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Geometry();
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(x, y, 0));
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(x + ax, x + ay, 0));
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(x + bx, x + by, 0));
		
		this.model.geometry = geometry;
		return this;
	}
	
	/**
	 *
	 * @returns {string}
	 * @private
	 */
	_getLabel() {
		
		if (this.label !== null && this.msg !== null) {
			return this._revertText ? (this.msg + ' :' + this.label) : (this.label + ': ' + this.msg);
		} else if (this.label !== null && this.msg === null) {
			return this.label;
		} else if (this.label === null && this.msg !== null) {
			return this.msg;
		}
		return '';
	}
	
	/**
	 *
	 * @param {number} side - possible values constants of current class
	 * @returns {AimSignature}
	 * @private
	 */
	_moveTo(side) {
		switch (side) {
			case AimSignature.SIDE_TL:
				this
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(- this.moveDistance, 0, - this.moveDistance))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(Math.PI / 2, 0, Math.PI));
				
				this.text
					.alignLeft()
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(500, 100, 0))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, Math.PI, 0))
					.write(this._getLabel());
				
				break;
			case AimSignature.SIDE_TR:
				this
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(this.moveDistance, 0, - this.moveDistance))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(- Math.PI / 2, 0, 0));
				
				this._revertText = true;
				
				this.text
					.alignRight()
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(500, 100, 0))
					.write(this._getLabel());
				
				break;
			case AimSignature.SIDE_BL:
				this
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(- this.moveDistance, 0, this.moveDistance))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(- Math.PI / 2, 0, Math.PI));
				
				this.text
					.alignLeft()
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(500, 10, 0))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(Math.PI, Math.PI, 0))
					.write(this._getLabel());
				break;
			case AimSignature.SIDE_BR:
				this
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(this.moveDistance, 0, this.moveDistance))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(Math.PI / 2, 0, 0));
				
				this._revertText = true;
				
				this.text
					.alignRight()
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(500, 10, 0))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(Math.PI, 0, 0))
					.write(this._getLabel());
				break;
		}
		this.model.add(this.text.model);
		this._draw();
		return this;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get SIDE_TL() {
		return 0;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get SIDE_TR() {
		return 1;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get SIDE_BL() {
		return 2;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get SIDE_BR() {
		return 3;
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static get AIM_SIGNATURE_KEY() {
		return 'AIM_SIGNATURE_KEY';
	}
}

/* harmony default export */ __webpack_exports__["a"] = (AimSignature);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_FontLoader__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(0);



class TextCanvas {
	constructor() {
		
		/**
		 *
		 * @type {number}
		 */
		this.size = 50;
		
		/**
		 *
		 * @type {string}
		 */
		this.font = 'Audiowide';
		
		/**
		 *
		 * @type {Mesh}
		 */
		this.model = new __WEBPACK_IMPORTED_MODULE_1__api__["b" /* THREE */].Mesh();
		
		/**
		 *
		 * @type {string}
		 */
		this.color = '#F5F5F5';
		
		/**
		 *
		 * @type {string}
		 */
		this.bold = 'bold';
		
		/**
		 *
		 * @type {string}
		 * @private
		 */
		this._align = 'left';
		
		/**
		 *
		 * @type {Element}
		 */
		this.canvas = document.createElement('canvas');
		this.setWidth(1024);
		this.setHeight(128);
		
		/**
		 *
		 * @type {CanvasRenderingContext2D}
		 */
		this.context = this.canvas.getContext('2d');
	}
	
	/**
	 *
	 * @returns {TextCanvas}
	 */
	alignCenter() {
		this._align = 'center';
		return this;
	}
	
	/**
	 *
	 * @returns {TextCanvas}
	 */
	alignLeft() {
		this._align = 'left';
		return this;
	}
	
	/**
	 *
	 * @returns {TextCanvas}
	 */
	alignRight() {
		this._align = 'right';
		return this;
	}
	
	/**
	 *
	 * @param {number} width
	 * @returns {TextCanvas}
	 */
	setWidth(width) {
		this.canvas.width = width;
		return this;
	}
	
	/**
	 *
	 * @param {number} height
	 * @returns {TextCanvas}
	 */
	setHeight(height) {
		this.canvas.height = height;
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {TextCanvas}
	 */
	setPosition(v) {
		this.model.position.copy(v);
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {TextCanvas}
	 */
	setRotation(v) {
		this.model.rotation.set(v.x, v.y, v.z);
		return this;
	}
	
	/**
	 *
	 * @param {string|number} text
	 * @returns {Mesh}
	 */
	write(text) {
		this.model.geometry = new __WEBPACK_IMPORTED_MODULE_1__api__["b" /* THREE */].PlaneGeometry(this.canvas.width, this.canvas.height, 1, 1);
		this._prepareBackground()._updateText(text);
		this.model.material = new __WEBPACK_IMPORTED_MODULE_1__api__["b" /* THREE */].MeshBasicMaterial({
			transparent: true,
			side: __WEBPACK_IMPORTED_MODULE_1__api__["b" /* THREE */].DoubleSide,
			map: new __WEBPACK_IMPORTED_MODULE_1__api__["b" /* THREE */].Texture(this.canvas)
		});
		
		this.model.material.map.needsUpdate = true;
		return this.model;
	}
	
	/**
	 * @param {string|number} text
	 * @returns {TextCanvas}
	 */
	rewrite(text) {
		this._updateText(text);
		this.model.material.map.needsUpdate = true;
		return this;
	}
	
	/**
	 *
	 * @returns {TextCanvas}
	 * @private
	 */
	_prepareBackground() {
		let context = this.canvas.getContext('2d');
		context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		return this;
	}
	
	/**
	 *
	 * @param {string|number} text
	 * @returns {TextCanvas}
	 * @private
	 */
	_updateText(text) {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.font = this.bold + ' ' + this.size + 'px ' + this.font;
		this.context.fillStyle = this.color;
		
		let x = 0,
			y = this.canvas.height / 2;
		
		switch (this._align) {
			case 'right':
			case 'end':
				x = this.canvas.width;
				break;
			case 'center':
				x = this.canvas.width / 2;
				break;
		}
		
		this.context.textAlign = this._align;
		this.context.fillText(text, x, y);
		return this;
	}
	
	// /**
	//  *
	//  * @param {string} text
	//  * @returns {TextCanvas}
	//  */
	// write3D(text) {
	// 	this.model.geometry = new THREE.TextGeometry(
	// 		text,
	// 		{
	// 			font: FontLoader.font,
	// 			size: this.size,
	// 			height: 1
	// 		}
	// 	);
	// 	this.model.material = new THREE.MeshBasicMaterial({color: this.color});
	// 	return this;
	// }
	
	
}

/* harmony default export */ __webpack_exports__["a"] = (TextCanvas);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArsenalSlot__ = __webpack_require__(15);


class ArsenalSlots {
	constructor() {
		
		/**
		 *
		 * @type {ArsenalSlot}
		 */
		this.slot_a = new __WEBPACK_IMPORTED_MODULE_0__ArsenalSlot__["a" /* default */]();
		
		/**
		 *
		 * @type {ArsenalSlot}
		 */
		this.slot_b = new __WEBPACK_IMPORTED_MODULE_0__ArsenalSlot__["a" /* default */]();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ArsenalSlots);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Arsenal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(0);




class ArsenalIA20 extends __WEBPACK_IMPORTED_MODULE_0__Arsenal__["a" /* default */] {
	
	constructor() {
		super('ArsenalIA20', __WEBPACK_IMPORTED_MODULE_0__Arsenal__["a" /* default */].I_A20_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__["a" /* default */]();
		
		let geometry = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].CylinderGeometry(0.2, 0.2, 1, 32);
		let material = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].MeshPhongMaterial({color: 0x666666});
		this.setModel(new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Mesh(geometry, material));
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ArsenalIA20);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Charge__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_HelperPoints__ = __webpack_require__(17);




class ChargeIA20 extends __WEBPACK_IMPORTED_MODULE_0__Charge__["a" /* default */] {
	constructor() {
		super('ChargeIA20', __WEBPACK_IMPORTED_MODULE_0__Charge__["a" /* default */].I_C20_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__["a" /* default */]();
		
		/**
		 *
		 * @type {Object3D}
		 */
		this.model = __WEBPACK_IMPORTED_MODULE_2__helpers_HelperPoints__["a" /* default */].get().getPoint().model;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ChargeIA20);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);


class HelperPoint {
	constructor() {
		/**
		 *
		 * @type {Mesh}
		 */
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Mesh();
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		// this._color = 0x666666;
		this._color = 0xFF0000;
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._size = 1;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {HelperPoint}
	 */
	setPosition(v) {
		this.model.position.copy(v);
		return this;
	}
	
	/**
	 *
	 * @param {number} value
	 * @returns {HelperPoint}
	 */
	setColor(value) {
		this._color = value;
		return this;
	}
	
	/**
	 *
	 * @param {number} value
	 * @returns {HelperPoint}
	 */
	setSize(value) {
		this._size = value;
		return this;
	}
	
	init() {
		this.model.geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].SphereGeometry(this._size, 15, 15);
		this.model.material = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].MeshBasicMaterial({color: this._color});
	}
}

/* harmony default export */ __webpack_exports__["a"] = (HelperPoint);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_II_EngineIIM20__ = __webpack_require__(61);




class ShipExplorerII extends __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* default */] {
	constructor() {
		super('ShipExplorerII', __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* default */].II_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__["a" /* default */]();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new __WEBPACK_IMPORTED_MODULE_2__engine_II_EngineIIM20__["a" /* default */]();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ShipExplorerII);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__ = __webpack_require__(30);



class EngineIIM20 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["a" /* default */] {
	constructor() {
		super('EngineIIM20', __WEBPACK_IMPORTED_MODULE_0__Engine__["a" /* default */].II_M20_KEY);
		
		/**
		 *
		 * @type {ParticleClassII}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__["a" /* default */]();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (EngineIIM20);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_III_EngineIIIM20__ = __webpack_require__(63);




class ShipExplorerIII extends __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* default */] {
	constructor() {
		super('ShipExplorerIII', __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* default */].III_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__["a" /* default */]();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new __WEBPACK_IMPORTED_MODULE_2__engine_III_EngineIIIM20__["a" /* default */]();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ShipExplorerIII);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__ = __webpack_require__(31);



class EngineIIIM20 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["a" /* default */] {
	constructor() {
		super('EngineIIIM20', __WEBPACK_IMPORTED_MODULE_0__Engine__["a" /* default */].III_M20_KEY);
		
		/**
		 *
		 * @type {ParticleClassIII}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__["a" /* default */]();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (EngineIIIM20);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particles_decoration_target_Target__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particles_decoration_target_TargetDirection__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(0);




const TARGET_ANGLE_SIZE = 5;

class TargetControls {
	
	/**
	 *
	 * @param {SceneControls} sceneControls
	 */
	constructor(sceneControls) {
		/**
		 *
		 * @type {SceneControls}
		 * @private
		 */
		this._sceneControls = sceneControls;
		
		/**
		 *
		 * @type {Camera}
		 * @private
		 */
		this._scene = this._sceneControls.scene;
		
		/**
		 *
		 * @type {Camera}
		 * @private
		 */
		this._camera = this._sceneControls.camera;
		
		/**
		 *
		 * @type {?Particle}
		 * @private
		 */
		this._selected = null;
		
		/**
		 *
		 * @type {Box3}
		 * @private
		 */
		this._box = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* THREE */].Box3();
		
		/**
		 *
		 * @type {Target}
		 * @private
		 */
		this._target = new __WEBPACK_IMPORTED_MODULE_0__particles_decoration_target_Target__["a" /* default */](this._sceneControls);
		this._target.model.position.z = -200;
		this._scene.add(this._target.model);
		
		/**
		 *
		 * @type {TargetDirection}
		 * @private
		 */
		this._targetDirection = new __WEBPACK_IMPORTED_MODULE_1__particles_decoration_target_TargetDirection__["a" /* default */](this._sceneControls);
		
		/**
		 *
		 * @type {?targetListener}
		 * @private
		 */
		this._updateListener = null;
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._size = 0;
	}
	
	/**
	 * @param {Particle}
	 * @param {Target}
	 * @param {Box3} box
	 * @callback targetListener
	 */
	
	/**
	 *
	 * @param {Array.<Particle>} objects
	 * @param {number} direction - possible values (-1|1) (-1 previous), (1 next)
	 * @param {targetListener} [onChangeListener]
	 * @param {targetListener} [onUpdateListener]
	 * @returns {TargetControls}
	 */
	changeTarget(objects, direction, onChangeListener, onUpdateListener) {
		this._updateListener = onUpdateListener;
		let len = objects.length;
		if (len === 0) {
			return this;
		}
		
		if (!this._selected && direction === -1) {
			// Last object
			this.setSelected(objects[len - 1], onChangeListener);
		} else if (!this._selected && direction === 1) {
			// First object
			this.setSelected(objects[0], onChangeListener);
		} else if (this._selected && direction === -1) {
			let isObject = false;
			for (let i = 0; i < len; i++) {
				if (this._selected === objects[i]) {
					let key = (i === 0) ? len - 1 : i - 1;
					this.setSelected(objects[key], onChangeListener);
					isObject = true;
					break;
				}
			}
			if (!isObject) {
				this.setSelected(null, onChangeListener);
			}
		} else if (this._selected && direction === 1) {
			let isObject = false;
			for (let i = 0; i < len; i++) {
				if (this._selected === objects[i]) {
					let key = (i === len - 1) ? 0 : i + 1;
					this.setSelected(objects[key], onChangeListener);
					isObject = true;
					break;
				}
			}
			if (!isObject) {
				this.setSelected(null, onChangeListener);
			}
		}
		return this;
	}

    /**
	 *
     * @returns {?Particle}
     */
	getSelectedParticle() {
		return this._selected;
	}
	
	/**
	 *
	 * @param {?Particle} object
	 * @param {targetListener} [onChangeListener]
	 * @returns {TargetControls}
	 */
	setSelected(object, onChangeListener) {
		this._selected = object;
		if (this._selected) {
			let box = this._box.setFromObject(this._selected.model);
			this._size = box.getSize();
			let x = this._size.x,
				y = this._size.y,
				z = this._size.z;
			
			let size = Math.max(Math.max(x, y), z);
			
			this._target
				.setSize(TARGET_ANGLE_SIZE, size - TARGET_ANGLE_SIZE)
				.draw();
			
			this._target.model.lookAt(this._camera.position);
			this._target.model.position.copy(this._selected.model.position);
			this._targetDirection.draw();
			
		} else {
			this._target.remove();
			this._targetDirection.remove();
		}
		
		if (onChangeListener) {
			onChangeListener(this._selected, this._target, this._size);
		}
		return this;
	}
	
	update() {
		if (this._selected) {
			this._target.model.lookAt(this._camera.position);
			this._target.model.rotation.z = this._camera.rotation.z;
			
			this._targetDirection
				.update(this._selected.model);
			
			if (this._updateListener) {
				this._updateListener(this._selected, this._target, this._size);
			}
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (TargetControls);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(14);



class Target {
	constructor() {
		
		/**
		 *
		 * @type {string}
		 */
		this.color = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* COLOR_WHITE */];
		
		/**
		 *
		 * @type {Vector}
		 */
		this.size = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector2(5, 95);
		
		/**
		 *
		 * @type {Group}
		 */
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Group();
		
		/**
		 *
		 * @type {null}
		 * @private
		 */
		this._tempModel = null;
	}
	
	/**
	 *
	 * @param {number} x
	 * @param {number} [y]
	 * @returns {Target}
	 */
	setSize(x, y) {
		this.size.x = x;
		this.size.y = y ? y : x;
		return this;
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	remove() {
		this.model.remove(this._tempModel);
		this._tempModel = null;
		return this;
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	draw() {
		if (this._tempModel) {
			this.remove();
		}
		let distance = this.size.x + this.size.y + this.size.x;
		
		this._tempModel = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Object3D();
		this._tempModel.position.x = - (distance / 2);
		this._tempModel.position.y = distance / 2;
		
		let cornerTL = this._drawCorner();
		// Top left
		this._tempModel.add(cornerTL);
		// Top Right
		let cornerTR = cornerTL.clone();
		cornerTR.rotation.y = Math.PI;
		cornerTR.position.x = distance;
		this._tempModel.add(cornerTR);
		// Bottom Left
		let cornerBL = cornerTL.clone();
		cornerBL.rotation.x = Math.PI;
		cornerBL.position.y = - distance;
		this._tempModel.add(cornerBL);
		// Bottom Right
		let cornerBR = cornerTL.clone();
		cornerBR.rotation.x = Math.PI;
		cornerBR.rotation.y = Math.PI;
		cornerBR.position.x = distance;
		cornerBR.position.y = - distance;
		this._tempModel.add(cornerBR);
		
		this.model.add(this._tempModel);
		return this;
	}
	
	_drawCorner() {
		let x = 0,
			y = - this.size.x;
		
		let geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Geometry();
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(x, y, 0));
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(x, y + this.size.x, 0));
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(x + this.size.x, y + this.size.x, 0));
		
		let material = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].MeshBasicMaterial({
			color: this.color
		});
		
		return new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Line(geometry, material);
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	hide() {
		this.model.visible = false;
		return this;
	}
	
	/**
	 *
	 * @returns {Target}
	 */
	show() {
		this.model.visible = true;
		return this;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Target);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(14);



/**
 *
 * @type {number}
 */
const HALF_PI = Math.PI / 2;

/**
 *
 * @type {number}
 */
const TARGET_CONTROLS_RAD = Math.PI / 20;

class TargetDirection {
	/**
	 *
	 * @param {SceneControls} sceneControls
	 */
	constructor(sceneControls) {
		
		/**
		 *
		 * @type {SceneControls}
		 */
		this._sceneControls = sceneControls;
		
		/**
		 *
		 * @type {Object3D}
		 */
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Group();
		this.model.position.z = -5;
		this.model.scale.copy(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0.0008, 0.0008, 0.0008));
		this._sceneControls.camera.add(this.model);
		
		/**
		 *
		 * @type {boolean}
		 * @private
		 */
		this._isExists = false;
		
		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._color = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* COLOR_WHITE */];
	}
	
	/**
	 *
	 * @param {number} value
	 * @returns {TargetDirection}
	 */
	setColor(value) {
		for (let element of this.model.children) {
			element.material.color.setHex(value);
		}
		return this;
	}
	
	/**
	 *
	 * @returns {TargetDirection}
	 */
	draw() {
		if (this.model.children.length === 0) {
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 200, 0));
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 230, 0));
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 260, 0));
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 290, 0));
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 320, 0));
		}
		this._isExists = true;
		return this;
	}
	
	/**
	 *
	 * @param {Vector3} p
	 * @returns {void}
	 * @private
	 */
	_drawArrow(p) {
		let material = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].LineBasicMaterial({color: this._color});
		let geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Geometry();
		geometry.vertices.push(
			new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(-30, 0, 0),
			new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(0, 30, 0),
			new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector3(30, 0, 0)
		);
		
		let line = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Line(geometry, material);
		line.position.copy(p);
		this.model.add(line);
	}
	
	/**
	 *
	 * @returns {TargetDirection}
	 */
	remove() {
		this.hide();
		this._isExists = false;
		return this;
	}
	
	/**
	 *
	 * @returns {TargetDirection}
	 */
	hide() {
		this.model.visible = false;
		return this;
	}
	
	/**
	 *
	 * @returns {TargetDirection}
	 */
	show() {
		if (this._isExists) {
			this.model.visible = true;
		}
		return this;
	}
	
	/**
	 *
	 * @param {Object3D} object
	 */
	update(object) {
		if (this._isExists) {
			let dir = this._sceneControls.getCameraDirection();
			let cameraAngle = dir.angleTo(object.position);
			
			if (cameraAngle < TARGET_CONTROLS_RAD) {
				this.hide();
			} else {
				this.show();
				let v = this._sceneControls.toScreenPosition(object);
				let c = this._sceneControls.getCenterScreenPosition();
				let a = Math.atan2(v.y - c.y, v.x - c.x);
				this.model.rotation.z = - a - HALF_PI;

				if (cameraAngle > HALF_PI) {
					this.model.rotation.z = - a + HALF_PI;
				}
			}
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (TargetDirection);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
    "p": {"x": -4627.551972525051, "y": -4425.650552058329, "z": 1910.1005345383771},
    "r": {"_x": 2.3441155674350487, "_y": 1.5335907698656035, "_z": 2.755619306446835, "_order": "XYZ"},
    "id": "68008B1F-1F0C-4EAB-B46F-A581A9B91808"
}, {
    "p": {"x": 1641.548558159731, "y": -1633.0666803459048, "z": 4790.2063391473075},
    "r": {"_x": 2.7667934201151896, "_y": 2.3506762641863044, "_z": 2.290559561657622, "_order": "XYZ"},
    "id": "B52895AE-1AA9-462D-850C-407BD3D475E8"
}, {
    "p": {"x": 505.6795825965943, "y": 4406.892851528716, "z": 1023.1860428350958},
    "r": {"_x": 1.6374221213074551, "_y": 2.0960676191992094, "_z": 2.5867864525898105, "_order": "XYZ"},
    "id": "72F2EA9B-AE35-4E37-AC7D-C65711A8DE32"
}, {
    "p": {"x": 1026.1075502999506, "y": 2709.7527857760383, "z": 3800.384056564725},
    "r": {"_x": 0.1537351621424306, "_y": 2.213621693942969, "_z": 2.1523027383548174, "_order": "XYZ"},
    "id": "D4EC41D4-2643-43D0-AAE0-54612F087A7B"
}, {
    "p": {"x": -576.6821635459585, "y": -2618.3561923432962, "z": 1675.8568392013485},
    "r": {"_x": 2.2758542210292507, "_y": 0.0409544306304806, "_z": 2.3454422337360894, "_order": "XYZ"},
    "id": "95A817B4-22C3-4AC3-B852-9737A32D6345"
}, {
    "p": {"x": -1074.5808868820973, "y": -1965.7654522974187, "z": -2022.844273295976},
    "r": {"_x": 2.167533372509425, "_y": 1.0754789140268344, "_z": 1.246323715802507, "_order": "XYZ"},
    "id": "8D6FF4CA-E318-41E7-85F6-2FFA47A6F0EE"
}, {
    "p": {"x": 302.89846678489107, "y": -3686.3555899334788, "z": 2901.5610369902633},
    "r": {"_x": 1.21333563735844, "_y": 0.8489520764100266, "_z": 0.13056613201723494, "_order": "XYZ"},
    "id": "C4C38EE6-E96E-4281-9470-E2365EEEEC63"
}, {
    "p": {"x": -1606.0628513355657, "y": 2355.042573166066, "z": 3243.7043694599256},
    "r": {"_x": 0.9886725945879247, "_y": 1.2963942203206031, "_z": 2.2037870131647717, "_order": "XYZ"},
    "id": "49D40905-FC8B-484D-8635-D4DBA90EE173"
}, {
    "p": {"x": 1357.5016030559684, "y": -4509.069121642124, "z": -2599.1286983091145},
    "r": {"_x": 0.18544769247728468, "_y": 1.3262818697887246, "_z": 3.081167101214656, "_order": "XYZ"},
    "id": "EB393E87-0F58-4522-AC46-E982D430D2FA"
}, {
    "p": {"x": 1792.470244970823, "y": 147.23850391442195, "z": -3280.649672806304},
    "r": {"_x": 2.029706749762451, "_y": 3.1090212306315705, "_z": 0.00380624105161906, "_order": "XYZ"},
    "id": "40FC020C-2F3E-42F9-85BC-A7ED85D43FB7"
}, {
    "p": {"x": -2692.545037562466, "y": 1189.7223766478903, "z": -2599.129791065331},
    "r": {"_x": 1.5860500515495757, "_y": 2.732030784625873, "_z": 1.55085386876676, "_order": "XYZ"},
    "id": "106DE9D3-92D5-4511-A856-3D4AFB144DAF"
}, {
    "p": {"x": -1904.0724146325206, "y": -373.269967447738, "z": 569.1285090763198},
    "r": {"_x": 1.5387574842658975, "_y": 2.626615672291206, "_z": 0.965367207890459, "_order": "XYZ"},
    "id": "71453116-330C-45FC-A6E4-2D79C4C377D8"
}, {
    "p": {"x": 3651.5364695148423, "y": 1911.5209615471817, "z": 4616.9487901732255},
    "r": {"_x": 2.963669751865265, "_y": 2.7043741880615393, "_z": 1.8259131009839045, "_order": "XYZ"},
    "id": "0387F6B8-D18B-4848-8DE2-19DDCC5FCC97"
}, {
    "p": {"x": 4383.782716315121, "y": -2213.9514875956247, "z": -3161.0037897837497},
    "r": {"_x": 1.104200082749697, "_y": 1.4473457745475002, "_z": 2.7682103667505333, "_order": "XYZ"},
    "id": "4EEB786F-B16C-42DF-BB9A-A4349D38AFA0"
}, {
    "p": {"x": -3582.815449949057, "y": 3880.9718622389423, "z": 3933.24509605387},
    "r": {"_x": 0.9276086957748718, "_y": 2.088077151419467, "_z": 1.123718829186898, "_order": "XYZ"},
    "id": "5ACFA9E1-0127-4084-91D1-900CFBBF5C88"
}, {
    "p": {"x": 684.2332626516012, "y": 3303.064960005835, "z": 1518.7827830420986},
    "r": {"_x": 3.01793460802564, "_y": 0.7124636349816049, "_z": 0.1277279707645035, "_order": "XYZ"},
    "id": "F1747B5A-B5F3-4D79-9163-E708C1538AB3"
}, {
    "p": {"x": 1693.2029923522318, "y": 4479.665915531245, "z": -2147.4385235877126},
    "r": {"_x": 2.9586803637594086, "_y": 1.2059295472389753, "_z": 2.391493162867087, "_order": "XYZ"},
    "id": "75FC4C5D-E608-43B7-8871-F7E02AD07651"
}, {
    "p": {"x": -3176.195389151615, "y": -678.091587334111, "z": 2213.2966384483057},
    "r": {"_x": 1.4838425393114787, "_y": 0.5377960548092101, "_z": 1.1511074444149003, "_order": "XYZ"},
    "id": "CE5F067D-1C1C-47A6-874F-E6E9ADEAF60F"
}, {
    "p": {"x": -304.2172714054625, "y": 261.73600909035645, "z": 551.1385388921219},
    "r": {"_x": 1.9777550169379254, "_y": 0.4746768624605373, "_z": 2.2670942811870827, "_order": "XYZ"},
    "id": "F890B56D-5FDE-4152-B649-D2EDFFB7689D"
}, {
    "p": {"x": -1109.5280985119227, "y": 3867.692135183378, "z": 3348.62519795738},
    "r": {"_x": 2.403764261935315, "_y": 0.2621302629512279, "_z": 2.8756295965836185, "_order": "XYZ"},
    "id": "B4A9E382-8E7A-4FF4-8AB8-CD07B02BF0F5"
}, {
    "p": {"x": 1895.374691462428, "y": 253.01517455048605, "z": -4347.994647717279},
    "r": {"_x": 1.5397807623432507, "_y": 0.19030889491317346, "_z": 2.852125610834904, "_order": "XYZ"},
    "id": "7DEA6E04-5A13-4EB2-A777-BDA3C2DE604D"
}, {
    "p": {"x": 4409.11549092213, "y": 3960.573622031447, "z": -4513.569371535864},
    "r": {"_x": 1.5917448954931246, "_y": 0.17970705197942408, "_z": 0.2900195797542418, "_order": "XYZ"},
    "id": "248C4A2B-06DF-455A-B7C8-67AE2DE5498C"
}, {
    "p": {"x": 689.6279997535437, "y": -2617.890404656804, "z": -3705.1998521101414},
    "r": {"_x": 2.7544913307427406, "_y": 0.8804880164414911, "_z": 0.765774688284555, "_order": "XYZ"},
    "id": "5C10BC25-43BB-4052-BED1-EBE9A597D22D"
}, {
    "p": {"x": 3052.5009398782286, "y": -2061.734859808606, "z": 1036.97757213828},
    "r": {"_x": 0.9653491601549247, "_y": 0.1650633725526518, "_z": 1.7770483171383498, "_order": "XYZ"},
    "id": "104F39E2-F0A3-4818-A73F-D98B52E9FE1D"
}, {
    "p": {"x": -2673.667312865391, "y": -504.4564559420861, "z": -4188.368464831018},
    "r": {"_x": 0.4007343098951341, "_y": 0.49860708740720455, "_z": 2.288057787020358, "_order": "XYZ"},
    "id": "A3412752-7DD4-4269-8D4F-CDEF581C079C"
}, {
    "p": {"x": 4370.137687477969, "y": -965.9743982510815, "z": 928.6136721068506},
    "r": {"_x": 1.5067867791579201, "_y": 0.630391459941441, "_z": 3.036490525717244, "_order": "XYZ"},
    "id": "1BA76C70-5D64-4A3F-B965-8F8C30BE4059"
}, {
    "p": {"x": 771.111895986234, "y": -3434.091100972121, "z": 660.1381154060037},
    "r": {"_x": 1.8820819517154461, "_y": 2.22297508824697, "_z": 0.28382314446199386, "_order": "XYZ"},
    "id": "4C3FB6F2-439C-4A91-8DD9-DD3169474DDB"
}, {
    "p": {"x": 1861.1973810676984, "y": 609.8396531754347, "z": 993.1567687384656},
    "r": {"_x": 1.7153056632522137, "_y": 1.2959926077191093, "_z": 0.478795833546541, "_order": "XYZ"},
    "id": "B6E76196-C4ED-4D4E-929B-D454EC4A592D"
}, {
    "p": {"x": 2244.808095745423, "y": 2910.5074465928737, "z": 1417.4444481630433},
    "r": {"_x": 0.3329207449487799, "_y": 0.8779620981635267, "_z": 2.515446813457271, "_order": "XYZ"},
    "id": "733114D7-808A-4A71-B087-7701F24A3D1A"
}, {
    "p": {"x": -2623.3691298611016, "y": -713.4522729054593, "z": 310.36127076354836},
    "r": {"_x": 1.2712205955489553, "_y": 1.6592495238925196, "_z": 2.4677235922348095, "_order": "XYZ"},
    "id": "4F4368F0-D722-4D26-91D8-AC5EB8DE9A97"
}, {
    "p": {"x": -3654.3151852009623, "y": -573.0831682859838, "z": 3918.020749456297},
    "r": {"_x": 0.08076185624319925, "_y": 1.9952519275634852, "_z": 2.3356204253467174, "_order": "XYZ"},
    "id": "348CFD8A-FDED-4CF3-ACB5-5410DB54EDCF"
}, {
    "p": {"x": 1596.6597462583554, "y": 3167.453539708098, "z": -3977.0711391277946},
    "r": {"_x": 0.8184326669260203, "_y": 1.7835880806458049, "_z": 2.0633953617464886, "_order": "XYZ"},
    "id": "93E1392D-553F-4CB3-A977-9EF57C140505"
}, {
    "p": {"x": -1523.962682539195, "y": -602.1115381315024, "z": 4924.011365896717},
    "r": {"_x": 0.49182114071484445, "_y": 0.22641310192487688, "_z": 1.8710856715318105, "_order": "XYZ"},
    "id": "660CEF19-064A-4FEC-A7C9-01A8933400AA"
}, {
    "p": {"x": -3875.1490307726067, "y": 1891.8725167233586, "z": -211.9204833401467},
    "r": {"_x": 2.8834160805964433, "_y": 0.9391180920240729, "_z": 2.823204973852258, "_order": "XYZ"},
    "id": "E9B53219-FF6C-47D4-AB70-E8115F1DBEA9"
}, {
    "p": {"x": -3014.279674753173, "y": 2991.1676897377324, "z": -3843.8852441050144},
    "r": {"_x": 0.2624392482134405, "_y": 1.6286458450093744, "_z": 3.065768215021907, "_order": "XYZ"},
    "id": "2635D520-1559-4ACA-BFF0-63E853EB4FC3"
}, {
    "p": {"x": 4109.84520646529, "y": -4896.6321593048815, "z": -1396.2057117768989},
    "r": {"_x": 0.6671465950206988, "_y": 2.8926746646347903, "_z": 2.6699164513163995, "_order": "XYZ"},
    "id": "DDCB4318-D698-4A48-999B-DCD74B844FAD"
}, {
    "p": {"x": -1175.3614837339744, "y": -4480.909588468636, "z": 773.5776353949309},
    "r": {"_x": 1.8258048830396303, "_y": 1.209322658885386, "_z": 2.3864703982838753, "_order": "XYZ"},
    "id": "A5BBD6ED-C3EF-4E60-8A32-F3CD12142E76"
}, {
    "p": {"x": -3908.547652466765, "y": -4421.364877655138, "z": 3073.5839828067046},
    "r": {"_x": 1.2942820324101039, "_y": 0.9139483248835378, "_z": 3.1275308002815843, "_order": "XYZ"},
    "id": "33C907F2-FCB3-41D4-81E8-36DFBBDBA5EE"
}, {
    "p": {"x": 111.21809732800747, "y": -3592.3939438960283, "z": 2807.067245684858},
    "r": {"_x": 2.3558210664489008, "_y": 1.5682498548076864, "_z": 0.8703346548580452, "_order": "XYZ"},
    "id": "9850C6AC-5EDB-47F6-9E96-6E587BF51226"
}, {
    "p": {"x": 1703.5839386409468, "y": 312.5900305731477, "z": -2178.280767367562},
    "r": {"_x": 0.5280596548510185, "_y": 2.3730032815948765, "_z": 2.8272804540162584, "_order": "XYZ"},
    "id": "838062D6-2D19-4324-8F96-60582245559F"
}, {
    "p": {"x": 2260.743048033307, "y": 2186.911546854793, "z": -4778.585394387036},
    "r": {"_x": 0.23093160462794957, "_y": 1.3626432102026136, "_z": 0.059419033582692245, "_order": "XYZ"},
    "id": "0D2A2B93-4FE8-41C2-A153-2BE3EE24BBA9"
}, {
    "p": {"x": 1329.2763795604246, "y": 2009.159552322002, "z": 2732.8654484424387},
    "r": {"_x": 2.354005373479824, "_y": 2.155820789683814, "_z": 2.8127665054141744, "_order": "XYZ"},
    "id": "2EA421E7-011B-4ABC-9201-F34599BB5934"
}, {
    "p": {"x": -4953.894028812667, "y": -2891.342584145433, "z": -4655.859707707046},
    "r": {"_x": 3.0552488878734416, "_y": 2.649501990806639, "_z": 0.5733891037185158, "_order": "XYZ"},
    "id": "E230804C-D7A0-4BC9-9F5A-B810C4F6CDC2"
}, {
    "p": {"x": 2490.9121255259015, "y": 3428.695569601137, "z": 76.79209716649149},
    "r": {"_x": 2.8765247165577104, "_y": 3.0515257417091943, "_z": 1.8926546115497602, "_order": "XYZ"},
    "id": "8E797EC9-E0B1-4DCC-AF2C-11DC59DD74C2"
}, {
    "p": {"x": -1546.736916628755, "y": -1376.8243989621976, "z": 2964.2459182367943},
    "r": {"_x": 1.3504663447906742, "_y": 0.25368339690774205, "_z": 2.317338343555535, "_order": "XYZ"},
    "id": "A5E1B663-3C95-4B93-A916-659D66FC505A"
}, {
    "p": {"x": 2130.7919874626323, "y": -2361.567654486201, "z": 2888.345991457968},
    "r": {"_x": 1.6139417648941765, "_y": 0.19826614264349543, "_z": 1.9119924762350557, "_order": "XYZ"},
    "id": "4D9E995C-A811-4B01-B18A-0C2657F7A497"
}, {
    "p": {"x": 1623.4664689041333, "y": -4423.415475487957, "z": -1482.037204788904},
    "r": {"_x": 0.6028212532110986, "_y": 0.7995644840973538, "_z": 2.026874695835341, "_order": "XYZ"},
    "id": "E7F78D38-A554-409E-A4D5-BF6F079F666D"
}, {
    "p": {"x": 979.2318040499471, "y": 149.68605426535885, "z": -3937.0073955978846},
    "r": {"_x": 0.7703258195565815, "_y": 0.6678100539388414, "_z": 2.2413353407079044, "_order": "XYZ"},
    "id": "815CBCC5-EA96-4BD5-A600-BAE58F146BD4"
}, {
    "p": {"x": -2794.753124805458, "y": 482.0898516596772, "z": -4581.768939605308},
    "r": {"_x": 2.7901669451177513, "_y": 1.8424265622758278, "_z": 1.747526747297673, "_order": "XYZ"},
    "id": "30F78331-4B16-4BD1-BCF6-C1C06FA45137"
}, {
    "p": {"x": 2632.6242826855937, "y": -1695.8007836715506, "z": 1564.2773217987883},
    "r": {"_x": 2.1375478664579037, "_y": 1.597578638701829, "_z": 2.8157456707162316, "_order": "XYZ"},
    "id": "BA9F08FB-BF86-4673-ABDB-CCC5E011D060"
}, {
    "p": {"x": -2736.449915561252, "y": 4546.7496237683445, "z": -676.6436123286624},
    "r": {"_x": 1.5565219754017336, "_y": 2.9405322299306205, "_z": 2.546091133142288, "_order": "XYZ"},
    "id": "40D058E4-AAFF-4613-8D46-4EC564CCE9FD"
}, {
    "p": {"x": -1734.1538069456597, "y": 3257.1384408253666, "z": -2665.15756642016},
    "r": {"_x": 0.14429994265737608, "_y": 0.659654579888483, "_z": 0.259933723875444, "_order": "XYZ"},
    "id": "C02F5AB1-06B4-43D4-BC23-77218693FC0C"
}, {
    "p": {"x": 2814.022041462669, "y": -3968.616880030693, "z": -4041.344637048756},
    "r": {"_x": 3.0050908224685022, "_y": 1.138176099147759, "_z": 2.797291302159073, "_order": "XYZ"},
    "id": "C1276BFD-FAB7-4A4B-BEE5-8AB19865983B"
}, {
    "p": {"x": 947.8136621397271, "y": 352.4363962437427, "z": -806.1092137056503},
    "r": {"_x": 1.8796847013946092, "_y": 1.2650662844926455, "_z": 2.9059277312827994, "_order": "XYZ"},
    "id": "53A0426A-BFF5-4A86-8224-F533BDD374CC"
}, {
    "p": {"x": 4178.5158939592, "y": -3623.3897841834996, "z": -546.6964430842891},
    "r": {"_x": 0.13765801122482918, "_y": 2.487078773960573, "_z": 0.17727639723120306, "_order": "XYZ"},
    "id": "26303CC6-7C84-4FCB-8591-673EC2512B0B"
}, {
    "p": {"x": -2246.7886354902134, "y": 2267.6343481400463, "z": -1678.4347655901156},
    "r": {"_x": 0.6062896284819617, "_y": 0.5392432358117498, "_z": 1.7555438492173696, "_order": "XYZ"},
    "id": "64D9917D-C6C7-4A51-B337-2DBD842216AA"
}, {
    "p": {"x": -3324.6693125399497, "y": 1438.1376852938522, "z": -4471.805293259159},
    "r": {"_x": 1.8753327854223674, "_y": 2.9988224829875083, "_z": 1.923560500497781, "_order": "XYZ"},
    "id": "E6FB4522-F127-42CB-9144-F3B2394DA153"
}, {
    "p": {"x": 1449.4114619828324, "y": 1053.9684118705738, "z": 1721.5905193921221},
    "r": {"_x": 2.294032263253616, "_y": 2.943723788759287, "_z": 0.9802520106597985, "_order": "XYZ"},
    "id": "55E19BB4-862B-49AE-8621-0BD8EEF66D9C"
}, {
    "p": {"x": 3811.4634574011166, "y": -1291.4423733541103, "z": -1598.6145928430017},
    "r": {"_x": 1.8002182545270662, "_y": 0.739476116313801, "_z": 2.0407322421527927, "_order": "XYZ"},
    "id": "9B194B38-66FA-42FD-AF15-2334CDDE14A9"
}, {
    "p": {"x": 4868.996712127003, "y": -1023.8211101320616, "z": -2222.5938972778113},
    "r": {"_x": 0.5867185500932554, "_y": 2.052144873808946, "_z": 1.7634622495706138, "_order": "XYZ"},
    "id": "4E7DCA2D-996C-4DA7-8311-CADA0DDC6C19"
}, {
    "p": {"x": -3770.461056135448, "y": 4424.511522788231, "z": 2470.0819480941873},
    "r": {"_x": 2.6896053375466766, "_y": 2.5670451426341048, "_z": 0.4263804392066957, "_order": "XYZ"},
    "id": "4894B583-C573-4484-B287-A01B37D7D83A"
}, {
    "p": {"x": 2680.109003599669, "y": 193.9560354352987, "z": -3290.8384791515255},
    "r": {"_x": 2.070385335872965, "_y": 1.5836771228625335, "_z": 1.1001276934760174, "_order": "XYZ"},
    "id": "72465C44-2652-4FE0-A110-E651D3116C6A"
}, {
    "p": {"x": 2496.5275521848575, "y": -823.0125407099976, "z": -4021.291045639628},
    "r": {"_x": 0.9082542927597266, "_y": 2.931925551413565, "_z": 0.7706356749468549, "_order": "XYZ"},
    "id": "22E02F09-40BC-4BCB-96CF-AE873C10D193"
}, {
    "p": {"x": 3751.247495559982, "y": 2026.517408691053, "z": -4800.011733136999},
    "r": {"_x": 1.005637507823064, "_y": 2.7234162509812174, "_z": 3.1169041939440545, "_order": "XYZ"},
    "id": "D5EB9566-3B65-4FBB-B0CC-E6F7B1677558"
}, {
    "p": {"x": 4023.5348855526286, "y": 4682.624737023395, "z": -3048.879358692622},
    "r": {"_x": 2.199344358701866, "_y": 0.6114050734606266, "_z": 1.9481327971340037, "_order": "XYZ"},
    "id": "7A8B2A9D-E3C7-41B3-9FFD-75059FF1AE84"
}, {
    "p": {"x": 2799.818998377004, "y": -1757.9754881797705, "z": -1196.5241794909987},
    "r": {"_x": 1.179200712451726, "_y": 2.685696980466174, "_z": 1.21662499793532, "_order": "XYZ"},
    "id": "4C0633DB-EF96-4682-B433-9AF4097520EE"
}, {
    "p": {"x": 819.3748378977662, "y": 1040.6974082110244, "z": 2481.515083763688},
    "r": {"_x": 0.15646645106259985, "_y": 2.3373333621886765, "_z": 0.7746087811615687, "_order": "XYZ"},
    "id": "1CEDEF91-A048-423A-BA28-DA230EF865E8"
}, {
    "p": {"x": 469.19879607434376, "y": -3184.5626242734215, "z": -3169.867258147261},
    "r": {"_x": 1.4719746057225183, "_y": 2.8917584165414483, "_z": 2.427972811776097, "_order": "XYZ"},
    "id": "7A779EF5-70E3-4E95-9C32-02CD0DE1A49F"
}, {
    "p": {"x": -3488.61747830941, "y": -1494.2802751131867, "z": 4616.41222783433},
    "r": {"_x": 1.9725053342874312, "_y": 0.6233145937258826, "_z": 2.8772450708481436, "_order": "XYZ"},
    "id": "0260F15E-EE44-44E0-81C9-3BC40399CE63"
}, {
    "p": {"x": -4189.17718642499, "y": -2511.767108498291, "z": -677.8392073985362},
    "r": {"_x": 2.1253815095025024, "_y": 0.25602177293878214, "_z": 2.402775256929882, "_order": "XYZ"},
    "id": "4AE0D88B-D19F-423B-AA71-A720459A53FE"
}, {
    "p": {"x": 1525.8113085334246, "y": 2814.39813729184, "z": 3234.82433043395},
    "r": {"_x": 2.3610258859499367, "_y": 1.8105704367058144, "_z": 1.2391550321080629, "_order": "XYZ"},
    "id": "FF744C23-4D2E-4315-9568-BB1411208B23"
}, {
    "p": {"x": 4636.762881864993, "y": -402.5777742741732, "z": -4233.17974789958},
    "r": {"_x": 0.24009103930685433, "_y": 2.6037216551077407, "_z": 1.3967853580437446, "_order": "XYZ"},
    "id": "1A323E69-56A6-4C7C-8159-D131655E0BDF"
}, {
    "p": {"x": -1607.0045602159655, "y": 316.3197721084332, "z": -4321.170904725004},
    "r": {"_x": 0.2689658796415411, "_y": 0.13481914982344784, "_z": 1.2567300783185065, "_order": "XYZ"},
    "id": "7754123A-4DC2-4D4B-9C05-270861BE148C"
}, {
    "p": {"x": 2764.6781836661007, "y": 811.1352721511378, "z": 3575.6397849459877},
    "r": {"_x": 1.1523553521416325, "_y": 1.2298342197508527, "_z": 0.5247317706761843, "_order": "XYZ"},
    "id": "2D0A0EE4-1A3A-405A-90DF-995EE9B7B00E"
}, {
    "p": {"x": 108.38522106922044, "y": -2381.880743601077, "z": 4724.5470067526285},
    "r": {"_x": 2.1514946003373314, "_y": 0.0827129834674929, "_z": 0.1335687977674064, "_order": "XYZ"},
    "id": "0C821B7B-2AB6-4CC7-B477-4FE82BB0EE2E"
}, {
    "p": {"x": 4127.148326716499, "y": 1576.714683754108, "z": 379.54838721194983},
    "r": {"_x": 3.0073738019808642, "_y": 2.501099358314519, "_z": 2.1305801534977684, "_order": "XYZ"},
    "id": "F3036278-3524-4C78-ACEC-D6799DF6F0B1"
}, {
    "p": {"x": 1390.4204590024171, "y": -4079.6780658394982, "z": 2528.5559091062073},
    "r": {"_x": 2.304542822729293, "_y": 0.7296206731824373, "_z": 2.836806350654529, "_order": "XYZ"},
    "id": "FC5982A8-0253-427A-9A1A-404101CD2F4C"
}, {
    "p": {"x": -2442.790762130556, "y": -3420.603453719806, "z": -1698.5101584214467},
    "r": {"_x": 1.975738235285103, "_y": 1.828666961810754, "_z": 0.6366009916846662, "_order": "XYZ"},
    "id": "248EA45B-8763-49C9-A996-6CBBA8B85428"
}, {
    "p": {"x": -3920.98593928506, "y": 2346.363665284972, "z": 2632.166588186766},
    "r": {"_x": 2.102537097467655, "_y": 0.6726188614616189, "_z": 1.631178082609621, "_order": "XYZ"},
    "id": "6020D0F2-D040-44C9-AD26-472DBF1DDA83"
}, {
    "p": {"x": -4531.598517925142, "y": -1633.493420910761, "z": 2957.4676402596187},
    "r": {"_x": 1.9002448832760948, "_y": 1.564965318654201, "_z": 2.6933998990354846, "_order": "XYZ"},
    "id": "8DE6B643-09CE-42AE-8A78-78AC3D8B1FDA"
}, {
    "p": {"x": -65.2104010884047, "y": -1201.1691742250764, "z": -2254.691253132122},
    "r": {"_x": 0.3240086144404713, "_y": 2.364070347594275, "_z": 1.8951997654219095, "_order": "XYZ"},
    "id": "CE2B3066-2340-4EA9-BDA3-A93CB3BBAA40"
}, {
    "p": {"x": 1257.207363543109, "y": -2545.873002121888, "z": 2766.3801050351776},
    "r": {"_x": 1.3815306007509165, "_y": 3.1003724649560023, "_z": 0.010101027956512562, "_order": "XYZ"},
    "id": "7048314D-51F1-46B5-9C55-712F58F39B14"
}, {
    "p": {"x": 4389.416307373186, "y": -2791.3417544967965, "z": -3828.879953998623},
    "r": {"_x": 1.954463128296613, "_y": 0.311075119399852, "_z": 1.8367708822417448, "_order": "XYZ"},
    "id": "1D371681-D53C-4CB8-9A96-35A15B2F0047"
}, {
    "p": {"x": -3224.937543453359, "y": 1669.7988772513206, "z": -3543.557320032449},
    "r": {"_x": 0.6676442980548655, "_y": 2.369685150117347, "_z": 1.896170255909383, "_order": "XYZ"},
    "id": "529886B1-C40C-48DB-BD15-E10BE8465CC6"
}, {
    "p": {"x": -2394.4680526341754, "y": -4418.724305381847, "z": 1293.3207839300787},
    "r": {"_x": 2.78580881053826, "_y": 0.39090851087235357, "_z": 0.5116210923750245, "_order": "XYZ"},
    "id": "260599F7-B4D5-4574-9A0E-10365EB643C2"
}, {
    "p": {"x": -2742.5255103708723, "y": 4437.209268418381, "z": 2221.71788126605},
    "r": {"_x": 3.0453073956431806, "_y": 2.9784234447793803, "_z": 1.0734575923658174, "_order": "XYZ"},
    "id": "7FE29CDB-62B3-4F57-B0A7-5710550591E6"
}, {
    "p": {"x": -2403.8605509026456, "y": 436.00490058646415, "z": 2755.369492922004},
    "r": {"_x": 0.26297552769191374, "_y": 0.16242193749863076, "_z": 0.8976636979573837, "_order": "XYZ"},
    "id": "05310320-A758-4D17-8115-9A7BF2F34D56"
}, {
    "p": {"x": -769.670525375803, "y": 3919.226350935916, "z": 2783.976570125628},
    "r": {"_x": 2.395099456898861, "_y": 1.2275979323847634, "_z": 0.4688268107008633, "_order": "XYZ"},
    "id": "E9308FCE-B847-4772-B1CA-198CF0A56C0C"
}, {
    "p": {"x": 2442.0559522276044, "y": 4421.178907771675, "z": 3648.0525909419594},
    "r": {"_x": 3.035776461142332, "_y": 2.976589016342549, "_z": 2.43358797173826, "_order": "XYZ"},
    "id": "281D91DC-110F-4A1E-818B-AFE173F1370B"
}, {
    "p": {"x": 2364.7617631970475, "y": 3408.4998561410694, "z": -462.24552038926834},
    "r": {"_x": 1.3660716116638667, "_y": 3.0386245583056257, "_z": 1.7288547782288974, "_order": "XYZ"},
    "id": "934321BE-9243-4794-B719-80D67B6FA9FF"
}, {
    "p": {"x": -3062.9671837130613, "y": 372.67322369263, "z": -4158.628894224236},
    "r": {"_x": 0.07632358510415448, "_y": 1.1515186412851466, "_z": 0.014258452044784998, "_order": "XYZ"},
    "id": "0C72434D-0B40-4903-9400-7F74F795FA70"
}, {
    "p": {"x": -309.92400082252124, "y": 3342.5811727106857, "z": 1044.7671459256446},
    "r": {"_x": 2.6789420562225064, "_y": 0.5671265018277318, "_z": 0.7265337876157092, "_order": "XYZ"},
    "id": "0EA477A3-0A7F-46DC-B472-4191983F7DC5"
}, {
    "p": {"x": -2613.4199678856153, "y": -3312.794648312041, "z": -630.1371319464333},
    "r": {"_x": 2.4564910351079914, "_y": 2.377807446927131, "_z": 0.3917685617096184, "_order": "XYZ"},
    "id": "9D364E87-6C1E-461C-AEFE-9B1C27FFC4A7"
}, {
    "p": {"x": -1625.8843596562067, "y": 28.967376868365147, "z": 3587.1251415680663},
    "r": {"_x": 2.364736846302774, "_y": 0.6708247323032522, "_z": 2.796517590819002, "_order": "XYZ"},
    "id": "B92B15D8-0FE0-4B07-A650-DCBE0E99A233"
}, {
    "p": {"x": -2883.2603394662624, "y": 420.1914666595963, "z": -2126.31825114852},
    "r": {"_x": 0.635715370443902, "_y": 0.36814820651112373, "_z": 1.9620843794126988, "_order": "XYZ"},
    "id": "CE5DAF27-4D9F-4FC5-99F9-D7D00835F47B"
}, {
    "p": {"x": -1203.3845779053643, "y": -628.2580307891461, "z": 2148.289353793913},
    "r": {"_x": 1.04380353696579, "_y": 2.357538676138426, "_z": 2.557600847951572, "_order": "XYZ"},
    "id": "22C6FA3B-5124-45BF-866B-0C3F60C455CC"
}, {
    "p": {"x": -1884.684706670774, "y": 3389.275467161812, "z": 3918.806883523258},
    "r": {"_x": 1.1501854027299236, "_y": 0.31115265247016755, "_z": 0.19560682144282698, "_order": "XYZ"},
    "id": "B1CC85AB-0F0E-49F2-8F69-2F44D565FF66"
}, {
    "p": {"x": 3248.7674283472033, "y": -3372.2492637564906, "z": 3625.4329794446294},
    "r": {"_x": 0.431818427666729, "_y": 1.1031876626702906, "_z": 1.7407282745180042, "_order": "XYZ"},
    "id": "225CD897-0F3F-4EC6-9A5B-91DDBB5CE8FC"
}, {
    "p": {"x": 1876.043865342687, "y": -211.72735671214804, "z": 458.35287864053777},
    "r": {"_x": 1.2863891740070144, "_y": 1.7410268759044862, "_z": 1.8466996519252286, "_order": "XYZ"},
    "id": "CE1C2B69-3565-4FA3-A2A5-78A895EE3E2E"
}, {
    "p": {"x": 131.2127075745062, "y": 4602.937585761247, "z": -3884.3862205684786},
    "r": {"_x": 3.136646292110301, "_y": 1.3629245257664702, "_z": 2.7789598643037072, "_order": "XYZ"},
    "id": "142AB8B8-59D2-4332-BC65-6E78C49217DF"
}]);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OBJLoader__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MTLLoader__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FontLoader__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__particles_ships_ShipIncludes__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__particles_charge_ChargeIncludes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__particles_arsenal_ArsenalIncludes__ = __webpack_require__(27);









class PreLoader {
	constructor() {
		
		/**
		 * 1
		 *
		 * @type {ChargeIncludes}
		 */
		this.chargeIncludes = new __WEBPACK_IMPORTED_MODULE_5__particles_charge_ChargeIncludes__["a" /* default */]();
		
		/**
		 * 2
		 *
		 * @type {ArsenalIncludes}
		 */
		this.arsenalIncludes = new __WEBPACK_IMPORTED_MODULE_6__particles_arsenal_ArsenalIncludes__["a" /* default */]();
		
		/**
		 * 3
		 *
		 * @type {ShipIncludes}
		 */
		this.shipIncludes = new __WEBPACK_IMPORTED_MODULE_4__particles_ships_ShipIncludes__["a" /* default */]();
		
		/**
		 *
		 * @type {LoadingManager}
		 */
		this._manager = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].LoadingManager();
		
		/**
		 *
		 * @type {MTLLoader}
		 * @private
		 */
		this._mtl = new __WEBPACK_IMPORTED_MODULE_2__MTLLoader__["a" /* default */](this._manager);
		
		/**
		 *
		 * @type {OBJLoader}
		 * @private
		 */
		this._obj = new __WEBPACK_IMPORTED_MODULE_1__OBJLoader__["a" /* default */](this._manager);
	}
	
	/**
	 *
	 * @param listener
	 */
	load(listener) {
		new __WEBPACK_IMPORTED_MODULE_3__FontLoader__["a" /* default */]().load(() => {
			this._loadItem(0, listener);
		});
		return this;
	}
	
	/**
	 * @callback listenerPreLoader
	 */
	
	/**
	 *
	 * @param {number} start
	 * @param {listenerPreLoader} listener
	 * @private
	 */
	_loadItem(start, listener) {
		let ship = this.shipIncludes.includes[start];
		if (ship) {
			if (ship.objFileName) {
				this._mtl.setTexturePath(ship.basePath);
				this._mtl.load(ship.basePath + ship.mtlFileName, (materials) => {
					this._obj.setMaterials(materials);
					this._obj.load(ship.basePath + ship.objFileName, (object) => {
						ship.setModel(object);
						this._loadItem(++start, listener);
					});
				});
			} else {
				console.warn('You have not correct configuration of ship: ' + ship.type);
				this._loadItem(++start, listener);
			}
		} else {
			listener();
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (PreLoader);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);


/**
 * @author mrdoob / http://mrdoob.com/
 */

let OBJLoader = ( function () {

	// o object_name | g group_name
	var object_pattern = /^[og]\s*(.+)?/;
	// mtllib file_reference
	var material_library_pattern = /^mtllib /;
	// usemtl material_name
	var material_use_pattern = /^usemtl /;

	function ParserState() {

		var state = {
			objects: [],
			object: {},

			vertices: [],
			normals: [],
			colors: [],
			uvs: [],

			materialLibraries: [],

			startObject: function ( name, fromDeclaration ) {

				// If the current object (initial from reset) is not from a g/o declaration in the parsed
				// file. We need to use it for the first parsed g/o to keep things in sync.
				if ( this.object && this.object.fromDeclaration === false ) {

					this.object.name = name;
					this.object.fromDeclaration = ( fromDeclaration !== false );
					return;

				}

				var previousMaterial = ( this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined );

				if ( this.object && typeof this.object._finalize === 'function' ) {

					this.object._finalize( true );

				}

				this.object = {
					name: name || '',
					fromDeclaration: ( fromDeclaration !== false ),

					geometry: {
						vertices: [],
						normals: [],
						colors: [],
						uvs: []
					},
					materials: [],
					smooth: true,

					startMaterial: function ( name, libraries ) {

						var previous = this._finalize( false );

						// New usemtl declaration overwrites an inherited material, except if faces were declared
						// after the material, then it must be preserved for proper MultiMaterial continuation.
						if ( previous && ( previous.inherited || previous.groupCount <= 0 ) ) {

							this.materials.splice( previous.index, 1 );

						}

						var material = {
							index: this.materials.length,
							name: name || '',
							mtllib: ( Array.isArray( libraries ) && libraries.length > 0 ? libraries[ libraries.length - 1 ] : '' ),
							smooth: ( previous !== undefined ? previous.smooth : this.smooth ),
							groupStart: ( previous !== undefined ? previous.groupEnd : 0 ),
							groupEnd: - 1,
							groupCount: - 1,
							inherited: false,

							clone: function ( index ) {

								var cloned = {
									index: ( typeof index === 'number' ? index : this.index ),
									name: this.name,
									mtllib: this.mtllib,
									smooth: this.smooth,
									groupStart: 0,
									groupEnd: - 1,
									groupCount: - 1,
									inherited: false
								};
								cloned.clone = this.clone.bind( cloned );
								return cloned;

							}
						};

						this.materials.push( material );

						return material;

					},

					currentMaterial: function () {

						if ( this.materials.length > 0 ) {

							return this.materials[ this.materials.length - 1 ];

						}

						return undefined;

					},

					_finalize: function ( end ) {

						var lastMultiMaterial = this.currentMaterial();
						if ( lastMultiMaterial && lastMultiMaterial.groupEnd === - 1 ) {

							lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
							lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
							lastMultiMaterial.inherited = false;

						}

						// Ignore objects tail materials if no face declarations followed them before a new o/g started.
						if ( end && this.materials.length > 1 ) {

							for ( var mi = this.materials.length - 1; mi >= 0; mi -- ) {

								if ( this.materials[ mi ].groupCount <= 0 ) {

									this.materials.splice( mi, 1 );

								}

							}

						}

						// Guarantee at least one empty material, this makes the creation later more straight forward.
						if ( end && this.materials.length === 0 ) {

							this.materials.push( {
								name: '',
								smooth: this.smooth
							} );

						}

						return lastMultiMaterial;

					}
				};

				// Inherit previous objects material.
				// Spec tells us that a declared material must be set to all objects until a new material is declared.
				// If a usemtl declaration is encountered while this new object is being parsed, it will
				// overwrite the inherited material. Exception being that there was already face declarations
				// to the inherited material, then it will be preserved for proper MultiMaterial continuation.

				if ( previousMaterial && previousMaterial.name && typeof previousMaterial.clone === 'function' ) {

					var declared = previousMaterial.clone( 0 );
					declared.inherited = true;
					this.object.materials.push( declared );

				}

				this.objects.push( this.object );

			},

			finalize: function () {

				if ( this.object && typeof this.object._finalize === 'function' ) {

					this.object._finalize( true );

				}

			},

			parseVertexIndex: function ( value, len ) {

				var index = parseInt( value, 10 );
				return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

			},

			parseNormalIndex: function ( value, len ) {

				var index = parseInt( value, 10 );
				return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

			},

			parseUVIndex: function ( value, len ) {

				var index = parseInt( value, 10 );
				return ( index >= 0 ? index - 1 : index + len / 2 ) * 2;

			},

			addVertex: function ( a, b, c ) {

				var src = this.vertices;
				var dst = this.object.geometry.vertices;

				dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
				dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
				dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

			},

			addVertexLine: function ( a ) {

				var src = this.vertices;
				var dst = this.object.geometry.vertices;

				dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );

			},

			addNormal: function ( a, b, c ) {

				var src = this.normals;
				var dst = this.object.geometry.normals;

				dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
				dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
				dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

			},

			addColor: function ( a, b, c ) {

				var src = this.colors;
				var dst = this.object.geometry.colors;

				dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
				dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
				dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

			},

			addUV: function ( a, b, c ) {

				var src = this.uvs;
				var dst = this.object.geometry.uvs;

				dst.push( src[ a + 0 ], src[ a + 1 ] );
				dst.push( src[ b + 0 ], src[ b + 1 ] );
				dst.push( src[ c + 0 ], src[ c + 1 ] );

			},

			addUVLine: function ( a ) {

				var src = this.uvs;
				var dst = this.object.geometry.uvs;

				dst.push( src[ a + 0 ], src[ a + 1 ] );

			},

			addFace: function ( a, b, c, ua, ub, uc, na, nb, nc ) {

				var vLen = this.vertices.length;

				var ia = this.parseVertexIndex( a, vLen );
				var ib = this.parseVertexIndex( b, vLen );
				var ic = this.parseVertexIndex( c, vLen );

				this.addVertex( ia, ib, ic );

				if ( ua !== undefined ) {

					var uvLen = this.uvs.length;

					ia = this.parseUVIndex( ua, uvLen );
					ib = this.parseUVIndex( ub, uvLen );
					ic = this.parseUVIndex( uc, uvLen );

					this.addUV( ia, ib, ic );

				}

				if ( na !== undefined ) {

					// Normals are many times the same. If so, skip function call and parseInt.
					var nLen = this.normals.length;
					ia = this.parseNormalIndex( na, nLen );

					ib = na === nb ? ia : this.parseNormalIndex( nb, nLen );
					ic = na === nc ? ia : this.parseNormalIndex( nc, nLen );

					this.addNormal( ia, ib, ic );

				}

				if ( this.colors.length > 0 ) {

					this.addColor( ia, ib, ic );

				}

			},

			addLineGeometry: function ( vertices, uvs ) {

				this.object.geometry.type = 'Line';

				var vLen = this.vertices.length;
				var uvLen = this.uvs.length;

				for ( var vi = 0, l = vertices.length; vi < l; vi ++ ) {

					this.addVertexLine( this.parseVertexIndex( vertices[ vi ], vLen ) );

				}

				for ( var uvi = 0, l = uvs.length; uvi < l; uvi ++ ) {

					this.addUVLine( this.parseUVIndex( uvs[ uvi ], uvLen ) );

				}

			}

		};

		state.startObject( '', false );

		return state;

	}

	//

	function OBJLoader( manager ) {

		this.manager = ( manager !== undefined ) ? manager : __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].DefaultLoadingManager;

		this.materials = null;

	}

	OBJLoader.prototype = {

		constructor: OBJLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].FileLoader( scope.manager );
			loader.setPath( this.path );
			loader.load( url, function ( text ) {

				onLoad( scope.parse( text ) );

			}, onProgress, onError );

		},

		setPath: function ( value ) {

			this.path = value;

		},

		setMaterials: function ( materials ) {

			this.materials = materials;

			return this;

		},

		parse: function ( text ) {

			console.time( 'OBJLoader' );

			var state = new ParserState();

			if ( text.indexOf( '\r\n' ) !== - 1 ) {

				// This is faster than String.split with regex that splits on both
				text = text.replace( /\r\n/g, '\n' );

			}

			if ( text.indexOf( '\\\n' ) !== - 1 ) {

				// join lines separated by a line continuation character (\)
				text = text.replace( /\\\n/g, '' );

			}

			var lines = text.split( '\n' );
			var line = '', lineFirstChar = '';
			var lineLength = 0;
			var result = [];

			// Faster to just trim left side of the line. Use if available.
			var trimLeft = ( typeof ''.trimLeft === 'function' );

			for ( var i = 0, l = lines.length; i < l; i ++ ) {

				line = lines[ i ];

				line = trimLeft ? line.trimLeft() : line.trim();

				lineLength = line.length;

				if ( lineLength === 0 ) continue;

				lineFirstChar = line.charAt( 0 );

				// @todo invoke passed in handler if any
				if ( lineFirstChar === '#' ) continue;

				if ( lineFirstChar === 'v' ) {

					var data = line.split( /\s+/ );

					switch ( data[ 0 ] ) {

						case 'v':
							state.vertices.push(
								parseFloat( data[ 1 ] ),
								parseFloat( data[ 2 ] ),
								parseFloat( data[ 3 ] )
							);
							if ( data.length === 8 ) {

								state.colors.push(
									parseFloat( data[ 4 ] ),
									parseFloat( data[ 5 ] ),
									parseFloat( data[ 6 ] )

								);

							}
							break;
						case 'vn':
							state.normals.push(
								parseFloat( data[ 1 ] ),
								parseFloat( data[ 2 ] ),
								parseFloat( data[ 3 ] )
							);
							break;
						case 'vt':
							state.uvs.push(
								parseFloat( data[ 1 ] ),
								parseFloat( data[ 2 ] )
							);
							break;

					}

				} else if ( lineFirstChar === 'f' ) {

					var lineData = line.substr( 1 ).trim();
					var vertexData = lineData.split( /\s+/ );
					var faceVertices = [];

					// Parse the face vertex data into an easy to work with format

					for ( var j = 0, jl = vertexData.length; j < jl; j ++ ) {

						var vertex = vertexData[ j ];

						if ( vertex.length > 0 ) {

							var vertexParts = vertex.split( '/' );
							faceVertices.push( vertexParts );

						}

					}

					// Draw an edge between the first vertex and all subsequent vertices to form an n-gon

					var v1 = faceVertices[ 0 ];

					for ( var j = 1, jl = faceVertices.length - 1; j < jl; j ++ ) {

						var v2 = faceVertices[ j ];
						var v3 = faceVertices[ j + 1 ];

						state.addFace(
							v1[ 0 ], v2[ 0 ], v3[ 0 ],
							v1[ 1 ], v2[ 1 ], v3[ 1 ],
							v1[ 2 ], v2[ 2 ], v3[ 2 ]
						);

					}

				} else if ( lineFirstChar === 'l' ) {

					var lineParts = line.substring( 1 ).trim().split( " " );
					var lineVertices = [], lineUVs = [];

					if ( line.indexOf( "/" ) === - 1 ) {

						lineVertices = lineParts;

					} else {

						for ( var li = 0, llen = lineParts.length; li < llen; li ++ ) {

							var parts = lineParts[ li ].split( "/" );

							if ( parts[ 0 ] !== "" ) lineVertices.push( parts[ 0 ] );
							if ( parts[ 1 ] !== "" ) lineUVs.push( parts[ 1 ] );

						}

					}
					state.addLineGeometry( lineVertices, lineUVs );

				} else if ( ( result = object_pattern.exec( line ) ) !== null ) {

					// o object_name
					// or
					// g group_name

					// WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
					// var name = result[ 0 ].substr( 1 ).trim();
					var name = ( " " + result[ 0 ].substr( 1 ).trim() ).substr( 1 );

					state.startObject( name );

				} else if ( material_use_pattern.test( line ) ) {

					// material

					state.object.startMaterial( line.substring( 7 ).trim(), state.materialLibraries );

				} else if ( material_library_pattern.test( line ) ) {

					// mtl file

					state.materialLibraries.push( line.substring( 7 ).trim() );

				} else if ( lineFirstChar === 's' ) {

					result = line.split( ' ' );

					// smooth shading

					// @todo Handle files that have varying smooth values for a set of faces inside one geometry,
					// but does not define a usemtl for each face set.
					// This should be detected and a dummy material created (later MultiMaterial and geometry groups).
					// This requires some care to not create extra material on each smooth value for "normal" obj files.
					// where explicit usemtl defines geometry groups.
					// Example asset: examples/models/obj/cerberus/Cerberus.obj

					/*
					 * http://paulbourke.net/dataformats/obj/
					 * or
					 * http://www.cs.utah.edu/~boulos/cs3505/obj_spec.pdf
					 *
					 * From chapter "Grouping" Syntax explanation "s group_number":
					 * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
					 * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
					 * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
					 * than 0."
					 */
					if ( result.length > 1 ) {

						var value = result[ 1 ].trim().toLowerCase();
						state.object.smooth = ( value !== '0' && value !== 'off' );

					} else {

						// ZBrush can produce "s" lines #11707
						state.object.smooth = true;

					}
					var material = state.object.currentMaterial();
					if ( material ) material.smooth = state.object.smooth;

				} else {

					// Handle null terminated files without exception
					if ( line === '\0' ) continue;

					throw new Error( 'OBJLoader: Unexpected line: "' + line + '"' );

				}

			}

			state.finalize();

			var container = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Group();
			container.materialLibraries = [].concat( state.materialLibraries );

			for ( var i = 0, l = state.objects.length; i < l; i ++ ) {

				var object = state.objects[ i ];
				var geometry = object.geometry;
				var materials = object.materials;
				var isLine = ( geometry.type === 'Line' );

				// Skip o/g line declarations that did not follow with any faces
				if ( geometry.vertices.length === 0 ) continue;

				var buffergeometry = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].BufferGeometry();

				buffergeometry.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Float32BufferAttribute( geometry.vertices, 3 ) );

				if ( geometry.normals.length > 0 ) {

					buffergeometry.addAttribute( 'normal', new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Float32BufferAttribute( geometry.normals, 3 ) );

				} else {

					buffergeometry.computeVertexNormals();

				}

				if ( geometry.colors.length > 0 ) {

					buffergeometry.addAttribute( 'color', new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Float32BufferAttribute( geometry.colors, 3 ) );

				}

				if ( geometry.uvs.length > 0 ) {

					buffergeometry.addAttribute( 'uv', new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Float32BufferAttribute( geometry.uvs, 2 ) );

				}

				// Create materials

				var createdMaterials = [];

				for ( var mi = 0, miLen = materials.length; mi < miLen; mi ++ ) {

					var sourceMaterial = materials[ mi ];
					var material = undefined;

					if ( this.materials !== null ) {

						material = this.materials.create( sourceMaterial.name );

						// mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
						if ( isLine && material && ! ( material instanceof __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].LineBasicMaterial ) ) {

							var materialLine = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].LineBasicMaterial();
							materialLine.copy( material );
							material = materialLine;

						}

					}

					if ( ! material ) {

						material = ( ! isLine ? new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].MeshPhongMaterial() : new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].LineBasicMaterial() );
						material.name = sourceMaterial.name;

					}

					material.flatShading = sourceMaterial.smooth ? false : true;

					createdMaterials.push( material );

				}

				// Create mesh

				var mesh;

				if ( createdMaterials.length > 1 ) {

					for ( var mi = 0, miLen = materials.length; mi < miLen; mi ++ ) {

						var sourceMaterial = materials[ mi ];
						buffergeometry.addGroup( sourceMaterial.groupStart, sourceMaterial.groupCount, mi );

					}

					mesh = ( ! isLine ? new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Mesh( buffergeometry, createdMaterials ) : new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].LineSegments( buffergeometry, createdMaterials ) );

				} else {

					mesh = ( ! isLine ? new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Mesh( buffergeometry, createdMaterials[ 0 ] ) : new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].LineSegments( buffergeometry, createdMaterials[ 0 ] ) );

				}

				mesh.name = object.name;

				container.add( mesh );

			}

			console.timeEnd( 'OBJLoader' );

			return container;

		}

	};

	return OBJLoader;

} )();

/* harmony default export */ __webpack_exports__["a"] = (OBJLoader);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);


/**
 * Loads a Wavefront .mtl file specifying materials
 *
 * @author angelxuanchang
 */

let MTLLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].DefaultLoadingManager;

};

MTLLoader.prototype = {

	constructor: MTLLoader,

	/**
	 * Loads and parses a MTL asset from a URL.
	 *
	 * @param {String} url - URL to the MTL file.
	 * @param {Function} [onLoad] - Callback invoked with the loaded object.
	 * @param {Function} [onProgress] - Callback for download progress.
	 * @param {Function} [onError] - Callback for download errors.
	 *
	 * @see setPath setTexturePath
	 *
	 * @note In order for relative texture references to resolve correctly
	 * you must call setPath and/or setTexturePath explicitly prior to load.
	 */
	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].FileLoader( this.manager );
		loader.setPath( this.path );
		loader.load( url, function ( text ) {

			onLoad( scope.parse( text ) );

		}, onProgress, onError );

	},

	/**
	 * Set base path for resolving references.
	 * If set this path will be prepended to each loaded and found reference.
	 *
	 * @see setTexturePath
	 * @param {String} path
	 *
	 * @example
	 *     mtlLoader.setPath( 'assets/obj/' );
	 *     mtlLoader.load( 'my.mtl', ... );
	 */
	setPath: function ( path ) {

		this.path = path;

	},

	/**
	 * Set base path for resolving texture references.
	 * If set this path will be prepended found texture reference.
	 * If not set and setPath is, it will be used as texture base path.
	 *
	 * @see setPath
	 * @param {String} path
	 *
	 * @example
	 *     mtlLoader.setPath( 'assets/obj/' );
	 *     mtlLoader.setTexturePath( 'assets/textures/' );
	 *     mtlLoader.load( 'my.mtl', ... );
	 */
	setTexturePath: function ( path ) {

		this.texturePath = path;

	},

	setBaseUrl: function ( path ) {

		console.warn( 'MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead.' );

		this.setTexturePath( path );

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	},

	setMaterialOptions: function ( value ) {

		this.materialOptions = value;

	},

	/**
	 * Parses a MTL file.
	 *
	 * @param {String} text - Content of MTL file
	 * @return {MTLLoader.MaterialCreator}
	 *
	 * @see setPath setTexturePath
	 *
	 * @note In order for relative texture references to resolve correctly
	 * you must call setPath and/or setTexturePath explicitly prior to parse.
	 */
	parse: function ( text ) {

		var lines = text.split( '\n' );
		var info = {};
		var delimiter_pattern = /\s+/;
		var materialsInfo = {};

		for ( var i = 0; i < lines.length; i ++ ) {

			var line = lines[ i ];
			line = line.trim();

			if ( line.length === 0 || line.charAt( 0 ) === '#' ) {

				// Blank line or comment ignore
				continue;

			}

			var pos = line.indexOf( ' ' );

			var key = ( pos >= 0 ) ? line.substring( 0, pos ) : line;
			key = key.toLowerCase();

			var value = ( pos >= 0 ) ? line.substring( pos + 1 ) : '';
			value = value.trim();

			if ( key === 'newmtl' ) {

				// New material

				info = { name: value };
				materialsInfo[ value ] = info;

			} else if ( info ) {

				if ( key === 'ka' || key === 'kd' || key === 'ks' ) {

					var ss = value.split( delimiter_pattern, 3 );
					info[ key ] = [ parseFloat( ss[ 0 ] ), parseFloat( ss[ 1 ] ), parseFloat( ss[ 2 ] ) ];

				} else {

					info[ key ] = value;

				}

			}

		}

		var materialCreator = new MTLLoader.MaterialCreator( this.texturePath || this.path, this.materialOptions );
		materialCreator.setCrossOrigin( this.crossOrigin );
		materialCreator.setManager( this.manager );
		materialCreator.setMaterials( materialsInfo );
		return materialCreator;

	}

};

/**
 * Create a new MTLLoader.MaterialCreator
 * @param baseUrl - Url relative to which textures are loaded
 * @param options - Set of options on how to construct the materials
 *                  side: Which side to apply the material
 *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
 *                  wrap: What type of wrapping to apply for textures
 *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
 *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
 *                                Default: false, assumed to be already normalized
 *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
 *                                  Default: false
 * @constructor
 */

MTLLoader.MaterialCreator = function ( baseUrl, options ) {

	this.baseUrl = baseUrl || '';
	this.options = options;
	this.materialsInfo = {};
	this.materials = {};
	this.materialsArray = [];
	this.nameLookup = {};

	this.side = ( this.options && this.options.side ) ? this.options.side : __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].FrontSide;
	this.wrap = ( this.options && this.options.wrap ) ? this.options.wrap : __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].RepeatWrapping;

};

MTLLoader.MaterialCreator.prototype = {

	constructor: MTLLoader.MaterialCreator,

	crossOrigin: 'Anonymous',

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	},

	setManager: function ( value ) {

		this.manager = value;

	},

	setMaterials: function ( materialsInfo ) {

		this.materialsInfo = this.convert( materialsInfo );
		this.materials = {};
		this.materialsArray = [];
		this.nameLookup = {};

	},

	convert: function ( materialsInfo ) {

		if ( ! this.options ) return materialsInfo;

		var converted = {};

		for ( var mn in materialsInfo ) {

			// Convert materials info into normalized form based on options

			var mat = materialsInfo[ mn ];

			var covmat = {};

			converted[ mn ] = covmat;

			for ( var prop in mat ) {

				var save = true;
				var value = mat[ prop ];
				var lprop = prop.toLowerCase();

				switch ( lprop ) {

					case 'kd':
					case 'ka':
					case 'ks':

						// Diffuse color (color under white light) using RGB values

						if ( this.options && this.options.normalizeRGB ) {

							value = [ value[ 0 ] / 255, value[ 1 ] / 255, value[ 2 ] / 255 ];

						}

						if ( this.options && this.options.ignoreZeroRGBs ) {

							if ( value[ 0 ] === 0 && value[ 1 ] === 0 && value[ 2 ] === 0 ) {

								// ignore

								save = false;

							}

						}

						break;

					default:

						break;

				}

				if ( save ) {

					covmat[ lprop ] = value;

				}

			}

		}

		return converted;

	},

	preload: function () {

		for ( var mn in this.materialsInfo ) {

			this.create( mn );

		}

	},

	getIndex: function ( materialName ) {

		return this.nameLookup[ materialName ];

	},

	getAsArray: function () {

		var index = 0;

		for ( var mn in this.materialsInfo ) {

			this.materialsArray[ index ] = this.create( mn );
			this.nameLookup[ mn ] = index;
			index ++;

		}

		return this.materialsArray;

	},

	create: function ( materialName ) {

		if ( this.materials[ materialName ] === undefined ) {

			this.createMaterial_( materialName );

		}

		return this.materials[ materialName ];

	},

	createMaterial_: function ( materialName ) {

		// Create material

		var scope = this;
		var mat = this.materialsInfo[ materialName ];
		var params = {

			name: materialName,
			side: this.side

		};

		function resolveURL( baseUrl, url ) {

			if ( typeof url !== 'string' || url === '' )
				return '';

			// Absolute URL
			if ( /^https?:\/\//i.test( url ) ) return url;

			return baseUrl + url;

		}

		function setMapForType( mapType, value ) {

			if ( params[ mapType ] ) return; // Keep the first encountered texture

			var texParams = scope.getTextureParams( value, params );
			var map = scope.loadTexture( resolveURL( scope.baseUrl, texParams.url ) );

			map.repeat.copy( texParams.scale );
			map.offset.copy( texParams.offset );

			map.wrapS = scope.wrap;
			map.wrapT = scope.wrap;

			params[ mapType ] = map;

		}

		for ( var prop in mat ) {

			var value = mat[ prop ];
			var n;

			if ( value === '' ) continue;

			switch ( prop.toLowerCase() ) {

				// Ns is material specular exponent

				case 'kd':

					// Diffuse color (color under white light) using RGB values

					params.color = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color().fromArray( value );

					break;

				case 'ks':

					// Specular color (color when light is reflected from shiny surface) using RGB values
					params.specular = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Color().fromArray( value );

					break;

				case 'map_kd':

					// Diffuse texture map

					setMapForType( "map", value );

					break;

				case 'map_ks':

					// Specular map

					setMapForType( "specularMap", value );

					break;

				case 'norm':

					setMapForType( "normalMap", value );

					break;

				case 'map_bump':
				case 'bump':

					// Bump texture map

					setMapForType( "bumpMap", value );

					break;

				case 'ns':

					// The specular exponent (defines the focus of the specular highlight)
					// A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.

					params.shininess = parseFloat( value );

					break;

				case 'd':
					n = parseFloat( value );

					if ( n < 1 ) {

						params.opacity = n;
						params.transparent = true;

					}

					break;

				case 'tr':
					n = parseFloat( value );

					if ( n > 0 ) {

						params.opacity = 1 - n;
						params.transparent = true;

					}

					break;

				default:
					break;

			}

		}

		this.materials[ materialName ] = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].MeshPhongMaterial( params );
		return this.materials[ materialName ];

	},

	getTextureParams: function ( value, matParams ) {

		var texParams = {

			scale: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector2( 1, 1 ),
			offset: new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Vector2( 0, 0 )

		 };

		var items = value.split( /\s+/ );
		var pos;

		pos = items.indexOf( '-bm' );

		if ( pos >= 0 ) {

			matParams.bumpScale = parseFloat( items[ pos + 1 ] );
			items.splice( pos, 2 );

		}

		pos = items.indexOf( '-s' );

		if ( pos >= 0 ) {

			texParams.scale.set( parseFloat( items[ pos + 1 ] ), parseFloat( items[ pos + 2 ] ) );
			items.splice( pos, 4 ); // we expect 3 parameters here!

		}

		pos = items.indexOf( '-o' );

		if ( pos >= 0 ) {

			texParams.offset.set( parseFloat( items[ pos + 1 ] ), parseFloat( items[ pos + 2 ] ) );
			items.splice( pos, 4 ); // we expect 3 parameters here!

		}

		texParams.url = items.join( ' ' ).trim();
		return texParams;

	},

	loadTexture: function ( url, mapping, onLoad, onProgress, onError ) {

		var texture;
		var loader = __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].Loader.Handlers.get( url );
		var manager = ( this.manager !== undefined ) ? this.manager : __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].DefaultLoadingManager;

		if ( loader === null ) {

			loader = new __WEBPACK_IMPORTED_MODULE_0__api__["b" /* THREE */].TextureLoader( manager );

		}

		if ( loader.setCrossOrigin ) loader.setCrossOrigin( this.crossOrigin );
		texture = loader.load( url, onLoad, onProgress, onError );

		if ( mapping !== undefined ) texture.mapping = mapping;

		return texture;

	}
};

/* harmony default export */ __webpack_exports__["a"] = (MTLLoader);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 *
 * @type {{port: number, host: string, clientConnect: (function())}}
 */
const socketConfig = {
	port: 3000,
	host: 'localhost',
	clientConnect: () => {
		return 'http://' + socketConfig.host + ':' + socketConfig.port;
	}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = socketConfig;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var url = __webpack_require__(73);
var parser = __webpack_require__(18);
var Manager = __webpack_require__(35);
var debug = __webpack_require__(3)('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(35);
exports.Socket = __webpack_require__(40);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(32);
var debug = __webpack_require__(3)('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(76);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 77 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(79);
var isBuf = __webpack_require__(34);
var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 79 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(81);

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(6);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var transports = __webpack_require__(36);
var Emitter = __webpack_require__(5);
var debug = __webpack_require__(3)('engine.io-client:socket');
var index = __webpack_require__(39);
var parser = __webpack_require__(6);
var parseuri = __webpack_require__(32);
var parseqs = __webpack_require__(9);

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (global.location && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // other options for Node.js client
  var freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(20);
Socket.transports = __webpack_require__(36);
Socket.parser = __webpack_require__(6);

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0)
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 82 */
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(19);
var Polling = __webpack_require__(37);
var Emitter = __webpack_require__(5);
var inherit = __webpack_require__(10);
var debug = __webpack_require__(3)('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname !== global.location.hostname ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          var contentType;
          try {
            contentType = xhr.getResponseHeader('Content-Type');
          } catch (e) {}
          if (contentType === 'application/octet-stream') {
            xhr.responseType = 'arraybuffer';
          }
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (global.document) {
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 84 */
/***/ (function(module, exports) {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint, strict) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			if (strict) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
			return false;
		}
		return true;
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint, strict) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			if (!checkScalarValue(codePoint, strict)) {
				codePoint = 0xFFFD;
			}
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint, strict);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol(strict) {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol(strict)) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return utf8;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(88)(module), __webpack_require__(1)))

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module requirements.
 */

var Polling = __webpack_require__(37);
var inherit = __webpack_require__(10);

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var Transport = __webpack_require__(20);
var parser = __webpack_require__(6);
var parseqs = __webpack_require__(9);
var inherit = __webpack_require__(10);
var yeast = __webpack_require__(38);
var debug = __webpack_require__(3)('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(93);
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  WebSocket = NodeWebSocket;
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 93 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),
/* 95 */
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ })
/******/ ]);