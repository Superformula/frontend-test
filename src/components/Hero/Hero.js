import React from "react";
import PropTypes from "prop-types";

import Heading from "../Heading/Heading";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Spacer from "../Spacer/Spacer";

import "./Hero.scss";

const Hero = props => {
  const { children, subtext, subcomponent } = props;

  return (
    <SectionWrapper>
      <Heading level={1}>{children}</Heading>
      {(subtext || subcomponent) && <Spacer size="medium" />}
      {subtext && (
        <Heading level={3} light>
          {subtext}
        </Heading>
      )}
      {subcomponent && subcomponent}
    </SectionWrapper>
  );
};

Hero.propTypes = {
  subtext: PropTypes.string,
  subcomponent: PropTypes.node
};

export default Hero;
