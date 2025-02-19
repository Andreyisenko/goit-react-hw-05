import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWM1NzZkMWRjMmFkOTMwY2ZiM2Y1ZjliOTc2ZDVkMyIsIm5iZiI6MTczOTcxOTIwMy43MTcsInN1YiI6IjY3YjIwMjIzMDlhNDdiNjliOTlmYWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZQQnlqTPk5ufFN7XEzRhwdu1M3Ci04aMgpmdw40-7w',
    accept: 'application/json',
  },
};
export const fetchUsers = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?language=en-US`,
    options
  );
  return data.results;
};

export const fetchUserById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return data;
};

export const fetchPostsUserById = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data.results;
};

export const fetchActorsUserById = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data.cast;
};

export const fetchSearchUser = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}`, options);
  return data.results;
};
