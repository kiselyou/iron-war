import Arsenal from './../Arsenal';
import ParticleClassI from './../../../classes/ParticleClassI';
import {THREE} from '../../../../api';

class ArsenalIA20 extends Arsenal {
	
	constructor() {
		super('ArsenalIA20', Arsenal.I_A20_KEY);
		
		/**
		 *
		 * @type {ParticleClass}
		 */
		this.particleClass = new ParticleClassI();
		
		let geometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 32);
		let material = new THREE.MeshPhongMaterial({color: 0x666666});
		this.setModel(new THREE.Mesh(geometry, material));
	}
}

export default ArsenalIA20;