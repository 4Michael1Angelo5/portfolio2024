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

                        <p> Full-Stack Developer  <br/>
                            Reliable systems, smooth interfaces, and properly seasoned tacos.

                        </p>

                        <h3>EXPERIENCE</h3>
                        <h2> <strong>Magic Cypher,</strong> Tacoma, WA - <em>Full-Stack Developer</em></h2>
                        <header> August 2024 - Present</header>
                        <ul>
                            <li>
                                Built a full-stack encryption web app with Next.js and TypeScript, 
                                using a custom magic square algorithm to encrypt text and images.
                            </li>
                            <li>
                                Developed a secure Next.js API backend with Prisma and PostgreSQL 
                                for server-side encryption and user authentication.
                            </li>
                            <li>
                                Implemented WebGL animations for real-time encryption visualization
                            </li>
                        </ul>
                       <header>technologies</header>

                       <p>
                           React, Next.js, PrismaORM, NextAuth, PostgreSQL, TypeScript, WebGL
                       </p>

                       <h2> <strong>Voices,</strong> Tacoma, WA - <em>Web Developer</em></h2>
                        <header>February 2024- August 2024</header>
                        <ul>
                            <li>Designed a website for historian Sue Lee’s book, "Voices From the Railroad",
                                amplifying Chinese American stories through accessible digital storytelling.

                            </li>
                            <li> Enhanced UX with scroll-driven animations for immersive engagement.
                            </li>
                            <li>
                                Developed data visualizations of Chinese railroad worker ancestry,
                                increasing user engagement.
                            </li>
                        </ul>


                        <h2> <strong>Paul Sparks Construction</strong>, Tacoma, WA- <em>Web Developer</em></h2>
                        <header>June 2022- January 2024</header>  
                        <ul> 
                            <li>Launched online presence for a small business owner - grew demand for services</li>
                            <li>Managed content media, layout, and design - increased conversion rate.</li>
                            <li>Added a contact button—slashed bid response time by 24 hours, expanding
                                business revenue.
                            </li>
                        </ul>

                        <h2> <strong>Cedarcreek Forestry</strong>, Tacoma, WA - <em>Web Developer</em></h2>
                        <header>January 2019- January 2020</header>
                        <ul> 
                            <li>
                                Designed headless WordPress CMS with React front end -
                                Decreased page load time by 0.8 seconds - improved UX
                            </li>
                            <li>
                                Simplified checkout ow using Stripe API, WooRest API, and
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
                            JavaScript,
                            TypeScript, Java, HTML,
                            CSS
                        </p>
                        <header>Libraries & Frameworks</header>
                        <p>
                            React, Next.js, Bootstrap, D3.js, Junit, Framer Motion, Stripe
                        </p>
                        <header>Tools and Technologies</header>
                        <p>
                           AI, postgreSQL, git, Postman, Vercel, WebGL, GraphQL, WordPress, WooCommerce
                        </p>

                        <h3>EDUCATION</h3>
                        <h2> 
                            University of Washington Tacoma
                        </h2>
                        <header>Expected 2027</header>
                        <p>Bachelor of Science - Computer Science</p>

                        <h2>
                            Tacoma Community College
                        </h2>
                        <header>2024</header>
                        <p>Associate in Arts - Computer Science</p>
                        <h2>
                            NuCamp Coding Boot Camp
                        </h2>
                        <header>2019</header>
                        <p>Full-stack Web Development</p>


                        <h3>PROJECTS</h3>

                        <h2>Tetris Game</h2>

                        <p>
                            Built a Tetris Game in Java using Swing with MVC architecture
                        </p>

                        <h2>
                            Magic Cypher (CLI)
                        </h2>
                        <p>
                            Developed cipher algorithm with magic squares for simple message encryption using Java
                        </p>
                        <h2>MATLAB</h2>

                        <p>
                            Algorithm to produce Magic Cubes of any order. Data Visualization of integer distribution across cells.
                        </p>





                    </div>
                    </div>

                </Container>

                <Container>
                    <div className = 'row'>
                        <div className = "col d-flex justify-content-end m-2">
                           
                       
                       

                        <a href ={process.env.PUBLIC_URL + '/Chris Chun - Resume.pdf'} download
                      className = 
                      {   this.props.beerMe
                          ? 
                          "link lg-btn beerMe-btn"
                          :
                          "link lg-btn"
                      }> 

                        <img  style = {{width: "50px"}} alt= {"resume_icon" } src = {resume}/>
                      
                      </a>


 

                        </div>
                    </div>
                </Container>
                
            </React.Fragment>
        )
    }

}

export default Resume 