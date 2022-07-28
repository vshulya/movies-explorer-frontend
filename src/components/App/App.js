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

  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [query, setQuery]= useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  const isMovieSaved = (movie) => savedMovies.some(sm => {
    return sm.id === movie.id
  });


  useEffect(() => {
    setIsLoading(true);
    moviesApi
    .getMovies()
    .then((movies) => {
      setAllMovies(movies);
    })
    mainApi
    .getSavedMovies()
    .then((movies) => {
      setSavedMovies(movies.Movies);
    })
    .catch((err) => console.log(err))
    .finally(() => {
     setIsLoading(false);
    })
  }, []);

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      const filterData = data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
        if (filterData.length === 0) {
          setLoadingError('Ничего не найдено');
        } else {
          setLoadingError('');
      }
      return filterData;
    }
    return [];
  };

  const searchHandler = (searchQuery) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log('Searching for movies')
      setQuery(searchQuery);
      setFilteredMovies(searchFilter(allMovies, searchQuery));
      setIsLoading(false);
    }, 600);
  };

  useEffect(() => {
    setFilteredSavedMovies(searchFilter(savedMovies, query));
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  //saved movie
  const handleMovieSave = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        const updatedSavedMovies = [...savedMovies, { ...res, id: res.movieId }];
        debugger
        setSavedMovies(updatedSavedMovies);
        //localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
      })
      .catch(err => console.log(err));
  };
 
  //delete movies
  const  handleMovieDelete = (movie) => {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;
      mainApi
        .deleteMovie(movieId)
        .then(() => setSavedMovies(state => state.filter(m => m._id !== movieId)))
        .catch(err => console.log(err))
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
                movies={filteredMovies}
                savedMovies={false}
                onMovieSave={handleMovieSave}
                onMovieDelete={handleMovieDelete}
                isMovieSaved={isMovieSaved} 
                onSubmitSearch={searchHandler}
                isLoading={isLoading}
                loadingError={loadingError}/>
              </>
            }>
          </Route>
          <Route 
            exact path='/saved-movies' 
            element={
              <>
                <SavedMovies 
                savedMovies
                movies={savedMovies}
                onMovieDelete={handleMovieDelete}
                isMovieSaved={isMovieSaved} 
                isLoading={isLoading}
                loadingError={loadingError}/>
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