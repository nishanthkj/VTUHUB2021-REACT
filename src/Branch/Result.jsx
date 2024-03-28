import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Result() {
  return (
    <>
      <div>
        <div className="gap1">
          <div className="gap button1">Result</div>
          <div className="gap">
            <Link to="https://results.vtu.ac.in/FMEcbcs22/">
              <Button branch="1st SEM" />
            </Link>
          </div>
          <div className="gap">
            <Link to="https://results.vtu.ac.in/JJEcbcs22/">
              <Button branch="2nd SEM" />
            </Link>
          </div>
          <div className="gap">
            <Link to="https://results.vtu.ac.in/JFEcbcs23">
              <Button branch="3nd SEM" />
            </Link>
          </div>
          <div className="gap">
            <Link to="https://results.vtu.ac.in/JJEcbcs23/resultpage.php">
              <Button branch="4nd SEM" />
            </Link>
          </div>
          <div className="gap">
            <Link to="/">
              <Button branch="5nd SEM" />
            </Link>
          </div>
          <div className="gap">
            <Link to="/">
              <Button branch="6nd SEM" />
            </Link>
          </div>
          <div className="gap">
            <Link to="/">
              <Button branch="7nd SEM" />
            </Link>
          </div>
          <div className="gap">
            <Link to="/">
              <Button branch="8nd SEM" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
