import React, { createRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import BurgerMenuIcon from "./burderMenuIcon/burgerMenuIcon";
import "./header.scss";

const Header = (props) => {
  let mobileMenuIsOpen = false;
  const mobileMenu = createRef();

  function closeMenu() {
    mobileMenuIsOpen = false;
    document.body.style.overflow = "unset";
    mobileMenu.current.classList.add("close-mobile-menu");
    mobileMenu.current.classList.remove("open-mobile-menu");
    let links = Array.from(mobileMenu.current.children);
    links.forEach((child) => {
      child.style.opacity = "0";
    });
    setTimeout(() => {
      links.forEach((child) => {
        child.style.display = "none";
      });
    }, 500);
  }
  function openMenu() {
    mobileMenuIsOpen = true;
    document.body.style.overflow = "hidden";
    mobileMenu.current.classList.remove("close-mobile-menu");
    mobileMenu.current.classList.add("open-mobile-menu");
    let links = Array.from(mobileMenu.current.children);
    links.forEach((child) => {
      child.style.display = "flex";
      setTimeout(() => {
        child.style.opacity = "1";
      }, 500);
    });
  }
  function openMobileMenu() {
    if (mobileMenuIsOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  function pushToLanding() {
    closeMenu();
    props.history.push("/");
  }
  function pushToAbout() {
    closeMenu();
    props.history.push("/about");
  }
  function pushToPortfolio() {
    closeMenu();
    props.history.push("/portfolio");
  }
  function pushToContacts() {
    closeMenu();
    props.history.push("/contact");
  }
  return (
    <>
      <header id="header">
        <section id="header-left">
          <Link to="/about">
            <div className="header-link-container">
              <div style={{ width: props.location.pathname === "/about" ? "100%" : "0%" }} className="header-link-ani"></div>
              <div className="header-link">
                ABOUT
              </div>
            </div>
          </Link>

          {/* <Link to="/portfolio">
            <div className="header-link-container">
              <div style={{ width: props.location.pathname === "/portfolio" ? "100%" : "0%" }} className="header-link-ani"></div>
              <div className="header-link">
                PORTFOLIO
              </div>
            </div>
          </Link> */}

          <Link to="/contact">
            <div className="header-link-container">
              <div style={{ width: props.location.pathname === "/contact" ? "100%" : "0%" }} className="header-link-ani"></div>
              <div className="header-link">
                CONTACT
              </div>
            </div>
          </Link>
        </section>
        <section id="header-right">
          <div id="header-icon-container">
            <div className="link-animation-container">
              <a href="https://www.linkedin.com/in/pavel-yeganov-309269114/" className="header-social-icon-link social-icon-face" target="_blank" id="linkedin-icon-link">
                <img className="header-social-icon" src="/assets/linkedin-icon.svg" />
              </a>
              <a href="https://www.linkedin.com/in/pavel-yeganov-309269114/" className="header-social-icon-link social-icon-bottom" target="_blank" id="linkedin-icon-blue-link">
                <img className="header-social-icon" src="/assets/linkedin-icon-blue.svg" />
              </a>
            </div>
            <div className="link-animation-container">
              <a href="https://github.com/pagnito" className="header-social-icon-link social-icon-face" target="_blank" id="github-icon-link">
                <img className="header-social-icon github-icon" src="/assets/github-logo.svg" />
              </a>
              <a href="https://github.com/pagnito" className="header-social-icon-link social-icon-bottom" target="_blank" id="github-icon-black-link">
                <img className="header-social-icon github-icon" src="/assets/github-logo-black.svg" />
              </a>
            </div>
            <div className="link-animation-container">
              <a href="https://www.instagram.com/wayofthecode/" className="header-social-icon-link social-icon-face" target="_blank" id="instagram-icon-link">
                <img className="header-social-icon instagram-icon" src="/assets/instagram-icon.svg" />
              </a>
              <a href="https://www.instagram.com/wayofthecode/" className="header-social-icon-link social-icon-bottom" target="_blank" id="instagram-icon-gradient-link">
                <img className="header-social-icon instagram-icon" src="/assets/instagram-icon-gradient.svg" />
              </a>
            </div>
          </div>
        </section>
      </header>
      <header id="header-mobile">
        <BurgerMenuIcon openMenu={openMobileMenu} />
        <div ref={mobileMenu} id="header-mobile-menu">
          <div id="header-mobile-links">
            <div className="header-mobile-link" onClick={pushToAbout}>
              ABOUT
            </div>
            <div className="header-mobile-link" onClick={pushToPortfolio}>
              PORTFOLIO
            </div>
            <div className="header-mobile-link" onClick={pushToContacts}>
              CONTACT
            </div>
            <img src="/assets/eye-icon.svg" id="header-eye-icon" />
            <img onClick={pushToLanding} src="/assets/eyeball-icon.svg" id="header-eyeball-icon" />
          </div>

          <div id="header-mobile-social-links">
            <a target="_blank" href="https://www.linkedin.com/in/pavel-yeganov-309269114/">
              <img className="header-mobile-social-icon" src="/assets/linkedin-icon.svg" />
            </a>
            <a target="_blank" href="https://github.com/pagnito">
              <img className="header-mobile-social-icon" src="/assets/github-logo.svg" />
            </a>
            <a target="_blank" href="https://www.instagram.com/wayofthecode/">
              <img className="header-mobile-social-icon" src="/assets/instagram-icon.svg" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default withRouter(Header);
