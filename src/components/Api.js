import axios from 'axios';
const API_KEY = '217829d4b2a1dc1cc2788379b61edb17';
const URL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const response = await axios.get(
    `${URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovies = async query => {
  const response = await axios.get(
    `${URL}search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getCast = async id => {
  const response = await axios.get(
    `${URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getReviews = async id => {
  const response = await axios.get(
    `${URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};