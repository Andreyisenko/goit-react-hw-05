// import { NavLink, Outlet } from 'react-router-dom';
// import MovieCast from '../../components/MovieCast/MovieCast';
// import MovieReviews from '../../components/MovieReviews/MovieReviews';

import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate()

  const [movies, setMovies] = useState(null);
  // console.log(movieId);
  const location =useLocation()
  const goBackUrl = useRef(location?.state ?? '/movies')
  
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
      {/* <button onClick={()=> navigate(-1)}> {`<  GO BACK`} </button> */}
      <Link to={goBackUrl.current}> {`<<  GO BACK`}</Link>
      {/* <Link to={location.state}>GO BACK 2</Link> */}
      <h2>{movies.title}</h2>
      <p>Vote average:{movies.vote_average}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
        alt={movies.title}
      />
      <p>Overview: {movies.overview}</p>
      <nav className={css.linkNav}>
        <NavLink className={buildLinkClass} to="cast">
          Cast
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />

      {/* <MovieCast />
      <MovieReviews /> */}

      {/* <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews"> Reviews</NavLink>
      </nav>
      <Outlet /> */}
    </div>
  );
};

export default MovieDetailsPage;
