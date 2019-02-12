import React from "react";
import "./button.scss";

const Button = props => {
  return (
    <a
      {...props}
      href="#"
      className={"button " + (props.className ? props.className : "")}
    >
      {props.children}
    </a>
  );
};

export default Button;
