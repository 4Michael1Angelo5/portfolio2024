import React from 'react'
import {bubble as Menu} from 'react-burger-menu';
import {useNavigate} from "react-router-dom";
import icon from '../assets/images/logo.png'

 function MenuLink(props) {

  let navigate = useNavigate();
 const followLink = (e)=>{
  e.preventDefault()
  props.toggle(e)
  navigate("/" + props.target)
 }
 

return (
  <div className = "bm-item menu-item" onClick={e=>followLink(e)}>
    {props.target.length == 0 ? "home" : props.target}      
  </div>
)
}

 


class BurgerMenu extends React.Component{

  constructor(props){
    super(props)
    this.state={
      open :false
    }

    this.toggle = this.toggle.bind(this); 
  }

 


  toggle=(e)=> {
    e.preventDefault();
    this.setState({open:false})
    }

    showSetting(event){
      event.preventDefault();
    }

    handleStateChange (state) {
      this.setState({open: state.open})  
    }
    render(){

  

      return(
       <Menu isOpen = {this.state.open} customBurgerIcon = {<img src={icon} /> } 
            right onStateChange={(state) => this.handleStateChange(state)}
            >



          <MenuLink target = {""} toggle ={e=>this.toggle(e)}/>

          <MenuLink target = {"portfolio"} toggle ={e=>this.toggle(e)}/>

          <MenuLink target = {"projects"} toggle ={e=>this.toggle(e)}/>

          <MenuLink target = {"resume"} toggle ={e=>this.toggle(e)}/>
         

      </Menu>

      )
    }
  }

  export default BurgerMenu

  
