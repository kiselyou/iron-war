import Includes from './../../Includes';
import ArsenalIA20 from './I/ArsenalIA20';

class ArsenalIncludes extends Includes {
	constructor() {
		super('ArsenalIncludes');
		
		/**
		 *
		 * @type {Array.<Arsenal>}
		 */
		this.includes = [
			new ArsenalIA20()
		];
	}
	
	/**
	 *
	 * @returns {ArsenalIncludes}
	 */
	static get() {
		return super.get('ArsenalIncludes');
	}
}

export default ArsenalIncludes;