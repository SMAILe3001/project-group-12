import { BASE_URL, API_KEY } from './api';
import { refs } from './refs';
import filmDescriptionCreate from '../templates/film-description.hbs';
import local from './localstorage';

let filmID = null;

async function loadFilmInfo(movieID) {
  const url = `${BASE_URL}movie/${movieID}?api_key=${API_KEY}`;
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}

function handleAddToQueue() {
    local.Queue.addOrRemove(filmID);
    console.log(local.Queue.value);
    refs.btnAddToQueue.classList.toggle('modal-button__active');
}

function handleAddToWatched() {
  //console.log('Add To Watching ' + filmID);
  local.Watched.addOrRemove(filmID);
    console.log(local.Watched.value);
    refs.btnAddToWatched.classList.toggle('modal-button__active');
}

function handleCloseModal() {
    refs.backdrop.classList.add('is-hidden');
    refs.btnAddToWatched.removeEventListener('click', handleAddToWatched);
    refs.btnAddToQueue.removeEventListener('click', handleAddToQueue);
    refs.filmInfoCardImage.innerHTML = '';
    refs.filmInfoCardBloque.innerHTML = '';
    window.removeEventListener('keydown', handleKeydown);
    
}

function renderFilmInfo(film) {
    console.log(film);
    // дописать дефолтный постер если его нет
    refs.filmInfoCardImage.innerHTML = `<img class="film-info-card__poster" src="${film.poster_path === null
        ? `${refs.altPoster}`
        : `https://image.tmdb.org/t/p/w500${film.poster_path}`}" alt="poster">`;
    film.vote_average = Math.round(film.vote_average * 10) / 10;
    refs.filmInfoCardBloque.innerHTML = filmDescriptionCreate(film);
    if (local.Queue.exist(filmID)) {
        refs.btnAddToQueue.classList.add('modal-button__active');
    } else {
        refs.btnAddToQueue.classList.remove('modal-button__active');
    }
    if (local.Watched.exist(filmID)) {
        refs.btnAddToWatched.classList.add('modal-button__active');
    } else {
        refs.btnAddToWatched.classList.remove('modal-button__active');
    }
}

function handleFilmCardClick(ev) {
  const targetObject = ev.target.closest('.film-card');
  if (targetObject) {
    filmID = targetObject.dataset.id;
    refs.backdrop.classList.remove('is-hidden');
    refs.modalClose.addEventListener('click', handleCloseModal);
    refs.btnAddToQueue.addEventListener('click', handleAddToQueue);
    refs.btnAddToWatched.addEventListener('click', handleAddToWatched);
    window.addEventListener('keydown', handleKeydown);      
    refs.backdrop.addEventListener("click", handleBackdropClick);

    loadFilmInfo(filmID).then(renderFilmInfo);
  }
}

function handleKeydown(ev) {
    if (ev.code === 'Escape') {
        handleCloseModal();
    }
}

function handleBackdropClick(ev) {
    if (ev.target === refs.backdrop) {
        handleCloseModal();
    };
}

function modalInfoFilmShow() {
    refs.galleryFilms.addEventListener('click', handleFilmCardClick);
}

modalInfoFilmShow();

export default modalInfoFilmShow;
