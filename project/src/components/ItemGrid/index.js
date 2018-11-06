import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  overflow: hidden;
  min-height: 100px;

  @media (max-width: 1200px) {
    padding: 1%;
    width: 21%;
  }
  @media (min-width: 1200px) {
    padding: 1%;
    width: 14%;
  }
`;

export const Grid = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export const Item = ({ children, height }) => {
  return <ItemWrapper style={{height}}>{children}</ItemWrapper>;
};
