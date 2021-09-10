import React from 'react';
import './burgerMenuIcon.css';

const BurgerMenuIcon = ({openMenu}) => { 
  return (
    <div onClick={openMenu} id="burder-menu-icon-container">
        <div id="bar-1" className="burger-menu-icon-bar bar-1"></div>
        <div id="bar-2" className="burger-menu-icon-bar bar-2"></div>
    </div>
  )
}

export default BurgerMenuIcon