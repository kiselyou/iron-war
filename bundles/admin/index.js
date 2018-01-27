import FormControls from './form/FormControls';

let formPlayer = new FormControls('form-create-player');

formPlayer
    .useMessages('.form-save-ok', '.form-save-error')
    .useFormMessage('.block-test-message', '.text-test-message', false)
    .btnSave('#form-create-player-save')
    .listen();