import React, {useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
//import Preloader from '../Preloader/Preloader';

function Movies({allMovies, savedMovies, onMovieClick, isMovieSaved }) {

  const [filterIsOn, setFilterIsOn] = useState(false);

  const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration <= 40);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  return (
    <>
      <Navigation/>
      <SearchForm 
      onFilterClick={onFilterClick} />
      <MoviesCardList 
        // allMovies={allMovies}
        // savedMovies={savedMovies}
        allMovies={filterIsOn ? filterShortFilm(allMovies) : allMovies}
        onMovieClick={onMovieClick}
        isMovieSaved={isMovieSaved}/>
      <Footer/>
    </>
  )
};
export default Movies ;