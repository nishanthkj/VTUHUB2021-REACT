import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SEM from "../SEM";
import Modules from "../Modules";
import Module from "../Module";

function ME() {
  return (
    <>
      <Routes>
        <Route
          path="3MENotes"
          element={
            <SEM
              branch="Mechanical 3rd SEM Notes"
              sem3="/21MAT31"
              sem4="/21ME32"
              sem5="/21ME33"
              sem6="/21ME34"
              sem7="/21MEL3"
              SEM211="21MAT31 (M3)"
              SEM212="21ME32 (DSA)"
              SEM213="21ME33 (ADE)"
              SEM214="21ME34 (COA)"
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
          path="/21ME32"
          element={
            <Modules
              branch="21ME32"
              sem3="/21ME32M1"
              sem4="/21ME32M2"
              sem5="/21ME32M3"
              sem6="/21ME32M4"
              sem7="/21ME32M5"
            />
          }
        ></Route>
        <Route
          path="/21ME33"
          element={
            <Modules
              branch="21ME33"
              sem3="/21ME33M1"
              sem4="/21ME33M2"
              sem5="/21ME34M3"
              sem6="/21ME32M4"
              sem7="/21ME32M5"
            />
          }
        ></Route>
        <Route
          path="/21ME34"
          element={
            <Modules
              branch="21ME34"
              sem3="/21ME34M1"
              sem4="/21ME34M2"
              sem5="/21ME34M3"
              sem6="/21ME34M4"
              sem7="/21ME34M5"
            />
          }
        ></Route>
        <Route
          path="/21ME35"
          element={
            <Modules
              branch="21ME35"
              sem3="/21ME35M1"
              sem4="/21ME35M2"
              sem5="/21ME35M3"
              sem6="/21ME35M4"
              sem7="/21ME35M5"
            />
          }
        ></Route>
        <Route
          path="4MENotes"
          element={
            <SEM
              branch="Mechanical 4th SEM Notes"
              sem3="/21MAT41"
              sem4="/21ME42"
              sem5="/21ME43"
              sem6="/21ME44"
              sem7="/21MEL4"
              SEM211="21MAT41 "
              SEM212="21ME42 "
              SEM213="21ME43 "
              SEM214="21ME44 "
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
          path="/21ME42"
          element={
            <Modules
              branch="21ME42"
              sem3="/21ME42M1"
              sem4="/21ME42M2"
              sem5="/21ME42M3"
              sem6="/21ME42M4"
              sem7="/21ME42M5"
            />
          }
        ></Route>
        <Route
          path="/21ME43"
          element={
            <Modules
              branch="21ME43"
              sem3="/21ME43M1"
              sem4="/21ME43M2"
              sem5="/21ME44M3"
              sem6="/21ME42M4"
              sem7="/21ME42M5"
            />
          }
        ></Route>
        <Route
          path="/21ME44"
          element={
            <Modules
              branch="21ME44"
              sem3="/21ME44M1"
              sem4="/21ME44M2"
              sem5="/21ME44M3"
              sem6="/21ME44M4"
              sem7="/21ME44M5"
            />
          }
        ></Route>
        <Route
          path="/21ME45"
          element={
            <Modules
              branch="21ME45"
              sem3="/21ME45M1"
              sem4="/21ME45M2"
              sem5="/21ME45M3"
              sem6="/21ME45M4"
              sem7="/21ME45M5"
            />
          }
        ></Route>
        <Route
          path="5MENotes"
          element={
            <SEM
              branch="Mechanical 5th SEM Notes"
              sem3="/21ME51"
              sem4="/21ME52"
              sem5="/21ME53"
              sem6="/21ME54"
              sem7="/21MEL5"
              SEM211="21ME51 "
              SEM212="21ME52 "
              SEM213="21ME53 "
              SEM214="21ME54 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21ME51"
          element={
            <Modules
              branch="21ME51"
              sem3="/21ME51M1"
              sem4="/21ME51M2"
              sem5="/21ME51M3"
              sem6="/21ME51M4"
              sem7="/21ME51M5"
            />
          }
        ></Route>
        <Route
          path="/21ME52"
          element={
            <Modules
              branch="21ME52"
              sem3="/21ME52M1"
              sem4="/21ME52M2"
              sem5="/21ME52M3"
              sem6="/21ME52M4"
              sem7="/21ME52M5"
            />
          }
        ></Route>
        <Route
          path="/21ME53"
          element={
            <Modules
              branch="21ME53"
              sem3="/21ME53M1"
              sem4="/21ME53M2"
              sem5="/21ME53M3"
              sem6="/21ME53M4"
              sem7="/21ME53M5"
            />
          }
        ></Route>
        <Route
          path="/21ME54"
          element={
            <Modules
              branch="21ME54"
              sem3="/21ME54M1"
              sem4="/21ME54M2"
              sem5="/21ME54M3"
              sem6="/21ME54M4"
              sem7="/21ME54M5"
            />
          }
        ></Route>
        <Route
          path="/21ME85"
          element={
            <Modules
              branch="21ME55"
              sem3="/21ME55M1"
              sem4="/21ME55M2"
              sem5="/21ME55M3"
              sem6="/21ME55M4"
              sem7="/21ME55M5"
            />
          }
        ></Route>
        <Route
          path="6MENotes"
          element={
            <SEM
              branch="Mechanical 6th SEM Notes"
              sem3="/21ME61"
              sem4="/21ME62"
              sem5="/21ME63"
              sem6="/21ME64"
              sem7="/21MEL6"
              SEM211="21ME61 "
              SEM212="21ME62 "
              SEM213="21ME63 "
              SEM214="21ME64 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21ME61"
          element={
            <Modules
              branch="21ME61"
              sem3="/21ME61M1"
              sem4="/21ME61M2"
              sem5="/21ME61M3"
              sem6="/21ME61M4"
              sem7="/21ME61M5"
            />
          }
        ></Route>
        <Route
          path="/21ME62"
          element={
            <Modules
              branch="21ME62"
              sem3="/21ME62M1"
              sem4="/21ME62M2"
              sem5="/21ME62M3"
              sem6="/21ME62M4"
              sem7="/21ME62M5"
            />
          }
        ></Route>
        <Route
          path="/21ME63"
          element={
            <Modules
              branch="21ME63"
              sem3="/21ME63M1"
              sem4="/21ME63M2"
              sem5="/21ME63M3"
              sem6="/21ME63M4"
              sem7="/21ME63M5"
            />
          }
        ></Route>
        <Route
          path="/21ME64"
          element={
            <Modules
              branch="21ME64"
              sem3="/21ME64M1"
              sem4="/21ME64M2"
              sem5="/21ME64M3"
              sem6="/21ME64M4"
              sem7="/21ME64M5"
            />
          }
        ></Route>
        <Route
          path="/21ME65"
          element={
            <Modules
              branch="21ME65"
              sem3="/21ME65M1"
              sem4="/21ME65M2"
              sem5="/21ME65M3"
              sem6="/21ME65M4"
              sem7="/21ME65M5"
            />
          }
        ></Route>

        <Route
          path="7MENotes"
          element={
            <SEM
              branch="Mechanical 7th SEM Notes "
              sem3="/21ME71"
              sem4="/21ME72"
              sem5="/21ME73"
              sem6="/21ME74"
              sem7="/21MEL6"
              SEM211="21ME71"
              SEM212="21ME72 "
              SEM213="21ME73 "
              SEM214="21ME74 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21ME71"
          element={
            <Modules
              branch="21ME71"
              sem3="/21ME71M1"
              sem4="/21ME71M2"
              sem5="/21ME71M3"
              sem6="/21ME71M4"
              sem7="/21ME71M5"
            />
          }
        ></Route>
        <Route
          path="/21ME72"
          element={
            <Modules
              branch="21ME72"
              sem3="/21ME72M1"
              sem4="/21ME72M2"
              sem5="/21ME72M3"
              sem6="/21ME72M4"
              sem7="/21ME72M5"
            />
          }
        ></Route>
        <Route
          path="/21ME73"
          element={
            <Modules
              branch="21ME73"
              sem3="/21ME73M1"
              sem4="/21ME73M2"
              sem5="/21ME73M3"
              sem6="/21ME73M4"
              sem7="/21ME73M5"
            />
          }
        ></Route>
        <Route
          path="/21ME74"
          element={
            <Modules
              branch="21ME74"
              sem3="/21ME74M1"
              sem4="/21ME74M2"
              sem5="/21ME74M3"
              sem6="/21ME74M4"
              sem7="/21ME74M5"
            />
          }
        ></Route>
        <Route
          path="/21ME75"
          element={
            <Modules
              branch="21ME75"
              sem3="/21ME75M1"
              sem4="/21ME75M2"
              sem5="/21ME75M3"
              sem6="/21ME75M4"
              sem7="/21ME75M5"
            />
          }
        ></Route>

        <Route
          path="8MENotes"
          element={
            <SEM
              branch="Mechanical 8th SEM Notes"
              sem3="/21ME81"
              sem4="/21ME82"
              sem5="/21ME83"
              sem6="/21ME84"
              sem7="/21MEL8"
              SEM211="21ME81 "
              SEM212="21ME82 "
              SEM213="21ME83 "
              SEM214="21ME84 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21ME81"
          element={
            <Modules
              branch="21ME81"
              sem3="/21ME81M1"
              sem4="/21ME81M2"
              sem5="/21ME81M3"
              sem6="/21ME81M4"
              sem7="/21ME81M5"
            />
          }
        ></Route>
        <Route
          path="/21ME82"
          element={
            <Modules
              branch="21ME82"
              sem3="/21ME82M1"
              sem4="/21ME82M2"
              sem5="/21ME82M3"
              sem6="/21ME82M4"
              sem7="/21ME82M5"
            />
          }
        ></Route>
        <Route
          path="/21ME83"
          element={
            <Modules
              branch="21ME83"
              sem3="/21ME83M1"
              sem4="/21ME83M2"
              sem5="/21ME83M3"
              sem6="/21ME83M4"
              sem7="/21ME83M5"
            />
          }
        ></Route>
        <Route
          path="/21ME84"
          element={
            <Modules
              branch="21ME84"
              sem3="/21ME84M1"
              sem4="/21ME84M2"
              sem5="/21ME84M3"
              sem6="/21ME84M4"
              sem7="/21ME84M5"
            />
          }
        ></Route>
        <Route
          path="/21ME85"
          element={
            <Modules
              branch="21ME85"
              sem3="/21ME85M1"
              sem4="/21ME85M2"
              sem5="/21ME85M3"
              sem6="/21ME85M4"
              sem7="/21ME85M5"
            />
          }
        ></Route>
        <Route
          path="/3MEQP"
          element={
            <SEM
              branch="Mechanical 3rd SEM Question Paper"
              sem3="/21MAT31QP"
              sem4="/21ME32QP"
              sem5="/21ME33QP"
              sem6="/21ME34QP"
              sem7="/21ME36QP"
              SEM211="21MAT31 (M3)"
              SEM212="21ME32 (DSA)"
              SEM213="21ME33 (ADE)"
              SEM214="21ME34 (COA)"
            />
          }
        ></Route>
        <Route
          path="/4MEQP"
          element={
            <SEM
              branch="Mechanical 4th SEM Question Paper"
              sem3="/21MAT41QP"
              sem4="/21ME42QP"
              sem5="/21ME43QP"
              sem6="/21ME44QP"
              SEM211="21MAT41  "
              SEM212="21ME42 "
              SEM213="21ME43 "
              SEM214="21ME44 "
            />
          }
        ></Route>
        <Route
          path="/5MEQP"
          element={
            <SEM
              branch="Mechanical 5th SEM Question Paper"
              sem3="/21ME51QP"
              sem4="/21ME52QP"
              sem5="/21ME53QP"
              sem6="/21ME54QP"
              SEM211="21ME51 "
              SEM212="21ME52 "
              SEM213="21ME53 "
              SEM214="21ME54 "
            />
          }
        ></Route>
        <Route
          path="/6MEQP"
          element={
            <SEM
              branch="Mechanical 6th SEM Question Paper"
              sem3="/21ME61QP"
              sem4="/21ME62QP"
              sem5="/21ME63QP"
              sem6="/21ME64QP"
              SEM211="21ME61 "
              SEM212="21ME62 "
              SEM213="21ME63 "
              SEM214="21ME64 "
            />
          }
        ></Route>
        <Route
          path="/7MEQP"
          element={
            <SEM
              branch="Mechanical 7th SEM Question Paper"
              sem3="/21ME71QP"
              sem4="/21ME72QP"
              sem5="/21ME73QP"
              sem6="/21ME74QP"
              SEM211="21ME71"
              SEM212="21ME32"
              SEM213="21ME33"
              SEM214="21ME34"
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/8MEQP "
          element={
            <SEM
              branch="Mechanical 8th SEM Question Paper"
              sem3="/21ME81QP"
              sem4="/21ME82QP"
              sem5="/21ME83QP"
              sem6="/21ME84QP"
              SEM211="21ME81"
              SEM212="21ME82 "
              SEM213="21ME83 "
              SEM214="21ME84 "
              SEM215="Lab"
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path="21ME31M1" element={<Module link="/" />}></Route>
        <Route path="21ME31M2" element={<Module link="/" />}></Route>
        <Route path="21ME31M3" element={<Module link="/" />}></Route>
        <Route path="21ME31M4" element={<Module link="/" />}></Route>
        <Route path="21ME31M5" element={<Module link="/" />}></Route>

        <Route path="21ME32M1" element={<Module link="/" />}></Route>
        <Route path="21ME32M2" element={<Module link="/" />}></Route>
        <Route path="21ME32M3" element={<Module link="/" />}></Route>
        <Route path="21ME32M4" element={<Module link="/" />}></Route>
        <Route path="21ME32M5" element={<Module link="/" />}></Route>

        <Route path="21ME33M1" element={<Module link="/" />}></Route>
        <Route path="21ME33M2" element={<Module link="/" />}></Route>
        <Route path="21ME33M3" element={<Module link="/" />}></Route>
        <Route path="21ME33M4" element={<Module link="/" />}></Route>
        <Route path="21ME33M5" element={<Module link="/" />}></Route>

        <Route path="21ME34M1" element={<Module link="/" />}></Route>
        <Route path="21ME34M2" element={<Module link="/" />}></Route>
        <Route path="21ME34M3" element={<Module link="/" />}></Route>
        <Route path="21ME34M4" element={<Module link="/" />}></Route>
        <Route path="21ME34M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21ME41M1" element={<Module link="/" />}></Route>
        <Route path="21ME41M2" element={<Module link="/" />}></Route>
        <Route path="21ME41M3" element={<Module link="/" />}></Route>
        <Route path="21ME41M4" element={<Module link="/" />}></Route>
        <Route path="21ME41M5" element={<Module link="/" />}></Route>

        <Route path="21ME42M1" element={<Module link="/" />}></Route>
        <Route path="21ME42M2" element={<Module link="/" />}></Route>
        <Route path="21ME42M3" element={<Module link="/" />}></Route>
        <Route path="21ME42M4" element={<Module link="/" />}></Route>
        <Route path="21ME42M5" element={<Module link="/" />}></Route>

        <Route path="21ME43M1" element={<Module link="/" />}></Route>
        <Route path="21ME43M2" element={<Module link="/" />}></Route>
        <Route path="21ME43M3" element={<Module link="/" />}></Route>
        <Route path="21ME43M4" element={<Module link="/" />}></Route>
        <Route path="21ME43M5" element={<Module link="/" />}></Route>

        <Route path="21ME44M1" element={<Module link="/" />}></Route>
        <Route path="21ME44M2" element={<Module link="/" />}></Route>
        <Route path="21ME44M3" element={<Module link="/" />}></Route>
        <Route path="21ME44M4" element={<Module link="/" />}></Route>
        <Route path="21ME44M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21ME51M1" element={<Module link="/" />}></Route>
        <Route path="21ME51M2" element={<Module link="/" />}></Route>
        <Route path="21ME51M3" element={<Module link="/" />}></Route>
        <Route path="21ME51M4" element={<Module link="/" />}></Route>
        <Route path="21ME51M5" element={<Module link="/" />}></Route>

        <Route path="21ME52M1" element={<Module link="/" />}></Route>
        <Route path="21ME52M2" element={<Module link="/" />}></Route>
        <Route path="21ME52M3" element={<Module link="/" />}></Route>
        <Route path="21ME52M4" element={<Module link="/" />}></Route>
        <Route path="21ME52M5" element={<Module link="/" />}></Route>

        <Route path="21ME53M1" element={<Module link="/" />}></Route>
        <Route path="21ME53M2" element={<Module link="/" />}></Route>
        <Route path="21ME53M3" element={<Module link="/" />}></Route>
        <Route path="21ME53M4" element={<Module link="/" />}></Route>
        <Route path="21ME53M5" element={<Module link="/" />}></Route>

        <Route path="21ME54M1" element={<Module link="/" />}></Route>
        <Route path="21ME54M2" element={<Module link="/" />}></Route>
        <Route path="21ME54M3" element={<Module link="/" />}></Route>
        <Route path="21ME54M4" element={<Module link="/" />}></Route>
        <Route path="21ME54M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21ME61M1" element={<Module link="/" />}></Route>
        <Route path="21ME61M2" element={<Module link="/" />}></Route>
        <Route path="21ME61M3" element={<Module link="/" />}></Route>
        <Route path="21ME61M4" element={<Module link="/" />}></Route>
        <Route path="21ME61M5" element={<Module link="/" />}></Route>

        <Route path="21ME62M1" element={<Module link="/" />}></Route>
        <Route path="21ME62M2" element={<Module link="/" />}></Route>
        <Route path="21ME62M3" element={<Module link="/" />}></Route>
        <Route path="21ME62M4" element={<Module link="/" />}></Route>
        <Route path="21ME62M5" element={<Module link="/" />}></Route>

        <Route path="21ME63M1" element={<Module link="/" />}></Route>
        <Route path="21ME63M2" element={<Module link="/" />}></Route>
        <Route path="21ME63M3" element={<Module link="/" />}></Route>
        <Route path="21ME63M4" element={<Module link="/" />}></Route>
        <Route path="21ME63M5" element={<Module link="/" />}></Route>

        <Route path="21ME64M1" element={<Module link="/" />}></Route>
        <Route path="21ME64M2" element={<Module link="/" />}></Route>
        <Route path="21ME64M3" element={<Module link="/" />}></Route>
        <Route path="21ME64M4" element={<Module link="/" />}></Route>
        <Route path="21ME64M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21ME71M1" element={<Module link="/" />}></Route>
        <Route path="21ME71M2" element={<Module link="/" />}></Route>
        <Route path="21ME71M3" element={<Module link="/" />}></Route>
        <Route path="21ME71M4" element={<Module link="/" />}></Route>
        <Route path="21ME71M5" element={<Module link="/" />}></Route>

        <Route path="21ME72M1" element={<Module link="/" />}></Route>
        <Route path="21ME72M2" element={<Module link="/" />}></Route>
        <Route path="21ME72M3" element={<Module link="/" />}></Route>
        <Route path="21ME72M4" element={<Module link="/" />}></Route>
        <Route path="21ME72M5" element={<Module link="/" />}></Route>

        <Route path="21ME73M1" element={<Module link="/" />}></Route>
        <Route path="21ME73M2" element={<Module link="/" />}></Route>
        <Route path="21ME73M3" element={<Module link="/" />}></Route>
        <Route path="21ME73M4" element={<Module link="/" />}></Route>
        <Route path="21ME73M5" element={<Module link="/" />}></Route>

        <Route path="21ME74M1" element={<Module link="/" />}></Route>
        <Route path="21ME74M2" element={<Module link="/" />}></Route>
        <Route path="21ME74M3" element={<Module link="/" />}></Route>
        <Route path="21ME74M4" element={<Module link="/" />}></Route>
        <Route path="21ME74M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21ME81M1" element={<Module link="/" />}></Route>
        <Route path="21ME81M2" element={<Module link="/" />}></Route>
        <Route path="21ME81M3" element={<Module link="/" />}></Route>
        <Route path="21ME81M4" element={<Module link="/" />}></Route>
        <Route path="21ME81M5" element={<Module link="/" />}></Route>

        <Route path="21ME82M1" element={<Module link="/" />}></Route>
        <Route path="21ME82M2" element={<Module link="/" />}></Route>
        <Route path="21ME82M3" element={<Module link="/" />}></Route>
        <Route path="21ME82M4" element={<Module link="/" />}></Route>
        <Route path="21ME82M5" element={<Module link="/" />}></Route>

        <Route path="21ME83M1" element={<Module link="/" />}></Route>
        <Route path="21ME83M2" element={<Module link="/" />}></Route>
        <Route path="21ME83M3" element={<Module link="/" />}></Route>
        <Route path="21ME83M4" element={<Module link="/" />}></Route>
        <Route path="21ME83M5" element={<Module link="/" />}></Route>

        <Route path="21ME84M1" element={<Module link="/" />}></Route>
        <Route path="21ME84M2" element={<Module link="/" />}></Route>
        <Route path="21ME84M3" element={<Module link="/" />}></Route>
        <Route path="21ME84M4" element={<Module link="/" />}></Route>
        <Route path="21ME84M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT31QP" element={<Module link="/" />}></Route>
        <Route path="21ME32QP" element={<Module link="/" />}></Route>
        <Route path="21ME33QP" element={<Module link="/" />}></Route>
        <Route path="21ME34QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT41QP" element={<Module link="/" />}></Route>
        <Route path="21ME42QP" element={<Module link="/" />}></Route>
        <Route path="21ME43QP" element={<Module link="/" />}></Route>
        <Route path="21ME44QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21ME51QP" element={<Module link="/" />}></Route>
        <Route path="21ME52QP" element={<Module link="/" />}></Route>
        <Route path="21ME53QP" element={<Module link="/" />}></Route>
        <Route path="21ME54QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21ME61QP" element={<Module link="/" />}></Route>
        <Route path="21ME62QP" element={<Module link="/" />}></Route>
        <Route path="21ME63QP" element={<Module link="/" />}></Route>
        <Route path="21ME64QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21ME71QP" element={<Module link="/" />}></Route>
        <Route path="21ME72QP" element={<Module link="/" />}></Route>
        <Route path="21ME73QP" element={<Module link="/" />}></Route>
        <Route path="21ME74QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21ME81QP" element={<Module link="/" />}></Route>
        <Route path="21ME82QP" element={<Module link="/" />}></Route>
        <Route path="21ME83QP" element={<Module link="/" />}></Route>
        <Route path="21ME84QP" element={<Module link="/" />}></Route>
      </Routes>
    </>
  );
}

export default ME;
