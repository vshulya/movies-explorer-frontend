import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';


function Header({loggedIn, accauntEmail}) {

  return (
    <>
      {(loggedIn) ? (<Navigation accauntEmail={accauntEmail}/>) : (
        <>
          <header className="header">
            <Logo />
            <nav className="header__menu">
              <Link className="header__email link" to="/signup">Sign up</Link>
              <Link className="header__link link" to="/signin">Sign in</Link>
            </nav>
          </header>
        </>)}
      </>
  );
}

export default Header;
