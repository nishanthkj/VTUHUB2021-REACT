import React from "react";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Terms from "./Terms";
import Home from "./Home";
import "./Footer.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <h3>V T U H U B 2 0 2 1</h3>
          <ul className="socials">
            {/* <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li> */}
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-google"></i>
              </Link>
            </li>
            {/* <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li> */}
            <li>
              <Link to="#">
                <i className="fa fa-whatsapp"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-telegram"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="footerpadding">
          <Link to="/Privacy" style={{ color: "white" }}>
            Privacy Policy
          </Link>
        </div>

        <div className="footerpadding">
          <Link to="/Terms" style={{ color: "white" }}>
            Terms and Conditions
          </Link>
        </div>

        <div className="footerpadding">
          <Link to="#" style={{ color: "white" }}>
            About Us
          </Link>
          <p>"Student Of VTU 2021 Scheme"</p>
        </div>

        <div className="padding">
          <p>Copyright &copy;2023 Dark Bytes</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
