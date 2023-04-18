import { refs } from '../refs';
import { renderFilm } from './render-film';
import { fetchFilm } from './fetch-film';

refs.btnWatched.addEventListener('click', openWatched);

function openWatched(evt) {
  evt = localStorage.getItem('userWatched');
  refs.btnWatched.disabled = true;
  refs.btnQueue.disabled = false;
  refs.btnWatched.classList.add('library__button--active');
  refs.btnQueue.classList.remove('library__button--active');

  if (!evt || evt.length === 2) {
    refs.galleryFilms.innerHTML = '<p>There are no films in this gallery</p>';
    return;
  }

  refs.galleryFilms.innerHTML = '';

  let listId = JSON.parse(evt);

  Object.entries(listId).forEach(([name, value]) => {
    fetchFilm(value).then(renderFilm);
  });
}

openWatched();

export default openWatched;
