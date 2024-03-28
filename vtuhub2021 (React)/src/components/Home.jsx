import React from "react";
import Button from "./Button";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/CS">
        <Button branch="Computer Science" />
      </Link>
      <Link to="/IS">
        <Button branch="Information Science" />
      </Link>
      <Link to="/EC">
        <Button branch="Electronics & Communication" />
      </Link>
      <Link to="/Civil">
        <Button branch="Civil" />
      </Link>
      <Link to="/ME">
        <Button branch="Mechanical" />
      </Link>
      {/* <Link to="/PC">
        <Button branch="P & C Cycle" />
      </Link> */}
    </div>
  );
}

export default Home;
export function Container() {
  return;
  <Home />;
}
