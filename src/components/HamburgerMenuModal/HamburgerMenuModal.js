import React from "react";
import './HamburgerMenuModal.css';
import { Link } from "react-router-dom";

function HamburgerMenuModal({onClick, isOpen, onClose}) {

  const burgerMenuButtonClassName = `hamburger__button ${isOpen ? 'hamburger__button_hidden' : 'hamburger__button'}`;

  const burgerMenuClassName = `hamburger__menu ${isOpen ? 'hamburger__menu_active' : null}`;

  return (
    <>
      <button className={burgerMenuButtonClassName}
        onClick={onClick} 
      />
        <div className={burgerMenuClassName}> 
        <button className="hamburger__close-button" onClick={onClose}/>
          <nav className="hamburger__nav">
            <Link className="hamburger__link" to="/" onClick={onClose}>Main</Link>
            <Link className="hamburger__link hamburger__link_active" to="/movies" onClick={onClose}>Movies</Link>
            <Link className="hamburger__link" to="/saved-movies" onClick={onClose}>Saved movies</Link>
          </nav>
          <Link className="hamburger__login-button button" to="/profile" onClick={onClose}>Profile</Link>
        </div>
    </>
  );
}

export default HamburgerMenuModal;