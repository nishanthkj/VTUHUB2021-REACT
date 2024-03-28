import React from "react";
import Notes from "../Notes";

function CSENotes(props) {
  return (
    <>
      <Notes
        branch="Computer Science"
        sem3="{props.SEM3}"
        sem4="/CSEN/SEM4"
        sem5="/CSEN/SEM5"
        sem6="/CSEN/SEM6"
        sem7="/CSEN/SEM7"
        sem8="/CSEN/SEM8"
      />
    </>
  );
}

export default CSENotes;
