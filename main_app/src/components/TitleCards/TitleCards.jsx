import React, { useRef, useEffect, useState } from 'react'
import './TitleCards.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  console.log(category)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTVmYTU1Y2JhNjA3MmVhOWE0ZTllM2RhOThhYWQyNCIsIm5iZiI6MTczMzU3NjY1MS4xOTcsInN1YiI6IjY3NTQ0N2NiMmFiODdiZGFiY2NlNDI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SAnr2qGe7gjuRwFfI3ZHNXZNYTEeDLqH-kYTLYrYUGc'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    const currentRef =  cardsRef.current;

    currentRef.addEventListener('wheel', handleWheel);

    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel); // Cleanup listener safely
      } else {
        console.log('No ref found during cleanup');
      }
    };
  }, [])

  return (
    <div className='title-cards'>
        <h2>{title ? title : 'Popular Netflix'}</h2>
        <div className="card-list" ref={cardsRef}>
            {apiData.map((card, index) => {
              return <Link to={`/player/${card.id}`} className='card' key={index}>
                  <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="card" />
                  <p>{card.original_title}</p>
              </Link>
            })}
        </div>
    </div>
  )
}

TitleCards.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string
}

export default TitleCards
