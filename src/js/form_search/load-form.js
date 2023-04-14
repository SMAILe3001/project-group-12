import axios from 'axios';
import Notiflix from 'notiflix';

// =

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ce2d3c43772ebdf360cfaed86f3ba1bf';

async function fetchMovie(inputValue) {
  try {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        api_key: API_KEY,
        query: inputValue,
        // page: 1,
      },
    });

    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
    throw error;
  }
}

export default { fetchMovie };
