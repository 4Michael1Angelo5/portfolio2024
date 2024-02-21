import React  from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';


  class MobileGallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            activeIndex: 0 ,
            activeIndexMobile: 0
        
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

      }
      

      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        let items = this.props.content;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        let items = this.props.content;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
     
      render() {

        // carousel

        const { activeIndex } = this.state;
        let items = this.props.content ; 

        
    
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.image}              
            >
              <h3 className = "projects-title text-center  "> {item.title}</h3>

              <img src={item.image} alt={item.title} style = {{width : "100%"}}/>
              {/* <CarouselCaption captionText={item.title} captionHeader={item.title} /> */}
            </CarouselItem>
          );
        });

   

        return (
            <React.Fragment>            
            <div className = "container pt-0 pb-3  border-bottom-p">
            <div className = "row">
                    <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
            </div>
            </div>

             

            </React.Fragment>


          );
        }

     


  }

  class MobileGalleryContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            activeIndex: 0 ,
            activeIndexMobile: 0
        
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

      }
      

      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        let items = this.props.content;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        let items = this.props.content;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
     
      render() {

        // mobile phone carousel

        const { activeIndex } = this.state;
        let items = this.props.content ; 

        
    
        const slides = items.map((item) => {
          return (
 
              


            
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.title}
            >

                <h3 className = "projects-title text-center  "> {item.title}</h3>

                <div className = "container d-flex justify-content-center p-3">  

                <div className = "iphone-case-1 col col-md-3 col-lg-3"
                style = {{backgroundImage: `url(${item.image})`,
                          backgroundSize: "cover"                
              }}
                >
               
                </div>

                </div>
              
              {/* <CarouselCaption captionText={item.title}  /> */}
            </CarouselItem>
           
          );
        });

   

        return (
            <React.Fragment>     

            <div className = "container pt-0 pb-3  border-bottom-p ">
            <div className = "row">
                    <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
            </div>
            </div>

             

            </React.Fragment>


          );
        }

     


  }






  
class PortfolioOverview extends React.Component{
    constructor(props){
        super(props)

    }

render(){

    let project = this.props.project; 
    let content = this.props.project.projectOverview;
    let mobileContent = this.props.project.projectOverviewMobile;


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
                {/* <div className = "row">

                
                <div className = "col-6"> */}

                
                <h2 className = {'projects-page-h1-title mb-0 pt-2'}> Mobile </h2>
                <MobileGalleryContent content = {mobileContent}/>
                {/* </div>

                <div className = "col-6"> */}

                
                <h2 className = {'projects-page-h1-title mb-0 pt-2'}> Desktop </h2>
                {/* <MobileGallery   content = {content}  /> */}
                {/* </div>

                </div> */}

                {/* below is an alternate layout for desktop pictures */}

                <div className = "row pt-4">

                    {
                        content.map( (content,index) => {
                       return(

                             
                        <div key = {index} className = "col-12 pb-4"> 

                        <h2 className = "projects-title mb-3"  >{content.title}</h2>

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



  

        
       

         
   
    </React.Fragment>
                        
    )
    
}

}
          
    

    export default PortfolioOverview 

  