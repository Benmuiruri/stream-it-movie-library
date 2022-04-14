import './style.css';
import getMovies from './modules/get-movies.js';
import displayMovies from './modules/display-movies.js';
import movieModal from './modules/movie-modal.js';
import countMovies from './modules/movie-counter.js';

window.addEventListener('load', async () => {
  const movies = await getMovies();
  const sampleMovies = movies.slice(0, 48);
  await displayMovies(sampleMovies);

  const movieList = document.querySelector('.movie-list');

  movieList.innerHTML = `We currently have <span> ${countMovies(sampleMovies)} <span> movies`;

  const commentButtons = [...document.querySelectorAll('.commentBtn')];
  movieModal(commentButtons, sampleMovies);
});