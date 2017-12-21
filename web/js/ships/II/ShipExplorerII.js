import Ship from './../Ship';
import ModelClassesII from './../../classes/ModelClassesII';

class ShipExplorerII extends Ship {
    constructor() {
        super();

        /**
         *
         * @type {ModelClassesII|ModelClass}
         */
        this.modelClass = new ModelClassesII();
    }
}

export default ShipExplorerII;