const endPoint = 'https://api.tvmaze.com/shows?page=1';
const getMovies = async () => {
  const res = await fetch(endPoint);
  const data = res.json();
  return data;
};

export default getMovies;