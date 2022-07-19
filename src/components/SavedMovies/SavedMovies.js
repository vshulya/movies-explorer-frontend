import React from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {

  return (
    <>
    <SearchForm />
    {/* <Preloader /> */}
    <MoviesCardList />
  </>
  );
}

export default SavedMovies;