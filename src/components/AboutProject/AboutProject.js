import React from "react";
import './AboutProject.css';

function AboutProject(props) {

  return (
    <section className="project" id="aboutProject">
      <h2 className="project__title">About Project</h2>
      <div className="project__wrapper">
        <div className="project__block">
          <h3 className="project__subtitle">5 stages of the project</h3>
          <p className="project__text">Setting a plan, implementing backend, page layout, adding functionality and final fixes.</p>
        </div>
        <div className="project__block">
          <h3 className="project__subtitle">5 weeks working on the project</h3>
          <p className="project__text">Each stage had a soft and hard deadlines which needed to be kept in order to submit the project successfully.</p>
        </div>
      </div>
      <div className="project__progress-bar">
        <div className="project__frontend">1 week</div>
        <div className="project__backend">4 weeks</div>
        <p className="project__caption">Back-end</p>
        <p className="project__caption">Front-end</p>
      </div>   
    </section>
  );
};

export default AboutProject;