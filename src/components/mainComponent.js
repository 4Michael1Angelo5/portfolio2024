import React, { useEffect, useState } from 'react';
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
  const [scrollY,setSCrollY] = useState(0);

  const toggleBeerMe = () => {
    setBeerMe(!beerMe);
  };

  // const handleScroll = ()=>{
  //   setSCrollY(window.scrollY);
  // }

  // useEffect(()=>{
    
  //   window.addEventListener("scroll",handleScroll);

  //   return(
  //     // clean up
  //     ()=>window.removeEventListener("scroll",handleScroll)
  //   );

  // },[scrollY])
  
  return (
    <div className={beerMe ? 'beerMe-landing-page' : 'App'}
    // style ={{
    //   backgroundPositionY: `${scrollY}px`
    // }}
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
