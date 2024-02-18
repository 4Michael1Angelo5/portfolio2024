import React from 'react'; 
import  {Navbar} from 'reactstrap';


const Switch = () => {
    return (
      <>
        <input
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>

        
      </>
    );
  };

 
class Header extends React.Component{
    render(){
        return(

                <div className = "container-fluid">
                
                    <Navbar className= "row d-flex">
                        
                    <div className = "col-8">
                    
                    {/* filler to justify-content-end
                    <div className = "logo"/> */}

                    </div>
                                     
                
                    <div  className = "col d-none d-md-block d-lg-block  nav-btn" >
                        portfolio
                    </div>
                   
                    <div className = "col d-none  d-md-block d-lg-block nav-btn"  >
                        projects
                    </div>

                    <div className = "col d-none  d-md-block d-lg-block nav-btn" >
                        resume
                    </div>
 
                    <div className = "col d-none d-lg-block nav-btn">
                        <Switch/>
                    </div>

                    

                    


                    </Navbar>

                   

                    </div> 
                    
                    

        )
    }
}

export default Header
