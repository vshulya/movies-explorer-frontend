import React, { useState, useEffect } from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({savedMovies, movies, onMovieDelete, isMovieSaved, isLoading, isNoResult}) {

  const [allSavedMovies, setAllSavedMovies] = useState([]);
  // filter short movies
  const [filterIsOn, setFilterIsOn] = useState(false);
  // search in saved movies
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  useEffect(() => {
    setAllSavedMovies(movies);
    setFilteredSavedMovies(movies);
  }, [movies]);

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
      <SearchForm 
        onFilterClick={onFilterClick}
        onSearch={searchHandler}/>
      {isLoading && <Preloader/>}
      {!isLoading && !isNoResult
      && (
      <MoviesCardList 
        savedMovies={savedMovies}
        moviesInSaved={filterIsOn ? filterShortFilm(filteredSavedMovies) : filteredSavedMovies}
        onMovieDelete={onMovieDelete}
        isMovieSaved={isMovieSaved} />)}
      {!isLoading
        && isNoResult
        && <div className="movies__error">{isNoResult}</div>
      }
  </>
  );
}

export default SavedMovies;