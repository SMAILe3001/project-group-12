import axios from 'axios';
import { BASE_URL, API_KEY } from '../api';

// =

async function fetchMovie(inputValue, page = 1) {
  try {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        api_key: API_KEY,
        query: inputValue,
        page: page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
    throw error;
  }
}

export default { fetchMovie };
