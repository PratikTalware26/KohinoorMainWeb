import React from 'react'
import { Link } from 'react-router-dom';
import "./BlogsList.css"

const BlogsList = () => {
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
          <Link to="/kohinoordeveloper_group" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img2'>
            </div>
            <div className="p-2">
              <h6>Kohinoor Developer Group: </h6>
              <p className="small">Redefining Excellence in Real Estate</p>
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
          <Link to="/lodha_builders" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img5'>
            </div>
            <div className="p-2">
              <h6>Luxurious Living Redefined:</h6>
              <p className="small">Exploring Lodha Builders' Exquisite Projects</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/lodha_giardino" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img6'>
            </div>
            <div className="p-2">
              <h6>
                Exploring the Key Features and Location Benefits of Lodha Pune
              </h6>
              {/* <p>A Haven of Lifestyle and Luxury by Lodha</p> */}
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/lodha_panache" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img7'>
            </div>
            <div className="p-2">
              <h6>Unlocking the Marvels of Palava:</h6>
              <p className="small">A Haven of Lifestyle and Luxury by Lodha</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/lodha_panache" onClick={handleBlogLinkClick}>
            <div className='blog-img-cont blog-img8'>
            </div>
            <div className="p-2">
              <h6>Unlocking the Marvels of Palava:</h6>
              <p className="small">A Haven of Lifestyle and Luxury by Lodha</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsList;