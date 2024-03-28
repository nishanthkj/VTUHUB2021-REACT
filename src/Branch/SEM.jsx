import React from "react";
import Button from "../components/Button"; // Import the Button component
import { Link } from "react-router-dom";

function SEM(props) {
  return (
    <div>
      <div className="gap1">
        <div className="gap button1">{props.branch}</div>
        <div className="gap">
          <Link to={props.sem3}>
            <Button branch={props.SEM211} />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.sem4}>
            <Button branch={props.SEM212} />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.sem5}>
            <Button branch={props.SEM213} />
          </Link>
        </div>
        <div className="gap">
          <Link to={props.sem6}>
            <Button branch={props.SEM214} />
          </Link>
        </div>
        <div className="gap">
          <a href={props.sem7}>
            <Button branch={props.SEM215} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SEM;
