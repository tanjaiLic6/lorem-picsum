import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import '../Header/Header.css'
import logo from '../../assets/HTEC_logo.png';

export const Header=()=>{
 const [currentPage,setCurrentpage]=useState('all')
 
  function changePage(prop){
   setCurrentpage(prop)
   console.log(currentPage)
 }
//  onClick={()=>changePage('all')}
    return(
        <div className='nav'>
            <div className='logo-div'><img src={logo} className='logo'/></div>
            <div className='nav-links'>
               
                    <NavLink exact to='/'  onClick={(all)=>changePage('all')} className='link'> <div>All</div></NavLink>
                    <NavLink to='/random'   onClick={(random)=>changePage('random')} className='link'><div>Random</div></NavLink>
                    <NavLink to='/favorite'   onClick={(favorite)=>changePage('favorite')} className='link'><div>Favorite</div></NavLink>
                
            </div>
            <div>mode</div>
        </div>
    )
}