import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 70px;
`;

const PaddedSection = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PaddedSection;
