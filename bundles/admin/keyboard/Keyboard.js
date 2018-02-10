import Template from './../Template';
import Grid from './../layout/Grid';
import {
	template,
	DATA_ATTRIBUTE
} from './template';

class Keyboard extends Template {
	constructor() {
		super(template, DATA_ATTRIBUTE);

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._item = this.findElement(this.template, 'item');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._key = this.findElement(this.template, 'key');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._text = this.findElement(this.template, 'text');

		/**
		 *
		 * @type {Grid}
		 * @private
		 */
		this._grid = new Grid();

		this.template.innerHTML = '';
		this.appendChild(this._grid);

		/**
		 *
		 * @type {?Size}
		 */
		this.size = null;
	}

	/**
	 *
	 * @param {Size} value
	 * @returns {Keyboard}
	 */
	setSize(value) {
		this.size = value;
		return this;
	}

	/**
	 *
	 * @param {string} key
	 * @param {string} text
	 * @returns {Keyboard}
	 */
	add(key, text) {
		this._key.innerHTML = key;
		this._text.innerHTML = text;
		this._grid.addColumn(this._item.cloneNode(true), this.size);
		return this;
	}
}

export default Keyboard;