import FormButtonControls from './FormButtonControls';
import FormMessageControls from './FormMessageControls';
import {
    FORM_KEY_STATUS,
    FORM_KEY_MESSAGE,
    FORM_KEY_VALIDATE,
    FORM_KEY_SAVE,
    FORM_KEY_RECORD_ID
} from './constants';

class FormControls {
    /**
     *
     * @param {string} formId
     */
    constructor(formId) {
        /**
         *
         * @type {string}
         * @private
         */
        this._formId = formId.replace('#', '');

        /**
         *
         * @type {Element}
         * @private
         */
        this._form = document.getElementById(this._formId);

        /**
         *
         * @type {string}
         * @private
         */
        this._action = this._form.getAttribute('action');

        /**
         *
         * @type {string}
         * @private
         */
        this._method = this._form.getAttribute('method');

        /**
         *
         * @type {Array.<FormButtonControls>}
         * @private
         */
        this._listButtons = [];

        /**
         * Control messages by the status from the server
         *
         * @type {?FormMessageControls}
         * @private
         */
        this._messageControls = null;

        /**
         * This is element to set message from the server
         *
         * @type {{elementBlock: (?jQuery), elementText: (?jQuery)}}
         * @private
         */
        this._formMessage = {
            elementBlock: null,
            elementText: null,
            autoHide: true
        };
    }

    /**
     *
     * @returns {FormControls}
     */
    clearMessage() {
        if (this._messageControls) {
            this._messageControls.hide();
        }
        if (this._formMessage.elementBlock && this._formMessage.autoHide) {
            this._formMessage.elementBlock.fadeOut();
        }
        return this;
    }

    /**
     *
     * @returns {FormControls}
     */
    resetForm() {
        this._form.reset();
        return this;
    }

    /**
     * Show message - success
     *
     * @returns {FormControls}
     */
    showMessageSuccess() {
        if (this._messageControls) {
            this._messageControls.showSuccess();
        }
        return this;
    }

    /**
     * Show message - error
     *
     * @returns {FormControls}
     */
    showMessageError() {
        if (this._messageControls) {
            this._messageControls.showError();
        }
        return this;
    }

    /**
     * If the '_formStatus' from the server is true then will be shown message with selector "selectorSuccess"
     * If the '_formStatus' is false or response got error then message with selector "selectorError"
     * By default the "selectorSuccess and selectorError" should be hide
     *
     * @param {(string|Element|jQuery)} elementSuccess - (if type is string then it must be selector)
     * @param {(string|Element|jQuery)} elementError - (if type is string then it must be selector)
     * @returns {FormControls}
     */
    useMessages(elementSuccess, elementError) {
        let msgSuccess = $(this._form).find(elementSuccess);
        let msgError = $(this._form).find(elementError);
        this._messageControls = new FormMessageControls(msgSuccess, msgError);
        return this;
    }

    /**
     * If the server gave message "_formMessage" then it will be shown in this block
     *
     * @param {(string|Element|jQuery)} inBlock - This is block name to show.
     * @param {(string|Element|jQuery)} [elementText] - This element in the block where need to set text of message from the server
     * @param {boolean} [autoHide]
     * @returns {FormControls}
     */
    useFormMessage(inBlock, elementText = null, autoHide = true) {
        this._formMessage.elementBlock = $(this._form).find(inBlock);
        this._formMessage.elementText = elementText ? this._formMessage.elementBlock.find(elementText) : null;
        this._formMessage.autoHide = autoHide;
        return this;
    }

    /**
     *
     * @param {string} msg
     * @returns {FormControls}
     */
    showFormMessage(msg) {
        if (this._formMessage.elementBlock) {
            let block = this._formMessage.elementBlock;
            let text = this._formMessage.elementText;
            text ? text.html(msg) : block.html(msg);
            block.fadeIn();
        }
        return this;
    }

    /**
     *
     * @returns {Element}
     */
    getFormElement() {
        return this._form;
    }

