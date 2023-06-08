import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  const [toggleNav,setToggleNav]=useState(false)
  const closeNavBar=()=>{
    setToggleNav(!toggleNav)
  }
  return (
    <div className='container-fluid navbar d-flex justify-content-space-between '>
       <div className='my-logo'>
        <Link to='/'>Logo</Link>
       </div>
      <div className={toggleNav? 'nav-links hide': "nav-links show"}>
            <span><Link to='/'>Home</Link></span>
            <span><Link to='/about'>About</Link></span>
            <span><Link to='/courses'>Courses</Link></span>
            <span><Link to='/pages'>Pages</Link></span>
            <span><Link to='/blog'>Blog</Link></span>
            
       </div>
       <div onClick={closeNavBar} className='p-2 close-nav'>
              {toggleNav? <FaBars /> :    <FaTimes /> }
            </div>
    </div>
  )
}

export default Navbar
