import * as THREE from 'three'

class SkyeBoxControls {
	/**
	 *
	 * @param {Scene} scene
	 */
	constructor(scene) {
		/**
		 *
		 * @type {Scene}
		 */
		this.scene = scene;
		
		let textureLoader = new THREE.TextureLoader();
		this.textureFlare0 = textureLoader.load('textures/lensflare/lensflare0.png');
		this.textureFlare3 = textureLoader.load('textures/lensflare/lensflare3.png');
		
		this.position = new THREE.Vector3(0, 0, -15000);
		this.lensFlare = this.getLight(0.08, 0.8, 0.5, this.position);
	}
	
	/**
	 *
	 * @param {number} h
	 * @param {number} s
	 * @param {number} l
	 * @param {Vector3} v
	 * @returns {LensFlare}
	 */
	getLight(h, s, l, v) {
		let light = new THREE.PointLight(0xffffff, 1.4);
		light.color.setHSL(h, s, l);
		light.position.copy(v);
		this.scene.add(light);
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
		this.scene.add(lensFlare);
		return lensFlare;
	}
	
	/**
	 *
	 * @param {Vector3} v
	 * @returns {void}
	 */
	update(v) {
		this.lensFlare.position.set(v.x + this.position.x, v.y + this.position.y, v.z + this.position.z);
	}
}

export default SkyeBoxControls;