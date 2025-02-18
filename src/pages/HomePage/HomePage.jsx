import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import {fetchUsers} from '../../services/api';

const HomePage = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setmovies(data)
    };
    getData()
  }, []);
  return (
    <div>
      <h2>Movies</h2>
      <MovieList movies={movies}/>
    </div>
  );
};

export default HomePage;
