import './App.css';
import { Route, Routes } from 'react-router-dom';
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
