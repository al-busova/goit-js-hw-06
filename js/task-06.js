const validationInputEl = document.querySelector('#validation-input');

function loseFocus(event) {
    
    if (event.currentTarget.value.trim().length === Number(validInputEl.dataset.length)) {
        validationInputEl.classList.add('valid');
    } else {
        validationInputEl.classList.add('invalid');
        // validInputEl.style.borderColor = 'red';
    }

}
validationInputEl.addEventListener('blur', loseFocus);