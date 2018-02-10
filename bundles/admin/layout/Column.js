import Template from './../Template';

const COLUMN_CLASS = ['column', 'p-0'];

class Column extends Template {
	constructor() {
		super();

		this.setClass(COLUMN_CLASS);
	}
}

export default Column;
