import API from './js/popular/load-popular';
import RMP from './js/popular/render-markup-popular';

API.loadPopular().then(RMP.renderMarkup);
// .catch(() => {
//   console.log('error');
// });
