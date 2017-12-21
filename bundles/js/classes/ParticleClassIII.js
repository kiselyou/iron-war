import ParticleClass from './ParticleClass';

class ParticleClassIII extends ParticleClass {
    constructor() {
	    super('ParticleClassIII', ParticleClass.III_CLASS_KEY);
	    
	    this.name = 'III';
    }
}

export default ParticleClassIII;