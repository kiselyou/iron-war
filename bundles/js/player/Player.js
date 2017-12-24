import User from './User';
import ShipExplorerI from './../particles/ships/I/ShipExplorerI';

class Player extends User {

    constructor() {
        super();
        
        /**
         *
         * @type {?Ship}
         */
        this.ship = new ShipExplorerI();
    }
}

export default Player;