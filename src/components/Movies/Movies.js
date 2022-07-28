import React, {useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Preloader from '../Preloader/Preloader';

function Movies({isNoResult, movies, savedMovies, onMovieSave, onMovieDelete, isMovieSaved, isLoading, onSubmitSearch }) {

  const [filterIsOn, setFilterIsOn] = useState(false);

  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration <= 40);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };
  if(isNoResult) 
    {
    return (
      <span>Aint no results here.</span> 
    )
  }
  return (
    <>
      <Navigation/>
      <SearchForm 
      onFilterClick={onFilterClick} 
      onSearch={onSubmitSearch}/>
      {isLoading &&<Preloader/>}
      <MoviesCardList 
        savedMovies={savedMovies}
        movies={filterIsOn ? filterShortFilm(movies) : movies}
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
        isMovieSaved={isMovieSaved}/>
      <Footer/>
    </>
  )
};
export default Movies ;