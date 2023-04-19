import loadPopular from './load-popular';
import onFetchError from './on-fetch-error';
// import renderMarkup from '../render-markup';
import renderMarkup from '../render-markup_hbs';
import { showSpinner, hideSpinner } from '../spiner';
import { paginationRender } from '../pagination';

async function renderPopulars(page) {
  showSpinner();
  try {
    const popularData = await loadPopular(page);
    renderMarkup(popularData);
    paginationRender(popularData.total_results, page);
  } catch (error) {
    onFetchError(error);
  }
  hideSpinner();
}
renderPopulars();

export default { renderPopulars };
