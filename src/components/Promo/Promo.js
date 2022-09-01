import React from "react";
import './Promo.css';
import globus from '../../images/globus.png';
import { Link } from 'react-scroll';

function Promo(props) {

  return (
    <section className="promo">
          <div className="promo__wrapper">
            <h1 className="promo__title">Student web development project</h1>
            <p className="promo__subtitle">Below you can find more information about the project and me.</p>
            <Link className="promo__button button" 
            to="aboutProject"
            smooth={true}
            duration={1000}>
            More</Link>
          </div>
          <img src={globus} alt="globus" className="promo__hero" />     
    </section>
  );
}

export default Promo;