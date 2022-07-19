import React from "react";
import './Header.css';
import Logo from '../Logo/Logo';
import { Link } from "react-router-dom";

function Header(props) {

  return (
    <header className="header">
          <Logo />
          <nav className="header__menu">
            <Link className="header__email link" to="/signup">Регистрация</Link>
            <Link className="header__link link" to="/signin">Войти</Link>
          </nav>
    </header>
  );
}

export default Header;
