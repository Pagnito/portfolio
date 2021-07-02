import React, { useEffect } from "react";
//import "./about.scss";
import "./about.css";

const About = () => {
  const about = React.createRef();
  let rendered=false;
  useEffect(() => {
    if(!rendered){
      //window.scrollTo(0, 0);
      let width = window.innerWidth;
      setTimeout(() => {
        if(width < 601) {
          if(about.current!==null){
            about.current.style.overflowY = 'unset';
            rendered=true;
          }        
        }
      },1500)
    }   
  });

  
  return (
    <div  id="about-section">
      <section ref={about} className="about-slide-container">
        <div className="about-slide about-image-container">
          <div className="about-slide-stage-two-image"></div>
        </div>
        <div className="about-slide about-text-container">
          <div className="about-slide-stage-two-text">
            <div id="name-title">
              P<span style={{ marginLeft: "-15px" }}>Y</span>
            </div>
            <div className="about-text about-text-one">
              As you know by now I am Pavel. I live in providence Rhode Island, but I think I am a nomad at heart.
            </div>
            <div className="about-text about-text-two">
              I know how to work with both backend and front end code. I primarily work with <span style={{ color: "lightgreen" }}>NodeJS</span> and{" "}
              <span style={{ color: "#4287f5" }}>React</span>, but I have worked with
              <span style={{ color: "goldenrod" }}> Java</span> and <span style={{ color: "blue" }}>Python</span> when the need came. I really like creating
              impactful apps and sites. If I can show my work to someone and hear them say <span style={{ color: "#ee3153" }}>"Oh wow"</span>, then I am very
              happy :)
            </div>
            <div className="about-text about-text-three">
              I currently work for <span style={{ color: "red" }}>CVS</span> as a backend engineer supporting inventory and different order fulfilment systems.
            </div>
            <div className="about-text about-text-four">
              On my free time I like to ride my motorcycle, or electric longboard, hang out with friends and make love to music...ugh ugh I meant make music.
            </div>
            <a href="/assets/portrait.jpg" download="portrait.jpg">
              <button id="resume-button">Download Resume</button>
            </a>
          </div>
         
       
        </div>
      </section>
    </div>
  );
};
export default About;
