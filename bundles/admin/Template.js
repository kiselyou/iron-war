
import Size from './Size';

const PREFIX_ICON = 'fa fa-';

class Template {
	/**
	 *
	 * @param {?Element} [template]
	 * @param {?string} [dataAttr]
	 */
	constructor(template = null, dataAttr = null) {
		/**
		 *
		 * @type {string}
		 */
		this.dataAttr = dataAttr;

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._templateOrigin = template ? template.children[0] : document.createElement('div');

		/**
		 *
		 * @type {Element}
		 */
		this.template = this._templateOrigin.cloneNode(true);

		/**
		 *
		 * @type {?boolean|string}
		 * @private
		 */
		this._icon = null;

		/**
		 *
		 * @type {?Element}
		 */
		this.parent = null;

		/**
		 *
		 * @type {boolean}
		 */
		this.shown = false;

		/**
		 *
		 * @type {boolean}
		 */
		this.exists = false;
	}

	/**
	 *
	 * @param {Size} [value]
	 * @returns {Template}
	 */
	setSize(value) {
		if (value instanceof Size) {
			value.update(this.template);
		} else if (value === null || value === true) {
			new Size().update(this.template);
		}
		return this;
	}

	/**
	 *
	 * @param {Element} element
	 * @param {string} key - This is value of attribute
	 * @returns {Element}
	 */
	findElement(element, key) {
		return element.querySelector(`[${this.dataAttr}="${key}"]`);
	}

	/**
	 *
	 * @returns {Template}
	 */
	removeDataAttribute() {
		for (let property in this) {
			if (
				this.hasOwnProperty(property) &&
				this[property] instanceof Element &&
				this[property].hasAttribute(this.dataAttr)
			) {
				this[property].removeAttribute(this.dataAttr);
			}
		}
		return this;
	}

	/**
	 *
	 * @param {string} icon
	 * @returns {Template}
	 */
	setIcon(icon) {
		this._icon = PREFIX_ICON + (icon.replace(PREFIX_ICON, ''));
		return this;
	}

	/**
	 *
	 * @param {?(Element|Template|string)} [element] - By default is "document.body"
	 * @returns {Template}
	 */
	drawIn(element = null) {
		if (!this.exists) {
			this.exists = true;
			if (element instanceof Template) {
				this.parent	= element.template;
			} else if (typeof element === 'string') {
				this.parent = document.body.querySelector(element);
			} else {
				this.parent = element;
			}
			this.getParent().appendChild(this.template);
		}
		return this;
	}

	/**
	 *
	 * @param {?(string|Element|Template|Node)} newChild
	 * @returns {Template}
	 */
	appendChild(newChild) {
		if (typeof newChild === 'string' || newChild === null) {
			this.template.innerHTML = newChild;
		} else if (newChild instanceof Template) {
			this.template.appendChild(newChild.template);
		} else {
			this.template.appendChild(newChild);
		}
		return this;
	}

	/**
	 *
	 * @returns {Template}
	 */
	remove() {
		if (this.exists) {
			this.getParent().removeChild(this.template);
			this.exists = false;
			this.parent = null;
		}
		return this;
	}

	/**
	 *
	 * @returns {Element}
	 */
	getParent() {
		return this.parent ? this.parent : document.body;
	}

	/**
	 *
	 * @param {(string|Array)} className
	 * @returns {Template}
	 */
	setClass(className) {
		if (typeof className === 'object') {
			for (let name of className) {
				this.addClass(name);
			}
		} else {
			this.addClass(className);
		}
		return this;
	}

	/**
	 *
	 * @param {string} className
	 * @returns {Template}
	 */
	addClass(className) {
		this.template.classList.remove(className);
		this.template.classList.add(className);
		return this;
	}
}

export default Template;