    /**
     * Send form action
     *
     * @param {string} value
     * @returns {FormControls}
     */
    setAction(value) {
        this._action = value;
        return this;
    }

    /**
     * Send form method
     *
     * @param {string} value
     * @returns {FormControls}
     */
    setMethod(value) {
        this._method = value;
        return this;
    }

    /**
     * @param {Object}
     * @callback ajaxOnSuccess
     */

    /**
     * @param {Object}
     * @callback ajaxOnError
     */

    /**
     *
     * @param {string} key
     * @param {ajaxOnSuccess} onSuccess
     * @param {ajaxOnError} onError
     * @returns {FormControls}
     */
    sendForm(key, onSuccess, onError) {
        let formData = new FormData(this._form);
        formData.append('_formActionKey', key);
        $.ajax(
                this._action,
                {
                    method: this._method ? this._method : 'POST',
                    data: formData,
                    processData: false,
                    contentType: false
                }
            )
            .done(onSuccess)
            .fail(onError);
        return this;
    }

    /**
     * @param {?Error} error
     * @param {Object} [data]
     * @callback btnListener
     */

    /**
     * Add button "save" to controls
     *
     * @param {string} buttonId
     * @param {?btnListener} [listener]
     * @returns {FormControls}
     */
    btnSave(buttonId, listener = null) {
        this.addBtn(FORM_KEY_SAVE, buttonId, listener);
        return this;
    }

    /**
     * Add button to controls
     *
     * @param {string} formActionKey - This is form key to initialise this query on the server side
     * @param {string} buttonId
     * @param {?btnListener} [listener]
     * @returns {FormButtonControls}
     */
    addBtn(formActionKey, buttonId, listener = null) {
        let btn = new FormButtonControls(this, buttonId, listener);
        btn.setFormActionKey(formActionKey);
        btn.listen();
        this._listButtons.push(btn);
        return btn;
    }

    /**
     * Start listen form
     *
     * @returns {FormControls}
     */
    listen() {
        let selector = '';
        selector += '#' + this._formId + ' input, ';
        selector += '#' + this._formId + ' select, ';
        selector += '#' + this._formId + ' textarea';

        $(selector)
            .keyup(() => {
                this._validate();
            })
            .change(() => {
                this._validate();
            })
            .focus(() => {
                this.clearMessage();
            });
        return this;
    }

    /**
     *
     * @param {boolean} value
     * @returns {FormControls}
     */
    disableButtons(value) {
        for (let buttonControls of this._listButtons) {
            buttonControls.disable(value);
        }
        return this;
    }

    /**
     *
     * @param {Object} data
     * @param {btnListener} [listener]
     * @throws Error
     * @returns {FormControls}
     */
    btnListenerOnSuccess(data, listener) {
        this._checkResponse(data);
        if (data[FORM_KEY_STATUS]) {
            this.showMessageSuccess();
        } else {
            this.showMessageError();
        }

        let msg = data[FORM_KEY_MESSAGE];
        if (msg) {
            this.showFormMessage(msg)
        }

        if (listener) {
            listener(null, data);
        }
        return this;
    }

    /**
     *
     * @param {Error} error
     * @param {btnListener} listener
     * @returns {FormControls}
     */
    btnListenerOnError(error, listener) {
        this.showMessageError();
        if (listener) {
            listener(error);
        }
        return this;
    }

    /**
     *
     * @returns {FormControls}
     * @throws Error
     * @private
     */
    _validate() {
        this.sendForm(
            FORM_KEY_VALIDATE,
            (data) => {
                this._checkResponse(data);
                this.disableButtons( ! data[FORM_KEY_STATUS]);
            },
            () => {
                this.disableButtons(true);
            }
        );
        return this;
    }

    /**
     *
     * @param {Object} data - This is response from the server
     * @returns {FormControls}
     * @throws Error
     * @private
     */
    _checkResponse(data) {
        let status = data[FORM_KEY_STATUS];
        if (status === undefined) {
            throw new Error('Server responded without "' + FORM_KEY_STATUS + '".');
        }
        return this;
    }
}

export default FormControls;