import React, { useState, useEffect } from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Preloader from '../Preloader/Preloader';

function SavedMovies({savedMovies, movies, onMovieDelete, isMovieSaved, isLoading}) {

  // filter short movies
  const [filterIsOn, setFilterIsOn] = useState(false);
  // search in saved movies
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  useEffect(() => {
    setFilteredSavedMovies(movies);
  }, [savedMovies]);

  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration <= 40);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      return data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
    }
    return [];
  };

  const searchHandler = (searchQuery) => {
    setFilteredSavedMovies(searchFilter(movies, searchQuery));
  };

  return (
    <>
      <Navigation/>
      <SearchForm 
        onFilterClick={onFilterClick}
        onSearch={searchHandler}/>
        {isLoading &&<Preloader/>}
      <MoviesCardList 
        savedMovies={savedMovies}
        moviesInSaved={filterIsOn ? filterShortFilm(filteredSavedMovies) : filteredSavedMovies}
        onMovieDelete={onMovieDelete}
        isMovieSaved={isMovieSaved} />
      <Footer/>
  </>
  );
}

export default SavedMovies;