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
  const [portfolio, setPortfolio] = useState(portfolioInfo);
  const [projects, setProjects] = useState(projectsInfo);
  const [beerMe, setBeerMe] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const lastCall = useRef(0);

  const toggleBeerMe = () => {
    setBeerMe(!beerMe);
  };

  // ============== scroll handler =======================

  const throttleRAF = (func, delay) => {
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall.current < delay) return;
      requestAnimationFrame(() => {
        func(...args);
        lastCall.current = now; // Update the ref's value
      });
    };
  };

  const handleScroll = throttleRAF(() => {
    setScrollY(window.scrollY);
  }, 100);
 
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
         <div div className= {beerMe? "darktheme-background" :"app-background"}>
             <div className={beerMe? "dark-theme" : "App"}
               style={{
                backgroundPosition: `center ${.55 * scrollY}px`
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
                path={`/portfolio/${item.title.replace(/\s/g, '')}`}
                element={<PortfolioDetail beerMe={beerMe} project={item} />}
              />
            ))}

            {projects.map((item, index) => (
              <Route
                key={index}
                path={`/projects/${item.title.replace(/\s/g, '')}`}
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
