import SimpleLightbox from "simplelightbox";


function createCardsMarkup(images)  {
  return images
    .map(
      ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
    `<li class="gallery-card">
      <a class="gallery-link" href="${largeImageURL}">
        <img
        class="gallery-img"
        src="${webformatURL}"
        alt="${tags}">
      </a>
    </li>`
  )
    .join('')
}


new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 1});


export {createCardsMarkup}