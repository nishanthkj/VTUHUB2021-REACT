import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SEM from "../SEM";
import Modules from "../Modules";
import Module from "../Module";

function CV() {
  return (
    <>
      <Routes>
        <Route
          path="3CVNotes"
          element={
            <SEM
              branch="Civil 3rd SEM Notes"
              sem3="/21MAT31"
              sem4="/21CV32"
              sem5="/21CV33"
              sem6="/21CV34"
              sem7="/21CVL3"
              SEM211="21MAT31 (M3)"
              SEM212="21CV32 (DSA)"
              SEM213="21CV33 (ADE)"
              SEM214="21CV34 (COA)"
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
          path="/21CV32"
          element={
            <Modules
              branch="21CV32"
              sem3="/21CV32M1"
              sem4="/21CV32M2"
              sem5="/21CV32M3"
              sem6="/21CV32M4"
              sem7="/21CV32M5"
            />
          }
        ></Route>
        <Route
          path="/21CV33"
          element={
            <Modules
              branch="21CV33"
              sem3="/21CV33M1"
              sem4="/21CV33M2"
              sem5="/21CV34M3"
              sem6="/21CV32M4"
              sem7="/21CV32M5"
            />
          }
        ></Route>
        <Route
          path="/21CV34"
          element={
            <Modules
              branch="21CV34"
              sem3="/21CV34M1"
              sem4="/21CV34M2"
              sem5="/21CV34M3"
              sem6="/21CV34M4"
              sem7="/21CV34M5"
            />
          }
        ></Route>
        <Route
          path="/21CV35"
          element={
            <Modules
              branch="21CV35"
              sem3="/21CV35M1"
              sem4="/21CV35M2"
              sem5="/21CV35M3"
              sem6="/21CV35M4"
              sem7="/21CV35M5"
            />
          }
        ></Route>
        <Route
          path="4CVNotes"
          element={
            <SEM
              branch="Civil 4th SEM Notes"
              sem3="/21MAT41"
              sem4="/21CV42"
              sem5="/21CV43"
              sem6="/21CV44"
              sem7="/21CVL4"
              SEM211="21MAT41 "
              SEM212="21CV42 "
              SEM213="21CV43 "
              SEM214="21CV44 "
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
          path="/21CV42"
          element={
            <Modules
              branch="21CV42"
              sem3="/21CV42M1"
              sem4="/21CV42M2"
              sem5="/21CV42M3"
              sem6="/21CV42M4"
              sem7="/21CV42M5"
            />
          }
        ></Route>
        <Route
          path="/21CV43"
          element={
            <Modules
              branch="21CV43"
              sem3="/21CV43M1"
              sem4="/21CV43M2"
              sem5="/21CV44M3"
              sem6="/21CV42M4"
              sem7="/21CV42M5"
            />
          }
        ></Route>
        <Route
          path="/21CV44"
          element={
            <Modules
              branch="21CV44"
              sem3="/21CV44M1"
              sem4="/21CV44M2"
              sem5="/21CV44M3"
              sem6="/21CV44M4"
              sem7="/21CV44M5"
            />
          }
        ></Route>
        <Route
          path="/21CV45"
          element={
            <Modules
              branch="21CV45"
              sem3="/21CV45M1"
              sem4="/21CV45M2"
              sem5="/21CV45M3"
              sem6="/21CV45M4"
              sem7="/21CV45M5"
            />
          }
        ></Route>
        <Route
          path="5CVNotes"
          element={
            <SEM
              branch="Civil 5th SEM Notes"
              sem3="/21CV51"
              sem4="/21CV52"
              sem5="/21CV53"
              sem6="/21CV54"
              sem7="/21CVL5"
              SEM211="21CV51 "
              SEM212="21CV52 "
              SEM213="21CV53 "
              SEM214="21CV54 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21CV51"
          element={
            <Modules
              branch="21CV51"
              sem3="/21CV51M1"
              sem4="/21CV51M2"
              sem5="/21CV51M3"
              sem6="/21CV51M4"
              sem7="/21CV51M5"
            />
          }
        ></Route>
        <Route
          path="/21CV52"
          element={
            <Modules
              branch="21CV52"
              sem3="/21CV52M1"
              sem4="/21CV52M2"
              sem5="/21CV52M3"
              sem6="/21CV52M4"
              sem7="/21CV52M5"
            />
          }
        ></Route>
        <Route
          path="/21CV53"
          element={
            <Modules
              branch="21CV53"
              sem3="/21CV53M1"
              sem4="/21CV53M2"
              sem5="/21CV53M3"
              sem6="/21CV53M4"
              sem7="/21CV53M5"
            />
          }
        ></Route>
        <Route
          path="/21CV54"
          element={
            <Modules
              branch="21CV54"
              sem3="/21CV54M1"
              sem4="/21CV54M2"
              sem5="/21CV54M3"
              sem6="/21CV54M4"
              sem7="/21CV54M5"
            />
          }
        ></Route>
        <Route
          path="/21CV85"
          element={
            <Modules
              branch="21CV55"
              sem3="/21CV55M1"
              sem4="/21CV55M2"
              sem5="/21CV55M3"
              sem6="/21CV55M4"
              sem7="/21CV55M5"
            />
          }
        ></Route>
        <Route
          path="6CVNotes"
          element={
            <SEM
              branch="Civil 6th SEM Notes"
              sem3="/21CV61"
              sem4="/21CV62"
              sem5="/21CV63"
              sem6="/21CV64"
              sem7="/21CVL6"
              SEM211="21CV61 "
              SEM212="21CV62 "
              SEM213="21CV63 "
              SEM214="21CV64 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21CV61"
          element={
            <Modules
              branch="21CV61"
              sem3="/21CV61M1"
              sem4="/21CV61M2"
              sem5="/21CV61M3"
              sem6="/21CV61M4"
              sem7="/21CV61M5"
            />
          }
        ></Route>
        <Route
          path="/21CV62"
          element={
            <Modules
              branch="21CV62"
              sem3="/21CV62M1"
              sem4="/21CV62M2"
              sem5="/21CV62M3"
              sem6="/21CV62M4"
              sem7="/21CV62M5"
            />
          }
        ></Route>
        <Route
          path="/21CV63"
          element={
            <Modules
              branch="21CV63"
              sem3="/21CV63M1"
              sem4="/21CV63M2"
              sem5="/21CV63M3"
              sem6="/21CV63M4"
              sem7="/21CV63M5"
            />
          }
        ></Route>
        <Route
          path="/21CV64"
          element={
            <Modules
              branch="21CV64"
              sem3="/21CV64M1"
              sem4="/21CV64M2"
              sem5="/21CV64M3"
              sem6="/21CV64M4"
              sem7="/21CV64M5"
            />
          }
        ></Route>
        <Route
          path="/21CV65"
          element={
            <Modules
              branch="21CV65"
              sem3="/21CV65M1"
              sem4="/21CV65M2"
              sem5="/21CV65M3"
              sem6="/21CV65M4"
              sem7="/21CV65M5"
            />
          }
        ></Route>

        <Route
          path="7CVNotes"
          element={
            <SEM
              branch="Civil 7th SEM Notes "
              sem3="/21CV71"
              sem4="/21CV72"
              sem5="/21CV73"
              sem6="/21CV74"
              sem7="/21CVL6"
              SEM211="21CV71"
              SEM212="21CV72 "
              SEM213="21CV73 "
              SEM214="21CV74 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21CV71"
          element={
            <Modules
              branch="21CV71"
              sem3="/21CV71M1"
              sem4="/21CV71M2"
              sem5="/21CV71M3"
              sem6="/21CV71M4"
              sem7="/21CV71M5"
            />
          }
        ></Route>
        <Route
          path="/21CV72"
          element={
            <Modules
              branch="21CV72"
              sem3="/21CV72M1"
              sem4="/21CV72M2"
              sem5="/21CV72M3"
              sem6="/21CV72M4"
              sem7="/21CV72M5"
            />
          }
        ></Route>
        <Route
          path="/21CV73"
          element={
            <Modules
              branch="21CV73"
              sem3="/21CV73M1"
              sem4="/21CV73M2"
              sem5="/21CV73M3"
              sem6="/21CV73M4"
              sem7="/21CV73M5"
            />
          }
        ></Route>
        <Route
          path="/21CV74"
          element={
            <Modules
              branch="21CV74"
              sem3="/21CV74M1"
              sem4="/21CV74M2"
              sem5="/21CV74M3"
              sem6="/21CV74M4"
              sem7="/21CV74M5"
            />
          }
        ></Route>
        <Route
          path="/21CV75"
          element={
            <Modules
              branch="21CV75"
              sem3="/21CV75M1"
              sem4="/21CV75M2"
              sem5="/21CV75M3"
              sem6="/21CV75M4"
              sem7="/21CV75M5"
            />
          }
        ></Route>

        <Route
          path="8CVNotes"
          element={
            <SEM
              branch="Civil 8th SEM Notes"
              sem3="/21CV81"
              sem4="/21CV82"
              sem5="/21CV83"
              sem6="/21CV84"
              sem7="/21CVL8"
              SEM211="21CV81 "
              SEM212="21CV82 "
              SEM213="21CV83 "
              SEM214="21CV84 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21CV81"
          element={
            <Modules
              branch="21CV81"
              sem3="/21CV81M1"
              sem4="/21CV81M2"
              sem5="/21CV81M3"
              sem6="/21CV81M4"
              sem7="/21CV81M5"
            />
          }
        ></Route>
        <Route
          path="/21CV82"
          element={
            <Modules
              branch="21CV82"
              sem3="/21CV82M1"
              sem4="/21CV82M2"
              sem5="/21CV82M3"
              sem6="/21CV82M4"
              sem7="/21CV82M5"
            />
          }
        ></Route>
        <Route
          path="/21CV83"
          element={
            <Modules
              branch="21CV83"
              sem3="/21CV83M1"
              sem4="/21CV83M2"
              sem5="/21CV83M3"
              sem6="/21CV83M4"
              sem7="/21CV83M5"
            />
          }
        ></Route>
        <Route
          path="/21CV84"
          element={
            <Modules
              branch="21CV84"
              sem3="/21CV84M1"
              sem4="/21CV84M2"
              sem5="/21CV84M3"
              sem6="/21CV84M4"
              sem7="/21CV84M5"
            />
          }
        ></Route>
        <Route
          path="/21CV85"
          element={
            <Modules
              branch="21CV85"
              sem3="/21CV85M1"
              sem4="/21CV85M2"
              sem5="/21CV85M3"
              sem6="/21CV85M4"
              sem7="/21CV85M5"
            />
          }
        ></Route>
        <Route
          path="/3CVQP"
          element={
            <SEM
              branch="Civil 3rd SEM Question Paper"
              sem3="/21MAT31QP"
              sem4="/21CV32QP"
              sem5="/21CV33QP"
              sem6="/21CV34QP"
              sem7="/21CV36QP"
              SEM211="21MAT31 (M3)"
              SEM212="21CV32 (DSA)"
              SEM213="21CV33 (ADE)"
              SEM214="21CV34 (COA)"
            />
          }
        ></Route>
        <Route
          path="/4CVQP"
          element={
            <SEM
              branch="Civil 4th SEM Question Paper"
              sem3="/21MAT41QP"
              sem4="/21CV42QP"
              sem5="/21CV43QP"
              sem6="/21CV44QP"
              SEM211="21MAT41  "
              SEM212="21CV42 "
              SEM213="21CV43 "
              SEM214="21CV44 "
            />
          }
        ></Route>
        <Route
          path="/5CVQP"
          element={
            <SEM
              branch="Civil 5th SEM Question Paper"
              sem3="/21CV51QP"
              sem4="/21CV52QP"
              sem5="/21CV53QP"
              sem6="/21CV54QP"
              SEM211="21CV51 "
              SEM212="21CV52 "
              SEM213="21CV53 "
              SEM214="21CV54 "
            />
          }
        ></Route>
        <Route
          path="/6CVQP"
          element={
            <SEM
              branch="Civil 6th SEM Question Paper"
              sem3="/21CV61QP"
              sem4="/21CV62QP"
              sem5="/21CV63QP"
              sem6="/21CV64QP"
              SEM211="21CV61 "
              SEM212="21CV62 "
              SEM213="21CV63 "
              SEM214="21CV64 "
            />
          }
        ></Route>
        <Route
          path="/7CVQP"
          element={
            <SEM
              branch="Civil 7th SEM Question Paper"
              sem3="/21CV71QP"
              sem4="/21CV72QP"
              sem5="/21CV73QP"
              sem6="/21CV74QP"
              SEM211="21CV71"
              SEM212="21CV32"
              SEM213="21CV33"
              SEM214="21CV34"
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/8CVQP "
          element={
            <SEM
              branch="Civil 8th SEM Question Paper"
              sem3="/21CV81QP"
              sem4="/21CV82QP"
              sem5="/21CV83QP"
              sem6="/21CV84QP"
              SEM211="21CV81"
              SEM212="21CV82 "
              SEM213="21CV83 "
              SEM214="21CV84 "
              SEM215="Lab"
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path="21CV31M1" element={<Module link="/" />}></Route>
        <Route path="21CV31M2" element={<Module link="/" />}></Route>
        <Route path="21CV31M3" element={<Module link="/" />}></Route>
        <Route path="21CV31M4" element={<Module link="/" />}></Route>
        <Route path="21CV31M5" element={<Module link="/" />}></Route>

        <Route path="21CV32M1" element={<Module link="/" />}></Route>
        <Route path="21CV32M2" element={<Module link="/" />}></Route>
        <Route path="21CV32M3" element={<Module link="/" />}></Route>
        <Route path="21CV32M4" element={<Module link="/" />}></Route>
        <Route path="21CV32M5" element={<Module link="/" />}></Route>

        <Route path="21CV33M1" element={<Module link="/" />}></Route>
        <Route path="21CV33M2" element={<Module link="/" />}></Route>
        <Route path="21CV33M3" element={<Module link="/" />}></Route>
        <Route path="21CV33M4" element={<Module link="/" />}></Route>
        <Route path="21CV33M5" element={<Module link="/" />}></Route>

        <Route path="21CV34M1" element={<Module link="/" />}></Route>
        <Route path="21CV34M2" element={<Module link="/" />}></Route>
        <Route path="21CV34M3" element={<Module link="/" />}></Route>
        <Route path="21CV34M4" element={<Module link="/" />}></Route>
        <Route path="21CV34M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21CV41M1" element={<Module link="/" />}></Route>
        <Route path="21CV41M2" element={<Module link="/" />}></Route>
        <Route path="21CV41M3" element={<Module link="/" />}></Route>
        <Route path="21CV41M4" element={<Module link="/" />}></Route>
        <Route path="21CV41M5" element={<Module link="/" />}></Route>

        <Route path="21CV42M1" element={<Module link="/" />}></Route>
        <Route path="21CV42M2" element={<Module link="/" />}></Route>
        <Route path="21CV42M3" element={<Module link="/" />}></Route>
        <Route path="21CV42M4" element={<Module link="/" />}></Route>
        <Route path="21CV42M5" element={<Module link="/" />}></Route>

        <Route path="21CV43M1" element={<Module link="/" />}></Route>
        <Route path="21CV43M2" element={<Module link="/" />}></Route>
        <Route path="21CV43M3" element={<Module link="/" />}></Route>
        <Route path="21CV43M4" element={<Module link="/" />}></Route>
        <Route path="21CV43M5" element={<Module link="/" />}></Route>

        <Route path="21CV44M1" element={<Module link="/" />}></Route>
        <Route path="21CV44M2" element={<Module link="/" />}></Route>
        <Route path="21CV44M3" element={<Module link="/" />}></Route>
        <Route path="21CV44M4" element={<Module link="/" />}></Route>
        <Route path="21CV44M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21CV51M1" element={<Module link="/" />}></Route>
        <Route path="21CV51M2" element={<Module link="/" />}></Route>
        <Route path="21CV51M3" element={<Module link="/" />}></Route>
        <Route path="21CV51M4" element={<Module link="/" />}></Route>
        <Route path="21CV51M5" element={<Module link="/" />}></Route>

        <Route path="21CV52M1" element={<Module link="/" />}></Route>
        <Route path="21CV52M2" element={<Module link="/" />}></Route>
        <Route path="21CV52M3" element={<Module link="/" />}></Route>
        <Route path="21CV52M4" element={<Module link="/" />}></Route>
        <Route path="21CV52M5" element={<Module link="/" />}></Route>

        <Route path="21CV53M1" element={<Module link="/" />}></Route>
        <Route path="21CV53M2" element={<Module link="/" />}></Route>
        <Route path="21CV53M3" element={<Module link="/" />}></Route>
        <Route path="21CV53M4" element={<Module link="/" />}></Route>
        <Route path="21CV53M5" element={<Module link="/" />}></Route>

        <Route path="21CV54M1" element={<Module link="/" />}></Route>
        <Route path="21CV54M2" element={<Module link="/" />}></Route>
        <Route path="21CV54M3" element={<Module link="/" />}></Route>
        <Route path="21CV54M4" element={<Module link="/" />}></Route>
        <Route path="21CV54M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21CV61M1" element={<Module link="/" />}></Route>
        <Route path="21CV61M2" element={<Module link="/" />}></Route>
        <Route path="21CV61M3" element={<Module link="/" />}></Route>
        <Route path="21CV61M4" element={<Module link="/" />}></Route>
        <Route path="21CV61M5" element={<Module link="/" />}></Route>

        <Route path="21CV62M1" element={<Module link="/" />}></Route>
        <Route path="21CV62M2" element={<Module link="/" />}></Route>
        <Route path="21CV62M3" element={<Module link="/" />}></Route>
        <Route path="21CV62M4" element={<Module link="/" />}></Route>
        <Route path="21CV62M5" element={<Module link="/" />}></Route>

        <Route path="21CV63M1" element={<Module link="/" />}></Route>
        <Route path="21CV63M2" element={<Module link="/" />}></Route>
        <Route path="21CV63M3" element={<Module link="/" />}></Route>
        <Route path="21CV63M4" element={<Module link="/" />}></Route>
        <Route path="21CV63M5" element={<Module link="/" />}></Route>

        <Route path="21CV64M1" element={<Module link="/" />}></Route>
        <Route path="21CV64M2" element={<Module link="/" />}></Route>
        <Route path="21CV64M3" element={<Module link="/" />}></Route>
        <Route path="21CV64M4" element={<Module link="/" />}></Route>
        <Route path="21CV64M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CV71M1" element={<Module link="/" />}></Route>
        <Route path="21CV71M2" element={<Module link="/" />}></Route>
        <Route path="21CV71M3" element={<Module link="/" />}></Route>
        <Route path="21CV71M4" element={<Module link="/" />}></Route>
        <Route path="21CV71M5" element={<Module link="/" />}></Route>

        <Route path="21CV72M1" element={<Module link="/" />}></Route>
        <Route path="21CV72M2" element={<Module link="/" />}></Route>
        <Route path="21CV72M3" element={<Module link="/" />}></Route>
        <Route path="21CV72M4" element={<Module link="/" />}></Route>
        <Route path="21CV72M5" element={<Module link="/" />}></Route>

        <Route path="21CV73M1" element={<Module link="/" />}></Route>
        <Route path="21CV73M2" element={<Module link="/" />}></Route>
        <Route path="21CV73M3" element={<Module link="/" />}></Route>
        <Route path="21CV73M4" element={<Module link="/" />}></Route>
        <Route path="21CV73M5" element={<Module link="/" />}></Route>

        <Route path="21CV74M1" element={<Module link="/" />}></Route>
        <Route path="21CV74M2" element={<Module link="/" />}></Route>
        <Route path="21CV74M3" element={<Module link="/" />}></Route>
        <Route path="21CV74M4" element={<Module link="/" />}></Route>
        <Route path="21CV74M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CV81M1" element={<Module link="/" />}></Route>
        <Route path="21CV81M2" element={<Module link="/" />}></Route>
        <Route path="21CV81M3" element={<Module link="/" />}></Route>
        <Route path="21CV81M4" element={<Module link="/" />}></Route>
        <Route path="21CV81M5" element={<Module link="/" />}></Route>

        <Route path="21CV82M1" element={<Module link="/" />}></Route>
        <Route path="21CV82M2" element={<Module link="/" />}></Route>
        <Route path="21CV82M3" element={<Module link="/" />}></Route>
        <Route path="21CV82M4" element={<Module link="/" />}></Route>
        <Route path="21CV82M5" element={<Module link="/" />}></Route>

        <Route path="21CV83M1" element={<Module link="/" />}></Route>
        <Route path="21CV83M2" element={<Module link="/" />}></Route>
        <Route path="21CV83M3" element={<Module link="/" />}></Route>
        <Route path="21CV83M4" element={<Module link="/" />}></Route>
        <Route path="21CV83M5" element={<Module link="/" />}></Route>

        <Route path="21CV84M1" element={<Module link="/" />}></Route>
        <Route path="21CV84M2" element={<Module link="/" />}></Route>
        <Route path="21CV84M3" element={<Module link="/" />}></Route>
        <Route path="21CV84M4" element={<Module link="/" />}></Route>
        <Route path="21CV84M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT31QP" element={<Module link="/" />}></Route>
        <Route path="21CV32QP" element={<Module link="/" />}></Route>
        <Route path="21CV33QP" element={<Module link="/" />}></Route>
        <Route path="21CV34QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT41QP" element={<Module link="/" />}></Route>
        <Route path="21CV42QP" element={<Module link="/" />}></Route>
        <Route path="21CV43QP" element={<Module link="/" />}></Route>
        <Route path="21CV44QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CV51QP" element={<Module link="/" />}></Route>
        <Route path="21CV52QP" element={<Module link="/" />}></Route>
        <Route path="21CV53QP" element={<Module link="/" />}></Route>
        <Route path="21CV54QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CV61QP" element={<Module link="/" />}></Route>
        <Route path="21CV62QP" element={<Module link="/" />}></Route>
        <Route path="21CV63QP" element={<Module link="/" />}></Route>
        <Route path="21CV64QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CV71QP" element={<Module link="/" />}></Route>
        <Route path="21CV72QP" element={<Module link="/" />}></Route>
        <Route path="21CV73QP" element={<Module link="/" />}></Route>
        <Route path="21CV74QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CV81QP" element={<Module link="/" />}></Route>
        <Route path="21CV82QP" element={<Module link="/" />}></Route>
        <Route path="21CV83QP" element={<Module link="/" />}></Route>
        <Route path="21CV84QP" element={<Module link="/" />}></Route>
      </Routes>
    </>
  );
}

export default CV;
