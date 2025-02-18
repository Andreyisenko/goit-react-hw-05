import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorsUserById } from '../../services/api';

const MovieCast = () => {
  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await fetchActorsUserById(movieId);
        setActors(data);
      } catch (error) {
        console.log(error);
        
      }
      // console.log(data);
    };
    getData();
  }, [movieId]);
  // console.log(actors);

  return (
    <div>
      MovieCast:
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />

            {/* <img
              src={
                movieData.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            /> */}

            <p>Character: {actor.character}</p>
            <p>Name: {actor.original_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
