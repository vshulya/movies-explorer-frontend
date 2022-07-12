import React from "react";
import './MoviesCard.css';
import movie from '../../images/movie_1.png';

function MoviesCard(props) {
  return (
    <li className="movie">
      <img alt="фильм" src={movie} className="movie__image" />
      <div className="movie__description">
        <div className="movie__info">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <p className="movie__duration">1ч42м</p>
        </div>
        <button type="button" className="movie__save-button movie__save-button_saved"></button>
      </div>
    </li>
  );
}

export default MoviesCard;