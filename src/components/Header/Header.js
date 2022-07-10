import React from "react";
import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {

  return (
    <header className="header">
          <div className="header__header">
            <img src={logo} alt="лого" className="logo" />
          </div>
          <nav className="header__menu">
            <a href="#" className="header__email">Регистрация</a>
            <a href="#" className="header__link">Войти</a>
          </nav>
    </header>
  );
}

export default Header;