function validate() {
    let patternForEmail = /\w+@\w+\.\w+/;
    let inputElement = document.getElementById('email');

    function checkEmail() {
        if (!patternForEmail.test(this.value)) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
    }

    inputElement.addEventListener('change', checkEmail);
}