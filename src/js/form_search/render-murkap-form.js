// import axios from 'axios';
import Notiflix from 'notiflix';
import API from './load-form';
import { refs } from '../refs';
import renderMovie from '../render-markup';
import { showSpinner, hideSpinner } from '../spiner';

refs.form.addEventListener('submit', fetchSerchForm);

async function fetchSerchForm(evt) {
  evt.preventDefault();
  showSpinner();

  const inputValue = refs.inputElement.value.toLowerCase().trim();

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
  hideSpinner();
}

// function renderMovie(movies) {
//   const movieHTML = movies.results
//     .filter(movie => movie.poster_path)
//     .map(
//       movie => `
//       <div class="movie-start_container">
//         <div class="movie-start">
//           ${
//             movie.poster_path
//               ? `<img class="film-poster" data-id="${
//                   movie.id
//                 }" src="https://image.tmdb.org/t/p/w500${
//                   movie.poster_path
//                 }" alt="${movie.original_title || 'Movie Poster'} Poster" />`
//               : ''
//           }
//           <div class="movie-details_start">
//             <h2 class="film-title">${movie.original_title}</h2>
//             <div class="film-details">
//              ${
//                movie.genre_ids.length > 2
//                  ? `${genres[movie.genre_ids[0]]}, ${
//                      genres[movie.genre_ids[1]]
//                    }, ...other`
//                  : movie.genre_ids.map(id => genres[id]).join(', ')
//              }
//             |
//              ${new Date(movie.release_date).getFullYear()}</p>
//           </div>
//           </div>
//         </div>
//       </div>
//     `
//     )
//     .join('');

//   refs.galleryFilms.innerHTML = movieHTML;
// }

function clearValue() {
  refs.inputElement.value = '';
}

export default { fetchSerchForm };
