import React from "react";
import email from "../assets/images/Technologies/email.png";
import gitHub from "../assets/images/Technologies/gitHub.png";


class Footer extends React.Component{

    render(){
        return(

            <div className="footer">
                <div className = "container-fluid">

                    <div className = "row p-1">

                        <div className=" col-6">

                            <p className = "mb-0">Chris Chun Webdeveloper Portfolio</p>
                            

                        </div>

                        <div className = "col-3 d-flex justify-content-center ">

                        <a href = "https://github.com/4michael1Angelo5">

                            GitHub: <br/>
                        
                          <img src = {gitHub}
                          style = {{
                            width: "30px"
                          }}/>

                        </a>
                          

                        </div>

                        <div className = "col-3 d-flex justify-content-center">

                        
                        <a href = "mailto: 4michael1angelo5@gmail.com"> 
                        Email: <br/>
                        <img src = {email}
                          style = {{
                            width: "30px"
                          }}/>

                        </a>

                        </div>


                    </div>

                </div>            
            </div>
        );
    }
}

export default Footer;
