function validate() {

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let company = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
    let validField = document.getElementById('valid');

    company.addEventListener('change', () => {
        companyInfo.style.display = company.checked ? 'block' : 'none';
    });

    document.getElementById('submit').addEventListener('click', onClick);

    let valid;

    function onClick(ev) {

        valid = true;

        ev.preventDefault();

        const regexUsername = /^[A-Za-z0-9]{3,20}$/;
        const regexPassword = /^\w{5,15}$/;
        const regexEmail = /@(\w)*\./;

        checkValidity(username, regexUsername);
        checkValidity(password, regexPassword);
        checkValidity(confirmPassword, regexPassword);
        checkValidity(email, regexEmail);

        if (password.value !== confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            valid = false;
        }

        if (company.checked) {
            if (1000 <= Number(companyNumber.value) && Number(companyNumber.value) <= 9999) {
                companyNumber.style.borderColor = '';
            } else {
                companyNumber.style.borderColor = 'red';
                valid = false;
            }
        }

        if (valid) {
            validField.style.display = 'block';
        } else {
            validField.style.display = 'none';
        }
    };

    function checkValidity(element, regex) {

        if (!regex.test(element.value)) {
            element.style.borderColor = 'red';
            valid = false;
        } else {
            element.style.borderColor = '';
        }
    };
}
