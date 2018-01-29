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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @type THREE
 */
const THREE = window.THREE;
/* harmony export (immutable) */ __webpack_exports__["a"] = THREE;


/**
 * @type SPE
 */
const SPE = window.SPE;
/* unused harmony export SPE */


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParticleError__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systems_Listener__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(0);




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
		this.size = new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Vector3();
		
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
		let mesh = new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Object3D();
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
		for (let property in this) {
			if (this.hasOwnProperty(property)) {
				if (this[property] instanceof Particle) {
					clone[property] = clone[property].clone();
				} else if (this[property] instanceof __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Object3D) {
					clone[property] = clone[property].clone();
				} else if (this[property] instanceof __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Vector3) {
					clone[property] = clone[property].clone();
				} else if (this[property] instanceof __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Vector2) {
					clone[property] = clone[property].clone();
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

exports = module.exports = __webpack_require__(72);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

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

var keys = __webpack_require__(81);
var hasBinary = __webpack_require__(32);
var sliceBuffer = __webpack_require__(82);
var after = __webpack_require__(83);
var utf8 = __webpack_require__(84);

var base64encoder;
if (global && global.ArrayBuffer) {
  base64encoder = __webpack_require__(86);
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

var Blob = __webpack_require__(87);

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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decoration_aim_Aim__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_I_EngineIM20__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arsenal_ArsenalSlots__ = __webpack_require__(54);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Keyboard__ = __webpack_require__(46);


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
		this.position = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3();
		
		/**
		 * Current rotation
		 *
		 * @type {Euler}
		 */
		this.rotation = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Euler();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HelperPoint__ = __webpack_require__(57);



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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(3)('socket.io-parser');
var Emitter = __webpack_require__(5);
var hasBin = __webpack_require__(32);
var binary = __webpack_require__(75);
var isBuf = __webpack_require__(33);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(79);

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
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particles_engine_Engine__ = __webpack_require__(7);
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
		this.tmpQuaternion = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Quaternion();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.moveVector = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 0, 0);
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.rotationVector = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 0, 0);
		
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
/* 21 */
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Includes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__I_ShipExplorerI__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__II_ShipExplorerII__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__III_ShipExplorerIII__ = __webpack_require__(60);





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
/* 23 */
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
		let loader = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].FontLoader();
		loader.load(FONT, (font) => {
			this._font = font;
			listener(this._font);
		});
	}
}

