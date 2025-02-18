
import css from './MovieList.module.css'

const MovieList = ({movies}) => {
  return (
    <div>
        <ul className={css.list}>
            {movies.map(item=> <li className={css.item} key={item.id}>{item.original_title} <img src={`https://image.tmdb.org/t/p/w500/${item.
backdrop_path}`}></img></li>)}
        </ul>
    </div>
  )
}

export default MovieList