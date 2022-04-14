import countMovies from '../modules/movie-counter.js';

describe('Display number of movies', () => {
  test('should display 0 movies', () => {
    const sampleMovies = [];
    const movieList = countMovies(sampleMovies);
    expect(movieList).toBe(0);
  });
  test('should display 3 movies', () => {
    const sampleMovies = [{ data: 1 }, { data: 4 }, { data: 2 }];
    const movieList = countMovies(sampleMovies);
    expect(movieList).toBe(3);
  });
});