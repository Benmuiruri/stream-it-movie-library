import './style.css';
import getMovies from './modules/get-movies';

window.addEventListener('load', async () => {
  const movies = await getMovies();
  const sampleMovies = movies.slice(0, 10);
  await displayMovies(sampleMovies);
});
