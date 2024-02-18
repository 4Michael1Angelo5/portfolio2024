import React, { Component } from 'react'; 
import Header  from './headerComponent';
import LandingPage from './landingPage';
import Projects from './projectsComponent';
import {Routes, Route} from 'react-router-dom'; 
import BurgerMenu from './menuComponent';
import {projectsInfo} from "../assets/ProjectsContent";
import ProjectOverview from './projectOverviewComponent';

 
class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      projects: projectsInfo,
       
    }
   
    
  }

 

  componentDidUpdate(){
    console.log(this.state.selectedProject    )
  }


    render(){


        return(
            <div>

              <BurgerMenu/>
              
              <Header/>

              <Routes>

                <Route path = '/' element={<LandingPage/>}/>

                <Route path="/projects" element={<Projects projects = {this.state.projects} />} />

                {
                this.state.projects.map( (item,index)=>{

             return(

               
                      <Route  
                              key = {index} 
                              path= { "/projects/" + item.title.replace(/\s/g, '')} 
                              element = {<ProjectOverview  project = {item}/>
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