import React from "react";
import './AboutMe.css';
import me from '../../images/me.jpeg';

function AboutMe(props) {

  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Student</h2>
        <div className="aboutMe__content">
        <div className="aboutMe__info">
          <h3 className="aboutMe__subtitle">Hey there, I'm Valya.</h3>
          <p className="aboutMe__caption">I'm a frontend web developer</p>
          <p className="aboutMe__text">I worked as an account manager in a medium-sized tech company. In 2019 I moved to the United States. I had to leave my office job, but I wanted to continue to work in the tech industry.
With my partner and a small team, we were developing an Unreal-based survival game. I used programmatic blueprints to create procedural animations and landscapes and decided to explore the world of web development. I graduated from Yandex.Practicum bootcamp.
Now I live in Portugal. I'm building and deploying React apps. When I'm not coding, you can find me surfing, hiking, or playing video games.
          </p>
          <ul className="aboutMe__links">
            <li><a className="aboutMe__link link" href="https://www.facebook.com/valentina.shulagina" target="_blanck" rel="noreferrer">Facebook</a></li>
            <li><a className="aboutMe__link link" href="https://github.com/vshulya" target="_blanck" rel="noreferrer">Github</a></li>
          </ul>   
        </div>
          <img src={me} alt="Me" className="aboutMe__pic" />
      </div>
    </section>
  );
};

export default AboutMe;