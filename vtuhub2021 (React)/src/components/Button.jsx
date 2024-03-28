import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="padding">
      <center>
        <button className="button-30">{props.branch}</button>
      </center>
    </div>
  );
}

export default Button;
