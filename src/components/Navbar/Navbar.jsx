import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const[menubar,setMenubar]=useState("home")
    console.log(menubar)
  return (
    <div className='navbar'>
    <h1>Cucumber</h1> 
      <ul className='navbar-menu'>
        <li onClick={()=> setMenubar("home")} className={menubar === "home" ? "active" :""} >Home</li>
        <li onClick={()=> setMenubar("menu")}  className={menubar === "menu" ? "active" :""}>Menu</li>
        <li onClick={()=> setMenubar("aboutus")} className={menubar === "aboutus" ? "active" :""}>About Us</li>
      </ul>
      <div className='navbar-right'>
         <span class="material-symbols-outlined">search</span>
         <span class="material-symbols-outlined">shopping_cart</span>
        <button className='navbar-button'>Signin</button>  
        
                            
      </div>
      
     
      
    </div>
  )
}

export default Navbar
