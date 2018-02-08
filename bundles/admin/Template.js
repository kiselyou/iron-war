
class Template {
	/**
	 *
	 * @param {Element} template
	 * @param {string} dataAttr
	 */
	constructor(template, dataAttr) {
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
		this._templateOrigin = template.children[0];

		/**
		 *
		 * @type {Element}
		 */
		this.template = this._templateOrigin.cloneNode(true);

		/**
		 *
		 * @type {?Element}
		 */
		this.parent = null;

		/**
		 *
		 * @type {Array}
		 */
		this.elements = [];
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
	 * @returns {Template}
	 */
	clone() {
		this.elements.push(this.template.cloneNode(true));
		return this;
	}

	/**
	 *
	 * @returns {Template}
	 */
	show() {
		this._shown = true;
		if (this.elements.length > 0) {
			for (let element of this.elements) {
				this.getParent().appendChild(element);
			}
		} else {
			this.getParent().appendChild(this.template);
		}

		return this;
	}

	/**
	 *
	 * @returns {Template}
	 */
	hide() {
		if (this._shown) {
			if (this.elements.length > 0) {
				for (let element of this.elements) {
					this.getParent().removeChild(element);
				}
			} else {
				this.getParent().removeChild(this.template);
			}
			this._shown = false;
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
	 * @param {Element} element
	 * @returns {Template}
	 */
	appendTo(element) {
		this.parent = element;
		return this;
	}
}

export default Template;