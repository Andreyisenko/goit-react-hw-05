import { useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchUserById } from '../../services/api';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? '/movies');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUserById(movieId);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  if (!movies) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <NavLink className={css.navlinK} to={goBackUrl.current}>
        {`<<  GO BACK`}
      </NavLink>
      <h2 className={css.title}>{movies.title}</h2>
      <p className={css.text}>Vote average:{movies.vote_average}</p>
      <img
        className={css.imge}
        src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
        alt={movies.title}
      />
      <p className={css.text}>Overview: {movies.overview}</p>
      <nav className={css.linkNav}>
        <NavLink className={buildLinkClass} to="cast">
          Cast
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