/* harmony default export */ __webpack_exports__["a"] = (FontLoader);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(7);
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Includes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__I_ArsenalIA20__ = __webpack_require__(55);



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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charge_Charge__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charge_ChargeIncludes__ = __webpack_require__(28);
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(0);




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
		this.target = new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Vector3();
		
		/**
		 *
		 * @type {number}
		 */
		this.speed = 1000;
		
		/**
		 *
		 * @type {number}
		 */
		this.maxDistanceToDestroy = 2000;
		
		/**
		 *
		 * @type {Vector3}
         * @private
		 */
		this.direction = new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Vector3();

        /**
         *
         * @type {Vector3}
         */
		this.startPosition = new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Vector3();
	}

    /**
     *
     * @param {Vector} v
     * @returns {Charge}
     */
	setPosition(v) {
        this.model.position.copy(v);
        this.startPosition.copy(v);
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
	 * @callback listenerToRemove
	 */
	
	/**
	 *
	 * @param {number} delta
	 * @param {listenerToRemove} destroyListener
	 * @returns {void}
	 */
	update(delta, destroyListener) {
        this.direction.copy(this.target);
        this.direction = this.direction.sub(this.model.position).normalize();
		this.model.position.addScaledVector(this.direction, this.speed * delta);

		if (this.startPosition.distanceTo(this.model.position) >= this.maxDistanceToDestroy) {
            destroyListener();
        }
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Includes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__I_ChargeIA20__ = __webpack_require__(56);



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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(74);

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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var eio = __webpack_require__(77);
var Socket = __webpack_require__(39);
var Emitter = __webpack_require__(5);
var parser = __webpack_require__(17);
var on = __webpack_require__(40);
var bind = __webpack_require__(41);
var debug = __webpack_require__(3)('socket.io-client:manager');
var indexOf = __webpack_require__(38);
var Backoff = __webpack_require__(92);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(18);
var XHR = __webpack_require__(80);
var JSONP = __webpack_require__(88);
var websocket = __webpack_require__(89);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(19);
var parseqs = __webpack_require__(9);
var parser = __webpack_require__(6);
var inherit = __webpack_require__(10);
var yeast = __webpack_require__(37);
var debug = __webpack_require__(3)('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(18);
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
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parser = __webpack_require__(17);
var Emitter = __webpack_require__(5);
var toArray = __webpack_require__(91);
var on = __webpack_require__(40);
var bind = __webpack_require__(41);
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_controls_SceneControls__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_loader_PreLoader__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_config__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);






new __WEBPACK_IMPORTED_MODULE_1__js_loader_PreLoader__["a" /* default */]().load(() => {
	/**
	 * @type {Socket}
	 */
	const socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default()(__WEBPACK_IMPORTED_MODULE_2__socket_config__["a" /* socketConfig */].clientConnect());
	
	socket.on('connect', () => {
		socket.on('entry', (playerId) => {
			
			const controls = new __WEBPACK_IMPORTED_MODULE_0__js_controls_SceneControls__["a" /* default */](playerId, 'main-container-canvas');

			console.log('SOCKET: Current Player is', controls.player, '=======================22=============================');
			
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
			// 	socket.emit('remove-form', playerId);
			// });
		});
	});
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SceneControlsPlugin__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FlyControls__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SkyeBoxControls__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_Player__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TargetControls__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_HelperPoints__ = __webpack_require__(16);












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
		this._clockRender = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Clock();
		
		/**
		 *
		 * @type {Clock}
		 * @private
		 */
		this._clockAnimate = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Clock();
		
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
		
		// /**
		//  *
		//  * @type {HelperPoints}
		//  * @private
		//  */
		// this._helperPoints = new HelperPoints(this.scene);
		
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
	 *
	 * @param {string|number} id
	 * @return {SceneControls}
	 */
	destroyPlayer(id) {
		if (this._players.hasOwnProperty(id)) {
			let model = this._players[id].getModel();
			this.scene.remove(model);
			for (let child of model.children) {
				model.remove(child);
			}
			delete this._players[id];
		}
		return this;
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
		
		this.player.keyboards.addEventListener(__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].EVENT_KEY_UP, __WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_PK, (event, keyboard) => {
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
		});
		
		this.player.keyboards.addEventListener(__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].EVENT_MOUSE_DOWN_CENTER, __WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_TARGET, (event) => {
			let openConsole = this.player.keyboards.fly.openConsole;
			if (openConsole.value === openConsole.valueOn) {
				this.targetControls.setSelected(null);
				this.player.ship.aim.signatureRightTop.hide();
			}
		});
		
		this.player.keyboards.addEventListener(__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].EVENT_MOUSE_DOWN_LEFT, __WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_FLY, (event) => {
			let target = this.getNextPosition(this.camera, 250000);
			this.player.shot(target);
		});
		
		this.player.keyboards.addEventListener(__WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].EVENT_MOUSE_WHEEL, __WEBPACK_IMPORTED_MODULE_5__keyboard_KeyboardControls__["a" /* default */].GROUP_TARGET, (event) => {
			let openConsole = this.player.keyboards.fly.openConsole;
			if (event.deltaY !== 0 && openConsole.value === openConsole.valueOn) {
				this.targetControls.changeTarget(
					this._objects,
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
		});
		
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
		// let s = 150;
		// let cube = new THREE.BoxGeometry(s, s, s);
		// let material = new THREE.MeshPhongMaterial({color: 0xffffff});
		// let mesh = new THREE.Mesh(cube, material);
		// mesh.position.z = - 500;
		// mesh.rotation.x = Math.PI / 4;
		// mesh.rotation.y = Math.PI / 4;
		// mesh.rotation.z = Math.PI / 4;
		// mesh.matrixAutoUpdate = false;
		// mesh.updateMatrix();
		// this.scene.add(mesh);
		
		let s = 50;
		let cube = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].BoxGeometry(s, s, s);
		let material = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].MeshPhongMaterial({color: 0xffffff, specular: 0xffffff, shininess: 50});
		for (let i = 0; i < 10; i ++) {
			let mesh = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Mesh(cube, material);
			mesh.position.x = 500 * (2.0 * Math.random() - 1.0);
			mesh.position.y = 500 * (2.0 * Math.random() - 1.0);
			mesh.position.z = - 2000;// * (2.0 * Math.random() - 1.0);
			mesh.rotation.x = Math.random() * Math.PI;
			mesh.rotation.y = Math.random() * Math.PI;
			mesh.rotation.z = Math.random() * Math.PI;
			mesh.matrixAutoUpdate = false;
			mesh.updateMatrix();
			
			this.scene.add(mesh);
			
			let particle = new __WEBPACK_IMPORTED_MODULE_7__Particle__["a" /* default */]('Particle', 'test-cube');
			particle.model = mesh;
			particle.label = 'Cube - ' + i;
			this._objects.push(particle);
		}
		
		// lights
		let dirLight = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].DirectionalLight(0xffffff, 0.05);
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

				for (let playerId in this._players) {
					if (this._players.hasOwnProperty(playerId)) {
						this._players[playerId].update(delta);
					}
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
			// for (let listener of this._updateListener) {
			// 	listener();
			// }
			//
			// for (let playerId in this._players) {
			// 	if (this._players.hasOwnProperty(playerId)) {
			// 		this._players[playerId].update(delta);
			// 	}
			// }
		}
		
		this.renderer.render(this.scene, this.camera);
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
/* 44 */
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
		this.renderer = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].WebGLRenderer({
			antialias: true,
			alpha: true
		});
		
		/**
		 *
		 * @type {Scene}
		 */
		this.scene = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Scene();
		this.scene.background = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Color().setHSL(0.7, 0.4, 0.03);
		this.scene.fog = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Fog(this.scene.background, 35000, SceneControlsPlugin.FAR);
		
		/**
		 *
		 * @type {PerspectiveCamera}
		 */
		this.camera = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].PerspectiveCamera(40, SceneControlsPlugin.width / SceneControlsPlugin.height, 1, SceneControlsPlugin.FAR);
		
		/**
		 *
		 * @type {Vector2}
		 * @private
		 */
		this._sizeScreen = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector2();
		
		/**
		 *
		 * @type {Vector2}
		 * @private
		 */
		this._toScreenPosition = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector2();
		
		/**
		 *
		 * @type {Vector3}
		 * @private
		 */
		this._vectorToScreenPosition = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.pointLocal = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 0, -1);
		
		this.direction = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 0, -1);
	}
	
	/**
	 *
	 * @returns {number}
	 * @constructor
	 */
	static get FAR() {
		return 100000;
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
		
		let textureLoader = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].TextureLoader();
		this.textureFlare0 = textureLoader.load('textures/lensflare/lensflare0.png');
		this.textureFlare3 = textureLoader.load('textures/lensflare/lensflare3.png');
		this.textureSky = textureLoader.load('textures/skybox/003_space.jpg');
		
		this.position = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, -1500, -10000);
		
		this.sky = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Mesh();
		
		this.sky.renderOrder = -100000;
		
		this.initSky(this.textureSky);
		
		this.initLight(0.1, 0.4, 0.8, 1700, new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 1300, -100));
		
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
		let light = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].PointLight(0xffffff, 1.4);
		light.color.setHSL(h, s, l);
		light.position.copy(v);
		this.sky.add(light);
		let flareColor = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Color(0xffffff);
		flareColor.setHSL(h, s, l + 0.5);
		
		let lensFlare = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].LensFlare(this.textureFlare0, size, 0.0, __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].AdditiveBlending, flareColor);
		lensFlare.add(this.textureFlare3, 60, 0.6, __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].AdditiveBlending);
		lensFlare.add(this.textureFlare3, 70, 0.7, __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].AdditiveBlending);
		lensFlare.add(this.textureFlare3, 120, 0.9, __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].AdditiveBlending);
		lensFlare.add(this.textureFlare3, 70, 1.0, __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].AdditiveBlending);
		
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
			object.lensFlares[3].rotation = object.positionScreen.x * 0.5 + __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Math.degToRad(45);
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
		this.sky.material = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].MeshStandardMaterial({
			map: texture,
			side: __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].BackSide,
			depthWrite: false,
			roughness: 1,
			metalness: 0
		});
		
		this.sky.geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].SphereGeometry(this._size, this.wSegments, this.hSegments);
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particles_ships_ShipIncludes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyboard_KeyboardControls__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_FlyControls__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systems_Listener__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__particles_ships_Ship__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__particles_arsenal_ArsenalSlot__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_HelperPoints__ = __webpack_require__(16);













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
		this.position = new __WEBPACK_IMPORTED_MODULE_7__api__["a" /* THREE */].Vector3(
			0,// * (2.0 * Math.random() - 1.0),
			0,// * (2.0 * Math.random() - 1.0),
			0//400 * (2.0 * Math.random() - 1.0)
		);
		
		/**
		 * Current rotation
		 *
		 * @type {Euler}
		 */
		this.rotation = new __WEBPACK_IMPORTED_MODULE_7__api__["a" /* THREE */].Euler();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.lookAt = new __WEBPACK_IMPORTED_MODULE_7__api__["a" /* THREE */].Vector3(0, 0, 0);
		
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
				
				let vector = new __WEBPACK_IMPORTED_MODULE_7__api__["a" /* THREE */].Vector3();
				for (let el of this.ship.model.children) {
					if (el.position.x === slot.position.x && el.position.y === slot.position.y && el.position.z === slot.position.z) {
						vector.setFromMatrixPosition(el.matrixWorld);
						// Sets default Charge position
						charge.setPosition(vector);
					}
				}
				
				this._sceneControls.scene.add(charge.model);
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
		
		if (this.charges.length > 0) {
			for (let i = 0; i < this.charges.length; i++) {
				/**
				 *
				 * @type {Charge}
				 */
				let charge = this.charges[i];
				
				// this.point.setPosition(charge.target);

				charge.update(delta, () => {
					this._sceneControls.scene.remove(charge.model);
					this.charges.splice(i, 1);
					charge = null;
				});
			}
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class User {
	constructor() {
	
	}
}

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_I_EngineIM20__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_ParticleClassI__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arsenal_ArsenalIncludes__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__arsenal_Arsenal__ = __webpack_require__(26);
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
			model.children[0].rotateOnAxis(new __WEBPACK_IMPORTED_MODULE_5__api__["a" /* THREE */].Vector3(0, 1, 0), Math.PI);
			model.children[0].position.y = -2;
			this.updateArsenal();
		});
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ShipExplorerI);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AimSignature__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(14);





