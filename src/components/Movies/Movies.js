import React, {useEffect, useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies({onFilterClick, filterIsOn, isNoResult, movies, savedMovies, onMovieSave, onMovieDelete, isMovieSaved, isLoading, onSubmitSearch }) {

  //const [filterIsOn, setFilterIsOn] = useState(false);

  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration <= 40);


  // useEffect(() => {
  //   const filterInLocalStorage = localStorage.getItem('filterIsOn');
  //   if(filterInLocalStorage){
  //     setFilterIsOn(filterInLocalStorage);
  //     //localStorage.removeItem('filterIsOn');
  //   }
  //   setFilterIsOn();
  // }, [])

  // useEffect(() => {
  //   const filterLocalStore = localStorage.getItem('filterIsOn');
  //   if(filterLocalStore) {
  //     const filterStatus = localStorage.setItem('filterIsOn', filterIsOn)
  //     setFilterIsOn(filterStatus);
  //   } else {
  //     setFilterIsOn();
  //   }
  // }, [])
  
  return (
    <>
      <SearchForm 
        onFilterClick={onFilterClick} 
        onSearch={onSubmitSearch}/>
      {isLoading &&<Preloader/>}
      {!isLoading && isNoResult === ''
      && (
      <MoviesCardList 
        savedMovies={savedMovies}
        movies={filterIsOn ? filterShortFilm(movies) : movies}
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
        isMovieSaved={isMovieSaved}/>)}
      {
        !isLoading
        && isNoResult !== ''
        && <div className="movies__error">{isNoResult}</div>
      }
    </>
  )
};
export default Movies ;