import React, {createRef} from 'react';
import './burgerMenuIcon.css';

const BurgerMenuIcon = ({openMenu}) => {
  let open = false;
  let topBar = createRef();
  let bottomBar = createRef();
  let animatedOpenMenu = () => {
    if(open){
      open = false;
      if(topBar.current){
        topBar.current.classList.remove('cross-top-bar');
        bottomBar.current.classList.remove('cross-bottom-bar');
      }

    } else {
      open = true;
      if(topBar.current){
        topBar.current.classList.add('cross-top-bar');
        bottomBar.current.classList.add('cross-bottom-bar');
      }
     
    }
    openMenu();
  }
  return (
    <div onClick={animatedOpenMenu} id="burder-menu-icon-container">
        <div ref={topBar} className="burger-menu-icon-bar bar-1"></div>
        <div ref={bottomBar} className="burger-menu-icon-bar bar-2"></div>
    </div>
  )
}

export default BurgerMenuIcon