import ParticleClass from './ParticleClass';

class ParticleClassI extends ParticleClass {
    constructor() {
        super('ParticleClassI', ParticleClass.I_CLASS);
	
	    /**
         *
	     * @type {string}
	     */
	    this.name = 'I';
    }
}

export default ParticleClassI;