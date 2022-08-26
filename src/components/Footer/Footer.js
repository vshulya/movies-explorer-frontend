import React from "react";
import './Footer.css';

function Footer(props) {

  return (
    <footer className="footer">
          <p className="footer__title">Student Project via Yandex.Practicum х BeatFilm.</p>
          <nav className="footer__menu">
            <p className="footer__copyright">&copy; 2022</p>
            <ul className="footer__links">
              <li><a href="https://practicum.yandex.ru" className="footer__link link" target="_blanck" rel="noreferrer">Yandex.Practicum</a></li>
              <li><a href="https://github.com/vshulya" className="footer__link link" target="_blanck" rel="noreferrer">Github</a></li>
              <li><a href="https://www.facebook.com/valentina.shulagina" className="footer__link link" target="_blanck" rel="noreferrer">Facebook</a></li>
            </ul>
          </nav>
    </footer>
  );
}

export default Footer;