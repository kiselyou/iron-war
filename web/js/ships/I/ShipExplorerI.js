import Ship from './../Ship';
import ModelClassesI from './../../classes/ModelClassesI';

class ShipExplorerI extends Ship {
    constructor() {
        super();

        /**
         *
         * @type {ModelClassesI|ModelClass}
         */
        this.modelClass = new ModelClassesI();
    }
}

export default ShipExplorerI;