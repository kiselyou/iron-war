
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
		
		/**
		 * Fly Rotation Vector
		 * Fly Move Vector
		 *
		 * @type {{rv: {x: number, y: number, z: number}, mv: {x: number, y: number, z: number}}}
		 */
		this.fly = {
			rv: {
				x: 0,
				y: 0,
				z: 0
			},
			mv: {
				x: 0,
				y: 0,
				z: 0
			}
		};
	}
	
	/**
	 * Copy default data
	 *
	 * @param {Object} data
	 */
	copy(data) {
		
		// Position of current model
		this.p.x = data['p']['x'];
		this.p.y = data['p']['y'];
		this.p.z = data['p']['z'];
		
		// Rotation of current model
		this.r.x = data['r']['x'];
		this.r.y = data['r']['y'];
		this.r.z = data['r']['z'];
		this.r.o = data['r']['o'];
		
		// Ship Key
		this.sk = data['sk'];
		
		// Engine info
		this.e.sx = data['e']['sx'];
		this.e.sy = data['e']['sy'];
		this.e.sz = data['e']['sz'];
		this.e.rz = data['e']['rz'];
		this.e.rxy = data['e']['rxy'];
		
		// Fly Rotation Vector
		this.fly.rv.x = data['fly']['rv']['x'];
		this.fly.rv.y = data['fly']['rv']['y'];
		this.fly.rv.z = data['fly']['rv']['z'];
		
		//Fly Move Vector
		this.fly.mv.x = data['fly']['mv']['x'];
		this.fly.mv.y = data['fly']['mv']['y'];
		this.fly.mv.z = data['fly']['mv']['z'];
	}
}

export default PlayerInfo;