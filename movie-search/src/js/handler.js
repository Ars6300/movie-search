/* eslint-disable no-unused-vars */
import Movie from './movie';
import swiper from './slider';

function sendRequest(word) {
  const page = 1;
  const apikey = 'e0c4027f';
  const url = `https://www.omdbapi.com/?s=${word}&page=${page}&apikey=${apikey}`;


  const getMovie = (i) => fetch(url)
    .then((res) => res.json())
    .then((data) => data.Search[i]);


  const getRate = (id) => {
    const rateUrl = `https://www.omdbapi.com/?i=${id}&apikey=${apikey}`;
    return fetch(rateUrl)
      .then((res) => res.json())
      .then((data) => data.imdbRating);
  };

  function makeMovie(movie) {
    swiper.appendSlide(movie.getMovie());
  }

  for (let i = 0; i < 10; i += 1) {
    getMovie(i).then((response) => {
      getRate(response.imdbID).then((rating) => {
        const movie = new Movie(response.Title,
          `https://www.imdb.com/title/${response.imdbID}/videogallery/`,
          response.Poster,
          response.Year,
          rating);
        makeMovie(movie);
      });
    });
  }
}

export { sendRequest as default };
