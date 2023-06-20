import React, { useState, useEffect, useContext } from "react";
import "./Home.css";
import axios from "axios";
import mainLogo from "../assets/Kohinoor new logo for website-01 (1)-2.webp"; 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";

import Img1 from "../assets/abhimaan-home-page-banner.webp";
import Img2 from "../assets/kbt-home-desktop-banner.webp";
import Img3 from "../assets/kohinoor-hinjawadi-central-desktop-home.webp";
import Img4 from "../assets/kohinoor-kaleido-desktop-banner.webp";
import Img5 from "../assets/kohinoor-shangrila-desktop-banner.webp";
import Img6 from "../assets/main-banner.webp";

import MobImg1 from "../assets/abhimaan-overview-banner-mobile.jpeg";
import MobImg2 from "../assets/kbt-overview-banner-mobile.jpeg";
import MobImg3 from "../assets/kohinoor-hinjawadi-central-mobile-home.webp";
import MobImg4 from "../assets/kohinoor-kaleido-mobile-banner.webp";
import MobImg5 from "../assets/kohinoor-shangrila-mobile-banner.jpeg";
import MobImg6 from "../assets/wvr-overview-mobile-banner-new.webp";

import { useLocation, useNavigate } from "react-router-dom";
import { ThanksContext } from "../App";

const Home = () => {
  const navigate = useNavigate();
  //Thanks state
    const {setThanksState}= useContext(ThanksContext)
  //Handeling Navbar toggling icon
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // setTimeout(()=>{
    //   setFormpopup(!formPopup)
    // },5000)
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "home",
    ip: "",
    domain: "kohinoordeveloper.in",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setEnquiryData({ ...enquiryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(enquiryData);
    try {
        const fetchData= async ()=>{
          const jsonData= JSON.stringify(enquiryData)
          await axios.post("https://www.crm.brickfolio.in/api/leads/add_raw_lead", jsonData,{
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Access-Control-Allow-Origin": "*",
            },
          }
          )
          .then((res)=>{
            setFormpopup(false)
            setThanksState(true)
            navigate("/thanks")
          })
        }
        fetchData()
      // console.log(enquiryData);
    } catch (error) {
      console.log(error.message);
    }
  };

  //utm data
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("utm_source")) {
      setEnquiryData((prevData) => ({
        ...prevData,
        utm_source: searchParams.get("utm_source"),
        utm_medium: searchParams.get("utm_medium"),
        utm_campaign: searchParams.get("utm_campaign"),
        utm_term: searchParams.get("utm_term"),
        utm_content: searchParams.get("utm_content"),
      }));
    }
  }, [location]);

  //form popup
  const [formPopup, setFormpopup] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    if (formPopup) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setTransitionClass("popupEffect");
      }, 10); // Delay adding the class
    } else {
      setTransitionClass(""); // Remove the class immediately
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [formPopup]);

  //closing popup with transition
  const [isExiting, setIsExiting] = useState(false);

  const closePopup = () => {
    setIsExiting(true);
    setTimeout(() => {
      setFormpopup(false);
      setIsExiting(false);
    }, 300); // Duration of the transition in milliseconds
  };

  return (
    <div className="home-cont" id="home">
      <div>
        <Swiper navigation={true} pagination={{dynamicBullets:true, clickable:true}} autoplay={{delay:5000}} modules={[Navigation, Autoplay, Pagination]} className="mySwiper">
          <SwiperSlide>
            <div>
              {windowWidth < 800 ? (
                <img src={MobImg1} alt="" className="w-100 h-100" />
              ) : (
                <img src={Img1} alt="" className="w-100 h-100" />
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {windowWidth < 800 ? (
                <img src={MobImg2} alt="" className="w-100 h-100" />
              ) : (
                <img src={Img2} alt="" className="w-100 h-100" />
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {windowWidth < 800 ? (
                <img src={MobImg3} alt="" className="w-100 h-100" />
              ) : (
                <img src={Img3} alt="" className="w-100 h-100" />
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {windowWidth < 800 ? (
                <img src={MobImg4} alt="" className="w-100 h-100" />
              ) : (
                <img src={Img4} alt="" className="w-100 h-100" />
              )}{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {windowWidth < 800 ? (
                <img src={MobImg5} alt="" className="w-100 h-100" />
              ) : (
                <img src={Img5} alt="" className="w-100 h-100" />
              )}{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {windowWidth < 800 ? (
                <img src={MobImg6} alt="" className="w-100 h-100" />
              ) : (
                <img src={Img6} alt="" className="w-100 h-100" />
              )}{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="text-center py-5 home-desc">
        <div className="d-flex justify-content-evenly projects-hlt">
          <div>
            <h2>39+</h2>
            <h4>
              PROJECTS<br></br> ACROSS PUNE
            </h4>
          </div>
          <div>
            <h2>39 YEARS</h2>
            <h4>
              OF MATCHLESS <br></br>LEGACY
            </h4>
          </div>
          <div>
            <h2>8 MILLION</h2>
            <h4>
              SQUARE FEET <br></br>DELIVERED
            </h4>
          </div>
          <div>
            <h2>6.5K</h2>
            <h4>
              HAPPY<br></br> FAMILIES
            </h4>
          </div>
        </div>
        <div>
          <button
            className="btn mt-5 main-btn"
            onClick={() => setFormpopup(!formPopup)}
          >
            Know More
          </button>
        </div>
      </div>

      {formPopup && (
        <div className={`popupContainer ${isExiting ? "exit" : ""}`} onClick={closePopup}>
          <div className={`popup ${transitionClass}`} onClick={(e)=>e.stopPropagation()}>
            <div className="popup-img-cont">
              <img src={mainLogo} alt="" />
            </div>
            <div className="popup-inp-cont">
              <h2>Register to know more</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  pattern="[A-Za-z\s]+"
                  title="Please enter a valid name (only letters and spaces allowed)."
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  minLength="10"
                  maxLength="12"
                  pattern="[0-9]+"
                  title="Please enter a valid number (only numbers allowed)."
                  onChange={handleChange}
                  required
                />
                <div className="popup-submit-btn-cont">
                  <button type="submit" className="submit-btn">
                    Know More
                  </button>
                </div>
              </form>
              <button className="close-btn" onClick={closePopup}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
