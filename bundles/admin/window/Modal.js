import {
	template,
	ICON_CLASS,
	DATA_ATTRIBUTE
} from './template';

import Template from './../Template';

class Modal extends Template {
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
		this._headerBtnClose = this.findElement(this._header, 'close');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._headerIcon = this.findElement(this._header, 'icon');

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
		this._footer = this.findElement(this.template, 'footer');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnDefault = this.findElement(this._footer, 'btn-default');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnDanger = this.findElement(this._footer, 'btn-danger');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnWarning = this.findElement(this._footer, 'btn-warning');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnSuccess = this.findElement(this._footer, 'btn-success');

		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._footerBtnPrimary = this.findElement(this._footer, 'btn-primary');

		/**
		 *
		 * @type {Array.<{element: Element, listener: (listenerOnClose|listenerOnYes|listenerOnNo)}>}
		 * @private
		 */
		this._buttons = [];

		/**
		 *
		 * @type {?listenerOnClose}
		 * @private
		 */
		this._listenerBtnClose = null;

		/**
		 *
		 * @type {boolean}
		 * @private
		 */
		this._shown = false;

		/**
		 *
		 * @type {string}
		 * @private
		 */
		this._originIcon = this._headerIcon.getAttribute('class');

		/**
		 *
		 * @type {?boolean|string}
		 * @private
		 */
		this._userIcon = null;

		this.removeDataAttribute();
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
			this._header.style.display = '';
			this._headerText.innerHTML = text ? text : '';
			if (this._listenerBtnClose !== null) {
				this._headerBtnClose.removeEventListener('click', this._listenerBtnClose);
			}

			this._prepareIcon();

			if (!hideBtnClose) {
				this._listenerBtnClose = (element, event) => {
					this.hide();
					if (listener) {
						listener(element, event);
					}
				};
			}

			this._headerBtnClose.addEventListener('click', this._listenerBtnClose);
		}
		this._headerBtnClose.style.display = (hideBtnClose || hideHeader) ? 'none' : '';
		return this;
	}

	/**
	 *
	 * @returns {Modal}
	 * @private
	 */
	_prepareIcon() {
		if (this._userIcon === false) {
			this._headerIcon.style.display = 'none';
		} else {
			this._headerIcon.style.display = '';
			this._headerIcon.setAttribute('class', this._userIcon ? this._userIcon : this._originIcon);
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
		this.setIcon(this._originIcon);
		this
			._reset()
			.addButton('Ок', listenerOnClose)
			._prepareHeader(title ? title : 'Предупреждение', listenerOnClose)
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
		this.setIcon('warning-sign');
		this
			._reset()
			.addButton('Да', listenerOnYes)
			.addButton('Нет', listenerOnNo)
			._prepareHeader(title ? title : 'Подтверждение', listenerOnClose)
			._prepareMessage(msg)
			._prepareFooter()
			.hide();

		return this;
	}

	/**
	 *
	 * @param {string} icon
	 * @returns {Modal}
	 */
	setIcon(icon) {
		this._userIcon = ICON_CLASS + (icon.replace(ICON_CLASS, ''));
		return this;
	}

	/**
	 *
	 * @returns {Modal}
	 */
	hideIcon() {
		this._userIcon = false;
		return this;
	}
}

export default Modal;