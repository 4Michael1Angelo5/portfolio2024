import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ContentComponent from './contentComponent';

// this component displays information on all portfolio items 


const Portfolio = ({ projects }) => {
 const [screenHeight,setScreenHeight] = useState(window.innerHeight);

 useEffect(()=>{
    
    
    window.scrollTo(0,0)

 },[])
    return (

        <ContentComponent
         hasLinks = {true}
         pageTitle = {"Portfolio"}
         headLine = {"Check out my latest work"}
         content = {projects}
        />
    );
};

export default Portfolio;
