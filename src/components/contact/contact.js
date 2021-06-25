import React, { useEffect, createRef } from "react";
import "./contact.scss";

const Contact = ({ reference, scrolled }) => {
  useEffect(() => {
    // let videoContainer = document.getElementById("contact-video-container");
    // let video = document.getElementById("contact-video");
    // if (video) {
    //   setTimeout(() => {
    //     video.playbackRate = 1.5;
    //     videoContainer.style.display = "flex";
    //     video.play();
    //     setTimeout(() => {
    //       video.playbackRate = 1;
    //     }, 500);
    //   }, 1000);
    // }
  });

  return (
    <div ref={reference} id="contact-section">
      <section className="contact-swing-door-container">
        <div className="contact-swing-door-left contact-door-one"></div>
        <div className="contact-swing-door-right contact-door-one"></div>
      </section>
      <section id="contact-video-container">
        {/* <video id="contact-video"  muted>
          <source src="/assets/water-smoke-3.mp4" type="video/mp4"/>
        </video> */}
      </section>
      <section id="contact-info-container">
        <section id="contact-info-container-inner"></section>
      </section>
    </div>
  );
};
export default Contact;
