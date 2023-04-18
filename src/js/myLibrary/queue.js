import { refs } from '../refs';
import updatingListMovies from './updating-list-movies';

refs.btnQueue.addEventListener('click', openQueue);

async function openQueue(evt) {
  refs.btnQueue.disabled = true;
  refs.btnWatched.disabled = false;
  refs.btnQueue.classList.add('library__button--active');
  refs.btnWatched.classList.remove('library__button--active');

  updatingListMovies('userQueue');
}

export default openQueue;
