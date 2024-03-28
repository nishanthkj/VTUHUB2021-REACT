import React from "react";

function Module(props) {
  return (
    <>
      <div>
        <section>
          <div className="gap1">
            <div className="gap button1">{props.name}</div>
            {props.link}
          </div>
        </section>
      </div>
    </>
  );
}

export default Module;
