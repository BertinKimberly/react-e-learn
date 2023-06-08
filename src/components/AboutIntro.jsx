import React from 'react'
import AboutImg from '../images/about.jpg'

const AboutIntro = () => {
  return (
    <div className='header'>
       <div className="row">
        <div className="col">
        <img src={AboutImg} alt='e-learn' width="90%" height="80%"/>
        </div>
        <div className="col">
             <div className="content">
                <h3>About Us</h3>
                <div className='about-content'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, consequuntur.</p>
                    <div className="our-status"></div>
                </div>
             </div>
        </div>
       </div>
    </div>
  )
}

export default AboutIntro
