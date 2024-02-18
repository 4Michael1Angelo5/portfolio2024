import React, { Component } from 'react';

  
class ProjectOverview extends React.Component{
    constructor(props){
        super(props)

        

    }


 


render(){

    let project = this.props.project; 
    let content = this.props.project.projectOverview;


   
    return(
    <div className = "project-overview-page">

            <div className = "container">

                <div className = "row">

                    <h1>{project.title}</h1>

                    <p> {project.description}</p>

                    <div className = "d-flex justify-content-end project-link-chill-vibes"> <a  href={ `${project.link}` }> visit site </a></div>

                </div>
                <div className = "row">

                    {
                        content.map( (content,index) => {
                       return(

                             
                        <div key = {index} className = "col-12 pb-4"> 

                        <h2 className = "projects-title"  >{content.title}</h2>

                        <img 
                             className='projects-main-image'
                            src = {content.image}
                            style = {{
                                width: "100%"
                            }}
                        
                        />
                        
                        </div>
                       )


                        })
                    }
                     
                </div>


            </div>



     <div className = "container">
     <div className = "iphone-case col" />
     <div className = "iphone-case col" />
     <div className = "iphone-case col" />
     </div>


                       
                    

    </div>
                        
    )
    
}

}
          
    

    export default ProjectOverview 

  