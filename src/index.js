import API from './js/popular/load-popular';
import RMP from './js/popular/render-markup-popular';
import error from './js/popular/on-fetch-error';
import PGN from './js/pagination';
import APIF from './js/form_search/load-form';
import RMF from './js/form_search/render-murkap-form';

API.loadPopular().then(RMP.renderMarkup).catch(error);
