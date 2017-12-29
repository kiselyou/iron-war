import * as THREE from 'three'
import FlyControls from './FlyControls';
import SkyeBoxControls from './SkyeBoxControls';
import Player from './../player/Player';

import HelperPoints from './../helpers/HelperPoints';
import KeyboardControls from "../keyboard/KeyboardControls";

const FPS = 1000 / 30;

class SceneControls {
	/**
	 *
	 * @param {string|number} playerId - Socket ID
	 * @param {string} [containerID]
	 */
	constructor(playerId, containerID) {
		const FAR = 100000;
		
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
		 * @type {Player}
		 */
		this.player = new Player(true, playerId, this.container);
		this.camera.position.copy(this.player.position);
		this.camera.rotation.copy(this.player.rotation);
		this.camera.lookAt(this.player.lookAt);
		// console.log(this.camera);
		
		/**
		 *
		 * @type {?FlyControls}
		 */
		this.flyControls = new FlyControls(this.camera, this.player);
		this.flyControls.initEvents();
		
		/**
		 *
		 * @type {HelperPoints}
		 * @private
		 */
		this._helperPoints = new HelperPoints(this.scene);
		
		/**
		 *
		 * @type {Object.<Player>}
		 * @private
		 */
		this._players = {};
		
		/**
		 *
		 * @type {Array.<updatePlayerListener>}
		 * @private
		 */
		this._updateListener = [];
		
		this.testIsSend = 0;
	}
	
	/**
	 * @callback updatePlayerListener
	 */
	
	/**
	 *
	 * @param {updatePlayerListener} listener
	 * @return {SceneControls}
	 */
	addPlayerListener(listener) {
		this._updateListener.push(listener);
		return this;
	}
	
	/**
	 *
	 * @param {PlayerInfo} playerInfo
	 * @return {SceneControls}
	 */
	addPlayer(playerInfo) {
		
		let id = playerInfo['id'];
		let player = new Player(false, id, this.container);
		
		// 1. set ship inf
		player.setSocketInfo(playerInfo);
		// 2. prepare model
		player.prepareModel();
		// 3. update engine
		player.ship.engine.setSocketInfo(playerInfo['e']);
		// 4. update fly control
		player.flyControls.setSocketInfo(playerInfo['fly']);
		
		player.enable(true, false);
		
		let model = player.getModel();
		this.scene.add(model);
		this._players[id] = player;
		return this;
	}
	
	/**
	 *
	 * @param {string|number} id
	 * @returns {?Player}
	 */
	getPlayer(id) {
		return this._players.hasOwnProperty(id) ? this._players[id] : null;
	}
	
	/**
	 *
	 * @param {string|number} id
	 * @return {SceneControls}
	 */
	destroyPlayer(id) {
		if (this._players.hasOwnProperty(id)) {
			this.scene.remove(this._players[id].getModel());
			delete this._players[id];
		}
		return this;
	}
	
	/**
	 *
	 * @returns {SceneControls}
	 */
	start() {
		this.player.prepareModel();
		this.camera.add(this.player.getAim());
		this.camera.add(this.player.getModel());
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
			mesh.position.x = 5000 * (2.0 * Math.random() - 1.0);
			mesh.position.y = 5000 * (2.0 * Math.random() - 1.0);
			mesh.position.z = 5000 * (2.0 * Math.random() - 1.0);
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
		this.renderer.gammaInput = false;
		this.renderer.gammaOutput = false;
		// this.renderer.sortObjects = false;
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
				
				for (let listener of this._updateListener) {
					listener();
				}

				for (let playerId in this._players) {
					if (this._players.hasOwnProperty(playerId)) {
						this._players[playerId].update(delta);
					}
				}
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
			this.flyControls.updateUserControl(delta);
			this.skyBoxControls.update(this.camera.position);
			this.player.position.copy(this.camera.position);
			this.player.rotation.copy(this.camera.rotation);
			
			// for (let listener of this._updateListener) {
			// 	listener();
			// }
			//
			// for (let playerId in this._players) {
			// 	if (this._players.hasOwnProperty(playerId)) {
			// 		this._players[playerId].update(delta);
			// 	}
			// }
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