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
        <button className="hamburger__close-button button" onClick={onClose}/>
          <nav className="hamburger__nav">
            <Link className="hamburger__link link" to="/">Главная</Link>
            <Link className="hamburger__link hamburger__link_active link" to="/signup">Фильмы</Link>
            <Link className="hamburger__link link" to="/signin">Сохранённые фильмы</Link>
          </nav>
          <button className="hamburger__login-button button">Аккаунт</button>
        </div>
    </>
  );
}

export default HamburgerMenuModal;