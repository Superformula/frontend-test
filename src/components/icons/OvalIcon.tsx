import React from "react";
import styled from "@emotion/styled";

export function OvalIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16">
      <path
        fill="#fff"
        stroke="#C8C8C8"
        d="M15.5 8a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
      />
    </Svg>
  );
}

export default OvalIcon;

const Svg = styled("svg")`
  height: 1em;
  width: 1em;
`;
