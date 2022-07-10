const listCategories = document.querySelector('#categories');
console.log('Number of categories:', listCategories.children.length);

const itemCategories = document.querySelectorAll('.item');
const infoItemCategories = [...itemCategories].map(item => {
    const titleCategory = item.querySelector('h2');
    console.log('Category:', titleCategory.textContent);
    const elementsListInCategory = item.querySelector('ul');
    console.log('Elements:', elementsListInCategory.children.length);
});