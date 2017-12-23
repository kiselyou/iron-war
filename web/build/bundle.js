
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

export default Includes;
import ParticleError from './ParticleError';

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
				new ParticleError('You tried to set not correct object');
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

export default Particle;

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

export default ParticleError;
import Particle from './../Particle';

class ParticleClass extends Particle {
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

export default ParticleClass;
import ParticleClass from './ParticleClass';

class ParticleClassI extends ParticleClass {
    constructor() {
        super('ParticleClassI', ParticleClass.I_CLASS_KEY);
	
	    /**
         *
	     * @type {string}
	     */
	    this.name = 'I';
    }
}

export default ParticleClassI;
import ParticleClass from './ParticleClass';

class ParticleClassII extends ParticleClass {
    constructor() {
	    super('ParticleClassII', ParticleClass.II_CLASS_KEY);
	
	    /**
         *
	     * @type {string}
	     */
	    this.name = 'II';
    }
}

export default ParticleClassII;
import ParticleClass from './ParticleClass';

class ParticleClassIII extends ParticleClass {
    constructor() {
	    super('ParticleClassIII', ParticleClass.III_CLASS_KEY);
	    
	    this.name = 'III';
    }
}

export default ParticleClassIII;
import Includes from './../Includes';
import ParticleClassI from './ParticleClassI';
import ParticleClassII from './ParticleClassII';
import ParticleClassIII from './ParticleClassIII';

class ParticleClassIncludes extends Includes {
	constructor() {
		super();
		
		this.includes = [
			new ParticleClassI(),
			new ParticleClassII(),
			new ParticleClassIII()
		];
	};
}

export default ParticleClassIncludes;
import User from './User';
import Ship from './../particles/ships/Ship';
import ShipExplorerI from './../particles/ships/I/ShipExplorerI';

class Player extends User {

