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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(6);


class Engine extends __WEBPACK_IMPORTED_MODULE_0__Particle__["default"] {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
    constructor(type, key) {
        super(type, key);
		
		/**
         *
		 * @type {number}
		 */
		this.speedMin = 0;
		
		/**
         *
		 * @type {number}
		 */
        this.speedMax = 0;
		
		/**
         *
		 * @type {number}
		 */
		this.speed = 0;
    }
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static I_M20_KEY() {
        return 'I_M20_KEY';
    }
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static II_M20_KEY() {
		return 'II_M20_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static III_M20_KEY() {
		return 'III_M20_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static I_M50_KEY() {
        return 'I_M50_KEY';
    }
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static II_M50_KEY() {
		return 'II_M50_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static III_M50_KEY() {
		return 'III_M50_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static I_M100_KEY() {
		return 'I_M100_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static II_M100_KEY() {
		return 'II_M100_KEY';
	}
	
	/**
     *
	 * @returns {string}
	 * @constructor
	 */
	static III_M100_KEY() {
		return 'III_M100_KEY';
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Engine);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParticleClass__ = __webpack_require__(7);


class ParticleClassI extends __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["default"] {
    constructor() {
        super('ParticleClassI', __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["default"].I_CLASS_KEY);
	
	    /**
         *
	     * @type {string}
	     */
	    this.name = 'I';
    }
}

/* harmony default export */ __webpack_exports__["default"] = (ParticleClassI);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParticleClass__ = __webpack_require__(7);


class ParticleClassII extends __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["default"] {
    constructor() {
	    super('ParticleClassII', __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["default"].II_CLASS_KEY);
	
	    /**
         *
	     * @type {string}
	     */
	    this.name = 'II';
    }
}

/* harmony default export */ __webpack_exports__["default"] = (ParticleClassII);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParticleClass__ = __webpack_require__(7);


class ParticleClassIII extends __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["default"] {
    constructor() {
	    super('ParticleClassIII', __WEBPACK_IMPORTED_MODULE_0__ParticleClass__["default"].III_CLASS_KEY);
	    
	    this.name = 'III';
    }
}

/* harmony default export */ __webpack_exports__["default"] = (ParticleClassIII);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(6);


class Ship extends __WEBPACK_IMPORTED_MODULE_0__Particle__["default"] {
	/**
	 *
	 * @param {string} type
	 * @param {(string|number)} key
	 */
	constructor(type, key) {
		super(type, key);
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = null;
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static I_EXPLORER_KEY() {
		return 'I_EXPLORER_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static II_EXPLORER_KEY() {
		return 'II_EXPLORER_KEY';
	}
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	static III_EXPLORER_KEY() {
		return 'III_EXPLORER_KEY';
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Ship);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

class Includes {
	constructor() {
		/**
		 *
		 * @type {Array.<(Object|Particle)>}
		 */
		this.includes = [];
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
	 * @param {(number|string)} key
	 * @returns {?Object}
	 */
	get(key) {
		let element = this.includes.find((el) => {
			return el.key === key;
		});
		return element ? element : null;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Includes);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParticleError__ = __webpack_require__(12);


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
	}
	
	/**
	 * Clone Particle
	 *
	 * @returns {Particle}
	 */
	clone() {
		return Object.assign(Object.create(this), this);
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
				new __WEBPACK_IMPORTED_MODULE_0__ParticleError__["default"]('You tried to set not correct object');
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
			console.log(e);
		}
		return this;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Particle);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Particle__ = __webpack_require__(6);


class ParticleClass extends __WEBPACK_IMPORTED_MODULE_0__Particle__["default"] {
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

/* harmony default export */ __webpack_exports__["default"] = (ParticleClass);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_I_EngineIM20__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_ParticleClassI__ = __webpack_require__(1);




class ShipExplorerI extends __WEBPACK_IMPORTED_MODULE_0__Ship__["default"] {
	constructor() {
		super('ShipExplorerI', __WEBPACK_IMPORTED_MODULE_0__Ship__["default"].I_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_2__classes_ParticleClassI__["default"]();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new __WEBPACK_IMPORTED_MODULE_1__engine_I_EngineIM20__["default"]();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ShipExplorerI);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(1);



class EngineIM20 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["default"] {
    constructor() {
        super('EngineIM20', __WEBPACK_IMPORTED_MODULE_0__Engine__["default"].I_M20_KEY);
	
	    /**
         *
	     * @type {ParticleClassI}
	     */
	    this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__["default"]();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIM20);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__ = __webpack_require__(2);



class EngineIIM20 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["default"] {
	constructor() {
		super('EngineIIM20', __WEBPACK_IMPORTED_MODULE_0__Engine__["default"].II_M20_KEY);
		
		/**
		 *
		 * @type {ParticleClassII}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__["default"]();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIIM20);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__ = __webpack_require__(3);



class EngineIIIM20 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["default"] {
	constructor() {
		super('EngineIIIM20', __WEBPACK_IMPORTED_MODULE_0__Engine__["default"].III_M20_KEY);
		
		/**
		 *
		 * @type {ParticleClassIII}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__["default"]();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIIIM20);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

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

/* harmony default export */ __webpack_exports__["default"] = (ParticleError);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

class User {
    constructor() {
        
    }
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(1);



class EngineIM50 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["default"] {
    constructor() {
        super('EngineIM50', __WEBPACK_IMPORTED_MODULE_0__Engine__["default"].I_M50_KEY);
	
	    /**
	     *
	     * @type {ParticleClassI}
	     */
	    this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__["default"]()
    }
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIM50);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__ = __webpack_require__(1);



class EngineIM100 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["default"] {
    constructor() {
        super('EngineIM100', __WEBPACK_IMPORTED_MODULE_0__Engine__["default"].I_M100_KEY);
	
	    /**
	     *
	     * @type {ParticleClassI}
	     */
	    this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassI__["default"]()
    }
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIM100);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__ = __webpack_require__(2);



class EngineIIM50 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["default"] {
	constructor() {
		super('EngineIIM50', __WEBPACK_IMPORTED_MODULE_0__Engine__["default"].II_M50_KEY);
		
		/**
		 *
		 * @type {ParticleClassII}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__["default"]();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIIM50);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__ = __webpack_require__(2);



class EngineIIM100 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["default"] {
	constructor() {
		super('EngineIIM100', __WEBPACK_IMPORTED_MODULE_0__Engine__["default"].II_M100_KEY);
		
		/**
		 *
		 * @type {ParticleClassII}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__["default"]();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIIM100);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__ = __webpack_require__(3);



class EngineIIIM50 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["default"] {
	constructor() {
		super('EngineIIIM50', __WEBPACK_IMPORTED_MODULE_0__Engine__["default"].III_M50_KEY);
		
		/**
		 *
		 * @type {ParticleClassIII}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__["default"]();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIIIM50);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Engine__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__ = __webpack_require__(3);



class EngineIIIM100 extends __WEBPACK_IMPORTED_MODULE_0__Engine__["default"] {
    constructor() {
	    super('EngineIIIM100', __WEBPACK_IMPORTED_MODULE_0__Engine__["default"].III_M100_KEY);
	
	    /**
	     *
	     * @type {ParticleClassIII}
	     */
	    this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__["default"]();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIIIM100);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_II_EngineIIM20__ = __webpack_require__(10);




class ShipExplorerII extends __WEBPACK_IMPORTED_MODULE_0__Ship__["default"] {
	constructor() {
		super('ShipExplorerII', __WEBPACK_IMPORTED_MODULE_0__Ship__["default"].II_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassII__["default"]();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new __WEBPACK_IMPORTED_MODULE_2__engine_II_EngineIIM20__["default"]();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ShipExplorerII);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_III_EngineIIIM20__ = __webpack_require__(11);




class ShipExplorerIII extends __WEBPACK_IMPORTED_MODULE_0__Ship__["default"] {
	constructor() {
		super('ShipExplorerIII', __WEBPACK_IMPORTED_MODULE_0__Ship__["default"].III_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new __WEBPACK_IMPORTED_MODULE_1__classes_ParticleClassIII__["default"]();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new __WEBPACK_IMPORTED_MODULE_2__engine_III_EngineIIIM20__["default"]();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ShipExplorerIII);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(12);
__webpack_require__(7);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(13);
__webpack_require__(0);
__webpack_require__(25);
__webpack_require__(4);
__webpack_require__(26);
__webpack_require__(17);
__webpack_require__(10);
__webpack_require__(16);
__webpack_require__(19);
__webpack_require__(11);
__webpack_require__(18);
__webpack_require__(20);
__webpack_require__(15);
__webpack_require__(9);
__webpack_require__(14);
__webpack_require__(8);
module.exports = __webpack_require__(21);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Includes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ParticleClassI__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ParticleClassII__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ParticleClassIII__ = __webpack_require__(3);





class ParticleClassIncludes extends __WEBPACK_IMPORTED_MODULE_0__Includes__["default"] {
	constructor() {
		super();
		
		this.includes = [
			new __WEBPACK_IMPORTED_MODULE_1__ParticleClassI__["default"](),
			new __WEBPACK_IMPORTED_MODULE_2__ParticleClassII__["default"](),
			new __WEBPACK_IMPORTED_MODULE_3__ParticleClassIII__["default"]()
		];
	};
}

/* harmony default export */ __webpack_exports__["default"] = (ParticleClassIncludes);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particles_ships_Ship__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__particles_ships_I_ShipExplorerI__ = __webpack_require__(8);




class Player extends __WEBPACK_IMPORTED_MODULE_0__User__["default"] {

    constructor() {
        super();
        
        /**
         *
         * @type {?Ship}
         */
        this.ship = new __WEBPACK_IMPORTED_MODULE_2__particles_ships_I_ShipExplorerI__["default"]();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Includes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__I_EngineIM20__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__I_EngineIM50__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__I_EngineIM100__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__II_EngineIIM20__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__II_EngineIIM50__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__II_EngineIIM100__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__III_EngineIIIM20__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__III_EngineIIIM50__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__III_EngineIIIM100__ = __webpack_require__(19);











class EngineIncludes extends __WEBPACK_IMPORTED_MODULE_0__Includes__["default"] {
	constructor() {
		super();
		
		this.includes = [
			new __WEBPACK_IMPORTED_MODULE_1__I_EngineIM20__["default"](),
			new __WEBPACK_IMPORTED_MODULE_2__I_EngineIM50__["default"](),
			new __WEBPACK_IMPORTED_MODULE_3__I_EngineIM100__["default"](),
			new __WEBPACK_IMPORTED_MODULE_4__II_EngineIIM20__["default"](),
			new __WEBPACK_IMPORTED_MODULE_5__II_EngineIIM50__["default"](),
			new __WEBPACK_IMPORTED_MODULE_6__II_EngineIIM100__["default"](),
			new __WEBPACK_IMPORTED_MODULE_7__III_EngineIIIM20__["default"](),
			new __WEBPACK_IMPORTED_MODULE_8__III_EngineIIIM50__["default"](),
			new __WEBPACK_IMPORTED_MODULE_9__III_EngineIIIM100__["default"](),
		];
	}
}

/* harmony default export */ __webpack_exports__["default"] = (EngineIncludes);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Includes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__I_ShipExplorerI__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__II_ShipExplorerII__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__III_ShipExplorerIII__ = __webpack_require__(21);





class ShipIncludes extends __WEBPACK_IMPORTED_MODULE_0__Includes__["default"] {
	constructor() {
		super();
		
		this.includes = [
			new __WEBPACK_IMPORTED_MODULE_1__I_ShipExplorerI__["default"](),
			new __WEBPACK_IMPORTED_MODULE_2__II_ShipExplorerII__["default"](),
			new __WEBPACK_IMPORTED_MODULE_3__III_ShipExplorerIII__["default"]()
		];
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ShipIncludes);

/***/ })
/******/ ]);
//# sourceMappingURL=maps/bundle.js.map
