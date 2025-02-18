// import MovieList from "../../components/MovieList/MovieList";

import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchSearchUser } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [datA, setDatA] = useState([]);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        const data = await fetchSearchUser(query);
        setQuery(query);
        console.log(data);
        setDatA(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);
  const filterData = datA.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  const handleChangeQuery = value => {
    setQuery(value);
  };
  return (
    <div>
      <h2>MoviesPage Search</h2>

      <SearchBar handleChangeQuery={handleChangeQuery} />
      {<MovieList movies={filterData} />}
    </div>
  );
};

export default MoviesPage;
