import React from 'react';
import Header from './headerComponent';
import BurgerMenu from './menuComponent';
import { Link } from 'react-router-dom';
 

class LandingPage extends React.Component{ 

    render(){
        return(

    <div className = 'landing-page'>


        <div className = "container">

            <div className = "row">

            <div className = "col d-none d-md-block d-lg-block ">

            </div>
            <div className = "col">


                <div className = '  k1 d-flex flex-column text-center'>

                    <h1>Hello</h1>

                    <h2>my name is Chris Chun</h2>

                    <p> 
                        I am a full-stack webdeveloper & full-time dad. 
                        I create simple immersive webapps with performant code. 
                        Check out my latest work
                    </p>
                        
                </div>

            </div>

            <div className = "col col d-none d-md-block d-lg-block ">
                
            </div>
            </div>
        
        </div>

    <div className = "d-flex container justify-content-center button-group">

        <Link to = {"/projects"}
                style= {{
                    color:  "rgb(55 46 53) " ,
                    textDecoration: "none"
                    }}>

            <div className= "link-button-projects"> 

                <div style ={{ color:"burlywood"}}>
                projects
                </div>

            </div>
                
        </Link>
        
        <div className= "link-button-portfolio">
            <div style ={{ color:"burlywood"}}>
            portfolio
            </div> 
        </div>

        <div className= "link-button-resume">
        <div style ={{ color:"burlywood" }}>
            resume
            </div>
        </div>

    </div>


    
    </div>


        )
    }
};

export default LandingPage
