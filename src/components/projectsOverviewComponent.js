import React  from 'react';

 
class ProjectsOverview extends React.Component{
    constructor(props){
        super(props)

    }

render(){

    let project = this.props.project; 
    let content = this.props.project.projectOverview;
    


    return(

      <React.Fragment>
        

            <div className = "container">

                <div className = "row border-bottom-p pt-4 pb-2">

                    <h1 className = "projects-page-h1-title">{project.title}</h1>

                    <p className = " projects-page-p"> {project.description}</p>

                    <div className = "d-flex justify-content-end project-link-chill-vibes pb-2">
                       <a  href={ `${project.link}` }> visit site </a>
                    </div>

                    <h3 className = "tech-title">Technologies</h3> 
                    <div className = "contianer-fluid d-flex">
                    
                    <div className = "row d-flex ">
                      {
                        project.technologies.map( (item,index)=>{

                          return(

                            <div key={index} className = "col-1 pr-1 pl-1">
                             
                              <img src = {item.image} 
                              style ={{minWidth: "100%",
                                        maxWidth: "32px",                                                                       
                                      borderRadius: "100%"}}
                                       />
                            </div>
                            
                          )
                        })
                      }
                    </div>
                    </div>
                </div>

                <div className = "row pt-4">

                    {
                        content.map( (content,index) => {
                       return(

                             
                        <div key = {index} className = "col-12 pb-4"> 

                        <h2 className = "projects-title mb-3"  >{content.title}</h2>
                        <p className = "projects-page-p"> {content.description}</p>

                        <img 
                             className='projects-main-image'
                            src = {content.image}
                            style = {{
                                width: "100%",
                                backgroundColor: "#19162d5c"
                            }}
                        
                        />
                        
                        </div>
                       )


                        })
                    }
                     
                </div>

            </div>



  

        
       

         
   
    </React.Fragment>
                        
    )
    
}

}
          
    

    export default ProjectsOverview 

  