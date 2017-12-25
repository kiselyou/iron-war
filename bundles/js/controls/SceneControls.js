import * as THREE from 'three'
import FlyControls from './FlyControls';
import SkyeBoxControls from './SkyeBoxControls';

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
		 * @type {FlyControls}
		 */
		this.flyControls = new FlyControls(this.camera, this.container);
		this.flyControls.movementSpeed = 2500;
		this.flyControls.rollSpeed = Math.PI / 16;
		this.flyControls.autoForward = false;
		this.flyControls.dragToLook = false;
		
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
		
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(SceneControls.width, SceneControls.height);
		this.container.appendChild(this.renderer.domElement);
		this.renderer.gammaInput = true;
		this.renderer.gammaOutput = true;
		return this;
	}
	
	/**
	 * @returns {void}
	 */
	animate() {
		window.requestAnimationFrame(() => {
			this.animate();
		});
		
		let delta = this.clock.getDelta();
		this.flyControls.update(delta);
		this.skyBoxControls.update(this.camera.position);
		this.renderer.render(this.scene, this.camera);
	}
	
	/**
	 *
	 * @returns {SceneControls}
	 */
	onWindowResize() {
		window.addEventListener(
			'resize',
			() => {
				this.camera.aspect = SceneControls.aspect;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize(SceneControls.width, SceneControls.height);
			},
			false
		);
		return this;
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