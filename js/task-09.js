function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const codeOfColorEl = document.querySelector('.color');

function changeColorBody(event) {
  console.log(event);
  bodyEl.style.backgroundColor = getRandomHexColor();
  codeOfColorEl.textContent = `${bodyEl.style.backgroundColor}`;
}

changeColorBtnEl.addEventListener('click', changeColorBody);