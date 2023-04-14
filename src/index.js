import API from './js/popular/load-popular';
import RMP from './js/popular/render-markup-popular';
import error from './js/popular/on-fetch-error';


API.loadPopular()
    .then(RMP.renderMarkup)
    .catch(error)