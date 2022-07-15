const formEl = document.querySelector('.login-form');


function controlForm(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
       return alert('Please, fill in all the fields!');
    }
    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);
    formEl.reset();
}

formEl.addEventListener('submit', controlForm);
