import SimpleLightbox from "simplelightbox";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import "simplelightbox/dist/simple-lightbox.min.css";



// CREATE MARKUP
function createGalleryItems(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a></li>`;
      })
      .join("");
  }
  

  // FIND ELEMENT
  const galleryContainerRef = document.querySelector(".gallery");

  // RENDER MARKUP IN HTML
galleryContainerRef.insertAdjacentHTML(
    "afterbegin",
    createGalleryItems(galleryItems)
  );

//   INITIALIZING LIBRARY AND SETTINGS
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250,  });