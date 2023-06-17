import React, { useEffect, useState } from "react";
import "./Blogs.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

// import blogImg1 from "../assets/blogImg1.jpeg";
// import blogImg2 from "../assets/blogImg2.jpeg";
// import blogImg3 from "../assets/blogImg3.jpeg";
// import blogImg4 from "../assets/blogImg4.jpeg";
// import blogImg5 from "../assets/blogImg5.jpeg";
// import blogImg6 from "../assets/blogImg6.jpeg";
// import blogImg7 from "../assets/blogImg7.jpeg";
// import blogImg8 from "../assets/blogImg8.jpeg";

const Blogs = () => {
    const [windowWidth, setWindowWidth]= useState(window.innerWidth);
    const [slides, setSlides]= useState(3)
    useEffect(()=>{
        const handleResize=()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    },[])

    useEffect(()=>{
        if(windowWidth<700){
            setSlides(1)
        }else if(windowWidth<1000){
            setSlides(2)
        }else{
            setSlides(3)
        }
    }, [windowWidth])
  return (
    <div id="blogs">
      <div>
        <h2 className="text-center main-color p-4">BLOGS</h2>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          slidesPerView={slides}
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          className="mySwiper blogs-cont p-4"
        >
          <SwiperSlide>
            <div className="card">
                <Link to="/kohinoor_kaleido">
              <div className="blog-img-cont blog-img1"></div>
              <div>
                <p>
                  Kohinoor Kaleido: <small>Unraveling the Essence of Luxurious Living
                  in Kharadi</small>
                </p>
              </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <Link to="/kohinoor_sportsville">
              <div className="blog-img-cont blog-img2"></div>
              <div>
                <p>
                Kohinoor Developer Group: <small>Unveiling Kohinoor Sportsville - The Perfect Blend of Luxury and Convenience</small>
                </p>
              </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <Link to="/kohinoor_hinjewadi_central">
              <div className="blog-img-cont blog-img3"></div>
              <div>
                <p>
                Kohinoor Hinjewadi Central: <small>A Luxurious Haven in the Heart of Hinjewadi</small>
                </p>
              </div>
              </Link>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
          <div className="card">
              <div className="blog-img-cont blog-img4"></div>
              <div>
                <p>
                  Kohinoor Kaleido: Unraveling the Essence of Luxurious Living
                  in Kharadi
                </p>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
          <div className="card">
            <Link to="/kohinoor_vivacity_dhanori">
              <div className="blog-img-cont blog-img5"></div>
              <div>
                <p>
                Kohinoor Developer Group: <small>Redefining Urban Living with Kohinoor Viva City in Dhanori</small>
                </p>
              </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <Link to="/kohinoor_courtyard">
              <div className="blog-img-cont blog-img6"></div>
              <div>
                <p>
                Kohinoor Courtyard: The Epitome of Luxurious Living in Wakad
                </p>
              </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
          <Link to="/kohinoordeveloper_group">
              <div className="blog-img-cont blog-img7"></div>
              <div>
                <p>
                Kohinoor Developer Group: Redefining Excellence in Real Estate
                </p>
              </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <Link to="/kohinoor_westview_reserve">
              <div className="blog-img-cont blog-img8"></div>
              <div>
                <p>
                Kohinoor Westview Reserve: Your Gateway to Luxury Living in Wakad
                </p>
              </div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
