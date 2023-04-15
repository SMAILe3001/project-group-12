import axios from 'axios';
import Notiflix from 'notiflix';
import { BASE_URL, API_KEY } from '../api';

// =

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
