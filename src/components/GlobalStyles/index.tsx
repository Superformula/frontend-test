import React from "react";
import { Global, css } from "@emotion/react";

export default function GlobalStyles(): JSX.Element {
  return (
    <Global
      styles={css`
        body {
          font-family: HelveticaNeue;
          margin: 0;
          padding: 0px;
        }
      `}
    />
  );
}
