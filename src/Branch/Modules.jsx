import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Modules(props) {
  return (
    <div>
      <div className="gap1">
        <div className="gap button1">{props.branch}</div>
        <div className="gap">
          <Link to={props.sem3}>
            <Button branch="Module 1" />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.sem4}>
            <Button branch="Module 2" />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.sem5}>
            <Button branch="Module 3" />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.sem6}>
            <Button branch="Module 4" />
          </Link>
        </div>
        <div className="gap">
          <a href={props.sem7}>
            <Button branch="Module 5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modules;
