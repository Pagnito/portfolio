import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Landing from './components/landing/landing';
import About from './components/about/about';
import Project from './components/project/project';
import Footer from './components/footer/footer';

const App = () => {

  
  return (
  <>
    <Header />
    <Landing />
    {/* <About /> */}
    {/* <Project/> */}
    <Footer />
  </>
  )
}

export default App