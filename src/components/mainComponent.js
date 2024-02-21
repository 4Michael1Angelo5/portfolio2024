import React, { Component } from 'react'; 
import Header  from './headerComponent';
import LandingPage from './landingPage';
import {Routes, Route} from 'react-router-dom'; 
import BurgerMenu from './menuComponent';
import {portfolioInfo} from "../assets/PortfolioContent";
import PortfolioOverview from './portfolioOverviewComponent';
import Portfolio from './portfolioComponent';
import ProjectsOverview from './projectsOverviewComponent';
import Projects from './projectsComponent';
import { projectsInfo } from '../assets/ProjectsContent';

 
class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      portfolio: portfolioInfo,
      projects: projectsInfo,
       
    }
   
    
  }


    render(){


        return(
            <div>

              <BurgerMenu/>
              
              <Header/>

              <Routes>

                <Route path = '/' element={<LandingPage/>}/>

                <Route path = '/projects' element = {<Projects projects = {this.state.projects}/>}/>
                
                {/* <Route path ='/projects/geogebra' element = {<ProjectsOverview/>}/> */}

                

                <Route path="/portfolio" element={<Portfolio projects = {this.state.portfolio} />} />              
           

                {
                this.state.portfolio.map( (item,index)=>{

             return(

               
                      <Route  
                              key = {index} 
                              path= { "/portfolio/" + item.title.replace(/\s/g, '')} 
                              element = {<PortfolioOverview  project = {item}/>
                                        }
                      />

                        

                    );

                 })

                } 

{
                this.state.projects.map( (item,index)=>{

             return(

               
                      <Route  
                              key = {index} 
                              path= { "/projects/" + item.title.replace(/\s/g, '')} 
                              element = {<ProjectsOverview  project = {item}/>
                                        }
                      />

                        

                    );

                 })

                } 
              </Routes>
            </div>
            
         
    )};

    
};

export default Main