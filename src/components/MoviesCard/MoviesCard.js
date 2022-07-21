import React from "react";
import './MoviesCard.css';

function MoviesCard({ movie, onCardDelete}) {

  const {
    nameRU, duration, trailer, image,
  } = movie;

   function handleDeleteClick() {
     onCardDelete(movie);
   }

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
        <button type="button" 
        className="movie__save-button movie__save-button_saved movie__save-button_delete button"
        onClick={handleDeleteClick}></button>
      </div>
    </li>
  );
}

export default MoviesCard;
