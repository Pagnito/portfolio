import React from "react";
import ProjectVfa from './project-vfa/project-vfa';
import "./projects.scss";

const Project = () => {
  let height = window.innerHeight * .6;

  return (
    <div id="project-section">
      <section style={{height: height}} id="projects-mission-statement-board">
        <div id="projects-mission-statement">
          <div id="projects-mission-cool-line"></div>I believe in making an impact on people via smooth, simple and beautiful experience.
        </div>
      
      </section>
      <div id="projects-screen-space-bottom"></div>
      <ProjectVfa />
    
    </div>
  );
};
export default Project;
