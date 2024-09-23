import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ContentComponent from './contentComponent';

// this component displays information on all portfolio items 


const Portfolio = ({ projects }) => {
 const [screenHeight,setScreenHeight] = useState(window.innerHeight);

 useEffect(()=>{
    
    setScreenHeight(window.innerHeight)

 },[])
    return (
        // <React.Fragment>
        //     <Container>
        //         <h1 className="projects-page-h1-title">Portfolio</h1>
        //         <p className="projects-page-p">Check out my latest work.</p>
        //     </Container>
        //     <div className="container">
        //         {projects.map((item, index) => (
        //             <div 
        //                 key = {index}
        //                 className = "section"
        //                 style={{
        //                 minHeight:`${screenHeight*.75}px`,
        //                 // alignContent:"center"
        //                 }}
        //                 >
        //             <div
        //                 className={
        //                     index % 2 === 0
        //                         ? 'd-flex flex-row-reverse row pt-2 pb-2 projects-row-container'
        //                         : 'row pt-2 pb-2 projects-row-container'
        //                 }
                                              
        //             >                    
                        
        //                 <h2 className="projects-title">{item.title}</h2>
        //                 <div className="col-lg-6 col-sm-12 pb-2 mb-3"
        //                     style = {{
        //                         backgroundColor:"#3d475b",
        //                         borderRadius:"10px"
        //                     }}>
                            
        //                     <p className="projects-page-p">{item.shortDescription}</p>
        //                 </div>
                    

        //                 <div className="col-lg-6 col-sm-12 pb-3">
        //                     <Link to={`/portfolio/${item.title.replace(/\s/g, '')}`}>
        //                         <img
        //                             className="projects-main-image"
        //                             src={item.image}
        //                             alt={item.title}
        //                             style={{
        //                                 width: '100%',
        //                             }}
        //                         />
        //                     </Link>
        //                 </div>
                        
        //             </div>
        //             </div>
                    
        //         ))}
        //     </div>
        // </React.Fragment>

        <ContentComponent
         hasLinks = {true}
         pageTitle = {"Portfolio"}
         headLine = {"Check out my latest work"}
         content = {projects}
        />
    );
};

export default Portfolio;
