
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
			z: 0
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
	}
	
	copy(data) {
		this.p.x = data['p']['x'];
		this.p.y = data['p']['y'];
		this.p.z = data['p']['z'];
		
		this.r.x = data['r']['x'];
		this.r.y = data['r']['y'];
		this.r.z = data['r']['z'];
		
		this.l.x = data['l']['x'];
		this.l.y = data['l']['y'];
		this.l.z = data['l']['z'];
		
		this.sk = data['sk'];
	}
}

export default PlayerInfo;