import axios from 'axios';
import { BASE_URL, API_KEY } from '../api';

export async function fetchFilm(id) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
    throw error;
  }
}
