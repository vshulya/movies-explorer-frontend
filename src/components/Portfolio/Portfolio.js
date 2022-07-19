import React from "react";
import './Portfolio.css';

function Portfolio(props) {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__project"><a href="https://vshulya.github.io/how-to-learn" className="portfolio__link link" target="_blanck" rel="noreferrer">Статичный сайт <span className="portfolio__link-arrow">&#8599;</span></a></li>
        <li className="portfolio__project"><a href="https://vshulya.github.io/russian-travel" className="portfolio__link link" target="_blanck" rel="noreferrer">Адаптивный сайт <span className="portfolio__link-arrow">&#8599;</span></a></li>
        <li className="portfolio__project"><a href="https://mesto.nomoreparties.sbs" className="portfolio__link link" target="_blanck" rel="noreferrer">Одностраничное приложение <span className="portfolio__link-arrow">&#8599;</span></a></li>
      </ul>
    </section>
  );
};

export default Portfolio;