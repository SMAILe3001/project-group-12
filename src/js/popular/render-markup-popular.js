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
const refs = {
  galleryFilms: document.querySelector('.galeryFilms-js'),
};

function renderMarkup(films) {
  console.log(films.results);
  const createdElements = films.results
    .map(film => {
      const cardFilm = `
      <div class="film-card">
        <img class="film-poster" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="poster">
        <h2 class="film-title">${film.original_title}</h2>
        <div class="film-info">
        <span class="film-details">${film.genre_ids.map(id => genres[id]).join(', ')} | ${film.release_date.substr(0, 4)}</span>
        </div>
      </div>`
      return cardFilm;
    })
    .join('');

  refs.galleryFilms.innerHTML = createdElements;
}

export default { renderMarkup };
