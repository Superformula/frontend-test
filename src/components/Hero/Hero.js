import React from "react";
import PropTypes from "prop-types";

import Heading from "../Heading/Heading";
import Spacer from "../Spacer/Spacer";

import "./Hero.scss";

const Hero = props => {
  const { children, subtext, subcomponent } = props;

  return (
    <>
      <Heading level={1}>{children}</Heading>
      {subtext && (
        <>
          <Spacer size="medium" />
          <h3 className="subtext">
            {subtext}
          </h3>
        </>
      )}
      {subcomponent && subcomponent}
    </>
  );
};

Hero.propTypes = {
  subtext: PropTypes.string,
  subcomponent: PropTypes.node
};

export default Hero;
