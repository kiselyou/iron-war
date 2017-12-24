import SceneControls from './js/controls/SceneControls';

const main = new SceneControls('main-container-canvas');
main
	.init()
	.onWindowResize()
	.animate();
