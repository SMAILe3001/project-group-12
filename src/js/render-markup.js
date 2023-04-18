import { genres } from './genres';
import { refs } from './refs';
import { imgUrl } from './refs';

export default function renderMarkup(films) {
  const createdElements = films.results
    .map(film => {
      console.log(film.release_date);
      if (
        film.genre_ids.length < 2 &&
        film.genre_ids.length !== 0 &&
        film.release_date === ''
      ) {
        const cardFilm = ` 
      <div class="film-card" data-id=${film.id}>
        <img class="film-poster" src="${
          film.poster_path === null
            ? `${imgUrl}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt="poster">
        <h2 class="film-title">${film.original_title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .map(id => genres[id])
          .join(', ')}</span>
        </div>
      </div>`;
        return cardFilm;
      } else if (film.genre_ids.length > 2 && film.release_date === '') {
        const cardFilm = `
      <div class="film-card" data-id=${film.id}>
        <img class="film-poster" src="${
          film.poster_path === null
            ? `${imgUrl}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt="poster">
        <h2 class="film-title">${film.original_title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .slice(0, 2)
          .map(id => genres[id])
          .join(', ')}, Other</span>
        </div>
      </div>`;
        return cardFilm;
      } else if (film.genre_ids.length === 0 && film.release_date === '') {
        const cardFilm = `
      <div class="film-card" data-id=${film.id}>
        <img class="film-poster" src="${
          film.poster_path === null
            ? `${imgUrl}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt="poster">
        <h2 class="film-title">${film.original_title}</h2>
        <div class="film-info">
        <span class="film-details"></span>
        </div>
      </div>`;
        return cardFilm;
      } else if (film.genre_ids.length === 0 && film.release_date !== '') {
        const cardFilm = `
      <div class="film-card" data-id=${film.id}>
        <img class="film-poster" src="${
          film.poster_path === null
            ? `${imgUrl}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt="poster">
        <h2 class="film-title">${film.original_title}</h2>
        <div class="film-info">
        <span class="film-details">${film.release_date.substr(0, 4)}</span>
        </div>
      </div>`;
        return cardFilm;
      } else if (film.genre_ids.length < 2 && film.genre_ids.length !== 0) {
        const cardFilm = ` 
      <div class="film-card" data-id=${film.id}>
        <img class="film-poster" src="${
          film.poster_path === null
            ? `${imgUrl}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt="poster">
        <h2 class="film-title">${film.original_title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .map(id => genres[id])
          .join(', ')} | ${film.release_date.substr(0, 4)}</span>
        </div>
      </div>`;
        return cardFilm;
      } else if (film.genre_ids.length > 2 && film.genre_ids.length !== 0) {
        const cardFilm = `
      <div class="film-card" data-id=${film.id}>
        <img class="film-poster" src="${
          film.poster_path === null
            ? `${imgUrl}`
            : `https://image.tmdb.org/t/p/w500${film.poster_path}`
        }" 
          alt="poster">
        <h2 class="film-title">${film.original_title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids
          .slice(0, 2)
          .map(id => genres[id])
          .join(', ')}, Other | ${film.release_date.substr(0, 4)}</span>
        </div>
      </div>`;
        return cardFilm;
      }
    })
    .join('');

  refs.galleryFilms.innerHTML = createdElements;
}