class Aim extends __WEBPACK_IMPORTED_MODULE_1__Particle__["a" /* default */] {
	constructor() {
		super('Aim', Aim.AIM_KEY);
		
		/**
		 *
		 * @type {Group}
		 */
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Group();
		this.model.position.z = -5;
		this.model.rotation.x = Math.PI / 2;
		
		/**
		 *
		 * @type {number}
		 */
		this.scale = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0.0008, 0.0008, 0.0008);
		
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
		let center = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 0, 0),
			axis = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(1, 0, 0);
		
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
			model.material.color = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Color(color);
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
		
		let triangleShape = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Shape();
		triangleShape.moveTo(x, y);
		triangleShape.lineTo(x + w, y + l);
		triangleShape.lineTo(x + tw, y + l);
		triangleShape.lineTo(x + tw, y + tl);
		triangleShape.lineTo(x - tw, y + tl);
		triangleShape.lineTo(x - tw, y + l);
		triangleShape.lineTo(x - w, y + l);
		triangleShape.moveTo(x, y);
		
		let geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].ShapeGeometry(triangleShape);
		let material = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].MeshBasicMaterial({
			color: this.color,
			overdraw: 0.5,
			side: __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].DoubleSide
		});
		return new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Mesh(geometry, material);
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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_TextCanvas__ = __webpack_require__(53);




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
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Line();
		
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
		this.model.material.color = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Color(color);
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
		
		let geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Geometry();
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(x, y, 0));
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(x + ax, x + ay, 0));
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(x + bx, x + by, 0));
		
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
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(- this.moveDistance, 0, - this.moveDistance))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(Math.PI / 2, 0, Math.PI));
				
				this.text
					.alignLeft()
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(500, 100, 0))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, Math.PI, 0))
					.write(this._getLabel());
				
				break;
			case AimSignature.SIDE_TR:
				this
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(this.moveDistance, 0, - this.moveDistance))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(- Math.PI / 2, 0, 0));
				
				this._revertText = true;
				
				this.text
					.alignRight()
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(500, 100, 0))
					.write(this._getLabel());
				
				break;
			case AimSignature.SIDE_BL:
				this
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(- this.moveDistance, 0, this.moveDistance))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(- Math.PI / 2, 0, Math.PI));
				
				this.text
					.alignLeft()
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(500, 10, 0))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(Math.PI, Math.PI, 0))
					.write(this._getLabel());
				break;
			case AimSignature.SIDE_BR:
				this
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(this.moveDistance, 0, this.moveDistance))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(Math.PI / 2, 0, 0));
				
				this._revertText = true;
				
				this.text
					.alignRight()
					.setPosition(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(500, 10, 0))
					.setRotation(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(Math.PI, 0, 0))
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_FontLoader__ = __webpack_require__(23);
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
		this.model = new __WEBPACK_IMPORTED_MODULE_1__api__["a" /* THREE */].Mesh();
		
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
		this.model.geometry = new __WEBPACK_IMPORTED_MODULE_1__api__["a" /* THREE */].PlaneGeometry(this.canvas.width, this.canvas.height, 1, 1);
		this._prepareBackground()._updateText(text);
		this.model.material = new __WEBPACK_IMPORTED_MODULE_1__api__["a" /* THREE */].MeshBasicMaterial({
			transparent: true,
			side: __WEBPACK_IMPORTED_MODULE_1__api__["a" /* THREE */].DoubleSide,
			map: new __WEBPACK_IMPORTED_MODULE_1__api__["a" /* THREE */].Texture(this.canvas)
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
/* 54 */
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Arsenal__ = __webpack_require__(26);
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
		
		let geometry = new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].CylinderGeometry(0.2, 0.2, 1, 32);
		let material = new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].MeshPhongMaterial({color: 0x666666});
		this.setModel(new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Mesh(geometry, material));
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ArsenalIA20);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Charge__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_HelperPoints__ = __webpack_require__(16);




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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);


