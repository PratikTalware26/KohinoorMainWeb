import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import OngoingProjects from './OngoingProjects'
import Enquiry from './Enquiry'
import Blogs from './Blogs'
import About from './About'
import BottomButtons from './BottomButtons'

const AllHomeComponents = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <OngoingProjects/>
        <Blogs/>
        <Enquiry/>
        <BottomButtons/>
    </div>
  )
}

export default AllHomeComponents