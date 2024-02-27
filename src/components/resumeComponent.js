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

                        Create beautiful UX with performant code
                        </p>
                        <h3>EXPERIENCE</h3>
                        <h2> Paul Sparks Construction , Tacoma - <em>Web Developer</em></h2>
                        <header>2021-2022</header>                        
                        <p>
                            Design website using Wix and managed his bid requests that 
                            came through the website. Manage content media, layout, 
                            and design. Collected 10% on each bid that came through 
                            the website. 
                        </p>
                        <header>technologies</header>
                        <p>Wix</p>


                        <h2>Cedarcreek Forestry, Tacoma - <em>Web Developer</em></h2>
                        <header>2019-2020</header>
                         
                        
                        <p>
                            Built a custom website hosted on WordPress with a React 
                            front end and WordPress backend. Used stripe API to handle 
                            customer payments and  WooCommerece Rest API and GraphQL to 
                            query store data and submit product orders.
                        </p>
                        <header>technologies</header>
                   
                        <p>
                            WordPress, React, Next.js, Apollo Client, SCSS,
                            GraphQL, WooCommerece Rest API, Stripe.js, 
                        </p>


                        <h2>NuCamp Coding Boot Camp, Tacoma - <em>Student</em></h2>
                        <header>2018-2019</header>
                        <p>Completed Full Stack Web Developer Boot Camp and learned coding 
                            fundamentals of HTML, Javascript, CSS, Sass, git, Bootstrap, 
                            Javascript, React, React Native, MongoDB,
                        </p>


                        <h2>Cider and Cedar, Tacoma - <em>Chef</em></h2>
                        <header>2022-2024</header>
                        <p>Head Chef at Cider and Cedar, cider taproom. Create menu, manage 
                            inventory, schedule, create specials, cook, clean, and maintain 
                            business relations with food vendors. 
                        </p>

                        <h3>Education</h3>
                        <h2>College of The Redwoods, Eureka CA</h2>
                        <header>2010-2012</header>
                        <p>Associate in Science - Math Major</p>

                        

                        


                    </div>
                    <div className = "col-md-4 col-lg-4 col-sm-12 mt-0 mt-md-5 mt-lg-5"
                    style = {{borderLeft: "1px solid red"}}>
                        <p>email: 4michael1angelo5@gmail.com</p>

                        <h3>SKILLS</h3>
                        <p>
                            React, ReactNative. HTML, Javascript, CSS, Sass,  Bootstrap, 
                            Wix,  WordPress, Stripe.js, MongoDB, GraphQL, Math, MATLAB, 
                            GeoGebra
                        </p>

                        <h3>AWARDS</h3>
                        <p>
                            Nucamp Coding Boot Camp completion 
                            of full stack web developer course
                        </p>

                        <p>
                            2023 Top 10 Restaurants in Tacoma  Recognized for culinary 
                            excellence as head chef of Cider and Cedar,  cider taproom.
                        </p>

                        <h3>PROJECTS</h3>

                        <p>
                        MATLAB Write an Algorithm to produce 
                        an Nth order magic cube such that N is an integer,
                         doubly even or odd, and equal to or greater than 3.
                        </p>

                        <p>
                            GeoGebra Find a recursive function to produce a sequence 
                            of circles such that they satisfy being tangent to y = 0
                            and y = cos(x) and the previous circle in the sequence. 
                        </p>




                    </div>
                    </div>

                </Container>

                <Container>
                    <div className = 'row'>
                        <div className = "col d-flex justify-content-end m-2">
                            <div className = "link-button-resume">

                            
                        <a href ={process.env.PUBLIC_URL + '/Chris Chun Resume.pdf'} download>
                    
                         
                        
                        <img  style = {{width: "50px"}} src=  {resume}/>

                        </a>
                        </div>

                        </div>
                    </div>
                </Container>

           

                  
                

                   
      
 
                
            </React.Fragment>
        )
    }

};

export default Resume 