class HelperPoint {
	constructor() {
		/**
		 *
		 * @type {Mesh}
		 */
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Mesh();
		
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
		this.model.geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].SphereGeometry(this._size, 15, 15);
		this.model.material = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].MeshBasicMaterial({color: this._color});
	}
}

/* harmony default export */ __webpack_exports__["a"] = (HelperPoint);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_II_EngineIIM20__ = __webpack_require__(59);




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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__ = __webpack_require__(29);



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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_III_EngineIIIM20__ = __webpack_require__(61);




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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__ = __webpack_require__(30);



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
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particles_decoration_target_Target__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particles_decoration_target_TargetDirection__ = __webpack_require__(64);
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
		this._box = new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* THREE */].Box3();
		
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
/* 63 */
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
		this.size = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector2(5, 95);
		
		/**
		 *
		 * @type {Group}
		 */
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Group();
		
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
		
		this._tempModel = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Object3D();
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
		
		let geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Geometry();
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(x, y, 0));
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(x, y + this.size.x, 0));
		geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(x + this.size.x, y + this.size.x, 0));
		
		let material = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].MeshBasicMaterial({
			color: this.color
		});
		
		return new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Line(geometry, material);
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
/* 64 */
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
		this.model = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Group();
		this.model.position.z = -5;
		this.model.scale.copy(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0.0008, 0.0008, 0.0008));
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
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 200, 0));
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 230, 0));
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 260, 0));
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 290, 0));
			this._drawArrow(new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 320, 0));
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
		let material = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].LineBasicMaterial({color: this._color});
		let geometry = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Geometry();
		geometry.vertices.push(
			new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(-30, 0, 0),
			new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(0, 30, 0),
			new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector3(30, 0, 0)
		);
		
		let line = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Line(geometry, material);
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
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OBJLoader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MTLLoader__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FontLoader__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__particles_ships_ShipIncludes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__particles_charge_ChargeIncludes__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__particles_arsenal_ArsenalIncludes__ = __webpack_require__(25);









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
		this._manager = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].LoadingManager();
		
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
/* 66 */
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

		this.manager = ( manager !== undefined ) ? manager : __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].DefaultLoadingManager;

		this.materials = null;

	}

	OBJLoader.prototype = {

		constructor: OBJLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].FileLoader( scope.manager );
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

			var container = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Group();
			container.materialLibraries = [].concat( state.materialLibraries );

			for ( var i = 0, l = state.objects.length; i < l; i ++ ) {

				var object = state.objects[ i ];
				var geometry = object.geometry;
				var materials = object.materials;
				var isLine = ( geometry.type === 'Line' );

				// Skip o/g line declarations that did not follow with any faces
				if ( geometry.vertices.length === 0 ) continue;

				var buffergeometry = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].BufferGeometry();

				buffergeometry.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Float32BufferAttribute( geometry.vertices, 3 ) );

				if ( geometry.normals.length > 0 ) {

					buffergeometry.addAttribute( 'normal', new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Float32BufferAttribute( geometry.normals, 3 ) );

				} else {

					buffergeometry.computeVertexNormals();

				}

				if ( geometry.colors.length > 0 ) {

					buffergeometry.addAttribute( 'color', new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Float32BufferAttribute( geometry.colors, 3 ) );

				}

				if ( geometry.uvs.length > 0 ) {

					buffergeometry.addAttribute( 'uv', new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Float32BufferAttribute( geometry.uvs, 2 ) );

				}

				// Create materials

				var createdMaterials = [];

				for ( var mi = 0, miLen = materials.length; mi < miLen; mi ++ ) {

					var sourceMaterial = materials[ mi ];
					var material = undefined;

					if ( this.materials !== null ) {

						material = this.materials.create( sourceMaterial.name );

						// mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
						if ( isLine && material && ! ( material instanceof __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].LineBasicMaterial ) ) {

							var materialLine = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].LineBasicMaterial();
							materialLine.copy( material );
							material = materialLine;

						}

					}

					if ( ! material ) {

						material = ( ! isLine ? new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].MeshPhongMaterial() : new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].LineBasicMaterial() );
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

					mesh = ( ! isLine ? new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Mesh( buffergeometry, createdMaterials ) : new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].LineSegments( buffergeometry, createdMaterials ) );

				} else {

					mesh = ( ! isLine ? new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Mesh( buffergeometry, createdMaterials[ 0 ] ) : new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].LineSegments( buffergeometry, createdMaterials[ 0 ] ) );

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
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(0);


