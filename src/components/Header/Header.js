import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';


function Header(props) {

 const loggedIn = props.loggedIn;

  return (
    <header className="header">
      {(!loggedIn) ? (
        <>
          <Logo />
          <nav className="header__menu">
            <Link className="header__email link" to="/signup">Регистрация</Link>
            <Link className="header__link link" to="/signin">Войти</Link>
          </nav>
        </>) : (<Navigation />)}
    </header>
  );
}

export default Header;
