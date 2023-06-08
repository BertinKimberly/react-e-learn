import React from 'react'
import courseImg from '../images/header-img.jpg'
import { Link } from 'react-router-dom'

const PopularCourses = () => {
  return (
    <div className='popular'>
        <h3>Popular courses</h3>
      <div className="row">
      <div className='col'><div className="card" style={{width: "18rem"}}>
         <img src={courseImg} className="card-img-top" alt="course"/>
  <div className="card-body">
    <h5 className="card-title">course</h5>
    <p className="card-text">Basics</p>
    <Link to="/">Enroll </Link>
  </div>
</div></div>
<div className='col'><div className="card" style={{width: "18rem"}}>
         <img src={courseImg} className="card-img-top" alt="course"/>
  <div className="card-body">
    <h5 className="card-title">course</h5>
    <p className="card-text">Basics</p>
    <Link to="/">Enroll </Link>
  </div>
</div></div>
<div className='col'><div className="card" style={{width: "18rem"}}>
         <img src={courseImg} className="card-img-top" alt="course"/>
  <div className="card-body">
    <h5 className="card-title">course</h5>
    <p className="card-text">Basics</p>
    <Link to="/">Enroll </Link>
  </div>
</div></div>
        
        </div>
      </div>

  )
}

export default PopularCourses
