import { BASE_URL, API_KEY } from '../api';

async function loadPopular() {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}

export default { loadPopular };
