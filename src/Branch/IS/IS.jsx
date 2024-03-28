import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SEM from "../SEM";
import Modules from "../Modules";
import Module from "../Module";

function IS() {
  return (
    <>
      <Routes>
        <Route
          path="3ISNotes"
          element={
            <SEM
              branch="Information Science 3rd SEM Notes"
              sem3="/21MAT31"
              sem4="/21IS32"
              sem5="/21IS33"
              sem6="/21IS34"
              sem7="/21ISL3"
              SEM211="21MAT31 (M3)"
              SEM212="21IS32 (DSA)"
              SEM213="21IS33 (ADE)"
              SEM214="21IS34 (COA)"
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
          path="/21IS32"
          element={
            <Modules
              branch="21IS32"
              sem3="/21IS32M1"
              sem4="/21IS32M2"
              sem5="/21IS32M3"
              sem6="/21IS32M4"
              sem7="/21IS32M5"
            />
          }
        ></Route>
        <Route
          path="/21IS33"
          element={
            <Modules
              branch="21IS33"
              sem3="/21IS33M1"
              sem4="/21IS33M2"
              sem5="/21IS34M3"
              sem6="/21IS32M4"
              sem7="/21IS32M5"
            />
          }
        ></Route>
        <Route
          path="/21IS34"
          element={
            <Modules
              branch="21IS34"
              sem3="/21IS34M1"
              sem4="/21IS34M2"
              sem5="/21IS34M3"
              sem6="/21IS34M4"
              sem7="/21IS34M5"
            />
          }
        ></Route>
        <Route
          path="/21IS35"
          element={
            <Modules
              branch="21IS35"
              sem3="/21IS35M1"
              sem4="/21IS35M2"
              sem5="/21IS35M3"
              sem6="/21IS35M4"
              sem7="/21IS35M5"
            />
          }
        ></Route>
        <Route
          path="4ISNotes"
          element={
            <SEM
              branch="Information Science 4th SEM Notes"
              sem3="/21MAT41"
              sem4="/21IS42"
              sem5="/21IS43"
              sem6="/21IS44"
              sem7="/21ISL4"
              SEM211="21MAT41 "
              SEM212="21IS42 "
              SEM213="21IS43 "
              SEM214="21IS44 "
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
          path="/21IS42"
          element={
            <Modules
              branch="21IS42"
              sem3="/21IS42M1"
              sem4="/21IS42M2"
              sem5="/21IS42M3"
              sem6="/21IS42M4"
              sem7="/21IS42M5"
            />
          }
        ></Route>
        <Route
          path="/21IS43"
          element={
            <Modules
              branch="21IS43"
              sem3="/21IS43M1"
              sem4="/21IS43M2"
              sem5="/21IS44M3"
              sem6="/21IS42M4"
              sem7="/21IS42M5"
            />
          }
        ></Route>
        <Route
          path="/21IS44"
          element={
            <Modules
              branch="21IS44"
              sem3="/21IS44M1"
              sem4="/21IS44M2"
              sem5="/21IS44M3"
              sem6="/21IS44M4"
              sem7="/21IS44M5"
            />
          }
        ></Route>
        <Route
          path="/21IS45"
          element={
            <Modules
              branch="21IS45"
              sem3="/21IS45M1"
              sem4="/21IS45M2"
              sem5="/21IS45M3"
              sem6="/21IS45M4"
              sem7="/21IS45M5"
            />
          }
        ></Route>
        <Route
          path="5ISNotes"
          element={
            <SEM
              branch="Information Science 5th SEM Notes"
              sem3="/21IS51"
              sem4="/21IS52"
              sem5="/21IS53"
              sem6="/21IS54"
              sem7="/21ISL5"
              SEM211="21IS51 "
              SEM212="21IS52 "
              SEM213="21IS53 "
              SEM214="21IS54 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21IS51"
          element={
            <Modules
              branch="21IS51"
              sem3="/21IS51M1"
              sem4="/21IS51M2"
              sem5="/21IS51M3"
              sem6="/21IS51M4"
              sem7="/21IS51M5"
            />
          }
        ></Route>
        <Route
          path="/21IS52"
          element={
            <Modules
              branch="21IS52"
              sem3="/21IS52M1"
              sem4="/21IS52M2"
              sem5="/21IS52M3"
              sem6="/21IS52M4"
              sem7="/21IS52M5"
            />
          }
        ></Route>
        <Route
          path="/21IS53"
          element={
            <Modules
              branch="21IS53"
              sem3="/21IS53M1"
              sem4="/21IS53M2"
              sem5="/21IS53M3"
              sem6="/21IS53M4"
              sem7="/21IS53M5"
            />
          }
        ></Route>
        <Route
          path="/21IS54"
          element={
            <Modules
              branch="21IS54"
              sem3="/21IS54M1"
              sem4="/21IS54M2"
              sem5="/21IS54M3"
              sem6="/21IS54M4"
              sem7="/21IS54M5"
            />
          }
        ></Route>
        <Route
          path="/21IS85"
          element={
            <Modules
              branch="21IS55"
              sem3="/21IS55M1"
              sem4="/21IS55M2"
              sem5="/21IS55M3"
              sem6="/21IS55M4"
              sem7="/21IS55M5"
            />
          }
        ></Route>
        <Route
          path="6ISNotes"
          element={
            <SEM
              branch="Information Science 6th SEM Notes"
              sem3="/21IS61"
              sem4="/21IS62"
              sem5="/21IS63"
              sem6="/21IS64"
              sem7="/21ISL6"
              SEM211="21IS61 "
              SEM212="21IS62 "
              SEM213="21IS63 "
              SEM214="21IS64 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21IS61"
          element={
            <Modules
              branch="21IS61"
              sem3="/21IS61M1"
              sem4="/21IS61M2"
              sem5="/21IS61M3"
              sem6="/21IS61M4"
              sem7="/21IS61M5"
            />
          }
        ></Route>
        <Route
          path="/21IS62"
          element={
            <Modules
              branch="21IS62"
              sem3="/21IS62M1"
              sem4="/21IS62M2"
              sem5="/21IS62M3"
              sem6="/21IS62M4"
              sem7="/21IS62M5"
            />
          }
        ></Route>
        <Route
          path="/21IS63"
          element={
            <Modules
              branch="21IS63"
              sem3="/21IS63M1"
              sem4="/21IS63M2"
              sem5="/21IS63M3"
              sem6="/21IS63M4"
              sem7="/21IS63M5"
            />
          }
        ></Route>
        <Route
          path="/21IS64"
          element={
            <Modules
              branch="21IS64"
              sem3="/21IS64M1"
              sem4="/21IS64M2"
              sem5="/21IS64M3"
              sem6="/21IS64M4"
              sem7="/21IS64M5"
            />
          }
        ></Route>
        <Route
          path="/21IS65"
          element={
            <Modules
              branch="21IS65"
              sem3="/21IS65M1"
              sem4="/21IS65M2"
              sem5="/21IS65M3"
              sem6="/21IS65M4"
              sem7="/21IS65M5"
            />
          }
        ></Route>

        <Route
          path="7ISNotes"
          element={
            <SEM
              branch="Information Science 7th SEM Notes "
              sem3="/21IS71"
              sem4="/21IS72"
              sem5="/21IS73"
              sem6="/21IS74"
              sem7="/21ISL6"
              SEM211="21IS71"
              SEM212="21IS72 "
              SEM213="21IS73 "
              SEM214="21IS74 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21IS71"
          element={
            <Modules
              branch="21IS71"
              sem3="/21IS71M1"
              sem4="/21IS71M2"
              sem5="/21IS71M3"
              sem6="/21IS71M4"
              sem7="/21IS71M5"
            />
          }
        ></Route>
        <Route
          path="/21IS72"
          element={
            <Modules
              branch="21IS72"
              sem3="/21IS72M1"
              sem4="/21IS72M2"
              sem5="/21IS72M3"
              sem6="/21IS72M4"
              sem7="/21IS72M5"
            />
          }
        ></Route>
        <Route
          path="/21IS73"
          element={
            <Modules
              branch="21IS73"
              sem3="/21IS73M1"
              sem4="/21IS73M2"
              sem5="/21IS73M3"
              sem6="/21IS73M4"
              sem7="/21IS73M5"
            />
          }
        ></Route>
        <Route
          path="/21IS74"
          element={
            <Modules
              branch="21IS74"
              sem3="/21IS74M1"
              sem4="/21IS74M2"
              sem5="/21IS74M3"
              sem6="/21IS74M4"
              sem7="/21IS74M5"
            />
          }
        ></Route>
        <Route
          path="/21IS75"
          element={
            <Modules
              branch="21IS75"
              sem3="/21IS75M1"
              sem4="/21IS75M2"
              sem5="/21IS75M3"
              sem6="/21IS75M4"
              sem7="/21IS75M5"
            />
          }
        ></Route>

        <Route
          path="8ISNotes"
          element={
            <SEM
              branch="Information Science 8th SEM Notes"
              sem3="/21IS81"
              sem4="/21IS82"
              sem5="/21IS83"
              sem6="/21IS84"
              sem7="/21ISL8"
              SEM211="21IS81 "
              SEM212="21IS82 "
              SEM213="21IS83 "
              SEM214="21IS84 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21IS81"
          element={
            <Modules
              branch="21IS81"
              sem3="/21IS81M1"
              sem4="/21IS81M2"
              sem5="/21IS81M3"
              sem6="/21IS81M4"
              sem7="/21IS81M5"
            />
          }
        ></Route>
        <Route
          path="/21IS82"
          element={
            <Modules
              branch="21IS82"
              sem3="/21IS82M1"
              sem4="/21IS82M2"
              sem5="/21IS82M3"
              sem6="/21IS82M4"
              sem7="/21IS82M5"
            />
          }
        ></Route>
        <Route
          path="/21IS83"
          element={
            <Modules
              branch="21IS83"
              sem3="/21IS83M1"
              sem4="/21IS83M2"
              sem5="/21IS83M3"
              sem6="/21IS83M4"
              sem7="/21IS83M5"
            />
          }
        ></Route>
        <Route
          path="/21IS84"
          element={
            <Modules
              branch="21IS84"
              sem3="/21IS84M1"
              sem4="/21IS84M2"
              sem5="/21IS84M3"
              sem6="/21IS84M4"
              sem7="/21IS84M5"
            />
          }
        ></Route>
        <Route
          path="/21IS85"
          element={
            <Modules
              branch="21IS85"
              sem3="/21IS85M1"
              sem4="/21IS85M2"
              sem5="/21IS85M3"
              sem6="/21IS85M4"
              sem7="/21IS85M5"
            />
          }
        ></Route>
        <Route
          path="/3ISQP"
          element={
            <SEM
              branch="Information Science 3rd SEM Question Paper"
              sem3="/21MAT31QP"
              sem4="/21IS32QP"
              sem5="/21IS33QP"
              sem6="/21IS34QP"
              sem7="/21IS36QP"
              SEM211="21MAT31 (M3)"
              SEM212="21IS32 (DSA)"
              SEM213="21IS33 (ADE)"
              SEM214="21IS34 (COA)"
            />
          }
        ></Route>
        <Route
          path="/4ISQP"
          element={
            <SEM
              branch="Information Science 4th SEM Question Paper"
              sem3="/21MAT41QP"
              sem4="/21IS42QP"
              sem5="/21IS43QP"
              sem6="/21IS44QP"
              SEM211="21MAT41  "
              SEM212="21IS42 "
              SEM213="21IS43 "
              SEM214="21IS44 "
            />
          }
        ></Route>
        <Route
          path="/5ISQP"
          element={
            <SEM
              branch="Information Science 5th SEM Question Paper"
              sem3="/21IS51QP"
              sem4="/21IS52QP"
              sem5="/21IS53QP"
              sem6="/21IS54QP"
              SEM211="21IS51 "
              SEM212="21IS52 "
              SEM213="21IS53 "
              SEM214="21IS54 "
            />
          }
        ></Route>
        <Route
          path="/6ISQP"
          element={
            <SEM
              branch="Information Science 6th SEM Question Paper"
              sem3="/21IS61QP"
              sem4="/21IS62QP"
              sem5="/21IS63QP"
              sem6="/21IS64QP"
              SEM211="21IS61 "
              SEM212="21IS62 "
              SEM213="21IS63 "
              SEM214="21IS64 "
            />
          }
        ></Route>
        <Route
          path="/7ISQP"
          element={
            <SEM
              branch="Information Science 7th SEM Question Paper"
              sem3="/21IS71QP"
              sem4="/21IS72QP"
              sem5="/21IS73QP"
              sem6="/21IS74QP"
              SEM211="21IS71"
              SEM212="21IS32"
              SEM213="21IS33"
              SEM214="21IS34"
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/8ISQP "
          element={
            <SEM
              branch="Information Science 8th SEM Question Paper"
              sem3="/21IS81QP"
              sem4="/21IS82QP"
              sem5="/21IS83QP"
              sem6="/21IS84QP"
              SEM211="21IS81"
              SEM212="21IS82 "
              SEM213="21IS83 "
              SEM214="21IS84 "
              SEM215="Lab"
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path="21IS31M1" element={<Module link="/" />}></Route>
        <Route path="21IS31M2" element={<Module link="/" />}></Route>
        <Route path="21IS31M3" element={<Module link="/" />}></Route>
        <Route path="21IS31M4" element={<Module link="/" />}></Route>
        <Route path="21IS31M5" element={<Module link="/" />}></Route>

        <Route path="21IS32M1" element={<Module link="/" />}></Route>
        <Route path="21IS32M2" element={<Module link="/" />}></Route>
        <Route path="21IS32M3" element={<Module link="/" />}></Route>
        <Route path="21IS32M4" element={<Module link="/" />}></Route>
        <Route path="21IS32M5" element={<Module link="/" />}></Route>

        <Route path="21IS33M1" element={<Module link="/" />}></Route>
        <Route path="21IS33M2" element={<Module link="/" />}></Route>
        <Route path="21IS33M3" element={<Module link="/" />}></Route>
        <Route path="21IS33M4" element={<Module link="/" />}></Route>
        <Route path="21IS33M5" element={<Module link="/" />}></Route>

        <Route path="21IS34M1" element={<Module link="/" />}></Route>
        <Route path="21IS34M2" element={<Module link="/" />}></Route>
        <Route path="21IS34M3" element={<Module link="/" />}></Route>
        <Route path="21IS34M4" element={<Module link="/" />}></Route>
        <Route path="21IS34M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21IS41M1" element={<Module link="/" />}></Route>
        <Route path="21IS41M2" element={<Module link="/" />}></Route>
        <Route path="21IS41M3" element={<Module link="/" />}></Route>
        <Route path="21IS41M4" element={<Module link="/" />}></Route>
        <Route path="21IS41M5" element={<Module link="/" />}></Route>

        <Route path="21IS42M1" element={<Module link="/" />}></Route>
        <Route path="21IS42M2" element={<Module link="/" />}></Route>
        <Route path="21IS42M3" element={<Module link="/" />}></Route>
        <Route path="21IS42M4" element={<Module link="/" />}></Route>
        <Route path="21IS42M5" element={<Module link="/" />}></Route>

        <Route path="21IS43M1" element={<Module link="/" />}></Route>
        <Route path="21IS43M2" element={<Module link="/" />}></Route>
        <Route path="21IS43M3" element={<Module link="/" />}></Route>
        <Route path="21IS43M4" element={<Module link="/" />}></Route>
        <Route path="21IS43M5" element={<Module link="/" />}></Route>

        <Route path="21IS44M1" element={<Module link="/" />}></Route>
        <Route path="21IS44M2" element={<Module link="/" />}></Route>
        <Route path="21IS44M3" element={<Module link="/" />}></Route>
        <Route path="21IS44M4" element={<Module link="/" />}></Route>
        <Route path="21IS44M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21IS51M1" element={<Module link="/" />}></Route>
        <Route path="21IS51M2" element={<Module link="/" />}></Route>
        <Route path="21IS51M3" element={<Module link="/" />}></Route>
        <Route path="21IS51M4" element={<Module link="/" />}></Route>
        <Route path="21IS51M5" element={<Module link="/" />}></Route>

        <Route path="21IS52M1" element={<Module link="/" />}></Route>
        <Route path="21IS52M2" element={<Module link="/" />}></Route>
        <Route path="21IS52M3" element={<Module link="/" />}></Route>
        <Route path="21IS52M4" element={<Module link="/" />}></Route>
        <Route path="21IS52M5" element={<Module link="/" />}></Route>

        <Route path="21IS53M1" element={<Module link="/" />}></Route>
        <Route path="21IS53M2" element={<Module link="/" />}></Route>
        <Route path="21IS53M3" element={<Module link="/" />}></Route>
        <Route path="21IS53M4" element={<Module link="/" />}></Route>
        <Route path="21IS53M5" element={<Module link="/" />}></Route>

        <Route path="21IS54M1" element={<Module link="/" />}></Route>
        <Route path="21IS54M2" element={<Module link="/" />}></Route>
        <Route path="21IS54M3" element={<Module link="/" />}></Route>
        <Route path="21IS54M4" element={<Module link="/" />}></Route>
        <Route path="21IS54M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21IS61M1" element={<Module link="/" />}></Route>
        <Route path="21IS61M2" element={<Module link="/" />}></Route>
        <Route path="21IS61M3" element={<Module link="/" />}></Route>
        <Route path="21IS61M4" element={<Module link="/" />}></Route>
        <Route path="21IS61M5" element={<Module link="/" />}></Route>

        <Route path="21IS62M1" element={<Module link="/" />}></Route>
        <Route path="21IS62M2" element={<Module link="/" />}></Route>
        <Route path="21IS62M3" element={<Module link="/" />}></Route>
        <Route path="21IS62M4" element={<Module link="/" />}></Route>
        <Route path="21IS62M5" element={<Module link="/" />}></Route>

        <Route path="21IS63M1" element={<Module link="/" />}></Route>
        <Route path="21IS63M2" element={<Module link="/" />}></Route>
        <Route path="21IS63M3" element={<Module link="/" />}></Route>
        <Route path="21IS63M4" element={<Module link="/" />}></Route>
        <Route path="21IS63M5" element={<Module link="/" />}></Route>

        <Route path="21IS64M1" element={<Module link="/" />}></Route>
        <Route path="21IS64M2" element={<Module link="/" />}></Route>
        <Route path="21IS64M3" element={<Module link="/" />}></Route>
        <Route path="21IS64M4" element={<Module link="/" />}></Route>
        <Route path="21IS64M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21IS71M1" element={<Module link="/" />}></Route>
        <Route path="21IS71M2" element={<Module link="/" />}></Route>
        <Route path="21IS71M3" element={<Module link="/" />}></Route>
        <Route path="21IS71M4" element={<Module link="/" />}></Route>
        <Route path="21IS71M5" element={<Module link="/" />}></Route>

        <Route path="21IS72M1" element={<Module link="/" />}></Route>
        <Route path="21IS72M2" element={<Module link="/" />}></Route>
        <Route path="21IS72M3" element={<Module link="/" />}></Route>
        <Route path="21IS72M4" element={<Module link="/" />}></Route>
        <Route path="21IS72M5" element={<Module link="/" />}></Route>

        <Route path="21IS73M1" element={<Module link="/" />}></Route>
        <Route path="21IS73M2" element={<Module link="/" />}></Route>
        <Route path="21IS73M3" element={<Module link="/" />}></Route>
        <Route path="21IS73M4" element={<Module link="/" />}></Route>
        <Route path="21IS73M5" element={<Module link="/" />}></Route>

        <Route path="21IS74M1" element={<Module link="/" />}></Route>
        <Route path="21IS74M2" element={<Module link="/" />}></Route>
        <Route path="21IS74M3" element={<Module link="/" />}></Route>
        <Route path="21IS74M4" element={<Module link="/" />}></Route>
        <Route path="21IS74M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21IS81M1" element={<Module link="/" />}></Route>
        <Route path="21IS81M2" element={<Module link="/" />}></Route>
        <Route path="21IS81M3" element={<Module link="/" />}></Route>
        <Route path="21IS81M4" element={<Module link="/" />}></Route>
        <Route path="21IS81M5" element={<Module link="/" />}></Route>

        <Route path="21IS82M1" element={<Module link="/" />}></Route>
        <Route path="21IS82M2" element={<Module link="/" />}></Route>
        <Route path="21IS82M3" element={<Module link="/" />}></Route>
        <Route path="21IS82M4" element={<Module link="/" />}></Route>
        <Route path="21IS82M5" element={<Module link="/" />}></Route>

        <Route path="21IS83M1" element={<Module link="/" />}></Route>
        <Route path="21IS83M2" element={<Module link="/" />}></Route>
        <Route path="21IS83M3" element={<Module link="/" />}></Route>
        <Route path="21IS83M4" element={<Module link="/" />}></Route>
        <Route path="21IS83M5" element={<Module link="/" />}></Route>

        <Route path="21IS84M1" element={<Module link="/" />}></Route>
        <Route path="21IS84M2" element={<Module link="/" />}></Route>
        <Route path="21IS84M3" element={<Module link="/" />}></Route>
        <Route path="21IS84M4" element={<Module link="/" />}></Route>
        <Route path="21IS84M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT31QP" element={<Module link="/" />}></Route>
        <Route path="21IS32QP" element={<Module link="/" />}></Route>
        <Route path="21IS33QP" element={<Module link="/" />}></Route>
        <Route path="21IS34QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT41QP" element={<Module link="/" />}></Route>
        <Route path="21IS42QP" element={<Module link="/" />}></Route>
        <Route path="21IS43QP" element={<Module link="/" />}></Route>
        <Route path="21IS44QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21IS51QP" element={<Module link="/" />}></Route>
        <Route path="21IS52QP" element={<Module link="/" />}></Route>
        <Route path="21IS53QP" element={<Module link="/" />}></Route>
        <Route path="21IS54QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21IS61QP" element={<Module link="/" />}></Route>
        <Route path="21IS62QP" element={<Module link="/" />}></Route>
        <Route path="21IS63QP" element={<Module link="/" />}></Route>
        <Route path="21IS64QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21IS71QP" element={<Module link="/" />}></Route>
        <Route path="21IS72QP" element={<Module link="/" />}></Route>
        <Route path="21IS73QP" element={<Module link="/" />}></Route>
        <Route path="21IS74QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21IS81QP" element={<Module link="/" />}></Route>
        <Route path="21IS82QP" element={<Module link="/" />}></Route>
        <Route path="21IS83QP" element={<Module link="/" />}></Route>
        <Route path="21IS84QP" element={<Module link="/" />}></Route>
      </Routes>
    </>
  );
}

export default IS;
