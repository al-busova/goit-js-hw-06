const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listImages = document.querySelector('.gallery');

function createGallery(images) {
  return images.map((el) => {

    const itemOfGallery = document.createElement('li');
    itemOfGallery.classList.add('gallery__item');
    const imageInItemOfGallery = `<img src= ${el.url} alt= ${el.alt} height = 250px>`;
    itemOfGallery.insertAdjacentHTML('afterbegin', imageInItemOfGallery);
    listImages.append(itemOfGallery);
    // const imageEl = document.querySelectorAll('img');
    // imageEl.style.height = '250px'; Чому так не працює? (через це створюється лише одна лішка та висота не змінюється)
  }
  )
}
createGallery(images);

listImages.style.listStyle = "none";
listImages.style.display = 'flex';
listImages.style.gap = '20px';

// ***Варіант з createElement
// function createGallery(images) {
//   return images.map((el) => {

//     const itemOfGallery = document.createElement('li');
//     const imageInItemOfGallery = document.createElement('img');
//     imageInItemOfGallery.src = el.url;
//     imageInItemOfGallery.alt = el.alt;
//     itemOfGallery.appendChild(imageInItemOfGallery);
//     listImages.append(itemOfGallery);
//   }
//   )
// }
// createGallery(images);