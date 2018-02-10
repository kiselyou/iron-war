import Template from './Template';
class Size {
	/**
	 *
	 * @param {number} xs
	 * @param {number} sm
	 * @param {number} md
	 * @param {number} lg
	 */
	constructor(xs = 12, sm = 12, md = 12, lg = 12) {
		/**
		 *
		 * @type {number}
		 */
		this.xs = xs;
		/**
		 *
		 * @type {number}
		 */
		this.sm = sm;
		/**
		 *
		 * @type {number}
		 */
		this.md = md;
		/**
		 *
		 * @type {number}
		 */
		this.lg = lg;
	}

	/**
	 *
	 * @param {Element|Template} element
	 * @returns {Size}
	 */
	update(element) {
		element = element instanceof Template ? element.template : element;
		element.classList.add('col-xs-' + this.xs);
		element.classList.add('col-sm-' + this.sm);
		element.classList.add('col-md-' + this.md);
		element.classList.add('col-lg-' + this.lg);
		return this;
	}
}

export default Size;