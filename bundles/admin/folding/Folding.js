import {
	template,
	DATA_ATTRIBUTE
} from './template';
import Template from './../Template';
import Grid from './../layout/Grid';

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

		/**
		 *
		 * @type {Grid}
		 */
		this.grid = new Grid();

		/**
		 *
		 * @type {?Size}
		 */
		this.size = null;
	}

	/**
	 *
	 * @param {Size} value
	 * @returns {Folding}
	 */
	setSize(value) {
		this.size = value;
		return this;
	}

	/**
	 *
	 * @param {string} title
	 * @returns {Folding}
	 * @private
	 */
	_prepareHeader(title) {
		this._headerText.innerHTML = title;
		return this;
	}

	/**
	 *
	 * @returns {Folding}
	 * @private
	 */
	_prepareIcon() {
		if (this._icon === false) {
			this._headerIcon.style.display = 'none';
		} else {
			this._headerIcon.style.display = '';
			this._headerIcon.setAttribute('class', this._icon ? this._icon : this._originIcon);
		}
		return this;
	}

	/**
	 *
	 * @param {?(string|Template)} text
	 * @returns {Folding}
	 * @private
	 */
	_prepareBody(text) {
		if (text === null || text === '' || text === undefined) {
			this._body.appendChild(this._bodyEmpty.cloneNode(false));
		} else {
			if (text instanceof Template) {
				this._body.innerHTML = '';
				text.drawIn(this._body);
			} else {
				this._body.innerHTML = text;
			}
		}
		return this;
	}

	/**
	 *
	 * @param {string} title
	 * @param {?(string|boolean)} icon
	 * @param {?(string|Template)} [text]
	 * @returns {Folding}
	 */
	add(title, icon, text) {
		this.setIcon(icon);
		this
			._prepareHeader(title)
			._prepareIcon()
			._prepareBody(text);

		this.grid.addColumn(this.template.cloneNode(true), this.size);
		return this;
	}

	/**
	 *
	 * @param {?(Element|Template|string)} value
	 */
	drawIn(value) {
		this.template = this.grid.template;
		super.drawIn(value);
	}
}

export default Folding;