/**
 * Loads a Wavefront .mtl file specifying materials
 *
 * @author angelxuanchang
 */

let MTLLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].DefaultLoadingManager;

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

		var loader = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].FileLoader( this.manager );
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

	this.side = ( this.options && this.options.side ) ? this.options.side : __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].FrontSide;
	this.wrap = ( this.options && this.options.wrap ) ? this.options.wrap : __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].RepeatWrapping;

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

					params.color = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Color().fromArray( value );

					break;

				case 'ks':

					// Specular color (color when light is reflected from shiny surface) using RGB values
					params.specular = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Color().fromArray( value );

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

		this.materials[ materialName ] = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].MeshPhongMaterial( params );
		return this.materials[ materialName ];

	},

	getTextureParams: function ( value, matParams ) {

		var texParams = {

			scale: new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector2( 1, 1 ),
			offset: new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Vector2( 0, 0 )

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
		var loader = __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].Loader.Handlers.get( url );
		var manager = ( this.manager !== undefined ) ? this.manager : __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].DefaultLoadingManager;

		if ( loader === null ) {

			loader = new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* THREE */].TextureLoader( manager );

		}

		if ( loader.setCrossOrigin ) loader.setCrossOrigin( this.crossOrigin );
		texture = loader.load( url, onLoad, onProgress, onError );

		if ( mapping !== undefined ) texture.mapping = mapping;

		return texture;

	}
};

