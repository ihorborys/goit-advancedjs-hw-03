import { getImages } from '../services/pixabay-api.js';
import { noFoundImages, noFoundQuery } from '../services/izitoast.js';


function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();
  if(!userQuery) {
    return noFoundQuery();
  }
  console.log(userQuery);

  getImages(userQuery)
    .then(images => {
      console.dir(images);
      if(!images.total) {
        return noFoundImages();
      } else {
        console.dir(images);
      }
  })
    .catch(error => {
      console.log(error);
    });

  form.reset()
}


export {handleSearch};