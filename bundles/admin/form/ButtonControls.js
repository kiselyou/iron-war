
class ButtonControls {
    /**
     *
     * @param {FormControls} formControls
     * @param {string} buttonId
     * @param {btnListener} listener
     */
    constructor(formControls, buttonId, listener) {

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
         *
         * @type {?string}
         * @private
         */
        this._formActionKey = null;

        /**
         *
         * @type {btnListener}
         * @private
         */
        this._listener = listener;
    }

    /**
     *
     * @param {boolean} value
     * @returns {ButtonControls}
     */
    disable(value = true) {
        this._button.attr('disabled', value);
        return this;
    }

    /**
     *
     * @param {string} value - Possible values (FormControls.ACTION_SAVE, FormControls.ACTION_UPDATE)
     * @returns {ButtonControls}
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
     * @returns {ButtonControls}
     */
    setListener(listener) {
        this._listener = listener;
        return this;
    }

    /**
     *
     * @returns {ButtonControls}
     */
    listen() {
        this._button.click(() => {
            this._formControls.sendForm(
                this._formActionKey,
                (data) => {
                    this._listener(null, data);
                },
                (error) => {
                    this._listener(error);
                }
            );
        });
        return this;
    }
}

export default ButtonControls;