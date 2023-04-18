import { renderFilm } from './render-film';
import { fetchFilm } from './fetch-film';
import { refs } from '../refs';

export default function updatingListMovies(evt) {
  const typeList = localStorage.getItem(evt);

  if (!typeList || typeList.length === 2) {
    refs.galleryFilms.innerHTML = '<p>There are no films in this gallery</p>';
    return;
  }

  refs.galleryFilms.innerHTML = '';

  let listId = JSON.parse(typeList);

  Object.entries(listId).forEach(([name, value]) => {
    fetchFilm(value).then(renderFilm);
  });
}
