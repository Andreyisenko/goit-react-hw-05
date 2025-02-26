import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const defaultImg =
  'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        {movies.map(item => (
          <li className={css.item} key={item.id}>
            <Link to={`/movies/${item.id}`} state={location}>
              <p className={css.text}>{item.original_title}</p>
              <img
                className={css.imge}
                src={
                  item.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                    : defaultImg
                }
                alt="poster"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
