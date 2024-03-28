import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SEM from "../SEM";
import Modules from "../Modules";
import Module from "../Module";

function CS() {
  return (
    <>
      <Routes>
        <Route
          path="3CSNotes"
          element={
            <SEM
              branch="Computer Science 3rd SEM Notes"
              sem3="/21MAT31"
              sem4="/21CS32"
              sem5="/21CS33"
              sem6="/21CS34"
              sem7="/21CSL3"
              SEM211="21MAT31 (M3)"
              SEM212="21CS32 (DSA)"
              SEM213="21CS33 (ADE)"
              SEM214="21CS34 (COA)"
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
          path="/21CS32"
          element={
            <Modules
              branch="21CS32"
              sem3="/21CS32M1"
              sem4="/21CS32M2"
              sem5="/21CS32M3"
              sem6="/21CS32M4"
              sem7="/21CS32M5"
            />
          }
        ></Route>
        <Route
          path="/21CS33"
          element={
            <Modules
              branch="21CS33"
              sem3="/21CS33M1"
              sem4="/21CS33M2"
              sem5="/21CS34M3"
              sem6="/21CS32M4"
              sem7="/21CS32M5"
            />
          }
        ></Route>
        <Route
          path="/21CS34"
          element={
            <Modules
              branch="21CS34"
              sem3="/21CS34M1"
              sem4="/21CS34M2"
              sem5="/21CS34M3"
              sem6="/21CS34M4"
              sem7="/21CS34M5"
            />
          }
        ></Route>
        <Route
          path="/21CS35"
          element={
            <Modules
              branch="21CS35"
              sem3="/21CS35M1"
              sem4="/21CS35M2"
              sem5="/21CS35M3"
              sem6="/21CS35M4"
              sem7="/21CS35M5"
            />
          }
        ></Route>
        <Route
          path="4CSNotes"
          element={
            <SEM
              branch="Computer Science 4th SEM Notes"
              sem3="/21MAT41"
              sem4="/21CS42"
              sem5="/21CS43"
              sem6="/21CS44"
              sem7="/21CSL4"
              SEM211="21MAT41 "
              SEM212="21CS42 "
              SEM213="21CS43 "
              SEM214="21CS44 "
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
          path="/21CS42"
          element={
            <Modules
              branch="21CS42"
              sem3="/21CS42M1"
              sem4="/21CS42M2"
              sem5="/21CS42M3"
              sem6="/21CS42M4"
              sem7="/21CS42M5"
            />
          }
        ></Route>
        <Route
          path="/21CS43"
          element={
            <Modules
              branch="21CS43"
              sem3="/21CS43M1"
              sem4="/21CS43M2"
              sem5="/21CS44M3"
              sem6="/21CS42M4"
              sem7="/21CS42M5"
            />
          }
        ></Route>
        <Route
          path="/21CS44"
          element={
            <Modules
              branch="21CS44"
              sem3="/21CS44M1"
              sem4="/21CS44M2"
              sem5="/21CS44M3"
              sem6="/21CS44M4"
              sem7="/21CS44M5"
            />
          }
        ></Route>
        <Route
          path="/21CS45"
          element={
            <Modules
              branch="21CS45"
              sem3="/21CS45M1"
              sem4="/21CS45M2"
              sem5="/21CS45M3"
              sem6="/21CS45M4"
              sem7="/21CS45M5"
            />
          }
        ></Route>
        <Route
          path="5CSNotes"
          element={
            <SEM
              branch="Computer Science 5th SEM Notes"
              sem3="/21CS51"
              sem4="/21CS52"
              sem5="/21CS53"
              sem6="/21CS54"
              sem7="/21CSL5"
              SEM211="21CS51 "
              SEM212="21CS52 "
              SEM213="21CS53 "
              SEM214="21CS54 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21CS51"
          element={
            <Modules
              branch="21CS51"
              sem3="/21CS51M1"
              sem4="/21CS51M2"
              sem5="/21CS51M3"
              sem6="/21CS51M4"
              sem7="/21CS51M5"
            />
          }
        ></Route>
        <Route
          path="/21CS52"
          element={
            <Modules
              branch="21CS52"
              sem3="/21CS52M1"
              sem4="/21CS52M2"
              sem5="/21CS52M3"
              sem6="/21CS52M4"
              sem7="/21CS52M5"
            />
          }
        ></Route>
        <Route
          path="/21CS53"
          element={
            <Modules
              branch="21CS53"
              sem3="/21CS53M1"
              sem4="/21CS53M2"
              sem5="/21CS53M3"
              sem6="/21CS53M4"
              sem7="/21CS53M5"
            />
          }
        ></Route>
        <Route
          path="/21CS54"
          element={
            <Modules
              branch="21CS54"
              sem3="/21CS54M1"
              sem4="/21CS54M2"
              sem5="/21CS54M3"
              sem6="/21CS54M4"
              sem7="/21CS54M5"
            />
          }
        ></Route>
        <Route
          path="/21CS85"
          element={
            <Modules
              branch="21CS55"
              sem3="/21CS55M1"
              sem4="/21CS55M2"
              sem5="/21CS55M3"
              sem6="/21CS55M4"
              sem7="/21CS55M5"
            />
          }
        ></Route>
        <Route
          path="6CSNotes"
          element={
            <SEM
              branch="Computer Science 6th SEM Notes"
              sem3="/21CS61"
              sem4="/21CS62"
              sem5="/21CS63"
              sem6="/21CS64"
              sem7="/21CSL6"
              SEM211="21CS61 "
              SEM212="21CS62 "
              SEM213="21CS63 "
              SEM214="21CS64 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21CS61"
          element={
            <Modules
              branch="21CS61"
              sem3="/21CS61M1"
              sem4="/21CS61M2"
              sem5="/21CS61M3"
              sem6="/21CS61M4"
              sem7="/21CS61M5"
            />
          }
        ></Route>
        <Route
          path="/21CS62"
          element={
            <Modules
              branch="21CS62"
              sem3="/21CS62M1"
              sem4="/21CS62M2"
              sem5="/21CS62M3"
              sem6="/21CS62M4"
              sem7="/21CS62M5"
            />
          }
        ></Route>
        <Route
          path="/21CS63"
          element={
            <Modules
              branch="21CS63"
              sem3="/21CS63M1"
              sem4="/21CS63M2"
              sem5="/21CS63M3"
              sem6="/21CS63M4"
              sem7="/21CS63M5"
            />
          }
        ></Route>
        <Route
          path="/21CS64"
          element={
            <Modules
              branch="21CS64"
              sem3="/21CS64M1"
              sem4="/21CS64M2"
              sem5="/21CS64M3"
              sem6="/21CS64M4"
              sem7="/21CS64M5"
            />
          }
        ></Route>
        <Route
          path="/21CS65"
          element={
            <Modules
              branch="21CS65"
              sem3="/21CS65M1"
              sem4="/21CS65M2"
              sem5="/21CS65M3"
              sem6="/21CS65M4"
              sem7="/21CS65M5"
            />
          }
        ></Route>

        <Route
          path="7CSNotes"
          element={
            <SEM
              branch="Computer Science 7th SEM Notes "
              sem3="/21CS71"
              sem4="/21CS72"
              sem5="/21CS73"
              sem6="/21CS74"
              sem7="/21CSL6"
              SEM211="21CS71"
              SEM212="21CS72 "
              SEM213="21CS73 "
              SEM214="21CS74 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21CS71"
          element={
            <Modules
              branch="21CS71"
              sem3="/21CS71M1"
              sem4="/21CS71M2"
              sem5="/21CS71M3"
              sem6="/21CS71M4"
              sem7="/21CS71M5"
            />
          }
        ></Route>
        <Route
          path="/21CS72"
          element={
            <Modules
              branch="21CS72"
              sem3="/21CS72M1"
              sem4="/21CS72M2"
              sem5="/21CS72M3"
              sem6="/21CS72M4"
              sem7="/21CS72M5"
            />
          }
        ></Route>
        <Route
          path="/21CS73"
          element={
            <Modules
              branch="21CS73"
              sem3="/21CS73M1"
              sem4="/21CS73M2"
              sem5="/21CS73M3"
              sem6="/21CS73M4"
              sem7="/21CS73M5"
            />
          }
        ></Route>
        <Route
          path="/21CS74"
          element={
            <Modules
              branch="21CS74"
              sem3="/21CS74M1"
              sem4="/21CS74M2"
              sem5="/21CS74M3"
              sem6="/21CS74M4"
              sem7="/21CS74M5"
            />
          }
        ></Route>
        <Route
          path="/21CS75"
          element={
            <Modules
              branch="21CS75"
              sem3="/21CS75M1"
              sem4="/21CS75M2"
              sem5="/21CS75M3"
              sem6="/21CS75M4"
              sem7="/21CS75M5"
            />
          }
        ></Route>

        <Route
          path="8CSNotes"
          element={
            <SEM
              branch="Computer Science 8th SEM Notes"
              sem3="/21CS81"
              sem4="/21CS82"
              sem5="/21CS83"
              sem6="/21CS84"
              sem7="/21CSL8"
              SEM211="21CS81 "
              SEM212="21CS82 "
              SEM213="21CS83 "
              SEM214="21CS84 "
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/21CS81"
          element={
            <Modules
              branch="21CS81"
              sem3="/21CS81M1"
              sem4="/21CS81M2"
              sem5="/21CS81M3"
              sem6="/21CS81M4"
              sem7="/21CS81M5"
            />
          }
        ></Route>
        <Route
          path="/21CS82"
          element={
            <Modules
              branch="21CS82"
              sem3="/21CS82M1"
              sem4="/21CS82M2"
              sem5="/21CS82M3"
              sem6="/21CS82M4"
              sem7="/21CS82M5"
            />
          }
        ></Route>
        <Route
          path="/21CS83"
          element={
            <Modules
              branch="21CS83"
              sem3="/21CS83M1"
              sem4="/21CS83M2"
              sem5="/21CS83M3"
              sem6="/21CS83M4"
              sem7="/21CS83M5"
            />
          }
        ></Route>
        <Route
          path="/21CS84"
          element={
            <Modules
              branch="21CS84"
              sem3="/21CS84M1"
              sem4="/21CS84M2"
              sem5="/21CS84M3"
              sem6="/21CS84M4"
              sem7="/21CS84M5"
            />
          }
        ></Route>
        <Route
          path="/21CS85"
          element={
            <Modules
              branch="21CS85"
              sem3="/21CS85M1"
              sem4="/21CS85M2"
              sem5="/21CS85M3"
              sem6="/21CS85M4"
              sem7="/21CS85M5"
            />
          }
        ></Route>
        <Route
          path="/3CSQP"
          element={
            <SEM
              branch="Computer Science 3rd SEM Question Paper"
              sem3="/21MAT31QP"
              sem4="/21CS32QP"
              sem5="/21CS33QP"
              sem6="/21CS34QP"
              sem7="/21CS36QP"
              SEM211="21MAT31 (M3)"
              SEM212="21CS32 (DSA)"
              SEM213="21CS33 (ADE)"
              SEM214="21CS34 (COA)"
            />
          }
        ></Route>
        <Route
          path="/4CSQP"
          element={
            <SEM
              branch="Computer Science 4th SEM Question Paper"
              sem3="/21MAT41QP"
              sem4="/21CS42QP"
              sem5="/21CS43QP"
              sem6="/21CS44QP"
              SEM211="21MAT41  "
              SEM212="21CS42 "
              SEM213="21CS43 "
              SEM214="21CS44 "
            />
          }
        ></Route>
        <Route
          path="/5CSQP"
          element={
            <SEM
              branch="Computer Science 5th SEM Question Paper"
              sem3="/21CS51QP"
              sem4="/21CS52QP"
              sem5="/21CS53QP"
              sem6="/21CS54QP"
              SEM211="21CS51 "
              SEM212="21CS52 "
              SEM213="21CS53 "
              SEM214="21CS54 "
            />
          }
        ></Route>
        <Route
          path="/6CSQP"
          element={
            <SEM
              branch="Computer Science 6th SEM Question Paper"
              sem3="/21CS61QP"
              sem4="/21CS62QP"
              sem5="/21CS63QP"
              sem6="/21CS64QP"
              SEM211="21CS61 "
              SEM212="21CS62 "
              SEM213="21CS63 "
              SEM214="21CS64 "
            />
          }
        ></Route>
        <Route
          path="/7CSQP"
          element={
            <SEM
              branch="Computer Science 7th SEM Question Paper"
              sem3="/21CS71QP"
              sem4="/21CS72QP"
              sem5="/21CS73QP"
              sem6="/21CS74QP"
              SEM211="21CS71"
              SEM212="21CS32"
              SEM213="21CS33"
              SEM214="21CS34"
              SEM215="Lab"
            />
          }
        ></Route>
        <Route
          path="/8CSQP "
          element={
            <SEM
              branch="Computer Science 8th SEM Question Paper"
              sem3="/21CS81QP"
              sem4="/21CS82QP"
              sem5="/21CS83QP"
              sem6="/21CS84QP"
              SEM211="21CS81"
              SEM212="21CS82 "
              SEM213="21CS83 "
              SEM214="21CS84 "
              SEM215="Lab"
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path="21CS31M1" element={<Module link="/" />}></Route>
        <Route path="21CS31M2" element={<Module link="/" />}></Route>
        <Route path="21CS31M3" element={<Module link="/" />}></Route>
        <Route path="21CS31M4" element={<Module link="/" />}></Route>
        <Route path="21CS31M5" element={<Module link="/" />}></Route>

        <Route path="21CS32M1" element={<Module link="/" />}></Route>
        <Route path="21CS32M2" element={<Module link="/" />}></Route>
        <Route path="21CS32M3" element={<Module link="/" />}></Route>
        <Route path="21CS32M4" element={<Module link="/" />}></Route>
        <Route path="21CS32M5" element={<Module link="/" />}></Route>

        <Route path="21CS33M1" element={<Module link="/" />}></Route>
        <Route path="21CS33M2" element={<Module link="/" />}></Route>
        <Route path="21CS33M3" element={<Module link="/" />}></Route>
        <Route path="21CS33M4" element={<Module link="/" />}></Route>
        <Route path="21CS33M5" element={<Module link="/" />}></Route>

        <Route path="21CS34M1" element={<Module link="/" />}></Route>
        <Route path="21CS34M2" element={<Module link="/" />}></Route>
        <Route path="21CS34M3" element={<Module link="/" />}></Route>
        <Route path="21CS34M4" element={<Module link="/" />}></Route>
        <Route path="21CS34M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route path="21CS41M1" element={<Module link="/" />}></Route>
        <Route path="21CS41M2" element={<Module link="/" />}></Route>
        <Route path="21CS41M3" element={<Module link="/" />}></Route>
        <Route path="21CS41M4" element={<Module link="/" />}></Route>
        <Route path="21CS41M5" element={<Module link="/" />}></Route>

        <Route path="21CS42M1" element={<Module link="/" />}></Route>
        <Route path="21CS42M2" element={<Module link="/" />}></Route>
        <Route path="21CS42M3" element={<Module link="/" />}></Route>
        <Route path="21CS42M4" element={<Module link="/" />}></Route>
        <Route path="21CS42M5" element={<Module link="/" />}></Route>

        <Route path="21CS43M1" element={<Module link="/" />}></Route>
        <Route path="21CS43M2" element={<Module link="/" />}></Route>
        <Route path="21CS43M3" element={<Module link="/" />}></Route>
        <Route path="21CS43M4" element={<Module link="/" />}></Route>
        <Route path="21CS43M5" element={<Module link="/" />}></Route>

        <Route path="21CS44M1" element={<Module link="/" />}></Route>
        <Route path="21CS44M2" element={<Module link="/" />}></Route>
        <Route path="21CS44M3" element={<Module link="/" />}></Route>
        <Route path="21CS44M4" element={<Module link="/" />}></Route>
        <Route path="21CS44M5" element={<Module link="/" />}></Route>
      </Routes>

      <Routes>
        <Route
          path="21CS51M1"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1f0oLyLRNEaCVr2LvqJ6f3H7EUc6mEBiO/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS51M2"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1swzULFwe8-vV8_sAIxryeiCJ20vVbzG6/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS51M3"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1Fn83pZg4i1FCQPBE1NB2PZyRPV9Gq_HC/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS51M4"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1PQxxDI-5x3Udtpb2EIEe6u1QrP49dV6t/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS51M5"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1o3STYfolHeMtK_PecbmmfUmk3ldT41mj/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>

        <Route
          path="21CS52M1"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1S7fKpj9Oqsurj1hhLLpDw_JeilgUYp7A/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS52M2"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1to0j8f8lXWraTLCSAFbiHCLB1TT4nzvj/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS52M3"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1vFqLgN7RGcTNuZigJF24xDB-NbCctWnX/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS52M4"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1u806_DRQULvci1zWaDhc8Vj7H0T2GG8q/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS52M5"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1SsHosIFlARzUto537wgjcKWKRP-KM5hn/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>

        <Route
          path="21CS53M1"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1qAQtwfu7tECnfw30AMB7uQ2haBqk7VKR/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS53M2"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1A-M6rnuHChjtVjgnIQg8Z6HpTyv94X9w/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS53M3"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1-hkuoXwqL5_pQI0Pgkw-qWNZngsKQOnw/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS53M4"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1cIVwFVd0Jbc3AkJKYrokaTD_wqK5HBCq/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS53M5"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1uddxk00px7vD2a-k7FmRD9ekuwGRBG_E/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>

        <Route
          path="21CS54M1"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/16pGVmGLiIh2dqvpTIDJxuBVNf8xdejkL/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS54M2"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1N-vvZo-Xh1iFRMR29iBx0pYzNjJcojha/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS54M3"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1ObIIXgq81itNc4GWwKcxiADUhwCP1IDL/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS54M4"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1xGtkVu9RV1x39YIwShK6PVjz6RqW7l7I/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
        <Route
          path="21CS54M5"
          element={
            <Module
              link={
                <iframe
                  src="https://drive.google.com/file/d/1Jpq1igw7hhgc52fGEtF2zjKDgihm0WKV/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              }
            />
          }
        ></Route>
      </Routes>

      <Routes>
        <Route path="21CS61M1" element={<Module link="/" />}></Route>
        <Route path="21CS61M2" element={<Module link="/" />}></Route>
        <Route path="21CS61M3" element={<Module link="/" />}></Route>
        <Route path="21CS61M4" element={<Module link="/" />}></Route>
        <Route path="21CS61M5" element={<Module link="/" />}></Route>

        <Route path="21CS62M1" element={<Module link="/" />}></Route>
        <Route path="21CS62M2" element={<Module link="/" />}></Route>
        <Route path="21CS62M3" element={<Module link="/" />}></Route>
        <Route path="21CS62M4" element={<Module link="/" />}></Route>
        <Route path="21CS62M5" element={<Module link="/" />}></Route>

        <Route path="21CS63M1" element={<Module link="/" />}></Route>
        <Route path="21CS63M2" element={<Module link="/" />}></Route>
        <Route path="21CS63M3" element={<Module link="/" />}></Route>
        <Route path="21CS63M4" element={<Module link="/" />}></Route>
        <Route path="21CS63M5" element={<Module link="/" />}></Route>

        <Route path="21CS64M1" element={<Module link="/" />}></Route>
        <Route path="21CS64M2" element={<Module link="/" />}></Route>
        <Route path="21CS64M3" element={<Module link="/" />}></Route>
        <Route path="21CS64M4" element={<Module link="/" />}></Route>
        <Route path="21CS64M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CS71M1" element={<Module link="/" />}></Route>
        <Route path="21CS71M2" element={<Module link="/" />}></Route>
        <Route path="21CS71M3" element={<Module link="/" />}></Route>
        <Route path="21CS71M4" element={<Module link="/" />}></Route>
        <Route path="21CS71M5" element={<Module link="/" />}></Route>

        <Route path="21CS72M1" element={<Module link="/" />}></Route>
        <Route path="21CS72M2" element={<Module link="/" />}></Route>
        <Route path="21CS72M3" element={<Module link="/" />}></Route>
        <Route path="21CS72M4" element={<Module link="/" />}></Route>
        <Route path="21CS72M5" element={<Module link="/" />}></Route>

        <Route path="21CS73M1" element={<Module link="/" />}></Route>
        <Route path="21CS73M2" element={<Module link="/" />}></Route>
        <Route path="21CS73M3" element={<Module link="/" />}></Route>
        <Route path="21CS73M4" element={<Module link="/" />}></Route>
        <Route path="21CS73M5" element={<Module link="/" />}></Route>

        <Route path="21CS74M1" element={<Module link="/" />}></Route>
        <Route path="21CS74M2" element={<Module link="/" />}></Route>
        <Route path="21CS74M3" element={<Module link="/" />}></Route>
        <Route path="21CS74M4" element={<Module link="/" />}></Route>
        <Route path="21CS74M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CS81M1" element={<Module link="/" />}></Route>
        <Route path="21CS81M2" element={<Module link="/" />}></Route>
        <Route path="21CS81M3" element={<Module link="/" />}></Route>
        <Route path="21CS81M4" element={<Module link="/" />}></Route>
        <Route path="21CS81M5" element={<Module link="/" />}></Route>

        <Route path="21CS82M1" element={<Module link="/" />}></Route>
        <Route path="21CS82M2" element={<Module link="/" />}></Route>
        <Route path="21CS82M3" element={<Module link="/" />}></Route>
        <Route path="21CS82M4" element={<Module link="/" />}></Route>
        <Route path="21CS82M5" element={<Module link="/" />}></Route>

        <Route path="21CS83M1" element={<Module link="/" />}></Route>
        <Route path="21CS83M2" element={<Module link="/" />}></Route>
        <Route path="21CS83M3" element={<Module link="/" />}></Route>
        <Route path="21CS83M4" element={<Module link="/" />}></Route>
        <Route path="21CS83M5" element={<Module link="/" />}></Route>

        <Route path="21CS84M1" element={<Module link="/" />}></Route>
        <Route path="21CS84M2" element={<Module link="/" />}></Route>
        <Route path="21CS84M3" element={<Module link="/" />}></Route>
        <Route path="21CS84M4" element={<Module link="/" />}></Route>
        <Route path="21CS84M5" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT31QP" element={<Module link="/" />}></Route>
        <Route path="21CS32QP" element={<Module link="/" />}></Route>
        <Route path="21CS33QP" element={<Module link="/" />}></Route>
        <Route path="21CS34QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21MAT41QP" element={<Module link="/" />}></Route>
        <Route path="21CS42QP" element={<Module link="/" />}></Route>
        <Route path="21CS43QP" element={<Module link="/" />}></Route>
        <Route path="21CS44QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CS51QP" element={<Module link="/" />}></Route>
        <Route path="21CS52QP" element={<Module link="/" />}></Route>
        <Route path="21CS53QP" element={<Module link="/" />}></Route>
        <Route path="21CS54QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CS61QP" element={<Module link="/" />}></Route>
        <Route path="21CS62QP" element={<Module link="/" />}></Route>
        <Route path="21CS63QP" element={<Module link="/" />}></Route>
        <Route path="21CS64QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CS71QP" element={<Module link="/" />}></Route>
        <Route path="21CS72QP" element={<Module link="/" />}></Route>
        <Route path="21CS73QP" element={<Module link="/" />}></Route>
        <Route path="21CS74QP" element={<Module link="/" />}></Route>
      </Routes>
      <Routes>
        <Route path="21CS81QP" element={<Module link="/" />}></Route>
        <Route path="21CS82QP" element={<Module link="/" />}></Route>
        <Route path="21CS83QP" element={<Module link="/" />}></Route>
        <Route path="21CS84QP" element={<Module link="/" />}></Route>
      </Routes>
    </>
  );
}

export default CS;
