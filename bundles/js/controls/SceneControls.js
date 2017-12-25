import * as THREE from 'three'
import FlyControls from './FlyControls';
import SkyeBoxControls from './SkyeBoxControls';
import PreLoader from './../loader/PreLoader';
import Player from './../player/Player';

class SceneControls {
	/**
	 *
	 * @param {string} [containerID]
	 */
	constructor(containerID) {
		const FAR = 25000;
		
		/**
		 *
		 * @type {WebGLRenderer}
		 */
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});
		
		/**
		 *
		 * @type {Scene}
		 */
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color().setHSL(0.7, 0.4, 0.03);
		this.scene.fog = new THREE.Fog(this.scene.background, 15000, FAR);
		
		/**
		 *
		 * @type {PerspectiveCamera}
		 */
		this.camera = new THREE.PerspectiveCamera(40, SceneControls.width / SceneControls.height, 1, FAR);
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
		this.textureFlare0 = textureLoader.load("textures/lensflare/lensflare0.png");
		this.textureFlare3 = textureLoader.load("textures/lensflare/lensflare3.png");
		
		/**
		 *
		 * @type {Clock}
		 */
		this.clock = new THREE.Clock();
		
		/**
		 *
		 * @type {SkyeBoxControls}
		 */
		this.skyBoxControls = new SkyeBoxControls(this.scene);
		
		/**
		 *
		 * @type {?FlyControls}
		 */
		this.flyControls = null;
		
		/**
		 *
		 * @type {?(Mesh|Group)}
		 */
		this.model = null;
		
		/**
		 *
		 * @type {Player}
		 */
		this.player = new Player();
		
		/**
		 *
		 * @type {PreLoader}
		 */
		this.loader = new PreLoader();
	}
	
	/**
	 *
	 * @returns {SceneControls}
	 */
	start() {
		this.loader.load(() => {
			this.player.updateModel();
			this.model = this.player.getModel();
			this.model.position.z = 0;
			this.model.position.y = -2;
			this.model.rotation.y = Math.PI;
			
			this.flyControls = new FlyControls(this.camera, this.container);
			this.flyControls.movementSpeed = this.player.ship.engine.speed;
			this.flyControls.rollSpeed = this.player.ship.engine.rollSpeed;
			this.flyControls.autoForward = false;
			this.flyControls.dragToLook = false;
			
			this.camera.add(this.model);
			this.scene.add(this.camera);
			this._animate();
		});
		
		return this;
	}
	
	/**
	 *
	 * @returns {SceneControls}
	 */
	init() {
		let s = 250;
		let cube = new THREE.BoxGeometry(s, s, s);
		let material = new THREE.MeshPhongMaterial({color: 0xffffff, specular: 0xffffff, shininess: 50});
		for (let i = 0; i < 1000; i ++) {
			let mesh = new THREE.Mesh(cube, material);
			mesh.position.x = 28000 * (2.0 * Math.random() - 1.0);
			mesh.position.y = 28000 * (2.0 * Math.random() - 1.0);
			mesh.position.z = 28000 * (2.0 * Math.random() - 1.0);
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
		
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(SceneControls.width, SceneControls.height);
		this.container.appendChild(this.renderer.domElement);
		this.renderer.gammaInput = true;
		this.renderer.gammaOutput = true;
		this._onWindowResize();
		return this;
	}
	
	/**
	 * @returns {void}
	 * @private
	 */
	_animate() {
		window.requestAnimationFrame(() => {
			this._animate();
		});
		
		let delta = this.clock.getDelta();
		
		if (this.model) {
			this.skyBoxControls.update(this.camera.position);
			this.flyControls.update(delta);
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
				this.camera.aspect = SceneControls.aspect;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize(SceneControls.width, SceneControls.height);
			},
			false
		);
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get aspect() {
		return SceneControls.width / SceneControls.height;
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

export default SceneControls;