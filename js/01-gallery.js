import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(`
  <img src="" width="800" height="600">
`)

const refs = {
  gallery: document.querySelector(".gallery"),
  image: instance.element().querySelector('img'),

};

const galleryItemsString = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></li>`
  )
  .join("");
refs.gallery.insertAdjacentHTML("beforeend", galleryItemsString);

refs.gallery.addEventListener('click', onGalleryClick);


function onGalleryClick(e) {
  e.preventDefault();
  // const isGalleryLink = e.target.classList.contains('gallery__item');
  if (e.target === e.currentTarget) {
    return 
  }
  refs.image.src = e.target.dataset.source;
  instance.show();
  refs.gallery.addEventListener('keydown', onGalleryEscClick);
}

function onGalleryEscClick(e) {
  if (e.keyCode === 27) {
    instance.close();
    refs.gallery.removeEventListener('keydown', onGalleryEscClick);
    // console.log(e.key)
  }
  // console.log(e.key)
  return
}


