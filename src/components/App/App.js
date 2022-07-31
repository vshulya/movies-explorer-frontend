import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);

  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [query, setQuery]= useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  const navigate = useNavigate();

  const isMovieSaved = (movie) => savedMovies.some(sm => {
    return sm.id === movie.id
  });

    // Setting up token operation
    const handleRegister = (email, password, name) => {
      return mainApi
        .register(email, password, name)
        .then(() => {
          isLoading(true);
          navigate("/signin")
        })
        .catch(() => {
          isLoading(false);
        })
    };

    const switchToLoggedIn = (email) => {
      setLoggedIn(true);
      setUserEmail(email);
      navigate("/movies");
      return loggedIn
    };

    const handleLogin = (email, password) => {
      return mainApi
        .authorize(email, password)
        .then((data) => {
          if (!data.token) {
            return
          } else {localStorage.setItem('jwt', data.token);
          switchToLoggedIn(email);
            }
        })
        .catch(() => {
        })
    };
  


  //grab all movies from MovieApi
  const fetchMovies = () => {
    moviesApi
    .getMovies()
    .then((movies) => {
      setAllMovies(movies);
      localStorage.setItem('allMovies', JSON.stringify(movies))
    })
    .catch(err => console.log(err));
  };

  //grab saved movies from MainApi
  const fetchSavedMovies = () => {
    mainApi
    .getSavedMovies()
    .then((movies) => {
      setSavedMovies(movies.Movies);
      localStorage.setItem('savedMovies', JSON.stringify(movies))
    })
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    //check if a movie in localStorage
    const localMovies = localStorage.getItem('allMovies');
    if(localMovies){
      try {
        const parsedMovies = (JSON.parse(localMovies))
        setAllMovies(parsedMovies)
      //if there is an error we clean localStorage and take movies from API
      } catch(err) {
        localStorage.removeItem('allMovies');
        setIsLoadingError('Во время запроса произошла ошибка. '
        + 'Возможно, проблема с соединением или сервер недоступен. '
        + 'Подождите немного и попробуйте ещё раз');
        fetchMovies();
      }
    } else {
      fetchMovies();
    }
  }, []);

  useEffect(() => {
    //check if a movie in localStorage
    const localSavedMovies = localStorage.getItem('savedMovies');
    if(localSavedMovies){
      try {
        const parsedMovies = (JSON.parse(localSavedMovies))
        setSavedMovies(parsedMovies)
      //if there is an error we clean localStorage and take movies from API
      } catch(err) {
        localStorage.removeItem('savedMovies');
        setIsLoadingError('Во время запроса произошла ошибка. '
        + 'Возможно, проблема с соединением или сервер недоступен. '
        + 'Подождите немного и попробуйте ещё раз');
        fetchSavedMovies();
      }
    } else {
      fetchSavedMovies();
    }
  }, []);

  // useEffect(() => {
  //   getAllMovies();
  //   getSavedMovies();
  // }, []);


  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      const filterData = data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
        if (filterData.length === 0) {
          setIsNoResult('Ничего не найдено');
        } else {
          localStorage.setItem('searchQuery', JSON.stringify(searchQuery))
          setFilteredMovies(JSON.parse(localStorage.getItem('searchQuery')));
          setIsNoResult('');
      }
      return filterData;
    }
    return [];
  };

  const searchHandler = (searchQuery) => {
    setIsLoading(true);
    setTimeout(() => {
      setQuery(searchQuery);
      setFilteredMovies(searchFilter(allMovies, searchQuery));
      setIsLoading(false);
    }, 600);
  };


  //saved movie
  const handleMovieSave = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        const updatedSavedMovies = [...savedMovies, { ...res, id: res.movieId }];
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
      })
      .catch(err => console.log(err));
  };
 
  //delete movies
  const  handleMovieDelete = (movie) => {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;
      mainApi
        .deleteMovie(movieId)
        .then(() => {
          const updatedSavedMovies = savedMovies.filter(m => m._id !== movieId)
          setSavedMovies(updatedSavedMovies);
          localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
        })
        .catch(err => console.log(err))
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
        <Routes>
          <Route 
              exact path='/' 
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    loggedIn={loggedIn}/>
                  <Main />
                  <Footer/>
                </>
                </ProtectedRoute>
            }>
          </Route>
          <Route 
            exact path='/movies' 
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Movies
                  loggedIn={loggedIn}
                  movies={filteredMovies}
                  savedMovies={false}
                  onMovieSave={handleMovieSave}
                  onMovieDelete={handleMovieDelete}
                  isMovieSaved={isMovieSaved} 
                  onSubmitSearch={searchHandler}
                  isLoading={isLoading}
                  isNoResult={isNoResult}/>
                </>
              </ProtectedRoute>
            }>
          </Route>
          <Route 
            exact path='/saved-movies' 
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <SavedMovies 
                  loggedIn={loggedIn}
                  savedMovies
                  movies={savedMovies}
                  onMovieDelete={handleMovieDelete}
                  isMovieSaved={isMovieSaved} 
                  isLoading={isLoading}
                  isNoResult={isNoResult}/>
                </>
              </ProtectedRoute>
            }>
          </Route>
          <Route 
            exact path='/profile' 
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Profile 
                  loggedIn={loggedIn}/>
                </>
              </ProtectedRoute>
            }>
          </Route>
          <Route 
            exact path='/signup' 
            element={
              <>
                <Register 
                handleRegister={handleRegister}/>
              </>
            }>
          </Route>
          <Route 
            exact path='/signin' 
            element={
              <>
                <Login 
                  handleLogin={handleLogin}/>
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
    </div>
    </CurrentUserContext.Provider>
  );
}
export default App;