import Template from './../Template';
import Size from './../Size';
import Column from './Column';
import Row from './Row';

const GRID_CLASS = ['grid'];

class Grid extends Template {
	constructor() {
		super();

		this.setClass(GRID_CLASS);

		/**
		 *
		 * @type {Array.<Row>}
		 * @private
		 */
		this._rows = [];
	}

	/**
	 *
	 * @returns {Grid}
	 */
	addRow() {
		let row = new Row();
		this.appendChild(row);
		this._rows.push(row);
		return this;
	}

	/**
	 *
	 * @param {?(string|Element|Template|Node)} value
	 * @param {?Size} [size]
	 * @returns {Grid}
	 */
	addColumn(value, size = null) {
		if (this._rows.length === 0) {
			this.addRow();
		}

		let lastRow = this._rows[this._rows.length - 1];
		let column = new Column().appendChild(value).setSize(size);
		lastRow.appendChild(column);
		return this;
	}
}

export default Grid;