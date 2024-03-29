import React from "react";
import './Portfolio.css';

function Portfolio(props) {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__project"><a href="https://vshulya.github.io/how-to-learn" className="portfolio__link link" target="_blanck" rel="noreferrer">Static website <span className="portfolio__link-arrow">&#8599;</span></a></li>
        <li className="portfolio__project"><a href="https://vshulya.github.io/russian-travel" className="portfolio__link link" target="_blanck" rel="noreferrer">Responsive website <span className="portfolio__link-arrow">&#8599;</span></a></li>
        <li className="portfolio__project"><a href="http://140.82.42.116/aroundtheworld" className="portfolio__link link" target="_blanck" rel="noreferrer">Single-page app <span className="portfolio__link-arrow">&#8599;</span></a></li>
      </ul>
    </section>
  );
};

export default Portfolio;