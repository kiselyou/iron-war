
class PlayerInfo {
	/**
	 *
	 * @param {string|number} id
	 */
	constructor(id) {
		/**
		 * Socket ID of client
		 *
		 * @type {null}
		 */
		this.id = id;
		
		/**
		 * Ship Key
		 *
		 * @type {?string}
		 */
		this.sk = null;
		
		/**
		 * Position of current model
		 *
		 * @type {{x: number, y: number, z: number}}
		 */
		this.p = {
			x: 0,
			y: 0,
			z: 0
		};
		
		/**
		 * Rotation of current model
		 *
		 * @type {{x: number, y: number, z: number}}
		 */
		this.r = {
			x: 0,
			y: 0,
			z: 0,
			o: 'XYZ'
		};
		
		/**
		 * Look at
		 *
		 * @type {{x: number, y: number, z: number}}
		 */
		this.l = {
			x: 0,
			y: 0,
			z: 0
		};
		
		/**
		 * Engine info
		 *
		 * @type {{sx: number, sy: number, sz: number, rz: number, rxy: number}}
		 */
		this.e = {
			sx: 0,
			sy: 0,
			sz: 0,
			rz: 0,
			rxy: 0
		};
	}
	
	/**
	 * Copy default data
	 *
	 * @param {Object} data
	 */
	copy(data) {
		this.p.x = data['p']['x'];
		this.p.y = data['p']['y'];
		this.p.z = data['p']['z'];
		
		this.r.x = data['r']['x'];
		this.r.y = data['r']['y'];
		this.r.z = data['r']['z'];
		this.r.o = data['r']['o'];
		
		this.l.x = data['l']['x'];
		this.l.y = data['l']['y'];
		this.l.z = data['l']['z'];
		
		this.sk = data['sk'];
	}
	
	/**
	 * Copy data Engine
	 *
	 * @param {Object} data
	 */
	copyE(data) {
		this.e.sx = data['sx'];
		this.e.sy = data['sy'];
		this.e.sz = data['sz'];
		this.e.rz = data['rz'];
		this.e.rxy = data['rxy'];
	}
}

export default PlayerInfo;