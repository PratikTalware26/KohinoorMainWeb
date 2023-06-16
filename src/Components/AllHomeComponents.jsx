import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import OngoingProjects from './OngoingProjects'
import Enquiry from './Enquiry'
import Blogs from './Blogs'

const AllHomeComponents = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <OngoingProjects/>
        <Blogs/>
        <Enquiry/>
    </div>
  )
}

export default AllHomeComponents