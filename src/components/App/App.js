import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
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
  const [noResultMessage, setNoResultMessage]= useState('');
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [profileMessage, setProfileMessage] = useState('');

  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  // short movie filter checkbox
  const [filterIsOn, setFilterIsOn] = useState(false);
  //search word
  const [query, setQuery]= useState('');
  //result after search word
  const [filteredMovies, setFilteredMovies] = useState([]);

  const navigate = useNavigate();

  const isMovieSaved = (movie) => savedMovies.some(sm => {
    return sm.id === movie.id
  });


  //chech token when mount the app
  useEffect(() => {
    tokenCheck();
  }, []);

  // function rememberOldSearchSettingsFromLocalStorage() {
  //   const lsQuery = localStorage.getItem("searchQuery");
  //   const lsFilterIsOn = localStorage.getItem("filterIsOn");
  //   const lsFilteredMovies = localStorage.getItem("filteredMovies");
  //   if(lsQuery) setQuery(lsQuery);
  //   if(lsFilterIsOn) setFilterIsOn(lsFilterIsOn);
  //   if(lsFilteredMovies) setAllMovies(lsFilteredMovies);
  // };

  useEffect(() => {
    if (loggedIn) {
      //rememberOldSearchSettingsFromLocalStorage();
      setIsLoading(true)
      Promise.all([
        mainApi.getProfile(localStorage.getItem('jwt')),
        mainApi.getSavedMovies()
      ])
      .then(([userData, movies]) => {
        getAllMovies();
        setCurrentUser(userData);
        setSavedMovies(movies.Movies);
        localStorage.setItem('savedMovies', JSON.stringify(movies.Movies));
        setTimeout(() => setIsLoading(false), 1000);
    })} else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      mainApi
        .getContent(jwt)
        .then((res) => {
          if (res) {
            switchToLoggedIn(res.email);
          }
        })
    }  
  }
    const switchToLoggedIn = (name, email) => {
      setLoggedIn(true);
      setUserEmail(email);
      setUserName(name);
      navigate("/movies");
      return loggedIn;
    };

    const handleLogin = ({email, password}) => {
      setIsLoading(true);
      setLoginError('');
      return mainApi
        .authorize(email, password)
        .then((data) => {
          setLoginError('');
          if (!data.token) {
            return
          } else {localStorage.setItem('jwt', data.token);
          switchToLoggedIn(email);
            }
        })
        .catch(() => {
          setIsLoading(false);
          setLoginError('Неверные email или пароль');
        })
    };

    // Setting up token operation
  const handleRegister = ({email, password, name}) => {
    setRegistrationError('');
    setIsLoading(true);
    return mainApi
      .register(email, password, name)
      .then((res) => {
        setRegistrationError('');
        setCurrentUser(res);
        setIsLoading(false);
        setTimeout(() => handleLogin({email, password}), 1000);
      })
      .catch(() => {
        setIsLoading(false);
        setRegistrationError('Что-то пошло не так...');
      })
  };

  const handleUpdateUser = ({ name, email }) => {
    setProfileMessage('');
    mainApi
      .editProfile(name, email)
      .then((res) => {
        setCurrentUser(res);
        setProfileMessage('Профиль успешно обновлен!');
        setIsSuccess(true);
        setTimeout(() => {
          setProfileMessage('');
        }, 2000);
      })
      .catch((err) => {
        console.log(err)
        setIsSuccess(false);
        setProfileMessage('Что-то пошло не так...');
        setTimeout(() => {
          setProfileMessage('');
        }, 2000);
      });
  }

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('currentUser');
    setCurrentUser({});
    setUserName('');
    setUserEmail('');
    setQuery('');
    setLoggedIn(false);
    localStorage.removeItem('allMovies');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('filterIsOn');
    localStorage.removeItem('savedMovies');
    setAllMovies([]);
    setSavedMovies([]);
    setFilteredMovies([]);
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

  // //grab saved movies from MainApi
  // const fetchSavedMovies = () => {
  //   mainApi
  //   .getSavedMovies()
  //   .then((movies) => {
  //     debugger;
  //     setSavedMovies(movies.Movies);
  //     localStorage.setItem('savedMovies', JSON.stringify(movies.Movies))
  //   })
  //   .catch((err) => console.log(err))
  // };

  const getAllMovies = () => {
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
  };

  // const getSavedMovies = () => {
  //   //check if a movie in localStorage
  //   const localSavedMovies = localStorage.getItem('savedMovies');
  //   if(localSavedMovies){
  //     try {
  //       const parsedMovies = (JSON.parse(localSavedMovies))
  //       setSavedMovies(parsedMovies)
  //     //if there is an error we clean localStorage and take movies from API
  //     } catch(err) {
  //       localStorage.removeItem('savedMovies');
  //       setIsLoadingError('Во время запроса произошла ошибка. '
  //       + 'Возможно, проблема с соединением или сервер недоступен. '
  //       + 'Подождите немного и попробуйте ещё раз');
  //       fetchSavedMovies();
  //     }
  //   } else {
  //     fetchSavedMovies();
  //   }
  // };

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      const filterData = data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
        if (filterData.length === 0) {
          setIsNoResult(true);
          setNoResultMessage('Ничего не найдено')
        } else {
          setIsNoResult(false);
          setNoResultMessage('')
        }
      return filterData;
    }
    return [];
  };

  const searchHandler = (searchQuery) => {
      //setIsLoading(true);
      setQuery(searchQuery);


      //when we search, first save the last query params.
      if(searchQuery) localStorage.setItem('searchQuery',  (searchQuery) );
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));

      if (!localStorage.getItem("allMovies")){
        getAllMovies();
        const filteredMovies = searchFilter(allMovies, searchQuery);
        setFilteredMovies(filteredMovies);
        //setIsLoading(false);
      } else {
        const filteredMoviesFromLocalStorage = searchFilter(JSON.parse(localStorage.getItem('allMovies')), searchQuery);
        setFilteredMovies(filteredMoviesFromLocalStorage);
      }     
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

  const onFilterClick = () => {
    localStorage.setItem('filterIsOn', 'true');
    setFilterIsOn(!filterIsOn);
  };

  

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
        <Routes>
          <Route 
            exact path='/' 
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  email={userEmail}/>
                <Main />
                <Footer/>
              </>
            }>
          </Route>
          <Route 
            exact path='/movies' 
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    loggedIn={loggedIn}
                    accauntEmail={userEmail}/>
                  <Movies
                  onFilterClick={onFilterClick}
                  filterIsOn={filterIsOn}
                  userEmail={userEmail}
                  loggedIn={loggedIn}
                  movies={filteredMovies}
                  savedMovies={false}
                  onMovieSave={handleMovieSave}
                  onMovieDelete={handleMovieDelete}
                  isMovieSaved={isMovieSaved} 
                  onSubmitSearch={searchHandler}
                  isLoading={isLoading}
                  isNoResult={isNoResult}
                  noResultMessage={noResultMessage}
                  query={query}
                  setQuery={setQuery}/>
                  <Footer/>
                </>
              </ProtectedRoute>
            }>
          </Route>
          <Route 
            exact path='/saved-movies' 
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                <Header
                    loggedIn={loggedIn}
                    accauntEmail={userEmail}/>
                  <SavedMovies 
                  searchFilter={searchFilter}
                  userEmail={userEmail}
                  loggedIn={loggedIn}
                  savedMovies
                  movies={savedMovies}
                  onMovieDelete={handleMovieDelete}
                  isMovieSaved={isMovieSaved} 
                  isLoading={isLoading}
                  isNoResult={isNoResult}
                  noResultMessage={noResultMessage}/>
                  <Footer/>
                </>
              </ProtectedRoute>
            }>
          </Route>
          <Route 
            exact path='/profile' 
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    loggedIn={loggedIn}
                    accauntEmail={userEmail}/>
                  <Profile 
                    profileMessage={profileMessage}
                    isSuccess={isSuccess}
                    isLoading={isLoading}
                    userEmail={userEmail}
                    loggedIn={loggedIn}
                    onUpdateUser={handleUpdateUser}
                    onLogOut={handleSignOut}/>
                </>
              </ProtectedRoute>
            }>
          </Route>
          <Route 
            exact path='/signup' 
            element={
              <>
                <Register 
                handleRegister={handleRegister}
                isLoading={isLoading}
                registrationError={registrationError}/>
              </>
            }>
          </Route>
          <Route 
            exact path='/signin' 
            element={
              <>
                <Login 
                  handleLogin={handleLogin}
                  loginError={loginError}/>
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