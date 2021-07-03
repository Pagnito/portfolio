import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import { Route, withRouter, useLocation, Switch } from "react-router-dom";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";
let transitionStarted = false;

const App = (props) => {
  const mother = React.createRef();
  const location = useLocation();
  // let components = ["/", "/about", "/projects", "/contact"];
  // let activeViewOnLaunch = props.location.pathname;
  // let activeComponent = components.indexOf(activeViewOnLaunch);

  // function changeActiveComponent(num){
  //   if(num<4){
  //     activeComponent = num;
  //   } else {
  //     activeComponent = 0;
  //   }
  // }

  // function pushToComponent(event) {
  //   if (transitionStarted === false) {
  //     transitionStarted = true;
  //     console.log(transitionStarted);
  //     console.log(activeComponent)
  //     if (event.deltaY < 0 && activeComponent > 0) {
  //       //up
  //       changeActiveComponent(activeComponent - 1);
  //       props.history.push(components[activeComponent]);
  //     } else if (event.deltaY > 0) {
  //       //down
  //       changeActiveComponent(activeComponent + 1);
  //       props.history.push(components[activeComponent]);
  //     }
  //     setTimeout(() => {
  //       transitionStarted = false;
  //     }, 4000);
  //   }
  // }
  // useEffect(() => {
  //   if (mother.current !== null) {
  //     mother.current.addEventListener("wheel", (event) => {
  //       console.log(props.location.pathname)
  //       console.log(props)
  //       if (props.location.pathname !== "/projects") {
  //         console.log('huh')
  //         pushToComponent(event);
  //       } else {
  //         if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight) {
  //           console.log('wtf')
  //           pushToComponent(event);
  //         }
  //       }
  //     });
  //   }
  // }, []);

  return (
    <div ref={mother}>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="drop" unmountOnExit timeout={2000}>
          <Switch location={location}>
            <Route exact path="/" render={(props) => <Landing {...props} />} />
            <Route exact path="/about" render={(props) => <About {...props} />} />
            <Route exact path="/portfolio" render={(props) => <Projects {...props} />} />
            <Route exact path="/contact" render={(props) => <Contact {...props} />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default withRouter(App);
