import React from "react";
import './MoviesCardButton.css';

function MoviesCardButton({ onClick, isSaved }) {

  return (
      <button className={!isSaved
        ? 'movie__save-button button'
        : 'movie__save-button_saved movie__save-button button movie__save-button_saved'}
      type="button" 
      onClick={onClick}/>
  );
}

export default MoviesCardButton;