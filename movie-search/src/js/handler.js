/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
import Movie from './movie';

const errorMessage = document.getElementById('error-message');
const searchInputBox = document.querySelector('body > main > form > div > input');

async function sendRequest(word, page) {
  errorMessage.innerHTML = '';
  const apikey = 'e0c4027f';
  const movies = [];

  const url = `https://www.omdbapi.com/?s=${word}&page=${page}&apikey=${apikey}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data.Search) {
      throw new Error('No movies to load');
    }
    // eslint-disable-next-line no-restricted-syntax
    for (let i = 0; i < data.Search.length; i += 1) {
      const idUrl = `https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=${apikey}`;
      const fres = await fetch(idUrl);
      if (!fres.ok) {
        throw new Error('Some movies were failed to load');
      }
      const result = await fres.json();
      const movie = new Movie(result.Title,
        `https://www.imdb.com/title/${result.imdbID}/videogallery/`,
        result.Poster,
        result.Year,
        result.imdbRating);
      movies.push(movie.getMovie().toString());
    }
  } catch (e) {
    errorMessage.innerHTML = e.message;
  }
  return movies;
}

export { sendRequest as default };
