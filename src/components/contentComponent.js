// maps content of projects and porfolio
import React, { useEffect, useState , useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import {motion,useInView } from 'framer-motion';
import { invariant } from 'framer-motion/dom';


// content component is responsible for mapping 
// the content of each project and portfolio

// it is not responsible for displaying detailed information
// on each project/portfolio ( see presentationComponent for that)

// the user can click an individual portfolio piece or project
// and then is taken to a detailed overview of that work
// managed by presentationComponent

//@TODO: use framer motion to animate each element on mount; 

const ImageComponent = ({item, idx})=>{

    const ref = useRef()
    const inView = useInView(ref, {once:true, amount: 0.25 });
    const opacity = inView ? "1": "0"
    const transform = inView? "translateX(0px)":`translateX(${200*(-1)**(idx+1)}px)`;
    const boxShadow = inView? "1px 1px 1.1em 0.25em #dab6b6, 0px 0px 14px 6px #36348000" : "0px 0px 1.1em 0.25em #dab6b608, 0px 0px 0px 0px #363480"


    return(

        // <motion.img
        //     className="projects-main-image"
        //     ref={ref}
        //     src={item.image}
        //     alt={item.title}
        //     width="100%"
        //     initial={{ opacity: 0, x: 200 * (-1) ** idx }}
        //     animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 * (-1) ** idx }}
        //     transition={{
        //       duration: 1, // Same duration for both
        //       ease: "easeInOut", // Apply easing
        //       // You can add delay if needed: delay: 0.2,
                 
        //     }}
        // />

        <img
        className="projects-main-image"
            ref={ref}
            src={item.image}
            alt={item.title}
            width="100%"
            style={{
                transform:transform,
                opacity:opacity,
                boxShadow:boxShadow,
                 
            }}
        />
    )
}


const ContentComponent = (props) => {

    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    
    
    let content = props.content 
    let pageTitle = props.pageTitle;
    let headLine = props.headLine;

    let location = useLocation();
    
    useEffect(() => {

        setScreenHeight(window.innerHeight)
        // important for determing spacing between images /avoids using vh

        window.scrollTo(0, 0)
        // scroll to top of page on mount

      
        
    }, [])





    return (
        <React.Fragment>
            <Container>
                <h1 className="projects-page-h1-title">{pageTitle}</h1>
                <div className='content-decription-container'>
                    <p className="projects-page-p">{headLine}</p>
                </div>
            </Container>

            <div className="container">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="section"
                        style={{
                            minHeight: `${screenHeight * .75}px`,
                            // alignContent:"center"
                        }}
                    >
                        <div
                            className={
                                index % 2 === 0
                                    ? 'd-flex flex-row-reverse row pt-2 pb-2 projects-row-container'
                                    : 'row pt-2 pb-2 projects-row-container'
                            }
                            style={{
                                alignContent: "center"
                            }}
                        >


                            <div className="col-lg-6 col-sm-12 pb-2 mb-3">
                                <h2 className="projects-title">{item.title}</h2>

                                <div className="content-decription-container" >

                                    <p className="projects-page-p">{item.shortDescription}</p>

                                </div>
                            </div>


                            <div className="col-lg-6 col-sm-12 pb-3">                                  

                                        <Link to={`${location.pathname + "/" + item.title.replace(/\s/g, '')}`}>
                            
                                            <ImageComponent
                                                idx={index}                                                
                                                item = {item}                                                
                                            />

                                        </Link>


                            </div>

                        </div>
                    </div>

                ))}
            </div>
        </React.Fragment>
    )




}

export default ContentComponent