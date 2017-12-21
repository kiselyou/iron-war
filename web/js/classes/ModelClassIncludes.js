import ModelClassesI from './ModelClassesI';
import ModelClassesII from './ModelClassesII';
import ModelClassesIII from './ModelClassesIII';

class ModelClassIncludes {
    constructor() {
        this._includes = [
            new ModelClassesI(),
            new ModelClassesII(),
            new ModelClassesIII()
        ];
    };

    /**
     * Get list classes
     *
     * @returns {Array.<ModelClass>}
     */
    getAll() {
        return this._includes;
    };

    /**
     * Get specific class
     *
     * @param {number} key - possible values (ModelClass.CLASS_I|ModelClass.CLASS_II|ModelClass.CLASS_III)
     * @returns {(ModelClass|undefined)}
     */
    get(key) {
        return this._includes.find((el) => {
            return el.key === key;
        });
    }
}

export default ModelClassIncludes;