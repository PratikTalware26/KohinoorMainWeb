import React, { useEffect, useState } from "react";
import "./OngoingProjects.css";
import mainLogo from "../assets/Kohinoor new logo for website-01 (1)-2.webp"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import Img1 from "../assets/kohinoor-sportsville-project-thumb-2.jpeg";
import Img2 from "../assets/kohinoor-abhimaan-phase-3-project-thumb.jpeg";
import Img3 from "../assets/kohinoor-coral-residential-project.webp";
import Img4 from "../assets/kohinoor-courtyard-project-thumb.webp";
import Img5 from "../assets/kohinoor-jeeva-residential-project.webp";
import Img6 from "../assets/kohinoor-kaleido-project-thumb.jpeg";
import Img7 from "../assets/kohinoor-presidentia-project-thumb-2.jpeg";
import Img8 from "../assets/kohinoor-shangrila-project-thumb-2.webp";
import Img9 from "../assets/kohinoor-viva-city-project-thumb.webp";

import { useLocation, useNavigate } from "react-router-dom";

const OngoingProjects = () => {

    const navigate= useNavigate()
  //Thanks state
//   const {setThanksState}= useContext(ThanksContext)

  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "ongoing-projects",
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
    //   const fetchData= async ()=>{
    //     const jsonData= JSON.stringify(enquiryData)
    //     await axios.post("https://www.crm.brickfolio.in/api/leads/add_raw_lead", jsonData,{
    //       headers: {
    //         "Content-Type": "application/json; charset=utf-8",
    //         "Access-Control-Allow-Origin": "*",
    //       },
    //     }
    //     )
    //     .then((res)=>{
    //       setFormpopup(false)
    //       setThanksState(true)
    //       navigate("/thanks")
    //     })
    //   }
    //   fetchData()
    console.log(enquiryData)
    } catch (error) {
      console.log(error.message)
    }
  };

  //utm data
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("utm_source") === "google") {
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

    const [windowWidth, setWindowWidth]=useState(window.innerWidth)
    const [slides, setSlides]= useState(3)

    useEffect(()=>{
        const handleResize= ()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    },[])

    useEffect(()=>{
        if(windowWidth<785){
            setSlides(1)
        }else if(windowWidth<1154){
            setSlides(2)
        }else{
            setSlides(3)
        }
    },[windowWidth])
  return (
    <div className="project-parent" id="projects">
        <div><h2 className="text-center main-color p-4">ONGOING PROJECTS</h2></div>
    <div className="project-cards-cont">
      <Swiper
        slidesPerView={slides}
        spaceBetween={40}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper project-cont"
      >
        <SwiperSlide>
          <div className="card">
            <span>Residential</span>
            <div>
              <h5>Kohinoor Sportsville</h5>
            </div>
            <div>
              <img src={Img1} alt="" className="w-100"/>
            </div>
            <div className="my-2 project-desc-cont">
              <p>
                <b>Typology: </b>1 BHK, 2 BHK & 3 BHK
              </p>
              <p>
                <b>Location: </b>Maan Hinjawadi Phase 1
              </p>
              <p>
                <b>Price: </b>&#8377;63.50 Lacs<sup>*</sup> - 83 Lacs
                <sup>*</sup>
              </p>
            </div>
            <div>
              <button className="btn main-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span>Residential</span>
            <div>
              <h5>Abhimaan Township</h5>
            </div>
            <div>
              <img src={Img2} alt="" />
            </div>
            <div className="my-2 project-desc-cont">
              <p>
                <b>Typology: </b>Premium Homes 1 BHK & 2 BHK
              </p>
              <p>
                <b>Location: </b>Talegaon Dabhade
              </p>
              <p>
                <b>Price: </b>&#8377;27 Lacs<sup>*</sup> - 39 Lacs
                <sup>*</sup>
              </p>
            </div>
            <div>
              <button className="btn main-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span>Residential</span>
            <div>
              <h5>Kohinoor Coral</h5>
            </div>
            <div>
              <img src={Img3} alt="" />
            </div>
            <div className="my-2 project-desc-cont">
              <p>
                <b>Typology: </b>Premium 2 BHK
              </p>
              <p>
                <b>Location: </b>Hinjawadi, phase 3
              </p>
              <p>
                <b>Price: </b>&#8377;48 Lacs<sup>*</sup>
              </p>
            </div>
            <div>
              <button className="btn main-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span>Residential</span>
            <div>
              <h5>Kohinoor Courtyard One</h5>
            </div>
            <div>
              <img src={Img4} alt="" />
            </div>
            <div className="my-2 project-desc-cont">
              <p>
                <b>Typology: </b>Premium Homes 1 BHK & 2 BHK
              </p>
              <p>
                <b>Location: </b>Wakad
              </p>
              <p>
                <b>Price: </b>&#8377;73.5 Lacs<sup>*</sup> - 1.04 Cr
                <sup>*</sup>
              </p>
            </div>
            <div>
              <button className="btn main-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span>Residential</span>
            <div>
              <h5>Kohinoor Jeeva</h5>
            </div>
            <div>
              <img src={Img5} alt="" />
            </div>
            <div className="my-2 project-desc-cont">
              <p>
                <b>Typology: </b>Premium Homes 2 BHK
              </p>
              <p>
                <b>Location: </b>Bibwewadi
              </p>
              <p>
                <b>Price: </b>&#8377;80 Lacs<sup>*</sup> - 84.50 Lacs
                <sup>*</sup>
              </p>
            </div>
            <div>
              <button className="btn main-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span>Residential</span>
            <div>
              <h5>Kohinoor Kaleido</h5>
            </div>
            <div>
              <img src={Img6} alt="" />
            </div>
            <div className="my-2 project-desc-cont">
              <p>
                <b>Typology: </b>Premium Homes 2 BHK & 3 BHK
              </p>
              <p>
                <b>Location: </b>New Kharadi
              </p>
              <p>
                <b>Price: </b>&#8377;64 Lacs<sup>*</sup> - 95 Lacs
                <sup>*</sup>
              </p>
            </div>
            <div>
              <button className="btn main-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span>Residential</span>
            <div>
              <h5>Kohinoor Presidentia</h5>
            </div>
            <div>
              <img src={Img7} alt="" />
            </div>
            <div className="my-2 project-desc-cont">
              <p>
                <b>Typology: </b>Semi-furnished Homes 2 BHK
              </p>
              <p>
                <b>Location: </b>Sopan Baug Annexe
              </p>
              <p>
                <b>Price: </b>&#8377;88 Lacs<sup>*</sup>
              </p>
            </div>
            <div>
              <button className="btn main-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span>Residential</span>
            <div>
              <h5>Kohinoor Shangrilla</h5>
            </div>
            <div>
              <img src={Img8} alt="" />
            </div>
            <div className="my-2 project-desc-cont">
              <p>
                <b>Typology: </b>Premium Homes 2 BHK & 3BHK
              </p>
              <p>
                <b>Location: </b>Pimpri
              </p>
              <p>
                <b>Price: </b>&#8377;70.50 Lacs<sup>*</sup> - 1.25 Cr.
                <sup>*</sup>
              </p>
            </div>
            <div>
              <button className="btn main-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span>Residential</span>
            <div>
              <h5>Kohinoor Coral</h5>
            </div>
            <div>
              <img src={Img9} alt="" />
            </div>
            <div className="my-2 project-desc-cont">
              <p>
                <b>Typology: </b>Premium 2 BHK
              </p>
              <p>
                <b>Location: </b>Hinjawadi Phase 3
              </p>
              <p>
                <b>Price: </b>&#8377;48 Lacs<sup>*</sup>
              </p>
            </div>
            <div>
              <button className="btn main-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    {formPopup && (
        <div className={`popupContainer ${isExiting ? "exit" : ""}`}>
          <div className={`popup ${transitionClass}`}>
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

export default OngoingProjects;
