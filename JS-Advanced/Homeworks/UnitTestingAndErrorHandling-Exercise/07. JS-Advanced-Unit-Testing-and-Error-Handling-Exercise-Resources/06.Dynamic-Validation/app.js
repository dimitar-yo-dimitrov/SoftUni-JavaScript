function validate() {
    let regex = /\w+\@\w+\.\w+/;

    let emailField = document.getElementById('email')
    emailField.addEventListener('change', validateEmail);

    function validateEmail(event) {
        let email = event.target.value;

        regex.test(email) ?
            event.target.className = '' :
            event.target.className = 'error';
    }
}