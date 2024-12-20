import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ContentComponent from './contentComponent';

const Projects = ({ projects }) => {

  // scroll to top of page on mount
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (

    <ContentComponent
        pageTitle= {"Projects"}
        headLine = 
                  {
                    "When I’m not working, I am constantly involved in side projects \
                    and have a wide array of interests. From recreational math \
                    projects to encryption, these side projects are what keeps \
                    me passionate about coding. They lead me down diverse fields of \
                    study, challenge me to acquire new skills, and keep me up to date \
                    with emerging technologies. Check out some of my latest work. "
                  }        
        content = {projects}
         
    />

    
  );
};

export default Projects;
