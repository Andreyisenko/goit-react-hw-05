import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchUsers } from '../../services/api';
import css from './HomePage.module.css';
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

  return (
    <div>
      <h2 className={css.titleMuv}>Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
