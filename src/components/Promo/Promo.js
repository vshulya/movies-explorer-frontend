import React from "react";
import './Promo.css';
import globus from '../../images/globus.png';

function Promo(props) {

  return (
    <section className="promo">
          <div className="promo__promo">
            <h1 className="promo__title">Учебный проект студента факультета<br/>Веб-разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <button className="promo__button">Узнать больше</button>
          </div>
          <img src={globus} alt="глобус" className="promo__hero" />
          
    </section>
  );
}

export default Promo;