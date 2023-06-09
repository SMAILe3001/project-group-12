import { genres } from './genres';
import { refs } from './refs';
import { imgUrl } from './refs';
import filmCardCreate from '../templates/film-card.hbs';

export default function renderMarkup(films) {
  const createdElements = films.results
    .map(film => {
      if (film.genre_ids.length > 0) {
        film.details = film.genre_ids
          .slice(0, 2)
          .map(id => genres[id])
          .join(', ');

        if (film.genre_ids.length > 2) {
          film.details += ', other';
        }

        if (film.release_date) {
          film.details += ' | ' + film.release_date.substr(0, 4);
        }
      } else if (film.release_date) {
        film.details = film.release_date.substr(0, 4);
      }

      const posterSize = document.body.clientWidth <= 768 ? 'w342' : 'w500';

      film.poster_url = film.poster_path
        ? `https://image.tmdb.org/t/p/${posterSize}${film.poster_path}`
        : `${imgUrl}`;

      return filmCardCreate(film);
    })
    .join('');

  refs.galleryFilms.innerHTML = createdElements;
}
