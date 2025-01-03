import React, { useState, useEffect } from 'react';
import MobileGalleryContent from "./mobileGalleryComponent"

// This component is responsible for presenting an 
// individual project or portfolio work piece

// its pretty much displays information in the same way as conentComponent
// but does not have an alternating pattern

//@TODO: use framer motion to animate each element on mount; 

const Presentation =({project,beerMe})=>{

  const [screenHeight,setScreenHeight] = useState(window.innerHeight);

useEffect(()=>{

  setScreenHeight(window.innerHeight);
  // important for determing spacing bewtween sections
  // avoiding pitfalls on mobile of setting height in vh

  window.scrollTo(0,0);
  // scroll to top of page on mount

},[])

    const content = project.projectOverview;

    // if there is mobile content, mobile content is mobile content if there is not then its null
    const mobileContent = project.projectOverviewMobile?project.projectOverviewMobile:null ;

    return(
        <React.Fragment>

        <div className="container">
          <div className="row border-bottom-p pt-4 pb-2">
  
          <h1 className="projects-page-h1-title">{project.title}</h1>
          <div className = "content-decription-container">
          <p className="projects-page-p">{project.description}</p>
          </div>
  
            {
                // if it has a project link
                project.link
                ?
                // return a button with a link
                <div className="d-flex justify-content-end pb-2">
                <a
                  href={project.link}
                  className={beerMe ? "link md-btn beerMe-btn" : "link md-btn"} //if dark theme is true or false
                >
                  Visit site
                </a>
              </div>
            //   otherwise return null
              :
              null

            }
            
            {/* display list of technologies used in the project */}
            <h3 className="tech-title">Technologies</h3>
            <div className="container-fluid">
              <div className="row">
                {project.technologies.map((item, index) => (
                  <div key={index} className="col-1 pr-1 pl-1">
                    <img
                      src={item.image}
                      style={{
                        minWidth: "100%",
                        maxWidth: "32px",
                        borderRadius: "100%",
                      }}
                      alt={item.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {
            // if the content has a mobile gallery to display
            mobileContent
            ?
            // display the mobile gallery content
            <React.Fragment>
                <h2 className="projects-page-h1-title mb-0 pt-2">Mobile</h2>
                <MobileGalleryContent content={mobileContent} />        
                <h2 className="projects-page-h1-title mb-0 pt-2">Desktop</h2>
            </React.Fragment>
            // otherwise return null
            :
            null

          }
     
          <div className=" pt-4">
            {content.map((contentItem, index) => (
              <div key={index} className='section justify-content-center align-content-center'
                style = {{
                  minHeight: `${.75*screenHeight}px`, 
                  // set the min width of each section so that 
                  // the user can see the cool animating background in between sections
                  // adjust as needed
                  flexWrap:"wrap"
                  }}
                >
              <div  className="col-12 col-md-8 col-lg-8  pb-4">
                <h2 className="projects-title mb-3">{contentItem.title}</h2>
                {
                    //if it has a description
                    contentItem.description 
                    ?
                    // return its description
                    <div className="content-decription-container">
                    <p className="projects-page-p">{contentItem.description}</p>
                    </div>
                    // otherwise return null
                    :
                    null                    
                }
                <img
                  className="projects-main-image"
                  src={contentItem.image}
                  alt = {contentItem.title}
                  style={{ 
                    width: "100%",
                    backgroundColor: "#19162d5c", 
                  }}
                />
              </div>
              </div>
            ))}
          </div>
        </div>
        {
            // if it has a video prop
            project.video
            ?
            // return the video @TODO: need to give the video fied anothe prop
            // like videoDescription (right now only one project (sangaku13) has a
            // video but in the future a video might be wanted for other projects/ works
            <div className="container">
            <div className="row d-flex justify-content-center pt-4">
                <div  className="col-12 col-md-8 col-lg-8  pb-4">
            <div className='content-decription-container'>
            <p className="projects-page-p">Now for some fun animations!</p>
            </div>
            <video
                className="mt-3 projects-main-image"
                src={project.video}
                autoPlay
                playsInline
                type="video/mp4"
                loop
                style={{ marginLeft: "0px", marginRight: "0px", width: "100%" }}
            />
            </div>
            </div>
            </div>
            :
            // otherwise return null
            null
        }

      </React.Fragment>
    )
}

export default Presentation