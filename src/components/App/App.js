import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
              exact path='/' 
              element={
                <>
                  <Header/>
                  <Main/>
                  <Footer/>
                </>
            }>
          </Route>
          <Route 
            exact path='/movies' 
            element={
              <>
                <Header/>
                <Movies/>
                <Footer/>
            </>
            }>
          </Route>
          <Route 
            exact path='/saved-movies' 
            element={
              <>
                <Header />
                <SavedMovies />
                <Footer />
            </>
            }>
          </Route>
          <Route 
            exact path='/profile' 
            element={
              <>
                <Header />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;