import { refs } from '../refs';

export function renderFilm(film) {
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
