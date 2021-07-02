import React from 'react';
import './burgerMenuIcon.css';

const BurgerMenuIcon = ({open, openMenu}) => {

  return (
    <div onClick={openMenu} id="burder-menu-icon-container">
        <div className="burger-menu-icon-bar bar-1"></div>
        <div className="burger-menu-icon-bar bar-2"></div>
        <div className="burger-menu-icon-bar bar-3"></div>
        <div className="burger-menu-icon-bar bar-4"></div>
    </div>
  )
}

export default BurgerMenuIcon