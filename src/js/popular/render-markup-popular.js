import loadPopular from './load-popular';
import onFetchError from './on-fetch-error';
import renderMarkup from '../render-markup';

function renderPopulars() {
  loadPopular().then(renderMarkup).catch(onFetchError);
}

renderPopulars();

export default { renderPopulars };
