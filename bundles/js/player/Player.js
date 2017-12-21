import User from './User';
import Ship from './../particles/ships/Ship';
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