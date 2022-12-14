import React, { useEffect, createRef } from "react";
import StopTheCap from "./stopthcap/stopthecap";
import "./projects.scss";
import "./projects.css";

const Projects = () => {
  let rendered = false;
  const projects = createRef();
  const missionBoard = createRef();
  const missionBoardHeaght = window.innerHeight * 0.65;
  useEffect(() => {
    if (!rendered) {
      //window.scrollTo(0,0);
      setTimeout(() => {
        if (projects.current !== null) {
          projects.current.style.overflow = "unset";
          rendered = true;
          //missionBoard.current.style.height = missionBoardHeaght + 'px !important';
        }
      }, 1100);
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
        <StopTheCap />
        <div style={{paddingTop: '200px'}}></div>

      </section>
    </div>
  );
};
export default Projects;
