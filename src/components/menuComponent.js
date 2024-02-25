import React from 'react'
import {bubble as Menu} from 'react-burger-menu';
import { Link, Routes,Route } from "react-router-dom";
import icon from '../assets/images/logo.png'

 


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
    this.setState({open:!this.state})
    }


    showSetting(event){
      event.preventDefault();
    }
    render(){
      return(
       <Menu   customBurgerIcon = {<img src={icon} /> } right>


            <Link id="home" className="menu-item" to='/'   >Home</Link> 

          <Link id="portfolio" className="menu-item" to='/portfolio' >Portfolio</Link>

          <Link id="projects" className="menu-item" to='/projects'>  Projects </Link>

          <Link id = "resume" className = 'menu-item' to = '/resume'> Resume </Link>


      </Menu>

      )
    }
  }

  export default BurgerMenu

  
