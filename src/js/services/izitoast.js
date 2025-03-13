import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const noFoundQuery = () => {
  iziToast.error({
    title: `❌ Please, enter a query!`,
    message: '',
    position: 'topCenter',
    color: 'red',
    icon: ""
  });
};

const noFoundImages = () => {
  iziToast.error({
    title: `❌ Sorry, there are no images matching your search query. Please try again!`,
    message: '',
    position: 'topCenter',
    color: 'red',
    icon: ""
  });
};


export {noFoundImages, noFoundQuery};