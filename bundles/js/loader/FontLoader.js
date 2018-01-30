import {THREE} from '../../api';
const FONT = 'fonts/Audiowide/Audiowide_Regular.json';

/**
 *
 * @type {FontLoader}
 */
let fontLoader = null;

class FontLoader {
	constructor() {
		/**
		 *
		 * @type {?Font}
		 * @private
		 */
		this._font = null;
		
		if (fontLoader) {
			throw new Error('This class has already called. Try use FontLoader.font');
		}
		
		fontLoader = this;
	}
	
	/**
	 *
	 * @returns {?Font}
	 */
	static get font() {
		return fontLoader ? fontLoader._font : null;
	}
	
	/**
	 * @param {Font} font
	 * @callback fontLoadListener
	 */
	
	/**
	 *
	 * @param {fontLoadListener} listener
	 */
	load(listener) {
		if (this._font) {
			listener(this._font);
			return;
		}
		let loader = new THREE.FontLoader();
		loader.load(FONT, (font) => {
			this._font = font;
			listener(this._font);
		});
	}
}

export default FontLoader;