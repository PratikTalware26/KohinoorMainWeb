import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import OngoingProjects from './OngoingProjects'
import Enquiry from './Enquiry'

const AllHomeComponents = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <OngoingProjects/>
        <Enquiry/>
    </div>
  )
}

export default AllHomeComponents