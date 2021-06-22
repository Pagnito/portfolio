import React, { useEffect } from "react";
import "./solutions.scss";

const Solutions = ({reference}) => {
  
  return (
    <section ref={reference} id="solutions-section">
      <div id="solutions-section-content">
        <div id="video-container-1">
          <video id="video-1" autoPlay muted loop>
            <source src="/assets/tech.mp4" type="video/mp4" autoPlay />
          </video>
        </div>
        <div id="solutions-section-middle-line"></div>

        <section id="solutions-text">
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
      </div>
    </section>
  );
};
export default Solutions;
