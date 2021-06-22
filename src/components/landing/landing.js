import React, { useEffect, createRef } from "react";
import "./landing.scss";
import Solutions from "./solutions/solutions";
import Impact from "./impact/impact";


const LandingLoader = () => {
  return (
    <div id="landing-loader-outer-circle">

    </div>
  )
}
const Landing = () => {
  const solutions = createRef();
  setTimeout(()=>{
    window.addEventListener('wheel', (e) => {
      solutions.current.style.display = 'flex';
    })
  }, 2200)
 
  return (
    <>
      <div id="landing-section">
        <div id="bg-image"></div>
        <section className="swing-door-container">
          <div className="swing-door-left one"></div>
          <div className="swing-door-right one"></div>
          <div className="swing-door-left two"></div>
          <div className="swing-door-right two"></div>
          <div className="swing-door-left three"></div>
          <div className="swing-door-right three"></div>
          <div id="swing-door-dark-overlay"></div>
        </section>
        <LandingLoader />
      </div>
     
      {/* <Solutions reference={solutions}  /> */}
      <Impact reference={solutions} />
    </>
  );
};
export default Landing;
