// import { useEffect } from 'react';
// import  fetchArticles  from '../services/api'
// import HomePage from '../pages/HomePage/HomePage';
// import MoviesPage from '../pages/MoviesPage/MoviesPage';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Navigation from './Navigation/Navigation';
// import MovieCast from './MovieCast/MovieCast';
// import MovieReviews from './MovieReviews/MovieReviews';
// import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import { lazy, Suspense } from 'react';

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetchArticles();
  //     console.log(data);
  //   };
  //   getData()

  // }, []);

  return (
    <main>
      <h1>goit-react-hw-05</h1>
      <Navigation />
      <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </main>
  );
}

export default App;
