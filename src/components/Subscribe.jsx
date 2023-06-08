import React from 'react'

const Subscribe = () => {
  return (
    <div className='container bg-success sub'>
        <h4 className='text-white'>Subscribe to us</h4>
        
        <div className='subscribe-form'>
            <input type='text' placeholder='email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe
