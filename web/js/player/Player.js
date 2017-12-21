import User from './User';


class Player extends User {

    constructor() {
        super();

        /**
         *
         * @type {?Ship}
         */
        this.ship = null;
    }
}

export default Player;