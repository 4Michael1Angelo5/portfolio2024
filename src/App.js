import './styles/App.scss'
import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/headerComponent';
import LandingPage from './components/landingPage';
import BurgerMenu from './components/menuComponent';
import { portfolioInfo } from "./assets/PortfolioContent";
import PortfolioDetail from './components/portfolioDetail';
import Portfolio from './components/portfolioComponent';
import ProjectsDetail from './components/projectsDetail';
import Projects from './components/projectsComponent';
import { projectsInfo } from './assets/ProjectsContent';
import Resume from './components/resumeComponent';
import Footer from './components/footerComponent';

const App = () => {
  const [portfolio] = useState(portfolioInfo);
  const [projects] = useState(projectsInfo);
  const [beerMe, setBeerMe] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const lastCall = useRef(0);

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
            <Route path='/projects' element={<Projects projects={projects} />} />
            <Route path='/portfolio' element={<Portfolio projects={portfolio} />} />

            {portfolio.map((item, index) => (
              <Route
                key={index}
                path={`/portfolio/${item.title.replace(/\s/g, '')}`}  //TODO: need to change this to lower case
                element={<PortfolioDetail beerMe={beerMe} project={item} />}
              />
            ))}

            {projects.map((item, index) => (
              <Route
                key={index}
                path={`/projects/${item.title.replace(/\s/g, '')}`} //TODO: need to change this to lower case
                element={<ProjectsDetail beerMe={beerMe} project={item} />}
              />
            ))}
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
