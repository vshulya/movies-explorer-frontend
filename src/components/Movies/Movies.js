import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies({onFilterClick, filterIsOn, isNoResult, noResultMessage, movies, savedMovies, onMovieSave, 
  onMovieDelete, isMovieSaved, isLoading, onSubmitSearch, query, setQuery}) {

  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration <= 40);

  return (
    <>
      <SearchForm 
        onFilterClick={onFilterClick} 
        filterIsOn={filterIsOn}
        onSearch={onSubmitSearch} 
        query={query} 
        setQuery={setQuery}/>
      {isLoading &&<Preloader/>}
      {!isLoading && !isNoResult
      && (
      <MoviesCardList 
        savedMovies={savedMovies}
        movies={filterIsOn ? filterShortFilm(movies) : movies}
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
        isMovieSaved={isMovieSaved}
        />)}
      {
        !isLoading
        && isNoResult
        && <div className="movies__error">{noResultMessage}</div>
      }
    </>
  )
};
export default Movies ;