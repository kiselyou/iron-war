import Ship from './../Ship';
import ModelClassesIII from './../../classes/ModelClassesIII';

class ShipExplorerIII extends Ship {
    constructor() {
        super();

        /**
         *
         * @type {ModelClassesIII|ModelClass}
         */
        this.modelClass = new ModelClassesIII();
    }
}

export default ShipExplorerIII;