import React from "react";
import './Techs.css';

function Techs(props) {

  return (
    <section className="techs">
      <h2 className="techs__title">Stack</h2>
      <h3 className="techs__subtitle">7 technologies</h3>
      <p className="techs__text">Stack used for the project</p>
       
      <div className="techs__techs">
        <div className="techs__tech">HTML</div>
        <div className="techs__tech">CSS</div>
        <div className="techs__tech">JS</div>
        <div className="techs__tech">React</div>
        <div className="techs__tech">Git</div> 
        <div className="techs__tech">Express.js</div>
        <div className="techs__tech">mongoDB</div>
      </div>   
    </section>
  );
};

export default Techs;