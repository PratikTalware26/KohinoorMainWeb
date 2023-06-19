import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about-cont d-flex align-items-center' id="about">
        <div>
        <div><h1 className='text-center p-3 main-color'>ABOUT US</h1></div>
        <div className='d-flex p-3 align-items-center'>
            <div className='about-cont-img'></div>
            <div className='p-2 desc-cont'>
            <p>
            Kohinoor Developers Pune is a leading real estate company that has carved a niche for itself in the vibrant city of Pune. With an impressive legacy of over three decades, the company has consistently delivered exceptional residential and commercial projects, setting new benchmarks in quality and design.
            </p>
            <p>
            With a portfolio of over 30 successful projects, Kohinoor Developers Pune has transformed the lives of thousands of homeowners. The company has built more than 5,000 homes, ranging from luxurious apartments to spacious villas, catering to a wide range of lifestyles and preferences. Their projects boast state-of-the-art amenities, innovative architectural designs, and meticulous attention to detail.
            </p>
            <p>
            Kohinoor Developers Pune's commitment to sustainability is evident in their eco-friendly initiatives. They have incorporated energy-efficient features and green technologies in their projects, reducing the carbon footprint and promoting a healthier living environment.
            </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About