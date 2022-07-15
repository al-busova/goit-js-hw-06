const rangeInputEl = document.querySelector('#font-size-control');
const textOfChangeEl = document.querySelector('#text');

function changeFontSizeInput(event) {
    textOfChangeEl.style.fontSize = event.currentTarget.value +'px';
}

rangeInputEl.addEventListener('input', changeFontSizeInput);