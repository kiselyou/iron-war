import Charge from './../Charge';
import ParticleClassI from './../../../classes/ParticleClassI';
import HelperPoints from './../../../helpers/HelperPoints';

class ChargeIA20 extends Charge {
	constructor() {
		super('ChargeIA20', Charge.I_C20_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassI();
		
		/**
		 *
		 * @type {Mesh}
		 */
		this.model = HelperPoints.get().getPoint().model;
	}
}

export default ChargeIA20;