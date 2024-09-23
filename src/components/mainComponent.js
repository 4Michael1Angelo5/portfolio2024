import React, { useEffect, useState, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './headerComponent';
import LandingPage from './landingPage';
import BurgerMenu from './menuComponent';
import { portfolioInfo } from "../assets/PortfolioContent";
import PortfolioOverview from './portfolioOverviewComponent';
import Portfolio from './portfolioComponent';
import ProjectsOverview from './projectsOverviewComponent';
import Projects from './projectsComponent';
import { projectsInfo } from '../assets/ProjectsContent';
import Resume from './resumeComponent';
import Footer from './footerComponent';

const Main = () => {
  const [portfolio, setPortfolio] = useState(portfolioInfo);
  const [projects, setProjects] = useState(projectsInfo);
  const [beerMe, setBeerMe] = useState(false);
  const [scrollY,setScrollY] = useState(0);
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
      // window.addEventListener("scroll",debouncedHandleScroll)         

      return () => {
          // clean up on unmount
          cancelAnimationFrame(lastCall.current);
          // window.removeEventListener("scroll", debouncedHandleScroll);
          window.removeEventListener("scroll", handleScroll);
      }

  }, [handleScroll])
  
  return (
    <div className={beerMe ? 'beerMe-landing-page' : 'App'}
    style ={{
      backgroundPositionY: `${.5*scrollY}px`
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
            element={<PortfolioOverview beerMe={beerMe} project={item} />}
          />
        ))}

        {projects.map((item, index) => (
          <Route
            key={index}
            path={`/projects/${item.title.replace(/\s/g, '')}`}
            element={<ProjectsOverview beerMe={beerMe} project={item} />}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
