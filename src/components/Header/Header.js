import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Header(props) {

  return (
    <header className="header">
    
          <div className="header__header">
            <img src={logo} alt="лого" className="logo" />
          </div>
          <nav className="header__menu">
            <p className="header__email">Регистрация</p>
            <Link className="header__link">Войти</Link>
          </nav>
    </header>
  );
}

export default Header;