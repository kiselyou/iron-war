import FormControls from './form/FormControls';
import Modal from './window/Modal';

// let formPlayer = new FormControls('form-create-player');
//
// formPlayer
//     .useMessages('.form-save-ok', '.form-save-error')
//     .useFormMessage('.block-test-message', '.text-test-message', false)
//     .btnSave('#form-create-player-save')
//     .listen();

console.log(123123);
let s = new Modal();

s.alert('asdasdsa', 'asdasasd',
	() => {
		console.log('yes');
	},
	() => {
		console.log('no');
	})
	.show();

setTimeout(() => {
	s.alert('12312312', '234234',
		() => {
			console.log('yes22');
		})
		.show();
}, 2000);

setTimeout(() => {
	s.confirm('12312312', '234234',
		() => {
			console.log('yes22');
		})
		.show();
}, 4000);