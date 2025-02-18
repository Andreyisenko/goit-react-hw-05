import axios from 'axios';

// const YOUR_ACCESS_KEY = 'f1c576d1dc2ad930cfb3f5f9b976d5d3';



const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    // Замісь api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWM1NzZkMWRjMmFkOTMwY2ZiM2Y1ZjliOTc2ZDVkMyIsIm5iZiI6MTczOTcxOTIwMy43MTcsInN1YiI6IjY3YjIwMjIzMDlhNDdiNjliOTlmYWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZQQnlqTPk5ufFN7XEzRhwdu1M3Ci04aMgpmdw40-7w',
    accept: 'application/json'
    
  },
  
};
const fetchUsers = async () => {
  const {data} = await axios
    .get(url, options)
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
  console.log(data. results);
  return data. results;
};

export default fetchUsers;


