const API_KEY = "ce2d3c43772ebdf360cfaed86f3ba1bf";

function loadPopular() { 
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        } throw new Error(response.statusText)
    } 
)
};

export default {loadPopular}