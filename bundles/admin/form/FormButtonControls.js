
class FormButtonControls {
    /**
     *
     * @param {FormControls} formControls
     * @param {string} buttonId
     * @param {btnListener} [listener]
     */
    constructor(formControls, buttonId, listener = null) {

        /**
         *
         * @type {FormControls}
         * @private
         */
        this._formControls = formControls;

        /**
         *
         * @type {string}
         * @private
         */
        this._buttonId = buttonId.replace('#', '');

        /**
         *
         * @type {jQuery}
         * @private
         */
        this._button = $(this._formControls.getFormElement()).find('#' + this._buttonId);

        /**
         * This is value to initialize on the server side
         *
         * @type {?string}
         * @private
         */
        this._formActionKey = null;

        /**
         *
         * @type {?btnListener}
         * @private
         */
        this._listener = listener;

        /**
         *
         * @type {boolean}
         * @private
         */
        this._clearForm = false;
    }

    /**
     *
     * @param {boolean} [value]
     * @returns {FormButtonControls}
     */
    autoClearForm(value = true) {
        this._clearForm = value;
        return this;
    }

    /**
     *
     * @param {boolean} value
     * @returns {FormButtonControls}
     */
    disable(value = true) {
        this._button.attr('disabled', value);
        return this;
    }

    /**
     *
     * @param {string} value - This is value to initialize on the server side
     * @returns {FormButtonControls}
     */
    setFormActionKey(value) {
        this._formActionKey = value;
        return this;
    }

    /**
     * @param {boolean} status
     * @param {Object} data
     * @callback btnListener
     */

    /**
     *
     * @param {btnListener} listener
     * @returns {FormButtonControls}
     */
    setListener(listener) {
        this._listener = listener;
        return this;
    }

    /**
     *
     * @returns {FormButtonControls}
     */
    listen() {
        this._button.click(() => {
            this.disable(true);
            this._formControls.sendForm(
                this._formActionKey,
                (data) => {
                    this._formControls.btnListenerOnSuccess(data, this._listener);
                    if (this._clearForm) {
                        this._formControls.resetForm();
                    }
                },
                (error) => {
                    this._formControls.btnListenerOnError(error, this._listener);
                }
            );
        });
        return this;
    }
}

export default FormButtonControls;