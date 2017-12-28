import * as THREE from 'three'
import FlyControls from './FlyControls';
import SkyeBoxControls from './SkyeBoxControls';
import PreLoader from './../loader/PreLoader';
import Player from './../player/Player';

import HelperPoints from './../helpers/HelperPoints';
import KeyboardControls from "../keyboard/KeyboardControls";

const FPS = 1000 / 30;

class SceneControls {
	/**
	 *
	 * @param {string|number} playerId - Socket ID
	 * @param {Socket} socket
	 * @param {string} [containerID]
	 */
	constructor(playerId, socket, containerID) {
		const FAR = 100000;
		
		/**
		 *
		 * @type {Socket}
		 */
		this.socket = socket;
		
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
		this.scene.fog = new THREE.Fog(this.scene.background, 35000, FAR);
		
		/**
		 *
		 * @type {PerspectiveCamera}
		 */
		this.camera = new THREE.PerspectiveCamera(40, SceneControls.width / SceneControls.height, 1, FAR);
		
		/**
		 *
		 * @type {?Element}
		 */
		this.container = document.getElementById(containerID);
		
		if (!this.container) {
			throw new Error('Cannot find container with ID: ' + containerID);
		}
		
		/**
		 *
		 * @type {Clock}
		 * @private
		 */
		this._clockRender = new THREE.Clock();
		
		/**
		 *
		 * @type {Clock}
		 * @private
		 */
		this._clockAnimate = new THREE.Clock();
		
		/**
		 *
		 * @type {SkyeBoxControls}
		 */
		this.skyBoxControls = new SkyeBoxControls(this.scene);
		
		/**
		 *
		 * @type {?(Mesh|Group)}
		 */
		this.model = null;
		
		/**
		 *
		 * @type {Player}
		 */
		this.player = new Player(true, playerId, this.container);
		this.camera.position.set(
			this.player.position.x,
			this.player.position.y,
			this.player.position.z
		);
		this.camera.rotation.set(
			this.player.rotation.x,
			this.player.rotation.y,
			this.player.rotation.z
		);
		this.camera.lookAt(this.player.lookAt);
		
		/**
		 *
		 * @type {?FlyControls}
		 */
		this.flyControls = new FlyControls(this.camera, this.player);
		this.flyControls.autoForward = false;
		this.flyControls.dragToLook = false;
		
		/**
		 *
		 * @type {PreLoader}
		 */
		this.loader = new PreLoader();
		
		/**
		 *
		 * @type {HelperPoints}
		 * @private
		 */
		this._helperPoints = new HelperPoints(this.scene);
		
		/**
		 *
		 * @type {Array}
		 * @private
		 */
		this._players = [];
	}
	
	/**
	 *
	 * @param {PlayerInfo} playerInfo
	 * @return {SceneControls}
	 */
	addPlayer(playerInfo) {
		
		let player = new Player(false, playerInfo['id'], this.container);
		player.copy(playerInfo);
		player.prepareModel();
		
		this.scene.add(player.getModel());
		
		this._players.push(playerInfo);
		
		// console.log(this._players, player.getModel());
		
		return this;
	}
	
	/**
	 *
	 * @param {string|number} id
	 * @return {SceneControls}
	 */
	removePlayer(id) {
		for (let i = 0; i < this._players.length; i++) {
			if (this._players[i]['id'] === id) {
				this._players.splice(i, 1);
			}
		}
		return this;
	}
	
	/**
	 *
	 * @returns {SceneControls}
	 */
	start() {
		this.loader.load(() => {
			this.player.prepareModel();
			this.model = this.player.getModel();
			
			this.camera.add(this.player.getAim());
			this.camera.add(this.model);
			this.scene.add(this.camera);
			
			this.player.keyboards.addEventListener(KeyboardControls.EVENT_KEY_UP, KeyboardControls.GROUP_PK, (event, keyboard) => {
				if (keyboard.key === 'openConsole') {
					if (keyboard.value === keyboard.valueOn) {
						// Enable fly actions
						this.player.cursor(true);
						this.player.keyboards.enableGroup(KeyboardControls.GROUP_FLY);
					} else {
						// Disable fly actions
						this.player.cursor(false);
						this.player.keyboards.disableGroup(KeyboardControls.GROUP_FLY);
						// Open console of ship
						// ...
					}
				}
			});
			
			
			this.player
				.addEventListener(Player.EVENT_ENABLED, () => {
					// Enable fly actions
					this.player.cursor(true);
					this.player.keyboards.enableGroup(KeyboardControls.GROUP_FLY);
				})
				.addEventListener(Player.EVENT_DISABLED, () => {
					// Disable fly actions
					this.player.cursor(false);
					this.player.keyboards.disableGroup(KeyboardControls.GROUP_FLY);
				})
				.enable(true, true);
			
			
			// Disable fly actions before start
			this.player.cursor(false);
			this.player.keyboards.disableGroup(KeyboardControls.GROUP_FLY);
			// Open console of ship before start fly
			// ...
			
			
			this._animate();
			this._render();
			
		});
		
		return this;
	}
	
	/**
	 *
	 * @returns {SceneControls}
	 */
	init() {
		let s = 150;
		let cube = new THREE.BoxGeometry(s, s, s);
		let material = new THREE.MeshPhongMaterial({color: 0xffffff, specular: 0xffffff, shininess: 50});
		for (let i = 0; i < 500; i ++) {
			let mesh = new THREE.Mesh(cube, material);
			mesh.position.x = 35000 * (2.0 * Math.random() - 1.0);
			mesh.position.y = 35000 * (2.0 * Math.random() - 1.0);
			mesh.position.z = 35000 * (2.0 * Math.random() - 1.0);
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
		this.renderer.setClearColor(0xf0f0f0);
		this.renderer.setSize(SceneControls.width, SceneControls.height);
		this.container.appendChild(this.renderer.domElement);
		this.renderer.gammaInput = true;
		this.renderer.gammaOutput = true;
		this._onWindowResize();
		return this;
	}
	
	/**
	 * Animation elements
	 *
	 * @private
	 */
	_animate() {
		setTimeout(() => {
			this._animate();
			let delta = this._clockAnimate.getDelta();
			if (this.player.isEnabled) {
				this.player.ship.aim.signatureLeftTop.update(
					Math.round(this.player.ship.engine.speedZ)
				);
			}
		}, FPS);
	}
	
	/**
	 * Main render elements
	 *
	 * @returns {void}
	 * @private
	 */
	_render() {
		window.requestAnimationFrame(() => {
			this._render();
		});
		
		let delta = this._clockRender.getDelta();
		if (this.player.isEnabled) {
			this.flyControls.update(delta);
			this.skyBoxControls.update(this.camera.position);
			this.player.position.copy(this.camera.position);
			this.player.rotation.copy(this.camera.rotation);
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