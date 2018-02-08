import {
	template,
	ICON_CLASS,
	DATA_ATTRIBUTE
} from './template';
import Template from './../Template';

class Folding extends Template {
	constructor() {
		super(template, DATA_ATTRIBUTE);

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._header = this.findElement(this.template, 'header');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._headerIcon = this.findElement(this._header, 'header-icon');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._headerText = this.findElement(this._header, 'header-text');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._body = this.findElement(this.template, 'body');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._bodyEmpty = this.findElement(this._body, 'body-empty');

		this.removeDataAttribute();
	}

	/**
	 *
	 * @param {string} title
	 * @param {?string} [icon]
	 * @returns {Folding}
	 * @private
	 */
	_prepareHeader(title, icon) {
		this._headerText.innerHTML = title;
		return this;
	}

	/**
	 *
	 * @param {string} text
	 * @returns {Folding}
	 * @private
	 */
	_prepareBody(text) {
		return this;
	}

	/**
	 *
	 * @param {string} title
	 * @param {?string} icon
	 * @param {?string} [text]
	 * @returns {Folding}
	 */
	add(title, icon, text) {
		this
			._prepareHeader(title, icon)
			._prepareBody(text)
			.clone();
		console.log(this.elements);
		return this;
	}
}

export default Folding;