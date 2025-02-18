import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchActorsUserById } from "../../services/api"

const MovieCast = () => {
  const [actors, setActors] =useState([])
  const {movieId} = useParams()
useEffect(()=> {
  const getData = async ()=>{
    const data = await fetchActorsUserById(movieId)
    setActors(data)
    // console.log(data);
    
  }
  getData()
}, [movieId])


  return (
    <div>MovieCast:
      <ul>
{actors.map(actor => <li key={actor.id}>
  <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.original_name} />
  
<p>Character: {actor.character}</p>
<p>Name: {actor.original_name}</p></li>
)}
      </ul>
    </div>
  )
}

export default MovieCast

