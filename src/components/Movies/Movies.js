import React from 'react';
//import Preloader from '../Preloader/Preloader';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function Movies() {
  return (
    <>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </>
  )
};
export default Movies ;