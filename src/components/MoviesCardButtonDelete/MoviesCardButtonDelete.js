import React from "react";
import './MoviesCardButtonDelete.css';

function MoviesCardButton({ onClick }) {

  return (
    <>
      <button className='movie__save-button movie__save-button_delete button' type="button" onClick={onClick}/>
    </>
  );
}

export default MoviesCardButton;