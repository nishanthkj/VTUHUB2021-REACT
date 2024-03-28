import React from "react";
import Button from "../components/Button"; // Import the Button component
import { Link } from "react-router-dom";

function Notes(props) {
  return (
    <div>
      <div className="gap1">
        <div className="gap button1">{props.branch}</div>
        <div className="gap">
          <Link to={props.sem3}>
            <Button branch="3rd Sem" />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.sem4}>
            <Button branch="4th Sem" />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.sem5}>
            <Button branch="5th Sem" />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.sem6}>
            <Button branch="6th Sem" />
          </Link>
        </div>
        <div className="gap">
          <a href={props.sem7}>
            <Button branch="7th Sem" />
          </a>
        </div>
        <div className="gap">
          <Link to={props.sem8}>
            <Button branch="8th Sem" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notes;
