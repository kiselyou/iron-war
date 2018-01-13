import ArsenalSlot from './ArsenalSlot';
import Particle from './../../Particle';

class ArsenalSlots extends Particle {
	constructor() {
		super('ArsenalSlots', ArsenalSlots.ARTICLE_SORTS);
		
		/**
		 *
		 * @type {ArsenalSlot}
		 */
		this.slot_a = new ArsenalSlot();
		
		/**
		 *
		 * @type {ArsenalSlot}
		 */
		this.slot_b = new ArsenalSlot();
	}
	
	/**
	 *
	 * @returns {string}
	 */
	static ARTICLE_SORTS() {
		return 'ARTICLE_SORTS';
	}
}

export default ArsenalSlots;