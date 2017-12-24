import Player from './js/player/Player';

import * as THREE from 'three'
import FlyControls from './js/controls/FlyControls';

let player = new Player();







class Main {
	/**
	 *
	 * @param {string} [containerID]
	 */
	constructor(containerID) {
		/**
		 *
		 * @type {WebGLRenderer}
		 */
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		
		/**
		 *
		 * @type {Scene}
		 */
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color().setHSL(0.5, 0.5, 0.03);
		this.scene.fog = new THREE.Fog(this.scene.background, 5500, 25000);
		
		/**
		 *
		 * @type {PerspectiveCamera}
		 */
		this.camera = new THREE.PerspectiveCamera(40, Main.width / Main.height, 1, 35000);
		this.camera.lookAt(this.scene.position);
		
		/**
		 *
		 * @type {?Element}
		 */
		this.container = document.getElementById(containerID);
		
		if (!this.container) {
			throw new Error('Cannot find container with ID: ' + containerID);
		}
		
		let textureLoader = new THREE.TextureLoader();
		this.textureFlare0 = textureLoader.load( "textures/lensflare/lensflare0.png" );
		this.textureFlare2 = textureLoader.load( "textures/lensflare/lensflare2.png" );
		this.textureFlare3 = textureLoader.load( "textures/lensflare/lensflare3.png" );
		
		this.controls = new FlyControls(this.camera, this.container);
		this.controls.movementSpeed = 2500;
		this.controls.rollSpeed = Math.PI / 6;
		this.controls.autoForward = false;
		this.controls.dragToLook = false;
		
		
		this.clock = new THREE.Clock();
		
	}
	
	init() {
		
		let s = 250;
		let cube = new THREE.BoxGeometry(s, s, s);
		let material = new THREE.MeshPhongMaterial({color: 0xffffff, specular: 0xffffff, shininess: 50});
		for (let i = 0; i < 3000; i ++) {
			let mesh = new THREE.Mesh(cube, material);
			mesh.position.x = 18000 * (2.0 * Math.random() - 1.0);
			mesh.position.y = 18000 * (2.0 * Math.random() - 1.0);
			mesh.position.z = 18000 * (2.0 * Math.random() - 1.0);
			mesh.rotation.x = Math.random() * Math.PI;
			mesh.rotation.y = Math.random() * Math.PI;
			mesh.rotation.z = Math.random() * Math.PI;
			mesh.matrixAutoUpdate = false;
			mesh.updateMatrix();
			this.scene.add(mesh);
		}
		
		// lights
		let dirLight = new THREE.DirectionalLight(0xffffff, 0.05);
		dirLight.position.set(0, -1, 0).normalize();
		this.scene.add(dirLight);
		dirLight.color.setHSL(0.1, 0.7, 0.5);
		
		
		
		
		
		// this.addLight( 0.55, 0.9, 0.5, 5000, 0, -1000 );
		this.addLight( 0.08, 0.8, 0.5,    0, 0, -1000 );
		// this.addLight( 0.995, 0.5, 0.9, 5000, 5000, -1000 );
		
		
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(Main.width, Main.height);
		this.container.appendChild(this.renderer.domElement);
		//
		this.renderer.gammaInput = true;
		this.renderer.gammaOutput = true;
		
		
		
		
		window.addEventListener(
			'resize',
			() => {
				this.onWindowResize();
			},
			false
		);
		return this;
	}
	
	addLight( h, s, l, x, y, z ) {
		let light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
		light.color.setHSL( h, s, l );
		light.position.set( x, y, z );
		this.scene.add( light );
		let flareColor = new THREE.Color( 0xffffff );
		flareColor.setHSL( h, s, l + 0.5 );
		let lensFlare = new THREE.LensFlare(this.textureFlare0, 700, 0.0, THREE.AdditiveBlending, flareColor );
		lensFlare.add(this.textureFlare2, 512, 0.0, THREE.AdditiveBlending );
		lensFlare.add(this.textureFlare2, 512, 0.0, THREE.AdditiveBlending );
		lensFlare.add(this.textureFlare2, 512, 0.0, THREE.AdditiveBlending );
		lensFlare.add(this.textureFlare3, 60, 0.6, THREE.AdditiveBlending );
		lensFlare.add(this.textureFlare3, 70, 0.7, THREE.AdditiveBlending );
		lensFlare.add(this.textureFlare3, 120, 0.9, THREE.AdditiveBlending );
		lensFlare.add(this.textureFlare3, 70, 1.0, THREE.AdditiveBlending );
		
		lensFlare.customUpdateCallback = (object) => {
			let f, fl = object.lensFlares.length;
			let flare;
			let vecX = -object.positionScreen.x * 2;
			let vecY = -object.positionScreen.y * 2;
			for( f = 0; f < fl; f++ ) {
				flare = object.lensFlares[ f ];
				flare.x = object.positionScreen.x + vecX * flare.distance;
				flare.y = object.positionScreen.y + vecY * flare.distance;
				flare.rotation = 0;
			}
			object.lensFlares[ 2 ].y += 0.025;
			object.lensFlares[ 3 ].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad( 45 );
		};
		
		lensFlare.position.copy( light.position );
		this.scene.add( lensFlare );
	}
	
	
	animate() {
		window.requestAnimationFrame(() => {
			this.animate();
		});
		
		let delta = this.clock.getDelta();
		// this.controls.update(delta);
		
		this.renderer.render(this.scene, this.camera);
	}
	
	onWindowResize() {
		this.camera.aspect = Main.width / Main.height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(Main.width, Main.height);
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
}

const main = new Main('main-container-canvas');
main
	.init()
	.animate();
