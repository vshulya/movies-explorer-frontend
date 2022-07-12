import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;