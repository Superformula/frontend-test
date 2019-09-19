import React from 'react';
import PropTypes from 'prop-types';
import "./Button.scss";

function Button(props) {
  return (
    <button className={props.size}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.string
};

export default Button;