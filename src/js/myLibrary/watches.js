import axios from 'axios';
import { BASE_URL, API_KEY } from '../api';
import { refs } from '../refs';

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

  unfinishedFeedback = JSON.parse(evt);

  Object.entries(unfinishedFeedback).forEach(([name, value]) => {
    fetchFilm(value).then(renderMarkup);
  });
}

async function fetchFilm(id) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
    throw error;
  }
}

function renderMarkup(film) {
  const cardFilm = `<div class="film-card" data-id=${film.id}>
     <img class="film-poster" src="https://image.tmdb.org/t/p/w500${
       film.poster_path
     }" alt="poster">
     <h2 class="film-title">${film.original_title}</h2>
     <div class="film-info">  
     <span class="film-details">${film.genres
       .map(({ name }) => name)
       .join(', ')} | ${film.release_date.substr(0, 4)}</span>
    </div>
</div>`;

  refs.galleryFilms.insertAdjacentHTML('beforeend', cardFilm);
}

openWatched();

export default openWatched;
