import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import "./Button.scss";

function Button(props) {
  const { color, children } = props;
  return (
    <button className={className("button", color)}>
      {children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};

export default Button;