import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const[apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTVmYTU1Y2JhNjA3MmVhOWE0ZTllM2RhOThhYWQyNCIsIm5iZiI6MTczMzU3NjY1MS4xOTcsInN1YiI6IjY3NTQ0N2NiMmFiODdiZGFiY2NlNDI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SAnr2qGe7gjuRwFfI3ZHNXZNYTEeDLqH-kYTLYrYUGc'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])

  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={() => {navigate(-1)} }/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}  width='90%' height='90%' title='video' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
