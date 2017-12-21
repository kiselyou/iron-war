import Includes from './../../Includes';
import EngineIM20 from "./I/EngineIM20";
import EngineIM50 from "./I/EngineIM50";
import EngineIM100 from "./I/EngineIM100";
import EngineIIM20 from "./II/EngineIIM20";
import EngineIIM50 from "./II/EngineIIM50";
import EngineIIM100 from "./II/EngineIIM100";
import EngineIIIM20 from "./III/EngineIIIM20";
import EngineIIIM50 from "./III/EngineIIIM50";
import EngineIIIM100 from "./III/EngineIIIM100";

class EngineIncludes extends Includes {
	constructor() {
		super();
		
		this.includes = [
			new EngineIM20(),
			new EngineIM50(),
			new EngineIM100(),
			new EngineIIM20(),
			new EngineIIM50(),
			new EngineIIM100(),
			new EngineIIIM20(),
			new EngineIIIM50(),
			new EngineIIIM100(),
		];
	}
}

export default EngineIncludes;