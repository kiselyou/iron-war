import Includes from './../Includes';
import ParticleClassI from './ParticleClassI';
import ParticleClassII from './ParticleClassII';
import ParticleClassIII from './ParticleClassIII';

class ParticleClassIncludes extends Includes {
	constructor() {
		super();
		
		this._includes = [
			new ParticleClassI(),
			new ParticleClassII(),
			new ParticleClassIII()
		];
	};
}

export default ParticleClassIncludes;