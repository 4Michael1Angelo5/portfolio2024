import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ContentComponent from './contentComponent';

// this component displays information on all portfolio items 


const Portfolio = ({ projects }) => {

// scroll to top of page on mount
 useEffect(()=>{
    window.scrollTo(0,0);
  },[])

    return (

        <ContentComponent
         pageTitle = {"Portfolio"}
         headLine = {"Check out my latest work"}
         content = {projects}
        />
    );
};

export default Portfolio;
