import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsUserById } from '../../services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await fetchPostsUserById(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
      // console.log(data);
      // console.log(reviews);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      MovieReviews:
      <ul>
        {reviews.map(item => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
