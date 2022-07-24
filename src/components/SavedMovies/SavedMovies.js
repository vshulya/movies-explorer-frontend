import React, { useState } from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
//import Preloader from '../Preloader/Preloader';

function SavedMovies({savedMovies, onMovieClick, isMovieSaved }) {

  const [filterIsOn, setFilterIsOn] = useState(false);

  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration <= 40);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  return (
    <>
      <Navigation/>
      <SearchForm 
        onFilterClick={onFilterClick}/>
      <MoviesCardList 
        savedMovies={filterIsOn ? filterShortFilm(savedMovies) : savedMovies}
        onMovieClick={onMovieClick}
        isMovieSaved={isMovieSaved} />
      <Footer/>
  </>
  );
}

export default SavedMovies;