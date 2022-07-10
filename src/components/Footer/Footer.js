import React from "react";
import './Footer.css';

function Footer(props) {

  return (
    <footer className="footer">
          <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <nav className="footer__menu">
            <p className="footer__copyright">&copy; 2021</p>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Яндекс.Практикум</a></li>
              <li><a href="#" className="footer__link">Github</a></li>
              <li><a href="#" className="footer__link">Facebook</a></li>
            </ul>
          </nav>
    </footer>
  );
}

export default Footer;