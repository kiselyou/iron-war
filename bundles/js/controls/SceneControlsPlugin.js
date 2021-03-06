import {THREE} from '../../api';

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

class SceneControlsPlugin {
	constructor() {
		
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
		// this.scene.fog = new THREE.Fog(this.scene.background, 35000, SceneControlsPlugin.FAR);
        this.scene.fog = new THREE.Fog(this.scene.background, 2000, SceneControlsPlugin.FAR);
		
		/**
		 *
		 * @type {PerspectiveCamera}
		 */
		this.camera = new THREE.PerspectiveCamera(40, SceneControlsPlugin.width / SceneControlsPlugin.height, 1, SceneControlsPlugin.FAR);
		
		/**
		 *
		 * @type {Vector2}
		 * @private
		 */
		this._sizeScreen = new THREE.Vector2();
		
		/**
		 *
		 * @type {Vector2}
		 * @private
		 */
		this._toScreenPosition = new THREE.Vector2();
		
		/**
		 *
		 * @type {Vector3}
		 * @private
		 */
		this._vectorToScreenPosition = new THREE.Vector3();
		
		/**
		 *
		 * @type {Vector3}
		 */
		this.pointLocal = new THREE.Vector3(0, 0, -1);
		
		this.direction = new THREE.Vector3(0, 0, -1);
	}
	
	/**
	 *
	 * @returns {number}
	 * @constructor
	 */
	static get FAR() {
		return 10000;
	}
	
	/**
	 *
	 * @returns {number}
	 */
	static get aspect() {
		return SceneControlsPlugin.width / SceneControlsPlugin.height;
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
	
	/**
	 *
	 * @param {Object3D} obj
	 * @returns {Vector2}
	 */
	toScreenPosition(obj) {
		let v = this.getCenterScreenPosition();
		obj.updateMatrixWorld();
		this._vectorToScreenPosition.setFromMatrixPosition(obj.matrixWorld);
		this._vectorToScreenPosition.project(this.camera);

		this._toScreenPosition.set(
			(this._vectorToScreenPosition.x * v.x) + v.x,
			- (this._vectorToScreenPosition.y * v.y) + v.y
		);

		return this._toScreenPosition.clone();
	}
	
	/**
	 *
	 * @returns {Vector2}
	 */
	getCenterScreenPosition() {
		let s = this.getScreenSize();
		this._toScreenPosition.set(0.5 * s.x, 0.5 * s.y);
		return this._toScreenPosition.clone();
	}
	
	/**
	 *
	 * @returns {Vector2}
	 */
	getScreenSize() {
		this._sizeScreen.set(
			this.renderer.context.canvas.width,
			this.renderer.context.canvas.height
		);
		return this._sizeScreen;
	}
	
	/**
	 *
	 * @returns {Vector3}
	 */
	getCameraDirection() {
		return this.getDirection(this.camera);
	}
	
	/**
	 *
	 * @returns {Vector3}
	 */
	getDirection(obj) {
		this.direction.applyQuaternion(obj.quaternion);
		obj.getWorldDirection(this.direction);
		return this.direction.clone();
	}
	
	/**
	 * Get next position on current angle of object
	 *
	 * @param {Object3D} obj
	 * @param {number} speed
	 * @returns {*}
	 */
	getNextPosition(obj, speed) {
		let v = this.getDirection(obj).multiplyScalar(speed);
		return obj.position.clone().add(v);
	}
}

export default SceneControlsPlugin;