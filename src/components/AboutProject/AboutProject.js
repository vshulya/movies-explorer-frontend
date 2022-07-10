import React from "react";
import './AboutProject.css';

function AboutProject(props) {

  return (
    <section className="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__project">
        <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
        <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
        <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="project__progress-bar">
        <div className="project__frontend">1 неделя</div>
        <div className="project__backend">4 недели</div>
        <p className="project__caption">Back-end</p>
        <p className="project__caption">Front-end</p>
      </div>   
    </section>
  );
};

export default AboutProject;