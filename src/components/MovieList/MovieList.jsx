import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className={css.list}>
        {movies.map(item => (
          <li className={css.item} key={item.id}>
            <Link to={`/movies/${item.id}`}>
              {item.original_title}
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              ></img>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
