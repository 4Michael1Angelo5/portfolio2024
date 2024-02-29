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
import Resume from './resumeComponent';
import Footer from './footerComponent';
 
class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      portfolio: portfolioInfo,
      projects: projectsInfo,
      beerMe: false
      
       
    }    
    this.toggleBeerMe = this.toggleBeerMe.bind(this);
    this.renderBeerMe = this.renderBeerMe.bind(this); 
  }

  toggleBeerMe = () =>{
    this.setState({beerMe:!this.state.beerMe})
  }

  renderBeerMe = () =>{

    


      if (this.state.beerMe) {
        // document.getElementsByClassName('App').
        let appCss = document.getElementsByClassName('App') 
        appCss[0].classList.replace("App" , "beerMe-landing-page")
      }   
      else {
        let appCss = document.getElementsByClassName('beerMe-landing-page')
        appCss[0].classList.replace("beerMe-landing-page" , "App")

      }   
    
  }


  componentDidUpdate(){
    this.renderBeerMe()
  }

  


    render(){

         


        return(
            <React.Fragment>

              <BurgerMenu/>
              
              <Header beerMe = {this.state.beerMe} toggleBeerMe = {this.toggleBeerMe}/>

              <Routes>

                <Route path = '/' element={<LandingPage beerMe = {this.state.beerMe}/>}/>

                <Route path = '/resume'  element = {<Resume  beerMe ={this.state.beerMe}/> }/>

                <Route path = '/projects' element = {<Projects projects = {this.state.projects}/>}/>
              

                <Route path="/portfolio" element={<Portfolio projects = {this.state.portfolio} />} />              
           

                {
                this.state.portfolio.map( (item,index)=>{

             return(

               
                      <Route  
                              key = {index} 
                              path= { "/portfolio/" + item.title.replace(/\s/g, '')} 
                              element = {<PortfolioOverview beerMe = {this.state.beerMe} project = {item}/>
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
                              element = {<ProjectsOverview beerMe = {this.state.beerMe} project = {item}/>
                                        }
                      />

                        

                    );

                 })

                } 
              </Routes>
              <Footer/>
            </React.Fragment>
            
         
    )};

    
};

export default Main