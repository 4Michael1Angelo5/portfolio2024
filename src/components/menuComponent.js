import React from 'react'
import {bubble as Menu} from 'react-burger-menu';
import { Link, Routes,Route } from "react-router-dom";
import icon from '../assets/images/logo.png'

 


class BurgerMenu extends React.Component{


    showSetting(event){
      event.preventDefault();
    }
    render(){
      return(
       <Menu customBurgerIcon = {<img src={icon} /> } right>


          <Link id="home" className="menu-item" to='/' >Home</Link>

          <Link id="about" className="menu-item" to='/projects'>  Projects </Link>


      </Menu>

      )
    }
  }

  export default BurgerMenu

  
