import Includes from './../../Includes';
import ChargeIA20 from './I/ChargeIA20';

class ChargeIncludes extends Includes {
	constructor() {
		super('ChargeIncludes');
		
		/**
		 *
		 * @type {Array.<Charge>}
		 */
		this.includes = [
			new ChargeIA20()
		];
	}
	
	/**
	 *
	 * @returns {ChargeIncludes}
	 */
	static get() {
		return super.get('ChargeIncludes');
	}
}

export default ChargeIncludes;