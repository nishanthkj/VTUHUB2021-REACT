import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SEM from "../SEM";
import Modules from "../Modules";
import Module from "../Module";

function EC() {
  return (
    <>
      <Routes>
        <Route
          path="3ECNotes"
          element={
            <SEM
              branch="ElectroniEC & Communication 3rd SEM Notes"
              sem3="/21MAT31"
              sem4="/21EC32"
              sem5="/21EC33"
              sem6="/21EC34"
              sem7="/21ECL3"
              SEM211="21MAT31 (M3)"
              SEM212="21EC32 (DSA)"
              SEM213="21EC33 (ADE)"
              SEM214="21EC34 (COA)"
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21MAT31"
          element={
            <Modules
              branch="21MAT31"
              sem3="/21MAT31M1"
              sem4="/21MAT31M2"
              sem5="/21MAT31M3"
              sem6="/21MAT31M4"
              sem7="/21MAT31M5"
            />
          }
        ></Route>
        <Route
          path="/21EC32"
          element={
            <Modules
              branch="21EC32"
              sem3="/21EC32M1"
              sem4="/21EC32M2"
              sem5="/21EC32M3"
              sem6="/21EC32M4"
              sem7="/21EC32M5"
            />
          }
        ></Route>
        <Route
          path="/21EC33"
          element={
            <Modules
              branch="21EC33"
              sem3="/21EC33M1"
              sem4="/21EC33M2"
              sem5="/21EC34M3"
              sem6="/21EC32M4"
              sem7="/21EC32M5"
            />
          }
        ></Route>
        <Route
          path="/21EC34"
          element={
            <Modules
              branch="21EC34"
              sem3="/21EC34M1"
              sem4="/21EC34M2"
              sem5="/21EC34M3"
              sem6="/21EC34M4"
              sem7="/21EC34M5"
            />
          }
        ></Route>
        <Route
          path="/21EC35"
          element={
            <Modules
              branch="21EC35"
              sem3="/21EC35M1"
              sem4="/21EC35M2"
              sem5="/21EC35M3"
              sem6="/21EC35M4"
              sem7="/21EC35M5"
            />
          }
        ></Route>
        <Route
          path="4ECNotes"
          element={
            <SEM
              branch="ElectroniEC & Communication 4th SEM Notes"
              sem3="/21MAT41"
              sem4="/21EC42"
              sem5="/21EC43"
              sem6="/21EC44"
              sem7="/21ECL4"
              SEM211="21MAT41 "
              SEM212="21EC42 "
              SEM213="21EC43 "
              SEM214="21EC44 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21MAT41"
          element={
            <Modules
              branch="21MAT41"
              sem3="/21MAT41M1"
              sem4="/21MAT41M2"
              sem5="/21MAT41M3"
              sem6="/21MAT41M4"
              sem7="/21MAT41M5"
            />
          }
        ></Route>
        <Route
          path="/21EC42"
          element={
            <Modules
              branch="21EC42"
              sem3="/21EC42M1"
              sem4="/21EC42M2"
              sem5="/21EC42M3"
              sem6="/21EC42M4"
              sem7="/21EC42M5"
            />
          }
        ></Route>
        <Route
          path="/21EC43"
          element={
            <Modules
              branch="21EC43"
              sem3="/21EC43M1"
              sem4="/21EC43M2"
              sem5="/21EC44M3"
              sem6="/21EC42M4"
              sem7="/21EC42M5"
            />
          }
        ></Route>
        <Route
          path="/21EC44"
          element={
            <Modules
              branch="21EC44"
              sem3="/21EC44M1"
              sem4="/21EC44M2"
              sem5="/21EC44M3"
              sem6="/21EC44M4"
              sem7="/21EC44M5"
            />
          }
        ></Route>
        <Route
          path="/21EC45"
          element={
            <Modules
              branch="21EC45"
              sem3="/21EC45M1"
              sem4="/21EC45M2"
              sem5="/21EC45M3"
              sem6="/21EC45M4"
              sem7="/21EC45M5"
            />
          }
        ></Route>
        <Route
          path="5ECNotes"
          element={
            <SEM
              branch="ElectroniEC & Communication 5th SEM Notes"
              sem3="/21EC51"
              sem4="/21EC52"
              sem5="/21EC53"
              sem6="/21EC54"
              sem7="/21ECL5"
              SEM211="21EC51 "
              SEM212="21EC52 "
              SEM213="21EC53 "
              SEM214="21EC54 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21EC51"
          element={
            <Modules
              branch="21EC51"
              sem3="/21EC51M1"
              sem4="/21EC51M2"
              sem5="/21EC51M3"
              sem6="/21EC51M4"
              sem7="/21EC51M5"
            />
          }
        ></Route>
        <Route
          path="/21EC52"
          element={
            <Modules
              branch="21EC52"
              sem3="/21EC52M1"
              sem4="/21EC52M2"
              sem5="/21EC52M3"
              sem6="/21EC52M4"
              sem7="/21EC52M5"
            />
          }
        ></Route>
        <Route
          path="/21EC53"
          element={
            <Modules
              branch="21EC53"
              sem3="/21EC53M1"
              sem4="/21EC53M2"
              sem5="/21EC53M3"
              sem6="/21EC53M4"
              sem7="/21EC53M5"
            />
          }
        ></Route>
        <Route
          path="/21EC54"
          element={
            <Modules
              branch="21EC54"
              sem3="/21EC54M1"
              sem4="/21EC54M2"
              sem5="/21EC54M3"
              sem6="/21EC54M4"
              sem7="/21EC54M5"
            />
          }
        ></Route>
        <Route
          path="/21EC85"
          element={
            <Modules
              branch="21EC55"
              sem3="/21EC55M1"
              sem4="/21EC55M2"
              sem5="/21EC55M3"
              sem6="/21EC55M4"
              sem7="/21EC55M5"
            />
          }
        ></Route>
        <Route
          path="6ECNotes"
          element={
            <SEM
              branch="ElectroniEC & Communication 6th SEM Notes"
              sem3="/21EC61"
              sem4="/21EC62"
              sem5="/21EC63"
              sem6="/21EC64"
              sem7="/21ECL6"
              SEM211="21EC61 "
              SEM212="21EC62 "
              SEM213="21EC63 "
              SEM214="21EC64 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21EC61"
          element={
            <Modules
              branch="21EC61"
              sem3="/21EC61M1"
              sem4="/21EC61M2"
              sem5="/21EC61M3"
              sem6="/21EC61M4"
              sem7="/21EC61M5"
            />
          }
        ></Route>
        <Route
          path="/21EC62"
          element={
            <Modules
              branch="21EC62"
              sem3="/21EC62M1"
              sem4="/21EC62M2"
              sem5="/21EC62M3"
              sem6="/21EC62M4"
              sem7="/21EC62M5"
            />
          }
        ></Route>
        <Route
          path="/21EC63"
          element={
            <Modules
              branch="21EC63"
              sem3="/21EC63M1"
              sem4="/21EC63M2"
              sem5="/21EC63M3"
              sem6="/21EC63M4"
              sem7="/21EC63M5"
            />
          }
        ></Route>
        <Route
          path="/21EC64"
          element={
            <Modules
              branch="21EC64"
              sem3="/21EC64M1"
              sem4="/21EC64M2"
              sem5="/21EC64M3"
              sem6="/21EC64M4"
              sem7="/21EC64M5"
            />
          }
        ></Route>
        <Route
          path="/21EC65"
          element={
            <Modules
              branch="21EC65"
              sem3="/21EC65M1"
              sem4="/21EC65M2"
              sem5="/21EC65M3"
              sem6="/21EC65M4"
              sem7="/21EC65M5"
            />
          }
        ></Route>

        <Route
          path="7ECNotes"
          element={
            <SEM
              branch="ElectroniEC & Communication 7th SEM Notes "
              sem3="/21EC71"
              sem4="/21EC72"
              sem5="/21EC73"
              sem6="/21EC74"
              sem7="/21ECL6"
              SEM211="21EC71"
              SEM212="21EC72 "
              SEM213="21EC73 "
              SEM214="21EC74 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21EC71"
          element={
            <Modules
              branch="21EC71"
              sem3="/21EC71M1"
              sem4="/21EC71M2"
              sem5="/21EC71M3"
              sem6="/21EC71M4"
              sem7="/21EC71M5"
            />
          }
        ></Route>
        <Route
          path="/21EC72"
          element={
            <Modules
              branch="21EC72"
              sem3="/21EC72M1"
              sem4="/21EC72M2"
              sem5="/21EC72M3"
              sem6="/21EC72M4"
              sem7="/21EC72M5"
            />
          }
        ></Route>
        <Route
          path="/21EC73"
          element={
            <Modules
              branch="21EC73"
              sem3="/21EC73M1"
              sem4="/21EC73M2"
              sem5="/21EC73M3"
              sem6="/21EC73M4"
              sem7="/21EC73M5"
            />
          }
        ></Route>
        <Route
          path="/21EC74"
          element={
            <Modules
              branch="21EC74"
              sem3="/21EC74M1"
              sem4="/21EC74M2"
              sem5="/21EC74M3"
              sem6="/21EC74M4"
              sem7="/21EC74M5"
            />
          }
        ></Route>
        <Route
          path="/21EC75"
          element={
            <Modules
              branch="21EC75"
              sem3="/21EC75M1"
              sem4="/21EC75M2"
              sem5="/21EC75M3"
              sem6="/21EC75M4"
              sem7="/21EC75M5"
            />
          }
        ></Route>

        <Route
          path="8ECNotes"
          element={
            <SEM
              branch="ElectroniEC & Communication 8th SEM Notes"
              sem3="/21EC81"
              sem4="/21EC82"
              sem5="/21EC83"
              sem6="/21EC84"
              sem7="/21ECL8"
              SEM211="21EC81 "
              SEM212="21EC82 "
              SEM213="21EC83 "
              SEM214="21EC84 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21EC81"
          element={
            <Modules
              branch="21EC81"
              sem3="/21EC81M1"
              sem4="/21EC81M2"
              sem5="/21EC81M3"
              sem6="/21EC81M4"
              sem7="/21EC81M5"
            />
          }
        ></Route>
        <Route
          path="/21EC82"
          element={
            <Modules
              branch="21EC82"
              sem3="/21EC82M1"
              sem4="/21EC82M2"
              sem5="/21EC82M3"
              sem6="/21EC82M4"
              sem7="/21EC82M5"
            />
          }
        ></Route>
        <Route
          path="/21EC83"
          element={
            <Modules
              branch="21EC83"
              sem3="/21EC83M1"
              sem4="/21EC83M2"
              sem5="/21EC83M3"
              sem6="/21EC83M4"
              sem7="/21EC83M5"
            />
          }
        ></Route>
        <Route
          path="/21EC84"
          element={
            <Modules
              branch="21EC84"
              sem3="/21EC84M1"
              sem4="/21EC84M2"
              sem5="/21EC84M3"
              sem6="/21EC84M4"
              sem7="/21EC84M5"
            />
          }
        ></Route>
        <Route
          path="/21EC85"
          element={
            <Modules
              branch="21EC85"
              sem3="/21EC85M1"
              sem4="/21EC85M2"
              sem5="/21EC85M3"
              sem6="/21EC85M4"
              sem7="/21EC85M5"
            />
          }
        ></Route>
        <Route
          path="/3ECQP"
          element={
            <SEM
              branch="ElectroniEC & Communication 3rd SEM Question Paper"
              sem3="/21MAT31QP"
              sem4="/21EC32QP"
              sem5="/21EC33QP"
              sem6="/21EC34QP"
              sem7="/21EC36QP"
              SEM211="21MAT31 (M3)"
              SEM212="21EC32 (DSA)"
              SEM213="21EC33 (ADE)"
              SEM214="21EC34 (COA)"
            />
          }
        ></Route>
        <Route
          path="/4ECQP"
          element={
            <SEM
              branch="ElectroniEC & Communication 4th SEM Question Paper"
              sem3="/21MAT41QP"
              sem4="/21EC42QP"
              sem5="/21EC43QP"
              sem6="/21EC44QP"
              SEM211="21MAT41  "
              SEM212="21EC42 "
              SEM213="21EC43 "
              SEM214="21EC44 "
            />
          }
        ></Route>
        <Route
          path="/5ECQP"
          element={
            <SEM
              branch="ElectroniEC & Communication 5th SEM Question Paper"
              sem3="/21EC51QP"
              sem4="/21EC52QP"
              sem5="/21EC53QP"
              sem6="/21EC54QP"
              SEM211="21EC51 "
              SEM212="21EC52 "
              SEM213="21EC53 "
              SEM214="21EC54 "
            />
          }
        ></Route>
        <Route
          path="/6ECQP"
          element={
            <SEM
              branch="ElectroniEC & Communication 6th SEM Question Paper"
              sem3="/21EC61QP"
              sem4="/21EC62QP"
              sem5="/21EC63QP"
              sem6="/21EC64QP"
              SEM211="21EC61 "
              SEM212="21EC62 "
              SEM213="21EC63 "
              SEM214="21EC64 "
            />
          }
        ></Route>
        <Route
          path="/7ECQP"
          element={
            <SEM
              branch="ElectroniEC & Communication 7th SEM Question Paper"
              sem3="/21EC71QP"
              sem4="/21EC72QP"
              sem5="/21EC73QP"
              sem6="/21EC74QP"
              SEM211="21EC71"
              SEM212="21EC32"
              SEM213="21EC33"
              SEM214="21EC34"
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/8ECQP "
          element={
            <SEM
              branch="ElectroniEC & Communication 8th SEM Question Paper"
              sem3="/21EC81QP"
              sem4="/21EC82QP"
              sem5="/21EC83QP"
              sem6="/21EC84QP"
              SEM211="21EC81"
              SEM212="21EC82 "
              SEM213="21EC83 "
              SEM214="21EC84 "
              SEM215="Lab"
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path="21EC31M1" element={<Module link="/" />}></Route>
        <Route path="21EC31M2" element={<Module link="/" />}></Route>
        <Route path="21EC31M3" element={<Module link="/" />}></Route>
        <Route path="21EC31M4" element={<Module link="/" />}></Route>
        <Route path="21EC31M5" element={<Module link="/" />}></Route>

        <Route path="21EC32M1" element={<Module link="/" />}></Route>
        <Route path="21EC32M2" element={<Module link="/" />}></Route>
        <Route path="21EC32M3" element={<Module link="/" />}></Route>
        <Route path="21EC32M4" element={<Module link="/" />}></Route>
        <Route path="21EC32M5" element={<Module link="/" />}></Route>

        <Route path="21EC33M1" element={<Module link="/" />}></Route>
        <Route path="21EC33M2" element={<Module link="/" />}></Route>
        <Route path="21EC33M3" element={<Module link="/" />}></Route>
        <Route path="21EC33M4" element={<Module link="/" />}></Route>
        <Route path="21EC33M5" element={<Module link="/" />}></Route>

        <Route path="21EC34M1" element={<Module link="/" />}></Route>
        <Route path="21EC34M2" element={<Module link="/" />}></Route>
        <Route path="21EC34M3" element={<Module link="/" />}></Route>
        <Route path="21EC34M4" element={<Module link="/" />}></Route>
        <Route path="21EC34M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21EC41M1" element={<Module link="/" />}></Route>
        <Route path="21EC41M2" element={<Module link="/" />}></Route>
        <Route path="21EC41M3" element={<Module link="/" />}></Route>
        <Route path="21EC41M4" element={<Module link="/" />}></Route>
        <Route path="21EC41M5" element={<Module link="/" />}></Route>

        <Route path="21EC42M1" element={<Module link="/" />}></Route>
        <Route path="21EC42M2" element={<Module link="/" />}></Route>
        <Route path="21EC42M3" element={<Module link="/" />}></Route>
        <Route path="21EC42M4" element={<Module link="/" />}></Route>
        <Route path="21EC42M5" element={<Module link="/" />}></Route>

        <Route path="21EC43M1" element={<Module link="/" />}></Route>
        <Route path="21EC43M2" element={<Module link="/" />}></Route>
        <Route path="21EC43M3" element={<Module link="/" />}></Route>
        <Route path="21EC43M4" element={<Module link="/" />}></Route>
        <Route path="21EC43M5" element={<Module link="/" />}></Route>

        <Route path="21EC44M1" element={<Module link="/" />}></Route>
        <Route path="21EC44M2" element={<Module link="/" />}></Route>
        <Route path="21EC44M3" element={<Module link="/" />}></Route>
        <Route path="21EC44M4" element={<Module link="/" />}></Route>
        <Route path="21EC44M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21EC51M1" element={<Module link={< iframe src="https://drive.google.com/file/d/1vnzObFWXI5g0UuMyMgED8KY7sVyfiFPq/preview" width="640" height="480" allow="autoplay"></iframe> }/>}></Route>
        <Route path="21EC51M2" element={<Module link={< iframe src="https://drive.google.com/file/d/1oR7ZqW2DyUTI-lUQ-5nsFl9FSd7twneD/preview" width="640" height="480" allow="autoplay"></iframe> }/>}></Route>
        <Route path="21EC51M3" element={<Module link={< iframe src="https://drive.google.com/file/d/1ybMH3fZOZbkOxrve_67eT6tSAPnr-SOo/preview" width="640" height="480" allow="autoplay"></iframe> }/>}></Route>
        <Route path="21EC51M4" element={<Module link={< iframe src="https://drive.google.com/file/d/1ire7R-7z-hRrNUJMCHMm8hI5X1KthDZJ/preview" width="640" height="480" allow="autoplay"></iframe> }/>}></Route>
        <Route path="21EC51M5" element={<Module link={< iframe src="https://drive.google.com/file/d/1TWple8Jiw11rBnNsXXULRRUKgceQPXjO/preview" width="640" height="480" allow="autoplay"></iframe>}/>}></Route>

        <Route path="21EC52M1" element={<Module link="/" />}></Route>
        <Route path="21EC52M2" element={<Module link= "/" />}></Route>
        <Route path="21EC52M3" element={<Module link="/" />}></Route>
        <Route path="21EC52M4" element={<Module link="/" />}></Route>
        <Route path="21EC52M5" element={<Module link="/" />}></Route>

        <Route path="21EC53M1" element={<Module link={< iframe src="https://drive.google.com/file/d/12-XsPgG-suQoWuEjVBHL1EiwOsW6Doe2/preview" width="640" height="480" allow="autoplay"></iframe>}/>}></Route>
        <Route path="21EC53M2" element={<Module link={< iframe src="https://drive.google.com/file/d/1Ouqe6QjxNvlyhxCnKlYhgreIAqQaVQpG/preview" width="640" height="480" allow="autoplay"></iframe>} />}></Route>
        <Route path="21EC53M3" element={<Module link={< iframe src="https://drive.google.com/file/d/1uVjJ5I_pKZoPHGrCr0nWUtyeGobHdu-2/preview" width="640" height="480" allow="autoplay"></iframe> }/>}></Route>
        <Route path="21EC53M4" element={<Module link={< iframe src="https://drive.google.com/file/d/1_Cs1fDBPc4Gsc3JB5sTjH9-NAiIgOjlb/preview" width="640" height="480" allow="autoplay"></iframe> }/>}></Route>
        <Route path="21EC53M5" element={<Module link={< iframe src="https://drive.google.com/file/d/18cNQ0dlLtJwcLaEJOqA6DjF3HvnA3Fbt/preview" width="640" height="480" allow="autoplay"></iframe> }/>}></Route>

        <Route path="21EC54M1" element={<Module link={< iframe src="https://drive.google.com/file/d/1adRup8-wiu6Ho4rtyN0QvJr4kF1xu8iQ/preview" width="640" height="480" allow="autoplay"></iframe>}/>}></Route>
        <Route path="21EC54M2" element={<Module link={< iframe src="https://drive.google.com/file/d/1eu0oUa4VaLCqRqhXk6aRfdujxwUqD4Hs/preview" width="640" height="480" allow="autoplay"></iframe> }/>}></Route>
        <Route path="21EC54M3" element={<Module link={< iframe src="https://drive.google.com/file/d/1WRL66_Vr9SRLfLATLx3CKCcaTfQcNBvE/preview" width="640" height="480" allow="autoplay"></iframe>}/>}></Route>
        <Route path="21EC54M4" element={<Module link={< iframe src="https://drive.google.com/file/d/1Ag33u-Sbxyyqc-_XbnwsAOg1PhYV5g5R/preview" width="640" height="480" allow="autoplay"></iframe>}/>}></Route>
        <Route path="21EC54M5" element={<Module link={< iframe src="https://drive.google.com/file/d/1GftbKxJue27_Q4Bo2DUyAbY5w_yEVuKo/preview" width="640" height="480" allow="autoplay"></iframe>}/>}></Route>
      </Routes>

      <Routes>
        <Route path="21EC61M1" element={<Module link="/" />}></Route>
        <Route path="21EC61M2" element={<Module link="/" />}></Route>
        <Route path="21EC61M3" element={<Module link="/" />}></Route>
        <Route path="21EC61M4" element={<Module link="/" />}></Route>
        <Route path="21EC61M5" element={<Module link="/" />}></Route>

        <Route path="21EC62M1" element={<Module link="/" />}></Route>
        <Route path="21EC62M2" element={<Module link="/" />}></Route>
        <Route path="21EC62M3" element={<Module link="/" />}></Route>
        <Route path="21EC62M4" element={<Module link="/" />}></Route>
        <Route path="21EC62M5" element={<Module link="/" />}></Route>

        <Route path="21EC63M1" element={<Module link="/" />}></Route>
        <Route path="21EC63M2" element={<Module link="/" />}></Route>
        <Route path="21EC63M3" element={<Module link="/" />}></Route>
        <Route path="21EC63M4" element={<Module link="/" />}></Route>
        <Route path="21EC63M5" element={<Module link="/" />}></Route>

        <Route path="21EC64M1" element={<Module link="/" />}></Route>
        <Route path="21EC64M2" element={<Module link="/" />}></Route>
        <Route path="21EC64M3" element={<Module link="/" />}></Route>
        <Route path="21EC64M4" element={<Module link="/" />}></Route>
        <Route path="21EC64M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21EC71M1" element={<Module link="/" />}></Route>
        <Route path="21EC71M2" element={<Module link="/" />}></Route>
        <Route path="21EC71M3" element={<Module link="/" />}></Route>
        <Route path="21EC71M4" element={<Module link="/" />}></Route>
        <Route path="21EC71M5" element={<Module link="/" />}></Route>

        <Route path="21EC72M1" element={<Module link="/" />}></Route>
        <Route path="21EC72M2" element={<Module link="/" />}></Route>
        <Route path="21EC72M3" element={<Module link="/" />}></Route>
        <Route path="21EC72M4" element={<Module link="/" />}></Route>
        <Route path="21EC72M5" element={<Module link="/" />}></Route>

        <Route path="21EC73M1" element={<Module link="/" />}></Route>
        <Route path="21EC73M2" element={<Module link="/" />}></Route>
        <Route path="21EC73M3" element={<Module link="/" />}></Route>
        <Route path="21EC73M4" element={<Module link="/" />}></Route>
        <Route path="21EC73M5" element={<Module link="/" />}></Route>

        <Route path="21EC74M1" element={<Module link="/" />}></Route>
        <Route path="21EC74M2" element={<Module link="/" />}></Route>
        <Route path="21EC74M3" element={<Module link="/" />}></Route>
        <Route path="21EC74M4" element={<Module link="/" />}></Route>
        <Route path="21EC74M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21EC81M1" element={<Module link="/" />}></Route>
        <Route path="21EC81M2" element={<Module link="/" />}></Route>
        <Route path="21EC81M3" element={<Module link="/" />}></Route>
        <Route path="21EC81M4" element={<Module link="/" />}></Route>
        <Route path="21EC81M5" element={<Module link="/" />}></Route>

        <Route path="21EC82M1" element={<Module link="/" />}></Route>
        <Route path="21EC82M2" element={<Module link="/" />}></Route>
        <Route path="21EC82M3" element={<Module link="/" />}></Route>
        <Route path="21EC82M4" element={<Module link="/" />}></Route>
        <Route path="21EC82M5" element={<Module link="/" />}></Route>

        <Route path="21EC83M1" element={<Module link="/" />}></Route>
        <Route path="21EC83M2" element={<Module link="/" />}></Route>
        <Route path="21EC83M3" element={<Module link="/" />}></Route>
        <Route path="21EC83M4" element={<Module link="/" />}></Route>
        <Route path="21EC83M5" element={<Module link="/" />}></Route>

        <Route path="21EC84M1" element={<Module link="/" />}></Route>
        <Route path="21EC84M2" element={<Module link="/" />}></Route>
        <Route path="21EC84M3" element={<Module link="/" />}></Route>
        <Route path="21EC84M4" element={<Module link="/" />}></Route>
        <Route path="21EC84M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT31QP" element={<Module link="/" />}></Route>
        <Route path="21EC32QP" element={<Module link="/" />}></Route>
        <Route path="21EC33QP" element={<Module link="/" />}></Route>
        <Route path="21EC34QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT41QP" element={<Module link="/" />}></Route>
        <Route path="21EC42QP" element={<Module link="/" />}></Route>
        <Route path="21EC43QP" element={<Module link="/" />}></Route>
        <Route path="21EC44QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21EC51QP" element={<Module link="/" />}></Route>
        <Route path="21EC52QP" element={<Module link="/" />}></Route>
        <Route path="21EC53QP" element={<Module link="/" />}></Route>
        <Route path="21EC54QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21EC61QP" element={<Module link="/" />}></Route>
        <Route path="21EC62QP" element={<Module link="/" />}></Route>
        <Route path="21EC63QP" element={<Module link="/" />}></Route>
        <Route path="21EC64QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21EC71QP" element={<Module link="/" />}></Route>
        <Route path="21EC72QP" element={<Module link="/" />}></Route>
        <Route path="21EC73QP" element={<Module link="/" />}></Route>
        <Route path="21EC74QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21EC81QP" element={<Module link="/" />}></Route>
        <Route path="21EC82QP" element={<Module link="/" />}></Route>
        <Route path="21EC83QP" element={<Module link="/" />}></Route>
        <Route path="21EC84QP" element={<Module link="/" />}></Route>
      </Routes>
    </>
  );
}

export default EC;
