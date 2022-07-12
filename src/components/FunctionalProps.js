import React from "react";

function FunctionalProps(props) {
  return (
    <div>
      <h2>This is Functional Props Example.</h2>
      <h2>For {props.username}</h2>
      <h2>Form {props.place}</h2>
    </div>
  );
}

export default FunctionalProps;
