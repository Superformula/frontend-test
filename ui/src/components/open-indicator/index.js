import React from "react";
import {ItemTitle, ItemPropertyText} from '../common/text'

import openImage from './dot.svg'
import closeImage from './dot-closed.svg'

export default ({isOpen}) => {
  return (
    <>
    {isOpen && <ItemPropertyText><img className="open-indicator" src={openImage} />&nbsp;Open Now</ItemPropertyText>}
    {!isOpen && <ItemPropertyText><img className="closed-indicator" src={closeImage} />&nbsp;Closed</ItemPropertyText>}
    </>
  );
};
