import Charge from './../Charge';
import ParticleClassI from './../../../classes/ParticleClassI';

class ChargeIA20 extends Charge {
	constructor() {
		super('ChargeIA20', Charge.I_C20_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassI();
	}
}

export default ChargeIA20;