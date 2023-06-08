import React from 'react'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Courses from './pages/Courses'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
   <Router>
     <Navbar/>
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/courses"  element={<Courses/>}/>
      <Route path="/blog"  element={<Blog/>}/>
     </Routes>
     <Footer/>
   </Router>
  )
}

export default App
