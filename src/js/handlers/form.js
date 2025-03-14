import { getImages } from '../services/pixabay-api.js';
import { noFoundImages, noFoundQuery } from '../services/izitoast.js';
import { createCardsMarkup } from '../utils/render-functions.js';
import { refs } from '../utils/consts.js';


function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();
  if(!userQuery) {
    return noFoundQuery();
  }

  getImages(userQuery)
    .then(images => {
      if(!images.total) {
        return noFoundImages();
      }
      refs.gallery.innerHTML = createCardsMarkup(images.hits);
  })
    .catch(error => {
      console.log(error);
    });

  form.reset()
}


export {handleSearch};