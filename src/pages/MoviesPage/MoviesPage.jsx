// import MovieList from "../../components/MovieList/MovieList";

import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchSearchUser } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  // const [query, setQuery] = useState('');
  const [datA, setDatA] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
const movi = searchParams.get("query")
console.log(movi);

  useEffect(() => {
    if (!movi) return;
    const getData = async () => {
      try {
        const data = await fetchSearchUser(movi);
        // setQuery(query);
        console.log(data);
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
    // setQuery(value);
    setSearchParams({query: value})
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
