import React from "react";
import './AboutMe.css';
import me from '../../images/me.jpeg';

function AboutMe(props) {

  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__contect">
        <div className="aboutMe__info">
          <h3 className="aboutMe__subtitle">Валентина</h3>
          <p className="aboutMe__caption">Фронтенд-разработчик, 34 года</p>
          <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="aboutMe__links">
            <li><a className="aboutMe__link" href="#">Facebook</a></li>
            <li><a className="aboutMe__link" href="#">Github</a></li>
          </ul>   
        </div>
          <img src={me} alt="Моя фотография" className="aboutMe__pic" />
      </div>
    </section>
  );
};

export default AboutMe;