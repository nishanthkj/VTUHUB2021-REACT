import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <header>
        <label htmlFor="click" className="container menu">
          <input
            type="checkbox"
            className="checkbox"
            name="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <img
            className={isChecked ? "img-checked" : "img-unchecked"}
            src="/Images/bar.png"
            alt="bar image"
            width="20px"
            style={{ paddingTop: "5px", paddingRight: "10px" }}
          />
        </label>
        <Link to="/"> V T U H U B 2 0 2 1 </Link>
      </header>
    </>
  );
}

export default Header;
