import axios from 'axios';

// const YOUR_ACCESS_KEY = 'f1c576d1dc2ad930cfb3f5f9b976d5d3';



const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query
=taxi`;

const options = {
  headers: {
    // Замісь api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWM1NzZkMWRjMmFkOTMwY2ZiM2Y1ZjliOTc2ZDVkMyIsIm5iZiI6MTczOTcxOTIwMy43MTcsInN1YiI6IjY3YjIwMjIzMDlhNDdiNjliOTlmYWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZQQnlqTPk5ufFN7XEzRhwdu1M3Ci04aMgpmdw40-7w',
    accept: 'application/json'
    
  },
  
};
const fetchArticles = async () => {
  const response = await axios
    .get(url, options)
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
  // console.log(response.data.results);
  return response.data.results;
};

export default fetchArticles;


