import React from "react";
import "./Blogs.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

// import blogImg1 from "../assets/blogImg1.jpeg";
// import blogImg2 from "../assets/blogImg2.jpeg";
// import blogImg3 from "../assets/blogImg3.jpeg";
// import blogImg4 from "../assets/blogImg4.jpeg";
// import blogImg5 from "../assets/blogImg5.jpeg";
// import blogImg6 from "../assets/blogImg6.jpeg";
// import blogImg7 from "../assets/blogImg7.jpeg";
// import blogImg8 from "../assets/blogImg8.jpeg";

const Blogs = () => {
  return (
    <div>
      <div>
        <h2 className="text-center main-color p-4">BLOGS</h2>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          className="mySwiper blogs-cont p-4"
        >
          <SwiperSlide>
            <div className="card">
              <div className="blog-img-cont blog-img1"></div>
              <div>
                <p>
                  Kohinoor Kaleido: Unraveling the Essence of Luxurious Living
                  in Kharadi
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
              <div className="blog-img-cont blog-img2"></div>
              <div>
                <p>
                Kohinoor Developer Group: Unveiling Kohinoor Sportsville - The Perfect Blend of Luxury and Convenience
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
              <div className="blog-img-cont blog-img3"></div>
              <div>
                <p>
                Kohinoor Hinjewadi Central: A Luxurious Haven in the Heart of Hinjewadi
                </p>
              </div>
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
              <div className="blog-img-cont blog-img5"></div>
              <div>
                <p>
                Kohinoor Developer Group: Redefining Urban Living with Kohinoor Viva City in Dhanori
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
              <div className="blog-img-cont blog-img6"></div>
              <div>
                <p>
                Kohinoor Courtyard: The Epitome of Luxurious Living in Wakad
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
              <div className="blog-img-cont blog-img7"></div>
              <div>
                <p>
                Kohinoor Developer Group: Redefining Excellence in Real Estate
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
              <div className="blog-img-cont blog-img8"></div>
              <div>
                <p>
                Kohinoor Westview Reserve: Your Gateway to Luxury Living in Wakad
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
