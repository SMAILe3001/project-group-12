import { refs } from '../refs';
import updatingListMovies from './updating-list-movies';

refs.btnWatched.addEventListener('click', openWatched);

function openWatched() {
  refs.btnWatched.disabled = true;
  refs.btnQueue.disabled = false;
  refs.btnWatched.classList.add('library__button--active');
  refs.btnQueue.classList.remove('library__button--active');

  updatingListMovies('userWatched');
}

openWatched();

export default openWatched;
