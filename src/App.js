import './styles/App.scss'
import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

// app constants new
import {PORTFOLIO} from './assets/PortfolioContent1';
import {PROJECTS} from "./assets/ProjectsContent1";

// app constants old
// import { portfolioInfo } from "./assets/PortfolioContent";
// import { projectsInfo } from './assets/ProjectsContent'

// components
import Header from './components/headerComponent';
import LandingPage from './components/landingPage';
import BurgerMenu from './components/menuComponent';
import Resume from './components/resumeComponent';
import Footer from './components/footerComponent';


// displays all information on a specific portfolio piece or project.
import AssetStory from "./components/assetDetailComponent";

// displays links to all projects and portfolio pieces.
import {ContentComponent} from "./components/contentComponent";

const App = () => {
  const [beerMe, setBeerMe] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const lastCall = useRef(0);

  const [portfolio2] = useState(PORTFOLIO);
  const [projects2] = useState(PROJECTS);

  const toggleBeerMe = () => {
    setBeerMe(!beerMe);
  };

  function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // useEffect(()=>{
  //   if(isDarkModeEnabled()){
  //     setTimeout(()=>toggleBeerMe(),3000)
  //   }

  // },[isDarkModeEnabled()])

  // ============== scroll handler =======================

  
  // This function is kinda like a custom setTimeout function
  // it takes a function to execute and a delay in miliseconds
  // The unique thing about the function is that it utilizes requestAnimationFrame
  // to optimize function execution by timing it to align with the browser's repaint cycle for better performace

  const throttleRAF = (func, delay) => {
    // throttle request animation frame
    return (...args) => {
      // create new time stamp
      const now = new Date().getTime();
      // if elapsed time is less than delay do nothing      
      if (now - lastCall.current < delay) return;
      // else ok to trigger animation frame and update 
      // current time stamp on last call ref

      requestAnimationFrame(() => {
        
        func(...args);
        lastCall.current = now; // Update the ref's value
      });
    };
  };

  const handleScroll = throttleRAF(() => {
    // call throttleRAF
    setScrollY(window.scrollY);

  }, 100); //debounce request animation frame to every 100ms
 
  useEffect(() => {

    // add event listener on mount
    window.addEventListener("scroll", handleScroll);         

    return () => {
      // clean up on unmount
      cancelAnimationFrame(lastCall.current); 
      window.removeEventListener("scroll", handleScroll);
    }

  }, [handleScroll])
  
  return (
    <BrowserRouter>
         <div className= {beerMe? "darktheme-background" :"app-background"}>
             <div className={beerMe? "dark-theme" : "App"}
               style={{
                backgroundPosition: `center ${-.55 * scrollY}px`
              }}
              >
          <BurgerMenu />
          <Header beerMe={beerMe} toggleBeerMe={toggleBeerMe} />
          <Routes>
            <Route path='/' element={<LandingPage beerMe={beerMe} />} />
            <Route path='/resume' element={<Resume beerMe={beerMe} />} />
              <Route
                  path = "portfolio"
                  element =
                      {
                          <ContentComponent
                                  content ={PORTFOLIO}
                                  pageTitle={"Portfolio"}
                                  headLine={
                                      "When I’m not working, I am constantly involved in side projects \
                                       and have a wide array of interests. From recreational math \
                                       projects to encryption, these side projects are what keeps \
                                       me passionate about coding. They lead me down diverse fields of \
                                       study, challenge me to acquire new skills, and keep me up to date \
                                       with emerging technologies. Check out some of my latest work. "
                                  }
                          />
                      }
              />
              <Route
                  path = "projects"
                  element =
                      {
                          <ContentComponent
                              content ={PROJECTS}
                              headLine={"Check out my latest work"}
                              pageTitle={"projects"}
                          />
                      }
              />
              {
                  portfolio2.map((project, idx) => (
                      <Route
                          key = {idx}
                          path = {`/portfolio/${project.title.replace(/\s/g, '')}`}
                          element={<AssetStory asset = {project} darkMode = {beerMe} />}
                      />
                  ))
              }
              {
                  projects2.map((project, idx) => (
                      <Route
                          key = {idx}
                          path = {`/projects/${project.title.replace(/\s/g, '')}`}
                          element={<AssetStory asset = {project} darkMode = {beerMe} />}
                      />
                  ))
              }

          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
