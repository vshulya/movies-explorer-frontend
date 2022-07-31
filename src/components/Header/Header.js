import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';


function Header({loggedIn, userEmail}) {

  return (
    <>
      {(loggedIn) ? (<Navigation userEmail={userEmail}/>) : (
        <>
          <header className="header">
            <Logo />
            <nav className="header__menu">
              <Link className="header__email link" to="/signup">Регистрация</Link>
              <Link className="header__link link" to="/signin">Войти</Link>
            </nav>
          </header>
        </>)}
      </>
  );
}

export default Header;
