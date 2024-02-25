import React from 'react';
import { Link} from 'react-router-dom';
import { Container } from 'reactstrap';


class Projects extends React.Component{    

  

    // componentDidMount(){
    //     console.log(this.props)
       
    // }

    render(){

        return(
                
        // <div className = 'projects-page' id ='projects-page'>

        <React.Fragment>

      

                <Container>
                    
                <h1 className = "projects-page-h1-title"> Projects</h1>

                            
                <p className = "projects-page-p">
                Who doesn't like a little recreational math?..(crickets).                 
                Well, I guess it's not for everyone, but there's something about 
                solving these complex problems that gives me great satisfaction. 
                This drive to find solutions to complex, often abstract, problems, 
                makes me excel as a web developer. I have perseverance. I may not know everything
                but I can learn and I don't easily give up. Here are some of the side projects I've worked on.
                </p>
              

                </Container>


                <div className = "container">



                {
                    this.props.projects.map( (item,index) =>{
                        
                        

                        return(

                            <div key = {index} className =  {index % 2 == 0 ? ' d-flex flex-row-reverse  row pt-2 pb-2 projects-row-container': 'row pt-2 pb-2 projects-row-container' }>
                             

                            <div  className=' col-lg-6 col-sm-12 pb-2 '>
        
                                <h2 className = 'projects-title'> {item.title} </h2>
                                <p className = "d-none d-md-block d-lg-block projects-page-p">
                                    {item.description}
                                </p>
                                
                            </div>
        
                            <div  className='col-lg-6 col-sm-12 pb-3'> 

                                <Link
                                to = {"/projects/" + item.title.replace(/\s/g, '')} >

                                <img className = 'projects-main-image'

                                    src= {item.image}

                                    style = {{
                                                width : "100%",
                                                backgroundColor: "rgba(25, 22, 45, 0.36)"
                                                                                        
                                            }}
                                    />
                                                                    
                                
                                </Link>
                                 

                 
                       
                            </div>
                            
                  
                        </div>


                        )                         
                    })
                }

      


            </div>
 
    
        {/* </div> */}

        </React.Fragment>

                
         
         
    )};

};

export default Projects
