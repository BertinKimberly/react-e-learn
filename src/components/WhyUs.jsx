import React from 'react'
import vidImage from '../images/about.jpg'

const WhyUs = () => {
  return (
    <div className='header'>
     
       <div className="row">
        <div className="col">
        <h2>Why choose Us</h2>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias est, ratione soluta nobis voluptas libero veritatis. Perferendis sapiente impedit labore fugiat laboriosam eveniet iusto, facere quia tempore aspernatur, eum quas!</div>
        </div>
        <div className="col">
            <img src={vidImage} alt="intro-vid" />
        </div>
       </div>
    </div>
  )
}

export default WhyUs;
