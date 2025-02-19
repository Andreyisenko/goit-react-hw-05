import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchSearchUser } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';
const MoviesPage = () => {
  const [datA, setDatA] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movi = searchParams.get('query') ?? '';

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSearchUser(movi);
        setDatA(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movi]);
  const filterData = datA.filter(item =>
    item.title.toLowerCase().includes(movi.toLowerCase())
  );
  const handleChangeQuery = value => {
    setSearchParams({ query: value });
  };
  return (
    <div>
      <h2 className={css.title}>Movies Page Search</h2>

      <SearchBar handleChangeQuery={handleChangeQuery} />
      {<MovieList movies={filterData} />}
    </div>
  );
};

export default MoviesPage;
