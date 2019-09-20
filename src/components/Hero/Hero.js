import React from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import './Hero.scss';

function Hero(props) {
  const { children, subtext, subcomponent } = props;
  
  return (
    <SectionWrapper>
      <h1 className="hero">{children}</h1>
      {subtext ? <span className="subtext">{subtext}</span> : null}
      {subcomponent ? subcomponent : null}
    </SectionWrapper>
  );
}

Hero.propTypes = {
  subtext: PropTypes.string,
  subcomponent: PropTypes.object
}

export default Hero;