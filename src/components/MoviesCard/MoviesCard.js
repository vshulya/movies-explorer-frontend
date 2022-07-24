import React from "react";
import MoviesCardButton from '../MoviesCardButton/MoviesCardButton'

import './MoviesCard.css';

function MoviesCard({ movie, savedMovies, image, nameRU, trailer, duration, onMovieClick, isMovieSaved}) {

  const isSaved = isMovieSaved(movie);

  const handleMovieClick = (e) => {
    e.preventDefault();
    console.log('меня нажали')
    onMovieClick(movie, !isSaved);
  };

  const removeHandler = () => {
    console.log('меня нажали')
    onMovieClick(movie, false);
  };

  return (
    <li className="movie">
      <a
      className="movie__image-link"
      href={trailer}
      target="_blank" rel="noreferrer">
        <img
      alt={`Фотография к фильму ${nameRU}`} 
      src={image} 
      className="movie__image"/>
      </a>
      
      <div className="movie__description">
        <div className="movie__info">
          <h2 className="movie__title">{nameRU}</h2>
          <p className="movie__duration">{duration}</p>
        </div>
        {savedMovies
          ? <MoviesCardButton 
              onClick={removeHandler}
              isMovieSaved={isMovieSaved} /> 
          : <MoviesCardButton 
              isMovieSaved={isMovieSaved} 
              onClick={handleMovieClick} />}
      </div>
    </li>
  );
}

export default MoviesCard;
