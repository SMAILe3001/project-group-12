import axios from 'axios';
import Notiflix from 'notiflix';
import API from './load-form';

const container = document.querySelector('.galeryFilms-js');
const form = document.querySelector('.search');
const inputElement = document.querySelector('.search__input');

form.addEventListener('submit', fetchSerchForm);

const genres = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

async function fetchSerchForm(evt) {
  evt.preventDefault();

  const inputValue = inputElement.value.toLowerCase().trim();

  try {
    const movies = await API.fetchMovie(inputValue);

    if (movies.results.length === 0) {
      Notiflix.Notify.info('Sorry, but nothing was found for your request');
    } else {
      renderMovie(movies);
      clearValue();
    }
  } catch (error) {
    Notiflix.Notify.failure(error);
    throw error;
  }
}

async function renderMovie(movies) {
  const movieHTML = movies.results
    .filter(movie => movie.poster_path)
    .map(
      movie => `
      <div class="movie-start_container">
        <div class="movie-start">
          ${
            movie.poster_path
              ? `<img class="film-poster" data-id="${
                  movie.id
                }" src="https://image.tmdb.org/t/p/w500${
                  movie.poster_path
                }" alt="${movie.original_title || 'Movie Poster'} Poster" />`
              : ''
          }
          <div class="movie-details_start">
            <h2 class="film-title">${movie.original_title}</h2>
            <div class="film-details">
             ${
               movie.genre_ids.length > 2
                 ? `${genres[movie.genre_ids[0]]}, ${
                     genres[movie.genre_ids[1]]
                   }, ...other`
                 : movie.genre_ids.map(id => genres[id]).join(', ')
             } 
            |
             ${new Date(movie.release_date).getFullYear()}</p>
          </div>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  container.innerHTML = movieHTML;
}

function clearValue() {
  inputElement.value = '';
}

export default { renderMovie };
