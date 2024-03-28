import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <div className="gap1">
        <div className="gap button1"> {props.branch}</div>
        <div className="gap">
          <Link to={props.notes}>
            <Button branch="Notes" />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.qp}>
            <Button branch="Question Papers" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
