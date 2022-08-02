import React from "react";
import './AboutMe.css';
import me from '../../images/me.jpeg';

function AboutMe(props) {

  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__content">
        <div className="aboutMe__info">
          <h3 className="aboutMe__subtitle">Валентина</h3>
          <p className="aboutMe__caption">Фронтенд-разработчик, 34 года</p>
          <p className="aboutMe__text">В 2019 году я переехала в США, и мне пришлось оставить работу в офисе в России. У меня появилось больше свободного времеми. И я решила посвятить его тому, что мне действительно интересно. 
Мы с маленькой командой стали заниматься созданием многопользовательской игры на Unreal Engine. Я выступала в роли прожект-менеджера, и заодно занималась environmental дизайном.
Так я попала в мир кода. Со временем я решила углубиться в изучение кода и поступила на курс Веб-разработчика от Яндекс.Практикум.
Под руководством менторов и ревьюеров Я.Практикум я создала несколько проектов и сейчас продолжаю самостоятельное изучение разработки.
В свободное от написание кода время я люблю играть в компьютерные игры, пытаться создавать компьютерные игры, недавно начала заниматься серфингом.</p>
          <ul className="aboutMe__links">
            <li><a className="aboutMe__link link" href="https://www.facebook.com/valentina.shulagina" target="_blanck" rel="noreferrer">Facebook</a></li>
            <li><a className="aboutMe__link link" href="https://github.com/vshulya" target="_blanck" rel="noreferrer">Github</a></li>
          </ul>   
        </div>
          <img src={me} alt="Моя фотография" className="aboutMe__pic" />
      </div>
    </section>
  );
};

export default AboutMe;