import './style.css';
import getMovies from './modules/get-movies';
import displayMovies from './modules/display-movies';
import movieModal from './modules/movie-modal';

window.addEventListener('load', async () => {
  const movies = await getMovies();
  const sampleMovies = movies.slice(0, 12);
  await displayMovies(sampleMovies);

  const commentButtons = [...document.querySelectorAll('.commentBtn')];
  movieModal(commentButtons, sampleMovies);
});
