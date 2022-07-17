import React from "react";
import './Promo.css';
import globus from '../../images/globus.png';
import { Link } from "react-router-dom";

function Promo(props) {

  return (
    <section className="promo">
          <div className="promo__wrapper">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <Link className="promo__button button" to="#project">Узнать больше</Link>
          </div>
          <img src={globus} alt="глобус" className="promo__hero" />     
    </section>
  );
}

export default Promo;