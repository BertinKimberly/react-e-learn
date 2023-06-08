import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-fluid navbar d-flex justify-content-space-between '>
       <div className='my-logo'>
        <Link to='/'>Logo</Link>
       </div>
       <div className='nav-links'>
            <span><Link to='/'>Home</Link></span>
            <span><Link to='/about'>About</Link></span>
            <span><Link to='/courses'>Courses</Link></span>
            <span><Link to='/pages'>Pages</Link></span>
            <span><Link to='/blog'>Blog</Link></span>
       </div>
    </div>
  )
}

export default Navbar
