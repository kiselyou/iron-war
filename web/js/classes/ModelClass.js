
class ModelClass {
    /**
     *
     * @param {string|number} key
     * @param {string|number} name
     */
    constructor(key, name) {
        /**
         *
         * @type {string|number}
         */
        this.key = key;

        /**
         *
         * @type {string|number}
         */
        this.name = name;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    static CLASS_I() {
        return 1;
    };

    /**
     *
     * @returns {number}
     * @constructor
     */
    static CLASS_II() {
        return 2;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    static CLASS_III() {
        return 3;
    }
}

export default ModelClass;