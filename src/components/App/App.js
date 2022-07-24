import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {

  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const isMovieSaved = (movie) => savedMovies.some(i => i === movie.id);

  useEffect(() => {
    moviesApi
    .getMovies()
    .then((movies) => {
      setAllMovies(movies);
    })
    .catch((err) => console.log(err))
    mainApi
    .getSavedMovies()
    .then((movies) => {
      setSavedMovies(movies.Movies);
    })
    .catch((err) => console.log(err))
  }, []);

  //saved movie
  const handleSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((savedCard) => {
        console.log('savedCard', savedCard)
        const updatedSavedMovies = [...savedMovies, savedCard];
        setSavedMovies(updatedSavedMovies);
        //localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
      })
      .catch(err => console.log(err));
  };
 
  //delete movies
  const  handleMovieDelete = (movie) => {
     if (isMovieSaved) {
      mainApi
       .deleteMovie(movie._id)
       .then(() => setSavedMovies(state => state.filter(m => m._id !== movie._id)))
       .catch(err => console.log(err))
    }
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
              exact path='/' 
              element={
                <>
                  <Header/>
                  <Main />
                  <Footer/>
                </>
            }>
          </Route>
          <Route 
            exact path='/movies' 
            element={
              <>
                <Movies
                allMovies={allMovies}
                savedMovies={false}
                onMovieClick={handleSaveMovie}
                isMovieSaved={isMovieSaved} />
              </>
            }>
          </Route>
          <Route 
            exact path='/saved-movies' 
            element={
              <>
                <SavedMovies 
                savedMovies={savedMovies}
                onMovieClick={handleMovieDelete}
                isMovieSaved={isMovieSaved} />
              </>
            }>
          </Route>
          <Route 
            exact path='/profile' 
            element={
              <>
                <Profile />
              </>
            }>
          </Route>
          <Route 
            exact path='/signup' 
            element={
              <>
                <Register />
              </>
            }>
          </Route>
          <Route 
            exact path='/signin' 
            element={
              <>
                <Login />
              </>
            }>
          </Route>
          <Route 
            exact path='*' 
            element={
              <>
                <NotFoundPage />
              </>
            }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;