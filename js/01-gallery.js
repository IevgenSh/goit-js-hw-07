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

function onGalleryClick(e) {
  e.preventDefault();
  refs.image.src = e.target.dataset.source;
  instance.show();
  
}

function onGalleryEscClick(e) {
  if (e.keyCode === 27) {
    instance.close()
  }
}

refs.gallery.addEventListener('click', onGalleryClick);
refs.gallery.addEventListener('keydown', onGalleryEscClick);


