import React from 'react'
import { Link } from 'react-router-dom';
import "./BlogsList.css"

const BlogsList = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleBlogLinkClick = () => {
        const isMobileView = window.innerWidth <= 900; // Define the breakpoint for mobile view
        if (isMobileView) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const blogListParent = document.querySelector(".blog-list-parent");
          if (blogListParent) {
            blogListParent.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
  return (
    <div className="blog-list-parent">
      <div>
        <h2 className="text-center">More Blogs</h2>
      </div>
      <div className="blog-list-cont">
        <div className="card">
          <Link to="/kohinoor_kaleido" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img1'>
            </div>
            <div className="p-2">
              <h6>Kohinoor Kaleido: </h6>
              <p className="small">Unraveling the Essence of Luxurious Living
                  in Kharadi</p>
            </div>
          </Link>
        </div>
        <div className="card">
            <Link to="/kohinoor_sportsville">       
            <div className='blog-img-cont blog-img2'>
            </div>
            <div className="p-2">
              <h6>Kohinoor Developer Group: </h6>
              <p className="small">Unveiling Kohinoor Sportsville - <small>The Perfect Blend of Luxury and Convenience</small></p>
            </div>
            </Link>
        </div>
        <div className="card">
          <Link to="/kohinoor_hinjewadi_central" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img3'>
            </div>
            <div className="p-2">
              <h6>Kohinoor Hinjewadi Central: </h6>
              <p className="small">A Luxurious Haven in the Heart of Hinjewadi</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/kohinoor_vivacity_dhanori" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img5'>
            </div>
            <div className="p-2">
              <h6>Kohinoor Developer Group: </h6>
              <p className="small">Redefining Urban Living with Kohinoor Viva City in Dhanori</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/kohinoor_courtyard" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img6'>
            </div>
            <div className="p-2">
              <h6>
              Kohinoor Courtyard:
              </h6>
              <p className="small">The Epitome of Luxurious Living in Wakad</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/kohinoordeveloper_group" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img7'>
            </div>
            <div className="p-2">
              <h6>Kohinoor Developer Group: </h6>
              <p className="small">Redefining Excellence in Real Estate</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/kohinoor_westview_reserve" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img8'>
            </div>
            <div className="p-2">
              <h6>Kohinoor Westview Reserve: </h6>
              <p className="small">Your Gateway to Luxury Living in Wakad</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsList;