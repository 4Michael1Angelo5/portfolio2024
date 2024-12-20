import React from 'react';
import { Container } from 'reactstrap';
import resume from '../assets/images/icons/resume.png'
 


class Resume extends React.Component{   

    render(){

        return(

             
        
            <React.Fragment>

              
                <Container className = "pb-3" >
                <h1 className = "projects-page-h1-title text-center mt-3 mb-3"> Resume</h1>


                    <div className = "row resume-container pt-3 p-md-3 p-lg-3 ">
                   <div className = "col-md-8 col-lg-8 col-sm-12 mb-5 mb-md-0 mb-lg-0"
                    style ={{borderBottom:"1px solid red"}} >
                   <h1>CHRIS CHUN</h1>

                        <p> Full-Stack Web Developer  <br/>
                        Specializing in creating seamless UX through clean code
                        
                        </p>
                        <h3>EXPERIENCE</h3>

                        <h2> <strong>Voices,</strong> Tacoma, WA - <em>Web Developer</em></h2>
                        <header>February 2024- August 2024</header>
                        <ul>
                            <li>Collaborated with San Franciscan Historian Sue Lee to design 
                                a website for her book, “Voices From the Railroad”
                            </li>
                            <li>Empowered Chinese American communities by making their stories 
                                more accessible
                            </li>
                            <li>
                                Enhanced UX with scroll-driven animations
                            </li>
                            <li>
                                Engineered engaging Data Visualization for 
                                Chinese railroad worker ancestry increasing conversion rate
                            </li>
                        </ul>

                        <h2> <strong>Paul Sparks Construction</strong>, Tacoma, WA- <em>Web Developer</em></h2>
                        <header>June 2022- January 2024</header>  
                        <ul> 
                            <li>Launched online presence for a small business owner - grew demand for services</li>
                            <li>Managed content media, layout, and design - increased customer conversion rate and improved UX.</li>
                            <li>Optimized SEO -  grew company revenue</li>
                            <li>Cut bid response time by 48 hours - grew demand for services</li>
                        </ul>                      
    
                        <header>technologies</header>
                        <p>Wix</p>


                        <h2> <strong>Cedarcreek Forestry</strong>, Tacoma, WA - <em>Web Developer</em></h2>
                        <header>January 2019- January 2020</header>
                        <ul> 
                            <li>
                                Designed headless WordPress CMS with React front end -
                                Decreased page load time by 1.4 seconds - improved UX
                            </li>
                            <li>
                                Simplied checkout ow using Stripe API, WooRest API, and
                                GraphQL - streamlining the payment process.         
                            </li>
                            <li>
                                Leveraged WordPress, React, Apollo Client, SCSS, GraphQL,
                                WooRest API, and Stripe.js to drive revenue.
                            </li>
                        </ul>                
                        <header>technologies</header>
                   
                        <p>
                            WordPress, React, Next.js, Apollo Client, SCSS,
                            GraphQL, WooCommerece Rest API, Stripe.js, 
                        </p>              

                    </div>

                    <div className = "col-md-4 col-lg-4 col-sm-12 mt-0 mt-md-5 mt-lg-5"
                    style = {{borderLeft: "1px solid red"}}>
                        <p>email: 4michael1angelo5@gmail.com</p>

                        <h3>SKILLS</h3>
                        <header>Languages</header>
                        <p>
                            JavaScript, HTML, CSS, Java, MATLAB
                        </p>
                        <header>Libraries & Frameworks</header>
                        <p>
                            React, Bootstrap, SCSS, Stripe.js, D3.js
                        </p>
                        <header>Tools and Technologies</header>
                        <p>
                            GitHub, Postman, WordPress,
                            WooCommerce, Wix, Canva
                        </p>

                        <h3>EDUCATION</h3>
                        <h2>
                            Tacoma Community College
                        </h2>
                        <header>2024</header>
                        <p>Associate in Arts- Computer Science</p>
                        <h2>
                            Nucamp Coding Boot Camp
                        </h2>
                        <header>2018</header>
                        <p>Full-stack Web Development</p>


                        <h3>PROJECTS</h3>
                        <h2>
                            Magic Cypher
                        </h2>
                        <p>
                            Developed cipher algorithm with magic squares for simple message encryption using Java
                        </p>
                        <h2>MATLAB</h2>

                        <p>
                            Algorithm to produce Magic Cubes of any order. Data Visualization of integer distribution across cells.
                        </p>

                        <h2>GeoGebra</h2>

                        <p>
                            Recursive algorithm of circles tangent between y=0 and cos(x)

                        </p>




                    </div>
                    </div>

                </Container>

                <Container>
                    <div className = 'row'>
                        <div className = "col d-flex justify-content-end m-2">
                           
                       
                       

                        <a href ={process.env.PUBLIC_URL + '/Chris Chun - Webdeveloper Resume.pdf'} download
                      className = 
                      {   this.props.beerMe
                          ? 
                          "link lg-btn beerMe-btn"
                          :
                          "link lg-btn"
                      }> 

                        <img  style = {{width: "50px"}} alt= {"resume_icon" } src=  {resume}/>
                      
                      </a>


 

                        </div>
                    </div>
                </Container>
                
            </React.Fragment>
        )
    }

};

export default Resume 