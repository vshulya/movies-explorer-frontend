import React, { useState, useEffect } from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({savedMovies, movies, onMovieDelete, isMovieSaved, isLoading, isNoResult, noResultMessage, searchFilter}) {

  const [allSavedMovies, setAllSavedMovies] = useState([]);
  const [query, setQuery] = useState('')
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

  const searchHandler = (searchQuery) => {
    setFilteredSavedMovies(searchFilter(movies, searchQuery));
  };

  return (
    <>
      <SearchForm 
        onFilterClick={onFilterClick}
        onSearch={searchHandler}
        query={query}
        setQuery={setQuery}/>
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
        && <div className="movies__error">{noResultMessage}</div>
      }
  </>
  );
}

export default SavedMovies;