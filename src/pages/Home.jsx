import React from 'react'
import Header from '../components/Header'
import AboutIntro from '../components/AboutIntro'
import PopularCourses from '../components/PopularCourses'
import WhyUs from '../components/WhyUs'
import LearningChoice from '../components/LearningChoice'
import FreeCourses from '../components/FreeCourses'
import Testimonials from '../components/Testimonials'
import Subscribe from '../components/Subscribe'


const Home = () => {
  return (
    <div className='homepage'>
       <Header/>
       <AboutIntro/>
       <PopularCourses/>
       <WhyUs/>
       <LearningChoice/>
       <FreeCourses/>
       <Testimonials/>
       <Subscribe/>
    </div>
  )
}

export default Home
