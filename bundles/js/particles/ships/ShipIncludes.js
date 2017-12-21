import Includes from './../../Includes';
import ShipExplorerI from './I/ShipExplorerI';
import ShipExplorerII from './II/ShipExplorerII';
import ShipExplorerIII from './III/ShipExplorerIII';

class ShipIncludes extends Includes {
	constructor() {
		super();
		
		this._includes = [
			new ShipExplorerI(),
			new ShipExplorerII(),
			new ShipExplorerIII()
		];
	}
}

export default ShipIncludes;