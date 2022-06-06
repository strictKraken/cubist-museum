showMail();
export function showMail() {
    const $inputMail = $('#checkbox-mail + .form-reservation__contacts-mail');
    const $checkbox = $('#checkbox-mail > input');
    $checkbox.change(function() {
        if (this.checked) {
            $($inputMail).show();
        } else {
            $($inputMail).hide();
        }
    });
}