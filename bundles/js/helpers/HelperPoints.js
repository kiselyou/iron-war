import {THREE} from '../../api';
import HelperPoint from './HelperPoint';

let helper = null;

class HelperPoints {
	/**
	 *
	 * @param {(Scene|Mesh|Group)} obj
	 */
	constructor(obj) {
		/**
		 *
		 * @type {Array.<{name: (string|number), points: Array.<HelperPoint>}>}
		 * @private
		 */
		this._groups = [];
		
		/**
		 *
		 * @type {HelperPoints}
		 */
		helper = this;
	}
	
	/**
	 *
	 * @returns {HelperPoints}
	 */
	static get() {
		return helper ? helper : new HelperPoints();
	}
	
	/**
	 *
	 * @param {Object3D} object - the object there need set point
	 * @param {(string|number)} [group] - name of group points
	 * @returns {HelperPoint}
	 */
	setPointTo(object, group = 1, color = 0xFFFF00) {
		let point = this.getPoint();
		point.setColor(color);
		object.add(point.model);
		this._addToGroup(group, point);
		return point;
	}
	
	/**
	 *
	 * @returns {HelperPoint}
	 */
	getPoint() {
		let point = new HelperPoint();
		point.init();
		return point;
	}
	
	/**
	 *
	 * @param {Object3D} obj - the object from there need delete point
	 * @param {(string|number)} groupName - name of group points
	 * @returns {HelperPoints}
	 */
	remove(obj, groupName) {
		for (let i = 0; i < this._groups.length; i++) {
			let group = this._groups[i];
			if (group['name'] === groupName) {
				for (let point of group['points']) {
					obj.remove(point.model);
				}
				this._groups.splice(i, 1);
				break;
			}
		}
		return this;
	}
	
	/**
	 *
	 * @param {(string|number)} groupName
	 * @param {HelperPoint} point
	 * @private
	 */
	_addToGroup(groupName, point) {
		let group = this._groups.find((item) => {
			return item['name'] === groupName;
		});
		if (group) {
			group['points'].push(point);
		} else {
			this._groups.push({
				name: groupName,
				points: [point]
			});
		}
	}
}

export default HelperPoints;