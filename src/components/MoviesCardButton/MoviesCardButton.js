import React from "react";
import './MoviesCardButton.css';

function MoviesCardButton({ onClick, isSaved }) {

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  //const movieSaveButtonClassName = `button movie__save-button ${isSaved && 'movie__save-button_saved'}`;

  return (
      <button className={!isSaved
        ? 'movie__save-button button'
        : 'movie__save-button button movie__save-button_saved'}
      type="button" 
      onClick={onClick}/>
  );
}

export default MoviesCardButton;