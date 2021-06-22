import React, { useEffect } from "react";
import "./about.scss";

const About = () => {
  
  return (
    <section id="about-section">
      <div id="about-section-content">
        <div id="video-container-1">
          <video id="video-1" autoPlay muted loop>
            <source src="/assets/tech.mp4" type="video/mp4" autoPlay />
          </video>
        </div>
        <div id="about-section-middle-line"></div>

        <section id="solution-text">
          <div className="words word-1">
            <span>S</span>
            <span>O</span>
            <span>L</span>
            <span>U</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
            <span>S</span>
          </div>
        </section>
        <img src="/assets/scroll-icon.svg" id="scroll-icon" />
      </div>
    </section>
  );
};
export default About;
