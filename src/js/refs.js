export const refs = {
  galleryFilms: document.querySelector('.galleryFilms-js'),
  form: document.querySelector('.search'),
  inputElement: document.querySelector('.search__input'),
  backdrop: document.querySelector('.js-infoFilm'),
  modalClose: document.querySelector('.film-info-card__button-close'),
  filmInfoCard: document.querySelector('.film-info__card'),
  filmInfoCardImage: document.querySelector('.film-info-card__image'),
  filmInfoCardBloque: document.querySelector('.film-info-card__bloque'),
  btnAddToQueue: document.querySelector('.btn-add-to-queue'),
  btnAddToWatched: document.querySelector('.btn-add-to-watched'),
  container: document.getElementById('tui-pagination-container'),
  btnWatched: document.querySelector('.js-watched'),
  btnQueue: document.querySelector('.js-queue'),
  footer: document.querySelector('.footer'),
  openModalBtnFoot: document.querySelector('[data-action="open-modal"]'),
  closeModalBtnFoot: document.querySelector('[data-action="close-modal"]'),
  backdropTeamFoot: document.querySelector('.js-backdrop'),
  team: document.querySelector('.dev-set'),
  developersBoard: document.querySelector('.js-dev-set'),
};

export const imgUrl = new URL('../images/no-film-poster.jpg', import.meta.url);
