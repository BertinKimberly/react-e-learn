import React from 'react'
import heroImg from "../images/header-img.jpg"

const Header = () => {
  return (
    <div className='container-fluid'>
      <div className="header">
        <div className="row">
          <div className="col ">
              <div className="content">
                  <h3>Welcome and learn on our website</h3>
                  <div className="intro">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reprehenderit.</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, totam!</p>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, quo.</p>
                      <div className='searchbar'>
                        <input type="text" placeholder='search' />
                        <button className='btn btn-success'>Search</button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col">
                <img src={heroImg} alt='e-learn' width="90%" height="80%"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
