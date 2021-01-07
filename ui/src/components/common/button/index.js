import React from "react";
import './button.scss';

export default ({ children, ...rest }) => {
  return <button className="button" {...rest}>{children}</button>;
};
