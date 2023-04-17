import loadPopular from './load-popular';
import onFetchError from './on-fetch-error';
import renderMarkup from '../render-markup';
import { showSpinner, hideSpinner } from '../spiner';

async function renderPopulars() {
  showSpinner();
  try {
    const popularData = await loadPopular();
    renderMarkup(popularData);
  } catch (error) {
    onFetchError(error);
  }
  hideSpinner();
}
renderPopulars();

export default { renderPopulars };
