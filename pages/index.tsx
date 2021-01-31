import React, { useState } from "react";
import styled from "@emotion/styled";
import SearchFilter, {
  IForm,
  INITIAL_VALUES,
} from "../src/components/SearchFilter";
import * as Text from "../src/components/Text";
import { containerStyles } from "../src/styles";
import SearchResultContainer from "../src/components/SearchResultContainer";

export default function Home(): JSX.Element {
  const [filter, setFilter] = useState<IForm>(INITIAL_VALUES);

  return (
    <>
      <Header>
        <Text.H1>Restaurants</Text.H1>
        <SubtitleStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SubtitleStyled>
      </Header>

      <SearchFilter value={filter} onChange={(filter) => setFilter(filter)} />

      <SearchResultContainer filter={filter} />
    </>
  );
}

export const Header = styled.header`
  ${containerStyles}

  // trick for extra specifity without important
  && > * + * {
    margin-top: 24px;
  }
`;

export const SubtitleStyled = styled(Text.Subtitle)`
  max-width: 752px;
`;
