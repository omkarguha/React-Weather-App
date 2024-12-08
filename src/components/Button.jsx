import React from "react";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      <h5>{props.value}</h5>
    </button>
  );
};

export default Button;
