import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchUsers } from '../../services/api';

const HomePage = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUsers();
        setmovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(movies);
  
  return (
    <div>
      <h2>Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
