import React, { useEffect, useState } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Preloader from '../Preloader/Preloader';



function Movies({movies, isLoading}) {

  return (
    <>
      <Navigation/>
      <SearchForm />
      {isLoading && <Preloader />}
      <MoviesCardList 
      movies={movies} />
      <Footer/>
    </>
  )
};
export default Movies ;