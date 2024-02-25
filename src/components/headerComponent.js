import React from 'react'; 
import  {Navbar} from 'reactstrap';
import {Link } from 'react-router-dom';


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

                    <Link to = {"/portfolio"}
                    style= {{
                        color:  "blanchedalmond" ,
                        textDecoration: "none"
                        }}>
                        portfolio

                        </Link>
                    </div>

                    
                   
                
                    <div className = "col d-none  d-md-block d-lg-block nav-btn"  >
                    <Link to = {"/projects"}
                      style= {{
                      color:  "blanchedalmond" ,
                      textDecoration: "none"
                      }}>
                        projects
                        </Link>
                    </div>
                    

                    <div className = "col d-none  d-md-block d-lg-block nav-btn" 
                    style ={{
                      color:"blanchedalmond",
                      textDecoration: "none"
                    }} >

                      <Link to = {"/resume"}
                      style= {{
                      color:  "blanchedalmond" ,
                      textDecoration: "none"
                      }}>
                        resume
                        </Link>


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
