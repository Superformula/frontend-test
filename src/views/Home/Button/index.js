import React from "react";
import "./button.scss";

const Button = props => {
  return (
    <button
      {...props}
      className={"button " + (props.className ? props.className : "")}
    >
      {props.children}
    </button>
  );
};

export default Button;
