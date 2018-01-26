import ButtonControls from './ButtonControls';

class FormControls {
    /**
     *
     * @param {string} formId
     */
    constructor(formId) {
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
         * @type {Array.<ButtonControls>}
         * @private
         */
        this._listButtons = [];
    }

    /**
     *
     * @returns {string}
     */
    static get FORM_ACTION_KEY_SAVE() {
        return 'save';
    }

    /**
     *
     * @returns {string}
     */
    static get FORM_ACTION_KEY_UPDATE() {
        return 'update';
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
     * @param {null|Object} error
     * @param {Object} data
     * @callback btnListenerOnSuccess
     */

    /**
     * @param {Object} error
     * @callback btnListenerOnError
     */

    /**
     * Add button "save" to controls
     *
     * @param {string} buttonId
     * @param {btnListenerOnSuccess} listener
     * @param {btnListenerOnError} onError
     * @returns {FormControls}
     */
    addButtonSave(buttonId, listener, onError) {
        let btn = new ButtonControls(this, buttonId, listener);
        btn.setFormActionKey(FormControls.FORM_ACTION_KEY_SAVE);
        this._listButtons.push(btn);
        return this;
    }

    /**
     * Add button "update" to controls
     *
     * @param {string} buttonId
     * @param {btnListenerOnSuccess} listener
     * @returns {FormControls}
     */
    addButtonUpdate(buttonId, listener) {
        let btn = new ButtonControls(this, buttonId, listener);
        btn.setFormActionKey(FormControls.FORM_ACTION_KEY_UPDATE);
        this._listButtons.push(btn);
        return this;
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
            });

        for (let buttonControls of this._listButtons) {
            buttonControls.listen();
        }

        return this;
    }

    /**
     *
     * @param {boolean} value
     * @returns {FormControls}
     * @private
     */
    _disableButtons(value) {
        for (let buttonControls of this._listButtons) {
            buttonControls.disable(value);
        }
        return this;
    }

    /**
     *
     * @returns {FormControls}
     * @private
     */
    _validate() {
        this.sendForm(
            'validate',
            (data) => {
                console.log(data);
                this._disableButtons( ! data['status']);
            },
            () => {
                this._disableButtons(true);
            }
        );
        return this;
    }
}

export default FormControls;