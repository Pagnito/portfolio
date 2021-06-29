import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.scss";

const Header = (props) => {
  console.log(props)
  let onProjectsView = props.location.pathname === '/projects' ? true : false;
  return (
    <header id="header">
      <section id="header-left">
        <div style={{color: onProjectsView ?'white' : '#ee3153'}} className="header-link">
          <Link to="/about">ABOUT</Link>
        </div>
        <div style={{color: onProjectsView ?'white' : '#ee3153'}}  className="header-link">
        <Link to="/projects">PROJECTS</Link>
          </div>
        <div style={{color: onProjectsView ?'white' : '#ee3153'}}  className="header-link">
          <Link to="/contact">CONTACT</Link>
        </div>
      </section>
      <section id="header-right">
        <div id="header-icon-container">
          <div className="link-animation-container">
            <a className="header-social-icon-link social-icon-face" target="_blank" id="linkedin-icon-link">
              <img className="header-social-icon" src="/assets/linkedin-icon.svg" />
            </a>
            <a className="header-social-icon-link social-icon-bottom" target="_blank" id="linkedin-icon-blue-link">
              <img className="header-social-icon" src="/assets/linkedin-icon-blue.svg" />
            </a>
          </div>
          <div className="link-animation-container">
            <a className="header-social-icon-link social-icon-face" target="_blank" id="github-icon-link">
              <img className="header-social-icon github-icon" src="/assets/github-logo.svg" />
            </a>
            <a className="header-social-icon-link social-icon-bottom" target="_blank" id="github-icon-black-link">
              <img className="header-social-icon github-icon" src="/assets/github-logo-black.svg" />
            </a>
          </div>
          <div className="link-animation-container">
            <a className="header-social-icon-link social-icon-face" target="_blank" id="instagram-icon-link">
              <img className="header-social-icon instagram-icon" src="/assets/instagram-icon.svg" />
            </a>
            <a className="header-social-icon-link social-icon-bottom" target="_blank" id="instagram-icon-gradient-link">
              <img className="header-social-icon instagram-icon" src="/assets/instagram-icon-gradient.svg" />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default withRouter(Header);