    constructor() {
        super();
        
        /**
         *
         * @type {?Ship}
         */
        this.ship = new ShipExplorerI();
    }
}

export default Player;

class User {
    constructor() {
        
    }
}

export default User;
import Particle from './../../Particle';

class Ship extends Particle {
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

export default Ship;
import Includes from './../../Includes';
import ShipExplorerI from './I/ShipExplorerI';
import ShipExplorerII from './II/ShipExplorerII';
import ShipExplorerIII from './III/ShipExplorerIII';

class ShipIncludes extends Includes {
	constructor() {
		super();
		
		this.includes = [
			new ShipExplorerI(),
			new ShipExplorerII(),
			new ShipExplorerIII()
		];
	}
}

export default ShipIncludes;
import Particle from './../../Particle';

class Engine extends Particle {
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

export default Engine;
import Includes from './../../Includes';
import EngineIM20 from "./I/EngineIM20";
import EngineIM50 from "./I/EngineIM50";
import EngineIM100 from "./I/EngineIM100";
import EngineIIM20 from "./II/EngineIIM20";
import EngineIIM50 from "./II/EngineIIM50";
import EngineIIM100 from "./II/EngineIIM100";
import EngineIIIM20 from "./III/EngineIIIM20";
import EngineIIIM50 from "./III/EngineIIIM50";
import EngineIIIM100 from "./III/EngineIIIM100";

class EngineIncludes extends Includes {
	constructor() {
		super();
		
		this.includes = [
			new EngineIM20(),
			new EngineIM50(),
			new EngineIM100(),
			new EngineIIM20(),
			new EngineIIM50(),
			new EngineIIM100(),
			new EngineIIIM20(),
			new EngineIIIM50(),
			new EngineIIIM100(),
		];
	}
}

export default EngineIncludes;
import Ship from './../Ship';
import EngineIM20 from './../../engine/I/EngineIM20';
import ParticleClassI from './../../../classes/ParticleClassI';

class ShipExplorerI extends Ship {
	constructor() {
		super('ShipExplorerI', Ship.I_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassI();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new EngineIM20();
	}
}

export default ShipExplorerI;
import Ship from './../Ship';
import ParticleClassII from './../../../classes/ParticleClassII';
import EngineIIM20 from './../../engine/II/EngineIIM20';

class ShipExplorerII extends Ship {
	constructor() {
		super('ShipExplorerII', Ship.II_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassII();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new EngineIIM20();
	}
}

export default ShipExplorerII;
import Ship from './../Ship';
import ParticleClassIII from './../../../classes/ParticleClassIII';
import EngineIIIM20 from './../../engine/III/EngineIIIM20';

class ShipExplorerIII extends Ship {
	constructor() {
		super('ShipExplorerIII', Ship.III_EXPLORER_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassIII();
		
		/**
		 *
		 * @type {Engine}
		 */
		this.engine = new EngineIIIM20();
	}
}

export default ShipExplorerIII;
import Engine from '../Engine';
import ParticleClassII from "../../../classes/ParticleClassII";

class EngineIIM100 extends Engine {
	constructor() {
		super('EngineIIM100', Engine.II_M100_KEY);
		
		/**
		 *
		 * @type {ParticleClassII}
		 */
		this.particleClass = new ParticleClassII();
	}
}

export default EngineIIM100;
import Engine from '../Engine';
import ParticleClassII from "../../../classes/ParticleClassII";

class EngineIIM20 extends Engine {
	constructor() {
		super('EngineIIM20', Engine.II_M20_KEY);
		
		/**
		 *
		 * @type {ParticleClassII}
		 */
		this.particleClass = new ParticleClassII();
	}
}

export default EngineIIM20;
import Engine from '../Engine';
import ParticleClassII from "../../../classes/ParticleClassII";

class EngineIIM50 extends Engine {
	constructor() {
		super('EngineIIM50', Engine.II_M50_KEY);
		
		/**
		 *
		 * @type {ParticleClassII}
		 */
		this.particleClass = new ParticleClassII();
	}
}

export default EngineIIM50;
import Engine from '../Engine';
import ParticleClassI from "../../../classes/ParticleClassI";

class EngineIM100 extends Engine {
    constructor() {
        super('EngineIM100', Engine.I_M100_KEY);
	
	    /**
	     *
	     * @type {ParticleClassI}
	     */
	    this.particleClass = new ParticleClassI()
    }
}

export default EngineIM100;
import Engine from '../Engine';
import ParticleClassI from "../../../classes/ParticleClassI";

class EngineIM20 extends Engine {
    constructor() {
        super('EngineIM20', Engine.I_M20_KEY);
	
	    /**
         *
	     * @type {ParticleClassI}
	     */
	    this.particleClass = new ParticleClassI();
    }
}

export default EngineIM20;
import Engine from '../Engine';
import ParticleClassI from "../../../classes/ParticleClassI";

class EngineIM50 extends Engine {
    constructor() {
        super('EngineIM50', Engine.I_M50_KEY);
	
	    /**
	     *
	     * @type {ParticleClassI}
	     */
	    this.particleClass = new ParticleClassI()
    }
}

export default EngineIM50;
import Engine from '../Engine';
import ParticleClassIII from "../../../classes/ParticleClassIII";

class EngineIIIM100 extends Engine {
    constructor() {
	    super('EngineIIIM100', Engine.III_M100_KEY);
	
	    /**
	     *
	     * @type {ParticleClassIII}
	     */
	    this.particleClass = new ParticleClassIII();
    }
}

export default EngineIIIM100;
import Engine from '../Engine';
import ParticleClassIII from "../../../classes/ParticleClassIII";

class EngineIIIM20 extends Engine {
	constructor() {
		super('EngineIIIM20', Engine.III_M20_KEY);
		
		/**
		 *
		 * @type {ParticleClassIII}
		 */
		this.particleClass = new ParticleClassIII();
	}
}

export default EngineIIIM20;
import Engine from '../Engine';
import ParticleClassIII from "../../../classes/ParticleClassIII";

class EngineIIIM50 extends Engine {
	constructor() {
		super('EngineIIIM50', Engine.III_M50_KEY);
		
		/**
		 *
		 * @type {ParticleClassIII}
		 */
		this.particleClass = new ParticleClassIII();
	}
}

export default EngineIIIM50;
//# sourceMappingURL=maps/bundle.js.map
