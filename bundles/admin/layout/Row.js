import Template from './../Template';

const ROW_CLASS = ['row', 'm-1'];

class Row extends Template {
	constructor() {
		super();

		this.setClass(ROW_CLASS);
	}
}

export default Row;
