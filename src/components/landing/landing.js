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
          <div id="landing-pic-overlay"></div>
        </div>
        <div className="intro-text show-landing-text">
          <div id="my-title" >Full Stack Developer - Providence RI </div>
          <div id="my-name"> I am<span style={{ color: "#ee3153" }}> Pavel Yeganov</span></div>
        </div>
      </div>

      {/* <div id="landing-video-container">
        <video id="landing-video" autoPlay muted loop>
          <source src="/assets/lightBulbVideo.mp4" type="video/mp4" autoPlay />
        </video>
      </div> */}
      {/* <div id="landing-section-two">
        <div id="landing-section-two-content-container">
          <div id="landing-section-two-text-1">
            We Design
          </div>
          <ul id="landing-section-two-list-1">
            <li>Get to know you</li>
            <li>Get to know your business</li>
            <li>Understand your goals</li>
            <li>Get to work!</li>
          </ul>
          <div id="landing-section-two-image-container">
            <img id="landing-section-two-image" src="/assets/design-pic-2.jpg" />
          </div>
        </div>
      </div>
      <div id="landing-section-two">
        <div id="landing-section-two-content-container">
          <div id="landing-section-two-text-2">
            We Develop
          </div>
          <ul id="landing-section-two-list-2">
            <li>Get to know you</li>
            <li>Get to know your business</li>
            <li>Understand your goals</li>
            <li>Get to work!</li>
          </ul>
          <div id="landing-section-two-image-container">
            <img id="landing-section-two-image" src="/assets/develop-pic-pink.jpg" />
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Landing;
