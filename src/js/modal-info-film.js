function modalInfoFilmShow() {
  const elFilmGallery = document.querySelector('.galleryFilms-js');

  function handleFilmCardClick(ev) {
    const targetObject = ev.target.closest('.film-card');
    if (targetObject) {
      console.log(targetObject.dataset.id);
    }
  }

  elFilmGallery.addEventListener('click', handleFilmCardClick);
}

modalInfoFilmShow();

export default modalInfoFilmShow;
