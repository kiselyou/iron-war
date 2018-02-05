import {template} from './template';

class Modal {
	constructor() {
		this._template = template.children[0];

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._container = this._template.querySelector('[data-modal="container"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._header = this._template.querySelector('[data-modal="header"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._headerBtnClose = this._header.querySelector('[data-modal="close"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._headerText = this._header.querySelector('[data-modal="header-text"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._body = this._template.querySelector('[data-modal="body"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footer = this._template.querySelector('[data-modal="footer"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnDefault = this._footer.querySelector('[data-modal="btn-default"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnDanger = this._footer.querySelector('[data-modal="btn-danger"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnWarning = this._footer.querySelector('[data-modal="btn-warning"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnSuccess = this._footer.querySelector('[data-modal="btn-success"]');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnPrimary = this._footer.querySelector('[data-modal="btn-primary"]');
	}

	prepareAlert() {

	}

	/**
	 * @callback listenerOnClose
	 */

	/**
	 *
	 * @param {string} msg
	 * @param {?string} [title]
	 * @param {listenerOnClose} [listenerOnClose]
	 */
	alert(msg, title, listenerOnClose) {
		this._body.innerHTML = msg;
		this._headerText.innerHTML = title;
		this._footer.innerHTML = '';
		this._footerBtnDefault.innerHTML = 'Закрыть';
		this._footer.appendChild(this._footerBtnDefault);
		document.body.appendChild(this._template);
	}

	/**
	 * @callback listenerOnYes
	 */

	/**
	 * @callback listenerOnNo
	 */

	/**
	 *
	 * @param {string} msg
	 * @param {?string} [title]
	 * @param {listenerOnYes} listenerOnYes
	 * @param {listenerOnNo} listenerOnNo
	 */
	confirm(msg, title, listenerOnYes, listenerOnNo) {
		this._body.innerHTML = msg;
		this._headerText.innerHTML = title;
		this._footer.innerHTML = '';
		this._footerBtnDefault.innerHTML = 'Да';
		this._footerBtnPrimary.innerHTML = 'Нет';
		this._footer.appendChild(this._footerBtnDefault);
		this._footer.appendChild(this._footerBtnPrimary);
		document.body.appendChild(this._template);
	}
}

export default Modal;