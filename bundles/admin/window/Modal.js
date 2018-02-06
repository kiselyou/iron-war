import {template} from './template';

class Modal {
	constructor() {

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._templateOrigin = template.children[0];

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._template = this._templateOrigin.cloneNode(true);

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

		/**
		 *
		 * @type {Array.<{element: Element, listener: (listenerOnClose|listenerOnYes|listenerOnNo)}>}
		 * @private
		 */
		this._buttons = [];

		/**
		 *
		 * @type {?function}
		 * @private
		 */
		this._listenerBtnClose = null;

		/**
		 *
		 * @type {boolean}
		 * @private
		 */
		this._shown = false;
	}

	/**
	 *
	 * @returns {string}
	 */
	static get BTN_TYPE_SUCCESS() {
		return 'success';
	}

	/**
	 *
	 * @returns {string}
	 */
	static get BTN_TYPE_WARNING() {
		return 'warning';
	}

	/**
	 *
	 * @returns {string}
	 */
	static get BTN_TYPE_DANGER() {
		return 'danger';
	}

	/**
	 *
	 * @returns {string}
	 */
	static get BTN_TYPE_PRIMARY() {
		return 'primary';
	}

	/**
	 *
	 * @returns {string}
	 */
	static get BTN_TYPE_DEFAULT() {
		return 'default';
	}

	/**
	 *
	 * @param {string} text
	 * @param {?listenerOnClose} [listener]
	 * @param {boolean} [hideBtnClose]
	 * @param {boolean} [hideHeader]
	 * @returns {Modal}
	 * @private
	 */
	_prepareHeader(text, listener = null, hideBtnClose = false, hideHeader = false) {
		if (hideHeader) {
			this._header.style.display = 'none';
			this._headerText.innerHTML = '';
		} else {
			this._headerText.innerHTML = text ? text : '';
			if (this._listenerBtnClose !== null) {
				this._headerBtnClose.removeEventListener('click', this._listenerBtnClose);
			}

			if (!hideHeader) {
				this._listenerBtnClose = () => {
					this.hide();
					if (listener) {
						listener();
					}
				};
			}

			this._headerBtnClose.addEventListener('click', this._listenerBtnClose);
		}
		if (hideBtnClose || hideHeader) {
			this._headerBtnClose.style.display = 'none';
		}
		return this;
	}

	/**
	 *
	 * @param {string} text
	 * @returns {Modal}
	 * @private
	 */
	_prepareMessage(text) {
		this._body.innerHTML = text ? text : '';
		return this;
	}

	/**
	 *
	 * @param {string} value
	 * @param {function} listener
	 * @param {string} [type]
	 * @returns {Modal}
	 */
	addButton(value, listener, type) {
		let params = {'listener': listener};
		switch (type) {
			case Modal.BTN_TYPE_DANGER:
				params['element'] = this._footerBtnDanger.cloneNode(false);
				break;
			case Modal.BTN_TYPE_SUCCESS:
				params['element'] = this._footerBtnSuccess.cloneNode(false);
				break;
			case Modal.BTN_TYPE_PRIMARY:
				params['element'] = this._footerBtnPrimary.cloneNode(false);
				break;
			case Modal.BTN_TYPE_WARNING:
				params['element'] = this._footerBtnWarning.cloneNode(false);
				break;
			case Modal.BTN_TYPE_DEFAULT:
			default:
				params['element'] = this._footerBtnDefault.cloneNode(false);
				break;
		}
		params['element']['innerHTML'] = value;
		this._buttons.push(params);
		return this;
	}

	/**
	 *
	 * @returns {Modal}
	 * @private
	 */
	_prepareFooter() {
		this._footer.innerHTML = '';
		for (let btn of this._buttons) {
			let element = btn['element'];
			let listener = btn['listener'];
			this._footer.appendChild(element);
			element.addEventListener('click', (event) => {
				this.hide();
				if (listener) {
					listener(event.target, event);
				}
			});
		}
		return this;
	}

	/**
	 *
	 * @returns {Modal}
	 * @private
	 */
	_reset() {
		this._buttons = [];
		return this;
	}

	/**
	 * @param {Element} element
	 * @param {MouseEvent} event
	 * @callback listenerOnClose
	 */

	/**
	 *
	 * @param {string} msg
	 * @param {?string} [title]
	 * @param {listenerOnClose} [listenerOnClose]
	 * @returns {Modal}
	 */
	alert(msg, title, listenerOnClose) {
		this
			._reset()
			.addButton('Ок', listenerOnClose)
			._prepareHeader(title, listenerOnClose)
			._prepareMessage(msg)
			._prepareFooter()
			.hide();

		return this;
	}

	/**
	 * @param {Element} element
	 * @param {MouseEvent} event
	 * @callback listenerOnYes
	 */

	/**
	 * @param {Element} element
	 * @param {MouseEvent} event
	 * @callback listenerOnNo
	 */

	/**
	 *
	 * @param {string} msg
	 * @param {?string|boolean} [title]
	 * @param {listenerOnYes} [listenerOnYes]
	 * @param {listenerOnNo} [listenerOnNo]
	 * @param {listenerOnClose} [listenerOnClose]
	 * @returns {Modal}
	 */
	confirm(msg, title, listenerOnYes, listenerOnNo, listenerOnClose) {
		this
			._reset()
			.addButton('Да', listenerOnYes)
			.addButton('Нет', listenerOnNo)
			._prepareHeader(title, listenerOnClose)
			._prepareMessage(msg)
			._prepareFooter()
			.hide();

		return this;
	}

	/**
	 *
	 * @returns {Modal}
	 */
	show() {
		this._shown = true;
		document.body.appendChild(this._template);
		return this;
	}

	/**
	 *
	 * @returns {Modal}
	 */
	hide() {
		if (this._shown) {
			document.body.removeChild(this._template);
			this._shown = false;
		}
		return this;
	}
}

export default Modal;