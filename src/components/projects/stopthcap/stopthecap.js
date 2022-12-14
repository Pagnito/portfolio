import React from 'react';
import './stopthecap.scss'

const StopTheCap = () => {


  return (
    <div className='project-bg'>

      <div className='project-one-title'>
        <div className="project-one-text">
          <div className="">Stop The Cap
            <div className="project-one-line"></div>
          </div>
        </div>
      </div>
      <div className='stopthecap-images-container'>
        <img className='stopthecap-image-one' src="/assets/stopthecap-1.png"></img>
        <img className='stopthecap-image-one' src="/assets/stopthecap-2.png"></img>
      </div>
      <div className='stopthecap-techs-lineup'>
        <div className='tech-lineup-one'>
          <a href="https://nextjs.org/" target="_blank" className='tech-icon-container'>
            <img className='tech-icon' src="/assets/nextjs-icon.png"></img>
            <div>NextJS</div>
          </a>
          <a href="https://redux.js.org/" target="_blank" className='tech-icon-container'>
            <img className='tech-icon' src="/assets/redux-icon.png"></img>
            <div>Redux</div>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" className='tech-icon-container'>
            <img className='tech-icon' src="/assets/tailwindcss-icon.png"></img>
            <div>TailwindCSS</div>
          </a>
        </div>
        <div className='tech-lineup-two'>

          <a href="https://graphql.org/" target="_blank" className='tech-icon-container'>
            <img className='tech-icon' src="/assets/graphql-icon.png"></img>
            <div>GraphQL</div>
          </a>
          <a href="https://www.shopify.com/" target="_blank" className='tech-icon-container'>
            <img className='tech-icon' src="/assets/shopify-icon.png"></img>
            <div>Shopify</div>
          </a>
        </div>
      </div>
      <div className='single-image-container-two'>
        <img src="/assets/stopthecap-4.png"></img>
      </div>
      <div className='stopthecap-links'>
        <a className="link-img" href="https://github.com/Pagnito/stopthecap" target="_blank">
          <img src="/assets/github-icon.png"></img>
        </a>
        <a className="link-img" href="https://stopthecap.vercel.app" target="_blank">
          <img src="/assets/web-icon.png"></img>
        </a>
      </div>
    </div>
  )
}

export default StopTheCap