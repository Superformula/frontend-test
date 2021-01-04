import React from "react";

export default ({ children, ...rest }) => {
  return <span className="label" {...rest}>{children}</span>;
};
