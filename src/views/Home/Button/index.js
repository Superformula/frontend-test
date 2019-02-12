import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = props => {
  let Component = 'button';

  if (props.to) {
    Component = Link;
  }

  return (
    <Component
      {...props}
      className={"button " + (props.className ? props.className : "")}
    >
      {props.children}
    </Component>
  );
};

export default Button;
