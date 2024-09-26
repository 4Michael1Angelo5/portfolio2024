import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GhostWriter from './ghostWriterComponent';

const LandingPage = ({ beerMe }) => {

  // this is the landing page. It is the first thing the use sees

    const [animationComplete, setAnimationComplete] = useState([false,false,false,false,false,false]);
    


  return (
    <div className='landing-page'>
      <div className='container'>
        <div className='row'>
          <div className='col d-none d-md-block d-lg-block'></div>
          <div className='col'>
            <div className={beerMe ? 'beerMe-welcome-tab d-flex flex-column text-center' : 'welcome-tab d-flex flex-column text-center'}>
              <h1>
                <GhostWriter animationComplete = {animationComplete} index = {0} setAnimationComplete = {()=>setAnimationComplete} greeting={'Hello'} />
              </h1>
              <h2>
                {/* <GhostWriter animationComplete = {animationComplete} index = {1} setAnimationComplete = {()=>setAnimationComplete} greeting={'my name is'} /> <em>Chris Chun</em> */}
                my name is  <em>Chris Chun</em> 
              </h2>
              <p className='mb-0'>
                I am a <u>full-stack</u>
              </p>
              <p className='emph'>web developer</p>
              <p>
                Specializing in creating seamless UX through clean code. Check out my latest work
              </p>
            </div>
          </div>
          <div className='col d-none d-md-block d-lg-block'></div>
        </div>
      </div>

      <div className='d-flex container justify-content-center button-group'>
        <Link
          to='/resume'
          className={beerMe ? 'link sm-btn beerMe-btn' : 'link sm-btn'}
        >
          resume
        </Link>

        <Link
          to='/projects'
          className={beerMe ? 'link md-btn beerMe-btn' : 'link md-btn'}
        >
          projects
        </Link>

        <Link
          to='/portfolio'
          className={beerMe ? 'link lg-btn beerMe-btn' : 'link lg-btn'}
        >
          portfolio
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
