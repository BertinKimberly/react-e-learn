import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaGithub, FaGitlab, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-cont container-fluid bg-light'>
      <div className="row row-footer">
        <div className="col">
            <div>
                <Link to='/'>Logo</Link>
            </div>
            <div>
                <p>Follow us on social medias</p>
                <div className='social-media'>
                    <span><Link><FaGithub/></Link></span>
                <span><Link><FaGitlab/></Link></span>
                <span><Link><FaGithub/></Link></span>
                <span><Link><FaFacebook/></Link></span> 
                <span><Link><FaInstagram/></Link></span> 
                </div>
            </div>
        </div>
        <div className="col">
            <p className='fw-bold'>Explore</p>
            <p>
                <Link>Home</Link>
            </p>
            <p>
                <Link>About Us</Link>
            </p>
            <p>
                <Link>Courses</Link>
            </p>
            <p>
                <Link>Blog</Link>
            </p>
        </div>
        <div className="col">
            <p className='fw-bold'>Information</p>
            <p>
                <Link>Privacy Policy</Link>
            </p>
            <p>
                <Link>Membership</Link>
            </p>
            <p>
                <Link>Purchases Guide</Link>
            </p>
            <p>
                <Link>Terms of Service</Link>
            </p>
        </div>
        <div className="col">
        <p className='fw-bold p-1'>Get in Touch</p>
            <p className='p-1'>
                <Link>Phone 0780037145</Link>
            </p>
            <p className='p-1'>
                <Link>Email:iradukundabertin082@gmail</Link>
            </p>
           
        </div>
        <div className='copy-right'>
        <p>&copy; Bertin 2023</p>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
