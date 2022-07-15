function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createCollectionBtnEl = document.querySelector('[data-create]');
const destroyCollectionBtnEl = document.querySelector('[data-destroy]');
const newCollectionBox = document.querySelector('#boxes');
const numOfDivEl = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  const startWidthAndHeight = 30;
  for (let i = 0; i < amount; i += 1) { //Чому не працює умова i = amount? (висне браузер)
    const divEl = document.createElement('div');
    newCollectionBox.appendChild(divEl);
    if (i < 1) { //Чому не працює умова і=0? (висне браузер)
       divEl.style.width = `${startWidthAndHeight}px`;
    divEl.style.height = `${startWidthAndHeight}px`;
    }else {
      divEl.style.width = `${startWidthAndHeight + 10 * i}px`;
      divEl.style.height = `${startWidthAndHeight + 10 * i}px`;
    }
    divEl.style.backgroundColor = getRandomHexColor();
  }
}

function destroyBoxes() {
  newCollectionBox.innerHTML = '';
}

createCollectionBtnEl.addEventListener('click', () => createBoxes(numOfDivEl.value));
destroyCollectionBtnEl.addEventListener('click', destroyBoxes);