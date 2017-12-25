import Includes from './../../Includes';
import ShipExplorerI from './I/ShipExplorerI';
import ShipExplorerII from './II/ShipExplorerII';
import ShipExplorerIII from './III/ShipExplorerIII';

class ShipIncludes extends Includes {
	constructor() {
		super('ShipIncludes');
		
		/**
		 *
		 * @type {Array.<Ship>}
		 */
		this.includes = [
			new ShipExplorerI(),
			new ShipExplorerII(),
			new ShipExplorerIII()
		];
	}
	
	/**
	 *
	 * @returns {ShipIncludes}
	 */
	static get() {
		return super.get('ShipIncludes');
	}
}

export default ShipIncludes;