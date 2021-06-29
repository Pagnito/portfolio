import React from "react";
import "./projects.scss";

const Project = () => {
  let height = window.innerHeight * .6;

  return (
    <section id="project-section">
      <div style={{height: height}} id="projects-mission-statement-board">
        <div id="projects-mission-statement">
          <div id="projects-mission-cool-line"></div>I believe in making an impact on people via smooth and beautiful experience.
        </div>
        {/* <div id="projects-mission-circles-container">
          <div id="projects-mission-cool-circle-1"></div>
          <div id="projects-mission-cool-circle-2"></div>
          <div id="projects-mission-cool-circle-3"></div>
        </div> */}
      </div>
      <div id="project-container"></div>
      <div id="project-container"></div>
    </section>
  );
};
export default Project;
