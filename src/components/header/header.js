import React, { createRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import BurgerMenuIcon from "./burderMenuIcon/burgerMenuIcon";
import "./header.scss";

const Header = (props) => {
  let onProjectsView = props.location.pathname === "/projects" ? true : false;
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
  function pushToAbout() {
    closeMenu();
    props.history.push("/about");
  }
  function pushToProjects() {
    closeMenu();
    props.history.push("/projects");
  }
  function pushToContacts() {
    closeMenu();
    props.history.push("/contact");
  }
  return (
    <>
      <header id="header">
        <section id="header-left">
          <Link id="ko" to="/about">
       
            <div className="header-link">
              ABOUT

              </div>
          </Link>

          <Link to="/projects">
            <div className="header-link">PROJECTS </div>
          </Link>

          <Link to="/contact">
            <div className="header-link">CONTACT </div>
          </Link>
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
      <header id="header-mobile">
        {/* <img onClick={openMobileMenu} src="/assets/burger-menu-icon.svg" id="burger-menu-icon" /> */}
        <BurgerMenuIcon openMenu={openMobileMenu} />
        <div ref={mobileMenu} id="header-mobile-menu">
          <div id="header-mobile-links">
            <div className="header-mobile-link" onClick={pushToAbout}>
              ABOUT
            </div>
            <div className="header-mobile-link" onClick={pushToProjects}>
              PORTFOLIO
            </div>
            <div className="header-mobile-link" onClick={pushToContacts}>
              CONTACT
            </div>
          </div>

          <div id="header-mobile-social-links">
            <img className="header-mobile-social-icon" src="/assets/linkedin-icon.svg" />
            <img className="header-mobile-social-icon" src="/assets/github-logo.svg" />
            <img className="header-mobile-social-icon" src="/assets/instagram-icon.svg" />
          </div>
        </div>
      </header>
    </>
  );
};

export default withRouter(Header);
