import loadPopular from './load-popular';
import onFetchError from './on-fetch-error';
import renderMarkup from '../render-markup';
import { showSpinner, hideSpinner } from '../spiner';
import { paginationRender } from '../pagination';

async function renderPopulars() {
  showSpinner();
  try {
    const popularData = await loadPopular();
    renderMarkup(popularData);
    paginationRender(popularData.total_results);
  } catch (error) {
    onFetchError(error);
  }
  hideSpinner();
}
renderPopulars();

export default { renderPopulars };
