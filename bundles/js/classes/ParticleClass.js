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
    static I_CLASS() {
        return 1;
    };

    /**
     *
     * @returns {number}
     * @constructor
     */
    static II_CLASS() {
        return 2;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    static III_CLASS() {
        return 3;
    }
}

export default ParticleClass;