/* harmony default export */ __webpack_exports__["a"] = (MTLLoader);


/***/ }),
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var url = __webpack_require__(70);
var parser = __webpack_require__(17);
var Manager = __webpack_require__(34);
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

exports.Manager = __webpack_require__(34);
exports.Socket = __webpack_require__(39);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(31);
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
/* 71 */
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
/* 72 */
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
exports.humanize = __webpack_require__(73);

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
/* 73 */
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
/* 74 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(76);
var isBuf = __webpack_require__(33);
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
/* 76 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(78);

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(6);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var transports = __webpack_require__(35);
var Emitter = __webpack_require__(5);
var debug = __webpack_require__(3)('engine.io-client:socket');
var index = __webpack_require__(38);
var parser = __webpack_require__(6);
var parseuri = __webpack_require__(31);
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
Socket.Transport = __webpack_require__(19);
Socket.transports = __webpack_require__(35);
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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(18);
var Polling = __webpack_require__(36);
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
/* 81 */
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
/* 82 */
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
/* 83 */
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
/* 84 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)(module), __webpack_require__(1)))

/***/ }),
/* 85 */
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
/* 86 */
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
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module requirements.
 */

var Polling = __webpack_require__(36);
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var Transport = __webpack_require__(19);
var parser = __webpack_require__(6);
var parseqs = __webpack_require__(9);
var inherit = __webpack_require__(10);
var yeast = __webpack_require__(37);
var debug = __webpack_require__(3)('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(90);
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
/* 90 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 91 */
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
/* 92 */
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
//# sourceMappingURL=maps/bundle.js.map
