import React from 'react';
import { Link} from 'react-router-dom';
import { Container } from 'reactstrap';


class Portfolio extends React.Component{    

  

    // componentDidMount(){
    //     console.log(this.props)
       
    // }

    render(){

        return(
                
        // <div className = 'projects-page' id ='projects-page'>

        <React.Fragment>

      

                <Container>
                    
                <h1 className = "projects-page-h1-title"> Portfolio</h1>

                            
                <p className = "projects-page-p">
                Check out my latest work.
                </p>
              

                </Container>


                <div className = "container">



                {
                    this.props.projects.map( (item,index) =>{
                        
                        

                        return(

                            <div key = {index} className =  {index % 2 == 0 ? ' d-flex flex-row-reverse  row pt-2 pb-2 projects-row-container': 'row pt-2 pb-2 projects-row-container' }>
                             

                            <div  className=' col-lg-6 col-sm-12 pb-2 '>
        
                                <h2 className = 'projects-title'> {item.title} </h2>
                                {/* <p className = "d-none d-md-block d-lg-block projects-page-p"> */}
                                <p className = "  projects-page-p">
                                    {item.shortDescription}
                                </p>
                                
                            </div>
        
                            <div  className='col-lg-6 col-sm-12 pb-3'> 

                                <Link
                                to = {"/portfolio/" + item.title.replace(/\s/g, '')} >

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
 
    
        {/* </div> */}

        </React.Fragment>

                
         
         
    )};

};

export default Portfolio
