import React from 'react';
 
import Presentation from './presentationComponent';

const ProjectsDetail = ({ project, beerMe }) => {
  const content = project.projectOverview;

  return (
    <Presentation
    project={project}
    beerMe={beerMe}
    />
  );
};

export default ProjectsDetail;
