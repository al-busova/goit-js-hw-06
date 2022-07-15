let counterValue = 0;

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

function increaseNum() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}
function decreaseNum() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}
decrementEl.addEventListener('click', decreaseNum);
incrementEl.addEventListener('click', increaseNum);