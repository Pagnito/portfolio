import React, { useEffect, createRef, useState } from "react";
import "./landing.scss";
import "./landing.css"

const Landing = () => {
  const swingDoors = createRef();
  const ball = createRef();
  setTimeout(() => {
    if (swingDoors.current) {
      swingDoors.current.style.display = "flex";
    }
    if (ball.current) {
      ball.current.style.display = "none";
    }
  }, 1800);


  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = 'white';
    setTimeout(() => {
      if (swingDoors.current) {
        swingDoors.current.style.display = 'none'
      }

    }, 4000)
  }, []);

  document.addEventListener('scroll', () => {
    //document.body.style.backgroundColor = '#333399'

  })
  return (
    <>
      <div id="landing-section">
        {/* / UX/UI Designer */}



        <div id="bounce-ball-container">
          <div ref={ball} id="bounce-ball"></div>
        </div>


        <section ref={swingDoors} className="swing-door-container">
          <div className="swing-door-left one"></div>
          <div className="swing-door-right one"></div>
          <div className="swing-door-left two"></div>
          <div className="swing-door-right two"></div>
          <div className="swing-door-left three"></div>
          <div className="swing-door-right three"></div>
        </section>
        <div id="landing-pic-container">
          <img id="landing-pic" src="/assets/graffiti.jpg" />

        </div>
        <div className="intro-text show-landing-text">
          <div id="my-title" >Full Stack Developer - Sugar Hill GA </div>
          <div id="my-name"> I am<span style={{ color: "#ee3153" }}> Pavel Yeganov</span></div>
        </div>
      </div>
    </>
  );
};
export default Landing;
