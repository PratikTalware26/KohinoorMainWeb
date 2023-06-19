import React,{useState, useEffect, useContext} from "react";
import "./Navbar.css"
import mainLogo from "../assets/Kohinoor new logo for website-01 (1)-2.webp"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThanksContext } from "../App";

const Navbar = () => {
  
    const navigate= useNavigate()
  //Thanks state
  const {setThanksState}= useContext(ThanksContext)
  //Handeling Navbar toggling icon
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  //handeling click event of nav-btn
  const handleNavClick = () => {
    if (isMenuOpen) {
      setTimeout(() => {
        setIsmenuOpen(false);
      }, 500);
    } else {
      setIsmenuOpen(true);
      setTimeout(() => {
      }, 10);
    }
  };

  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "navbar",
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
    // console.log(enquiryData)
    } catch (error) {
      console.log(error.message)
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

  //Nav up-down appearence on scroll
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsNavVisible(isScrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`nav-cont-parent ${isNavVisible ? "" : "hidden"}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={mainLogo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={handleNavClick}>
                <a className="nav-link active text-light" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={handleNavClick}>
                <a className="nav-link text-light" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item" onClick={handleNavClick}>
                <a className="nav-link text-light" href="#projects">
                  Ongoing Projects
                </a>
              </li>
              <li className="nav-item" onClick={handleNavClick}>
                <a className="nav-link text-light" href="#blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item" onClick={handleNavClick}>
                <button className="nav-link btn main-btn" onClick={()=>setFormpopup(!formPopup)}>SALES ENQUIRY</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {formPopup && (
        <div className={`popupContainer ${isExiting ? "exit" : ""}`}>
          <div className={`popup ${transitionClass}`}>
            <div className="popup-img-cont">
              <img src={mainLogo} alt="" />
            </div>
            <div className="popup-inp-cont">
              <h2>Register for Sales Enquiry</h2>
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
                    Enquiry Now
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

export default Navbar;
