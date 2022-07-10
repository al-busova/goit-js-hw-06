const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');

function createIngredients(arrIngredients) {
  return arrIngredients.map((el) => {

    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = el;
    ingredientEl.classList.add('item');
    listIngredients.append(ingredientEl);
    
  }
  )
}
createIngredients(ingredients);