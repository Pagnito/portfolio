import React, { useEffect, createRef, useState } from "react";
import "./landing.scss";

const Landing = () => {
  const swingDoors = createRef();
  const ball = createRef();
  setTimeout(() => {
    if(swingDoors.current){
      swingDoors.current.style.display = "flex";
    }
    if(ball.current) {
      ball.current.style.display = "none";
    } 
  }, 1800);
  return (
    <>
      <div id="landing-section">
        <div className="intro-text">Hi,<span className="pavel-word" style={{color: "#8a2be2"}}>Pavel</span> is the name</div>
        <div className="intro-text">and I make the <span className="good-word" style={{color: "#EE3153", fontSize: "9vw", lineHeight: .7}}>good</span> stuff on the <span style={{color: "black"}}>internet</span></div>
        <div className="intro-text"><span style={{color: "#EE3153"}}>aka</span> develop <span className="sites-word" style={{color: "#8a2be2", fontSize: "7vw", lineHeight: .7}}>sites </span>
          and <span className="apps-word" style={{color: "#EE3153", fontSize: "8vw", lineHeight: .7}}>apps.</span></div>

        <div ref={ball} id="bounce-ball"></div>

        <section ref={swingDoors} className="swing-door-container">
          <div className="swing-door-left one"></div>
          <div className="swing-door-right one"></div>
          <div className="swing-door-left two"></div>
          <div className="swing-door-right two"></div>
          <div className="swing-door-left three"></div>
          <div className="swing-door-right three"></div>
        </section>
      </div>
    </>
  );
};
export default Landing;
