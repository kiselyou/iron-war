
class FormMessageControls {
    /**
     *
     * @param {jQuery|Element|string} success
     * @param {jQuery|Element|string} error
     */
    constructor(success, error) {
        /**
         *
         * @type {jQuery}
         * @private
         */
        this._errorElement = $(error);

        if (this._errorElement.length === 0) {
            throw new Error('Second argument for "FormMessageControls(success, error)" is not correct.');
        }

        /**
         *
         * @type {jQuery}
         * @private
         */
        this._successElement = $(success);

        if (this._errorElement.length === 0) {
            throw new Error('First argument for "FormMessageControls(success, error)" is not correct.');
        }
    }

    /**
     * Show message - success
     *
     * @returns {FormMessageControls}
     */
    showSuccess() {
        this._errorElement.fadeOut('slow', () => {
            this._successElement.fadeIn();
        });
        return this;
    }

    /**
     * Show message - error
     *
     * @returns {FormMessageControls}
     */
    showError() {
        this._successElement.fadeOut('slow', () => {
            this._errorElement.fadeIn();
        });
        return this;
    }

    /**
     * Hide messages
     *
     * @returns {FormMessageControls}
     */
    hide() {
        this._successElement.fadeOut();
        this._errorElement.fadeOut();
        return this;
    }
}

export default FormMessageControls;