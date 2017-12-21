import ParticleClass from './ParticleClass';

class ParticleClassI extends ParticleClass {
    constructor() {
        super('ParticleClassI', ParticleClass.I_CLASS_KEY);
	
	    /**
         *
	     * @type {string}
	     */
	    this.name = 'I';
    }
}

export default ParticleClassI;