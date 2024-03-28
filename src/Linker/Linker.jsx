import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../Branch/Main";
import Notes from "../Branch/Notes";
import QP from "../Branch/QP";
import SEM from "../Branch/SEM";
import CS from "../Branch/CS/CS";
import IS from "../Branch/IS/IS";
import EC from "../Branch/EC/EC";
import CV from "../Branch/CV/CV";
import ME from "../Branch/ME/ME";
import Result from "../Branch/Result";

function Linker() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/index.html" element={<Home />}></Route>
        <Route path="/index" element={<Home />}></Route>

        <Route path="/Contact" element={<Contact />}></Route>
        <Route exact path="/Terms" element={<Terms />}></Route>
        <Route exact path="/Privacy" element={<Privacy />}></Route>
      </Routes>

      {/*Computer Science*/}
      <Routes>
        <Route
          path="/CS"
          element={
            <Main branch="Computer Science" notes="/CSNotes" qp="/CSQP" />
          }
        ></Route>
        <Route
          path="/CSNotes"
          element={
            <Notes
              branch="Computer Science Notes"
              sem3="/3CSNotes"
              sem4="/4CSNotes"
              sem5="/5CSNotes"
              sem6="/6CSNotes"
              sem7="/7CSNotes"
              sem8="/8CSNotes"
            />
          }
        ></Route>

        <Route
          path="/CSQP"
          element={
            <QP
              branch="Computer Science Question Paper"
              sem3="/3CSQP"
              sem4="/4CSQP"
              sem5="/5CSQP"
              sem6="/6CSQP"
              sem7="/7CSQP"
              sem8="/8CSQP"
            />
          }
        ></Route>
      </Routes>
      <CS />

      {/*Information Science*/}
      <Routes>
        <Route
          path="/IS"
          element={
            <Main branch="Information Science" notes="/ISNotes" qp="/ISQP" />
          }
        ></Route>
        <Route
          path="/ISNotes"
          element={
            <Notes
              branch="Information Science Notes"
              sem3="/3ISNotes"
              sem4="/4ISNotes"
              sem5="/5ISNotes"
              sem6="/6ISNotes"
              sem7="/7ISNotes"
              sem8="/8ISNotes"
            />
          }
        ></Route>
        <Route
          path="/ISQP"
          element={
            <Notes
              branch="Information Science Question Paper"
              sem3="/3ISQP"
              sem4="/4ISQP"
              sem5="/5ISQP"
              sem6="/6ISQP"
              sem7="/7ISQP"
              sem8="/8ISQP"
            />
          }
        ></Route>
      </Routes>
      <IS />
      {/*Civil*/}
      <Routes>
        <Route
          path="/Civil"
          element={<Main branch="Civil" notes="/CivilNotes" qp="/CivilQP" />}
        ></Route>
        <Route
          path="/CivilNotes"
          element={
            <QP
              branch="Civil Notes"
              sem3="/3CVNotes"
              sem4="/4CVNotes"
              sem5="/5CVNotes"
              sem6="/6CVNotes"
              sem7="/7CVNotes"
              sem8="/8CVNotes"
            />
          }
        ></Route>
        <Route
          path="/CivilQP"
          element={
            <Notes
              branch="Civil Question Paper"
              sem3="/3CVQP"
              sem4="/4CVQP"
              sem5="/5CVQP"
              sem6="/6CVQP"
              sem7="/7CVQP"
              sem8="/8CVQP"
            />
          }
        ></Route>
      </Routes>
      <CV />
      {/*Electronic and Communication*/}
      <Routes>
        <Route
          path="/EC"
          element={
            <Main
              branch="Electronics and Communcation"
              notes="/ECNotes"
              qp="/ECQP"
            />
          }
        ></Route>
        <Route
          path="/ECNotes"
          element={
            <Notes
              branch="Electronics and Communcation Notes"
              sem3="/3ECNotes"
              sem4="/4ECNotes"
              sem5="/5ECNotes"
              sem6="/6ECNotes"
              sem7="/7ECNotes"
              sem8="/8ECNotes"
            />
          }
        ></Route>
        <Route
          path="/ECQP"
          element={
            <QP
              branch="Electronics and Communication Question Paper"
              sem3="/3ECQP"
              sem4="/4ECQP"
              sem5="/5ECQP"
              sem6="/6ECQP"
              sem7="/7ECQP"
              sem8="/8ECQP"
            />
          }
        ></Route>
      </Routes>
      <EC />
      {/*Mechanical*/}
      <Routes>
        <Route
          path="/ME"
          element={<Main branch="Mechanical" notes="/MENotes" qp="/MEQP" />}
        ></Route>
        <Route
          path="/MENotes"
          element={
            <Notes
              branch="Mechanical Notes"
              sem3="/3MENotes"
              sem4="/4MENotes"
              sem5="/5MENotes"
              sem6="/6MENotes"
              sem7="/7MENotes"
              sem8="/8MENotes"
            />
          }
        ></Route>
        <Route
          path="/MEQP"
          element={
            <QP
              branch="Mechanical Question Paper"
              sem3="/3MEQP"
              sem4="/4MEQP"
              sem5="/5MEQP"
              sem6="/6MEQP"
              sem7="/7MEQP"
              sem8="/8MEQP"
            />
          }
        ></Route>
      </Routes>
      <ME />
      {/*P A C*/}
      <Routes>
        <Route
          path="/PC"
          element={<Main branch="P & C" notes="/PCNotes" qp="/PCQP" />}
        ></Route>
        <Route
          path="/PCNotes"
          element={
            <Notes
              branch="P And C Notes"
              sem3="/PC"
              sem4="/PC"
              sem5="/PC"
              sem6="/PC"
              sem7="/PC"
              sem8="/PC"
            />
          }
        ></Route>
        <Route
          path="/PCQP"
          element={
            <QP
              branch="P And C Question Paper"
              sem3="/PC"
              sem4="/PC"
              sem5="/PC"
              sem6="/PC"
              sem7="/PC"
              sem8="/PC"
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path="/Results" element={<Result />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default Linker;
