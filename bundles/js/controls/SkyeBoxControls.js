import {THREE} from '../../api';

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
		
		let textureLoader = new THREE.TextureLoader();
		this.textureFlare0 = textureLoader.load('textures/lensflare/lensflare0.png');
		this.textureFlare3 = textureLoader.load('textures/lensflare/lensflare3.png');
		this.textureSky = textureLoader.load('textures/skybox/003_space.jpg');
		
		this.position = new THREE.Vector3(0, -1500, -10000);
		
		this.sky = new THREE.Mesh();
		
		this.sky.renderOrder = -100000;
		
		this.initSky(this.textureSky);
		
		this.initLight(0.1, 0.4, 0.8, 1700, new THREE.Vector3(0, 1300, -100));
		
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
		let light = new THREE.PointLight(0xffffff, 1.4);
		light.color.setHSL(h, s, l);
		light.position.copy(v);
		this.sky.add(light);
		let flareColor = new THREE.Color(0xffffff);
		flareColor.setHSL(h, s, l + 0.5);
		
		let lensFlare = new THREE.LensFlare(this.textureFlare0, size, 0.0, THREE.AdditiveBlending, flareColor);
		lensFlare.add(this.textureFlare3, 60, 0.6, THREE.AdditiveBlending);
		lensFlare.add(this.textureFlare3, 70, 0.7, THREE.AdditiveBlending);
		lensFlare.add(this.textureFlare3, 120, 0.9, THREE.AdditiveBlending);
		lensFlare.add(this.textureFlare3, 70, 1.0, THREE.AdditiveBlending);
		
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
			object.lensFlares[3].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad(45);
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
		this.sky.material = new THREE.MeshStandardMaterial({
			map: texture,
			side: THREE.BackSide,
			depthWrite: false,
			roughness: 1,
			metalness: 0
		});
		
		this.sky.geometry = new THREE.SphereGeometry(this._size, this.wSegments, this.hSegments);
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

export default SkyeBoxControls;