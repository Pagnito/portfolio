import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header id="header">
      <section id="header-left">
        <div className="header-link">ABOUT</div>
        <div className="header-link">PORTFOLIO</div>
        <div className="header-link">CONTACT</div>
      </section>
      <section id="header-right">
        <img className="header-social-icon" src="/assets/linkedin-icon.svg" />
        <img className="header-social-icon" src="/assets/github-logo.svg" />
        <img className="header-social-icon" src="/assets/ig-icon.svg" />
      </section>
    </header>
  );
};

export default Header;
