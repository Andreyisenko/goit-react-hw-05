import axios from 'axios';

// const YOUR_ACCESS_KEY = 'f1c576d1dc2ad930cfb3f5f9b976d5d3';



// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
axios.defaults.baseURL = `https://api.themoviedb.org/3` 
const options = {
  headers: {
    // Замісь api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWM1NzZkMWRjMmFkOTMwY2ZiM2Y1ZjliOTc2ZDVkMyIsIm5iZiI6MTczOTcxOTIwMy43MTcsInN1YiI6IjY3YjIwMjIzMDlhNDdiNjliOTlmYWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZQQnlqTPk5ufFN7XEzRhwdu1M3Ci04aMgpmdw40-7w',
    accept: 'application/json'
    
  },
  
};
export const fetchUsers = async () => {
  const {data} = await axios
    .get(`/trending/movie/day?language=en-US`, options)
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
  // console.log(data.results);
  return data.results;
};

export const fetchUserById = async (movieId) => {
  const {data} = await axios
    .get(`/movie/${movieId}?language=en-US`, options)
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
  // console.log(data);
  return data;
};



export const fetchPostsUserById = async (movieId) => {
  const {data} = await axios
    .get(`/movie/${movieId}/reviews?language=en-US&page=1`, options)
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
  // console.log(data.results);
  return data.results;
};


export const fetchActorsUserById = async (movieId) => {
  const {data} = await axios
    .get(`/movie/${movieId}/credits?language=en-US`, options)
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
  // console.log(data.cast);
  return data.cast;
};


// "/movie/${movieId}/credits?language=en-US"

// `/movie/${movieId}/reviews?language=en-US&page=1`
// `/movie/${movieId}?language=en-US`


