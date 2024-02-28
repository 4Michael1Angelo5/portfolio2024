import React from 'react';
import { Link } from 'react-router-dom';
 

class LandingPage extends React.Component{ 

    constructor(props){
        super(props)

    }


    render(){

        let beerMe = this.props.beerMe;
        return(

    <div className = {beerMe? "beerMe-landing-page landing-page":'landing-page'}>


        <div className = "container">

            <div className = "row">

            <div className = "col d-none d-md-block d-lg-block ">

            </div>
            <div className = "col">


                <div className = {beerMe? 'beerMe-welcome-tab d-flex flex-column text-center' :'welcome-tab d-flex flex-column text-center'}>

                    <h1>Hello</h1>

                    <h2>my name is <em> Chris Chun</em>
                        </h2>

                    <p className = "mb-0"> 
                        I am a <u> full-stack  </u> 
                        </p>
                        <p className = "emph"> 
                        web developer
                        </p>
                        <p>
                         & full-time dad. 
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

        <Link to = {"/resume"}
                style= {{
                    color:  "rgb(55 46 53) " ,
                    textDecoration: "none"
                    }}>

            <div className= "link-button-projects link-btn"> 

                <div style ={{ color:"burlywood"}}>
                resume
                </div>

            </div>
                
        </Link>

        
        <Link to = {"/projects"}
        style= {{
            color:  "rgb(55 46 53) " ,
            textDecoration: "none"
            }}>
        
        <div className= "link-button-portfolio link-btn">
            <div style ={{ color:"burlywood"}}>
                
            projects
            </div> 
        </div>

        </Link>
          
    
       <Link to = {"/portfolio"}
        style= {{
            color:  "rgb(55 46 53) " ,
            textDecoration: "none"
            }}>
        <div className= "link-button-resume link-btn">
        <div style ={{ color:"burlywood" }}>
            
            portfolio
            </div>
        </div>
        </Link>
        </div>


    
    </div>


        )
    }
};

export default LandingPage
