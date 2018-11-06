import React from "react";
import styled from "styled-components";

const GreenDot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: rgb(36, 209, 36);
  border-radius: 50%;
`;

const RedDot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: rgb(231, 31, 31);
  border-radius: 50%;
`;

export const OpenNow = () => {
  return (
    <span>
      <GreenDot /> OPEN NOW
    </span>
  );
};

export const Closed = () => {
  return (
    <span>
      <RedDot /> CLOSED
    </span>
  );
};
