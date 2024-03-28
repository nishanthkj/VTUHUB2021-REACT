import React from "react";

function SEM6() {
  return (
    <>
      <div>
        <div className="gap1">
          <div className="gap button1">{props.branch}</div>
          <div className="gap">
            <Link to={props.sem3}>
              <Button branch="{props.211}" />
            </Link>
          </div>
          <div className="gap">
            <Link to={props.sem4}>
              <Button branch="{props.212}" />
            </Link>
          </div>
          <div className="gap">
            <Link to={props.sem5}>
              <Button branch="{props.213}" />
            </Link>
          </div>
          <div className="gap">
            <Link to={props.sem6}>
              <Button branch="{props.214}" />
            </Link>
          </div>
          <div className="gap">
            <a href={props.sem7}>
              <Button branch="{props.215}" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SEM6;
