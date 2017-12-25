import * as THREE from 'three'

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
		this._size = 15000;
		
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
		
		this.position = new THREE.Vector3(0, 0, -10000);
		
		this.sky = this.initSky(this.textureSky);
		this.initLight(this.sky, 0.1, 0.4, 0.8);
		
		// this.initLight(this.sky, 0.181, 0.100, 0.250);
		
		this.scene.add(this.sky);
	}
	
	/**
	 *
	 * @param {Mesh} el
	 * @param {number} h
	 * @param {number} s
	 * @param {number} l
	 * @returns {LensFlare}
	 */
	initLight(el, h, s, l) {
		let light = new THREE.PointLight(0xffffff, 1.4);
		light.color.setHSL(h, s, l);
		light.position.copy(this.position);
		// this.scene.add(light);
		el.add(light);
		let flareColor = new THREE.Color(0xffffff);
		flareColor.setHSL(h, s, l + 0.5);
		
		let lensFlare = new THREE.LensFlare(this.textureFlare0, 1000, 0.0, THREE.AdditiveBlending, flareColor);
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
		// this.scene.add(lensFlare);
		el.add(lensFlare);
		return lensFlare;
	}
	
	/**
	 * Build sky box and add it to scene.
	 *
	 * @param {Texture} texture
	 * @returns {Mesh}
	 */
	initSky(texture) {
		let material = new THREE.MeshStandardMaterial({
			map: texture
		});
		let geometry = new THREE.SphereGeometry(this._size, this.wSegments, this.hSegments);
		let sky = new THREE.Mesh(geometry, material);
		sky.material.side = THREE.BackSide;
		sky.material.depthWrite = false;
		sky.material.roughness = 1;
		sky.material.metalness = 0;
		return sky;
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