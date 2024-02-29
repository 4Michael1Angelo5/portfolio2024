import React from 'react'; 
import  {Navbar} from 'reactstrap';
import {Link } from 'react-router-dom';


const Switch = (props) => {
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
                   
          />
        </label>

        
      </>
    );
  };

 
class Header extends React.Component{
  

  componentDidMount(){
    console.log(this.props)
  }

    render(){
        return(

                <div className = "container-fluid">
                
                    <Navbar className= "row d-flex">
                        
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
                        <Switch toggleBeerMe = {this.props.toggleBeerMe}/>
                    </div>

                    

                    


                    </Navbar>

                   

                    </div> 
                    
                    

        )
    }
}

export default Header
