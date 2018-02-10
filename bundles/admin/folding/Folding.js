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

		// this.appendChild(this.grid);
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
		if (text === null || text === '') {
			this._body.innerHTML = '';
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
	 * @param {Size} size
	 * @returns {Folding}
	 */
	add(title, icon, text, size = null) {

		// let folding = new Folding();
		this.setIcon(icon);
		this
			._prepareHeader(title)
			._prepareIcon()
			._prepareBody(text);

		this.grid.addColumn(this.template.cloneNode(true), size);

		return this;
	}

	drawIn(value) {
		this.template = this.grid.template;
		super.drawIn(value);
	}
}

export default Folding;