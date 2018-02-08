import FormControls from './form/FormControls';
import Modal from './window/Modal';

// let formPlayer = new FormControls('form-create-player');
//
// formPlayer
//     .useMessages('.form-save-ok', '.form-save-error')
//     .useFormMessage('.block-test-message', '.text-test-message', false)
//     .btnSave('#form-create-player-save')
//     .listen();

let s = new Modal();

let start = (question) => {
	s.confirm(question, null,
		() => {
			s.alert('Ок', null, () => {
				start('Ты молодец!');
			}).show();
		},
		() => {
			s.alert('Отмена', null, () => {
				start('Ой! что ты делашь?');
			}).show();
		},
		() => {
			s.alert('Ооооооо!', null, () => {
				start('Ты уверен?');
			}).show();
		})
		.show();
};

start('Привет! Кто ты?');