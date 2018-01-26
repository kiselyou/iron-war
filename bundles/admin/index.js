
import FormControls from './form/FormControls';

let ok = () => {
    $('.form-save-ok').fadeIn();
    $('.form-save-error').fadeOut();
};

let erroraa = () => {
    $('.form-save-ok').fadeOut();
    $('.form-save-error').fadeIn();
};

let clear = () => {
    $('.form-save-ok').fadeOut();
    $('.form-save-error').fadeOut();
};

let formPlayer = new FormControls('form-create-player');
formPlayer
    .addButtonSave(
        '#form-create-player-save',
        (error, data) => {
            if (error === null) {
                if (data) {
                    ok();
                } else {
                    erroraa();
                }
                console.log(1, error, data);
            }
        }
    )
    .listen();