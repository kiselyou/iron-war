import Particle from './../Particle';

class ParticleClass extends Particle {
    /**
     *
     * @param {string} type
     * @param {string|number} key
     */
    constructor(type, key) {
        super(type, key);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    static I_CLASS_KEY() {
        return 1;
    };

    /**
     *
     * @returns {number}
     * @constructor
     */
    static II_CLASS_KEY() {
        return 2;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    static III_CLASS_KEY() {
        return 3;
    }
}

export default ParticleClass;