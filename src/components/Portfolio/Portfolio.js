import React from "react";
import './Portfolio.css';

function Portfolio(props) {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__project"><a className="portfolio__link" href="#">Статичный сайт <span className="portfolio__link-arrow">&#8599;</span></a></li>
        <li className="portfolio__project"><a className="portfolio__link" href="#">Адаптивный сайт <span className="portfolio__link-arrow">&#8599;</span></a></li>
        <li className="portfolio__project"><a className="portfolio__link" href="#">Одностраничное приложение <span className="portfolio__link-arrow">&#8599;</span></a></li>
      </ul>
    </section>
  );
};

export default Portfolio;