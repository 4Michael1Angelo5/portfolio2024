import React from 'react'; 
import  {Navbar} from 'reactstrap';
import {Link } from 'react-router-dom';
import dark1 from "../assets/images/icons/dark1.png";
import light1 from "../assets/images/icons/light1.png";
 


const Switch = (props) => {
  const icon = props.beerMe? dark1:light1;
    return (
      <>
        <input
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          onClick = {props.toggleBeerMe} 
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
           
          <span className={`react-switch-button`}
            style={{
              backgroundImage:` radial-gradient(circle at 100px 100px, #1310e6d9 0%, #a61c5c54 86%, #ff00008a 95%),url(${icon})`,
              backgroundSize:"contain"
            }}    
          />
        </label>

        
      </>
    );
  };

 
class Header extends React.Component{
  


    render(){
        return(

                <div className = "container-fluid ">
                
                    <Navbar className= "row d-flex align-content-center">
                        
                    <div className = "col-6">
                    
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
 
                    <div className = "col d-flex justify-content-end nav-btn">
                        <Switch beerMe = {this.props.beerMe} toggleBeerMe = {this.props.toggleBeerMe}/>
                    </div>

                    

                    


                    </Navbar>

                   

                     </div> 
                    
                    

        )
    }
}

export default Header
