import React from 'react';
import { Link} from 'react-router-dom';
import { Container } from 'reactstrap';
import ProjectOverview from './projectOverviewComponent';

 


class Projects extends React.Component{    

  

    // componentDidMount(){
    //     console.log(this.props)
       
    // }

    render(){

        return(
                
        <div className = 'projects-page' id ='projects-page'>


                <Container>
                    
                <h1> Projects</h1>

                            
                <p>
                I'm baby microdosing gastropub tumblr DSA sartorial fingerstache
                swag drinking vinegar readymade squid chambray ascot neutral milk 
                hotel. YOLO post-ironic snackwave retro. Organic street art shoreditch 
                shabby chic hexagon fam vaporware tumeric ramps gatekeep seitan DSA. Blue 
                bottle retro cornhole iPhone, disrupt letterpress austin.
                </p>
              

                </Container>


                <div className = "container">



                {
                    this.props.projects.map( (item,index) =>{
                        
                        

                        return(

                            <div key = {index} className =  {index % 2 == 0 ? ' d-flex flex-row-reverse  row pt-2 pb-2 projects-row-container': 'row pt-2 pb-2 projects-row-container' }>
                             

                            <div  className=' col-lg-6 col-sm-12 pb-2 '>
        
                                <h2 className = 'projects-title'> {item.title} </h2>
                                <p className = "d-none d-md-block d-lg-block">
                                    {item.description}
                                </p>
                                
                            </div>
        
                            <div  className='col-lg-6 col-sm-12 pb-3' 

                                // onClick={ e=>(this.props.chooseProject(e,item))}
                                > 

                                <Link
                                to = {"/projects/" + item.title.replace(/\s/g, '')} >

                                <img className = 'projects-main-image'

                                    src= {item.image}

                                    style = {{
                                                width : "100%",
                                                                                        
                                            }}
                                    />
                                                                    
                                
                                </Link>
                                 

                 
                       
                            </div>
                            
                  
                        </div>


                        )                         
                    })
                }

      


            </div>
 
    
        </div>
                
         
         
    )};

};

export default Projects
