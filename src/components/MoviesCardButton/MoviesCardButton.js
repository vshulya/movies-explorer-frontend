import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardButton.css';

function MoviesCardButton({ onClick, isMovieSaved }) {

  const location = useLocation();
  const isInAllMovies = location.pathname === '/movies';

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const movieSaveButtonClassName = `button movie__save-button ${isMovieSaved && 'movie__save-button_saved'}`;

  return (
    <>
      {isInAllMovies ? (
      <button className={movieSaveButtonClassName} type="button" onClick={onClick}/>
      ) : (
      <button className='movie__save-button movie__save-button_delete button' type="button" onClick={onClick}/>)}
    </>
  );
}

export default MoviesCardButton;