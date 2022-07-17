import React from "react";
import './Navigation.css';
import Logo from '../Logo/Logo';
import { Link } from "react-router-dom";
import HamburgerMenuModal from '../HamburgerMenuModal/HamburgerMenuModal'

function Navigation(props) {

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);

  const openHamburgerMenu = () => {
    setIsHamburgerMenuOpen(true);
  }

  const closeHamburgerMenu = () => {
    setIsHamburgerMenuOpen(false);
  }

  //close by esc
  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeHamburgerMenu();
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  //close by click on layover
  React.useEffect(() => {
    const closeByClick = (e) => {
      if (e.target.classList.contains('hamburgerMenu')) {
        closeHamburgerMenu();
      }
      e.stopPropagation()
    }
    document.addEventListener('click', closeByClick)
    return () => document.removeEventListener('click', closeByClick)
    }, [])

  return (
    <>
      <div className="nav">
            <div className="nav__wrapper">
              <div className="ham__wrapper">
                <Logo />
                <HamburgerMenuModal 
                  isOpen={isHamburgerMenuOpen}
                  onClick={openHamburgerMenu}
                  onClose={closeHamburgerMenu}
                />
            </div>
            <nav className="nav__menu"> 
              <Link className="nav__link nav__link_active link" to="/movies">Фильмы</Link>
              <Link className="nav__link link" to="/saved-movies">Сохранённые фильмы</Link>
            </nav>
            </div>
            <button className="nav__button button">Аккаунт</button>
      </div>
    </>
  );
}

export default Navigation;