import { refs } from '../refs';
import { renderFilm } from './render-film';
import { fetchFilm } from './fetch-film';

refs.btnQueue.addEventListener('click', openQueue);

function openQueue(evt) {
  evt = localStorage.getItem('userQueue');
  refs.btnQueue.disabled = true;
  refs.btnWatched.disabled = false;
  refs.btnQueue.classList.add('library__button--active');
  refs.btnWatched.classList.remove('library__button--active');

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

export default openQueue;
