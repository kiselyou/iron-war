import ParticleClass from './ParticleClass';

class ParticleClassII extends ParticleClass {
    constructor() {
	    super('ParticleClassII', ParticleClass.II_CLASS_KEY);
	
	    /**
         *
	     * @type {string}
	     */
	    this.name = 'II';
    }
}

export default ParticleClassII;