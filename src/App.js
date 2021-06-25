import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import { Route, withRouter, useLocation, Switch } from "react-router-dom";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = (props) => {
  const location = useLocation();
  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="drop" unmountOnExit timeout={2000}>
          <Switch location={location}>
            <Route exact path="/" render={(props) => <Landing {...props} />} />
            <Route
             exact
              path="/about"
              render={(props) => <About {...props} />}
            />

            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} />}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
};

export default withRouter(App);
