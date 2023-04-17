import { BASE_URL, API_KEY } from '../api';

async function loadPopular(page = 1) {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`;
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}

export default loadPopular;
