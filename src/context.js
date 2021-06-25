import React from 'react';

let init = {
  active: '/',
  previous: false,
  setViews: setViews
}
function setViews (prevPath, currPath){
  init.previous = prevPath;
  init.active = currPath;
}

let transitionContext = React.createContext(init)

export default transitionContext;