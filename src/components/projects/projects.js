import React, { useEffect, createRef } from "react";
import ProjectVfa from "./project-vfa/project-vfa";
import "./projects.scss";

const Projects = () => {
  let rendered = false;
  const projects = createRef();
  const missionBoard = createRef();
  const missionBoardHeaght = window.innerHeight * .65;
  useEffect(() => {
    if (!rendered) {
      //window.scrollTo(0,0);

      if (projects.current !== null) {
        rendered = true;
        setTimeout(() => {
          projects.current.style.overflow = "unset";
          missionBoard.current.style.height = missionBoardHeaght + 'px !important';
          console.log('too')
        }, 1100);
      }
    }
   
  });


  return (
    <div ref={projects} id="projects-section">
      <section ref={missionBoard} id="projects-mission-statement-board">
        <div id="projects-mission-statement">
          <div id="projects-mission-cool-line"></div>
          <p id="statement" style={{ margin: "0px" }}>
            I believe in making an impact on people via smooth, <span style={{ color: "#ee3153" }}>simple</span> and beautiful experience.
          </p>
        </div>
      </section>
      <div id="projects-intro-ani"></div>
      <section id="projects-projects">
        {/* <ProjectVfa /> */}
      </section>
    </div>
  );
};
export default Projects;
