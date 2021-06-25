import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header id="header">
      <section id="header-left">
        <div className="header-link"><Link to="/about">ABOUT</Link></div>
        <div className="header-link">PORTFOLIO</div>
        <div className="header-link"><Link to="/contact">CONTACT</Link></div>
      </section>
      <section id="header-right">
        <Link to="/"><img className="header-social-icon" src="/assets/linkedin-icon.svg" /></Link>
        <img className="header-social-icon" src="/assets/github-logo.svg" />
        <img className="header-social-icon" src="/assets/ig-icon.svg" />
      </section>
    </header>
  );
};

export default Header;
