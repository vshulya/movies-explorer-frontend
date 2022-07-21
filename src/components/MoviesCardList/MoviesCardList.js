import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from "../Preloader/Preloader";

function MoviesCardList({movies, onCardClick, onCardDelete, isLoading}) {


  //const displayMovies = moviesCards?.slice(0, initialCardsCurrent);

  return (
    <div className="movies">
    {isLoading && <Preloader />}
    <ul className="movies__list">
          {movies.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie} 
                />
          ))}
    </ul>
    <button className="movies__button">Ещё</button>
  </div>
  );
}

export default MoviesCardList;
