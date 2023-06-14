import React, { useRef, useState } from "react";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import Img1 from "../assets/abhimaan-home-page-banner.webp";
import Img2 from "../assets/kbt-home-desktop-banner.webp";
import Img3 from "../assets/kohinoor-hinjawadi-central-desktop-home.webp";
import Img4 from "../assets/kohinoor-kaleido-desktop-banner.webp";
import Img5 from "../assets/kohinoor-shangrila-desktop-banner.webp";
import Img6 from "../assets/main-banner.webp";

const Home = () => {
  return (
    <div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div>
              <img src={Img1} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img2} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img3} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img4} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img5} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img6} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="text-center py-5">
        <div className="d-flex justify-content-evenly projects-hlt">
        <div>
            <h2>39+</h2>
            <h4>PROJECTS<br></br> ACROSS PUNE</h4>
        </div>
        <div>
            <h2>39 YEARS</h2>
            <h4>OF MATCHLESS <br></br>LEGACY</h4>
        </div>
        <div>
            <h2>8 MILLION</h2>
            <h4>SQUARE FEET <br></br>DELIVERED</h4>
        </div>
        <div>
            <h2>6.5K</h2>
            <h4>HAPPY<br></br> FAMILIES</h4>
        </div>
        </div>
        <div><button className="btn mt-5 main-btn">Know More</button></div>
      </div>
    </div>
  );
};

export default Home;
