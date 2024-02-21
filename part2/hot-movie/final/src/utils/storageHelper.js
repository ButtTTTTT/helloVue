const WATCHED_MOVIE = "watched-movie";

export const getWatchedMovies = () => {
  const watchedMoviesStr = localStorage.getItem(WATCHED_MOVIE);
  if (!watchedMoviesStr) {
    return null;
  }
  return JSON.parse(watchedMoviesStr);
};
export const addWatchedMovies = (newMovie) => {
  const watchedMovieList = getWatchedMovies();
  if (!watchedMovieList) {
    localStorage.setItem(WATCHED_MOVIE, JSON.stringify([newMovie]));
    return;
  }
  watchedMovieList.push(newMovie);
  localStorage.setItem(WATCHED_MOVIE, JSON.stringify(watchedMovieList));
};
export const deleteWatchedMovie = (deleteId) => {
  const watchedMovieList = getWatchedMovies();
  if (!watchedMovieList) {
    return;
  }
   const newWatchedMovieList =  watchedMovieList.filter((movie) => movie.id !== deleteId);
  localStorage.setItem(WATCHED_MOVIE, JSON.stringify(newWatchedMovieList));
};
