import User from './User';
import Ship from './../particles/ships/Ship';
import ShipIncludes from './../particles/ships/ShipIncludes';

class Player extends User {

    constructor() {
        super();

        let ships = new ShipIncludes();
        
        /**
         *
         * @type {?Ship}
         */
        this.ship = ships.get(Ship.I_EXPLORER);
    }
}

export default Player;