import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  margin: 15px;
`;

export const Grid = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export const Item = ({ children }) => {
  return <ItemWrapper>{children}</ItemWrapper>;
};
