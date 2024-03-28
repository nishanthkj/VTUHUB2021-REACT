import React from "react";
import { Link } from "react-router-dom";
import Result from "../Branch/Result";

function Navbar() {
  return (
    <nav>
      <input type="checkbox" name="checkbox" className="checkbox" id="click" />
      <div className="navbar">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">
            Notes
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/CSNotes">CS</Link>
            <Link to="/ISNotes">IS</Link>
            <Link to="/ECNotes">EC</Link>
            <Link to="/CivilNotes">CIVIL</Link>
            <Link to="/MENotes">MECH</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            Question Papers
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/CSQP">CSE</Link>
            <Link to="/ISQP">ISE</Link>
            <Link to="/ECQP">ECE</Link>
            <Link to="/CivilQP">CIVIL</Link>
            <Link to="/MEQP">MECHANICAL</Link>
          </div>
        </div>
        <Link to="/Results">Results</Link>
        <Link to="/sgpacalculator/sgpacalculator.html">SGPA Calculator</Link>
        <a href="https://forms.gle/Xm8XK58MggJLzKuJ7">Submit Notes</a>
        <a href="https://forms.gle/qfyPJX45VocBVuYJ7">Suggestion</a>
        {/* <a href="/Updates/Updates.html">Updates</a> */}
        {/* <div className="">
          <a href="#about">About Us</a>
        </div> */}
      </div>
      {/* <div class="dropdown_menu">
        <li><a href="">Home</a></li>
        <li><a href="">Notes</a></li>
        <li><a href="">Question Papers</a></li>
        <li><a href="">ResultsSGPA Calculator</a></li>
        <li><a href="">Submit Notes</a></li>
        <li><a href="">Updates</a></li>
      </div> */}
    </nav>
  );
}

export default Navbar;
