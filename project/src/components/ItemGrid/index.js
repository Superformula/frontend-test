import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  @media (max-width: 1000px) {
    padding: 1%;
    width: 21%;
    height: 430px;
  }
  @media (min-width: 1000px) {
    padding: 1%;
    width: 14%;
    height: 430px;
  }
`;

export const Grid = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export const Item = ({ children }) => {
  return <ItemWrapper>{children}</ItemWrapper>;
};
