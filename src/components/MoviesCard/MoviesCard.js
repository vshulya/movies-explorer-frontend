import React from "react";
import MoviesCardButton from '../MoviesCardButton/MoviesCardButton'
import MoviesCardButtonDelete from '../MoviesCardButtonDelete/MoviesCardButtonDelete'

import './MoviesCard.css';

function MoviesCard({movie, savedMovies, image, nameRU, trailer, duration, onMovieDelete, onMovieSave, isMovieSaved}) {
  
  
  const isSaved = isMovieSaved(movie);

  const handleSaveMovieClick = (e) => {
    e.preventDefault();
    onMovieSave(movie);
  };

  const handleDeleteMovieClick = () => {
    onMovieDelete(movie);
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
          ? <MoviesCardButtonDelete 
              onClick={handleDeleteMovieClick}/> 
          : <MoviesCardButton 
              isSaved={isSaved}
              onMovieDelete={onMovieDelete}
              onClick={isSaved ? handleDeleteMovieClick : handleSaveMovieClick} />}
      </div>
    </li>
  );
}

export default MoviesCard;
