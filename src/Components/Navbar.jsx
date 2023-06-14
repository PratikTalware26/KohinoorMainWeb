import React from "react";
import "./Navbar.css"
import mainLogo from "../assets/Kohinoor new logo for website-01 (1)-2.webp"

const Navbar = () => {
  return (
    <div className="nav-cont-parent">
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
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link btn main-btn">SALES ENQUIRY</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
