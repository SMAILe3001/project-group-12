const refs = {
  galleryFilms: document.querySelector('.galeryFilms-js'),
};

console.log(refs.galleryFilms);

function renderMarkup(films) {
  console.log(films.results);
  const createdElements = films.results
    .map(film => {
      cardFilm = `
        <div>
            <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="poster">
            <h2>${film.original_title}</h2>
            <p>${film.media_type}</p>
            <p>${film.release_date}</p>
        </div>
        `;
      return cardFilm;
    })
    .join('');

  refs.galleryFilms.innerHTML = createdElements;
}

export default { renderMarkup };
