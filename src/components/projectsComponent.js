import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ContentComponent from './contentComponent';

const Projects = ({ projects }) => {
  return (

    <ContentComponent
        pageTitle= {"Projects"}
        headLine = {" Who doesn't like a little recreational math?..(crickets). Well, I guess it's not for everyone, \
                    but there's something about solving these complex problems that gives me great satisfaction.  \
                    This drive to find solutions to complex, often abstract, problems, makes me excel as a web developer. \
                    I have perseverance. I may not know everything but I can learn and I don't easily give up. \
                    Here are some of the side projects I've worked on."}
        hasLinks = {true}
        content = {projects}
         
    />

    
  );
};

export default Projects;
