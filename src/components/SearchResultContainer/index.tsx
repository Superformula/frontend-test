import React, { useState } from "react";
import styled from "@emotion/styled";

import { Category } from "../../dal/categories";
import SelectCategories from "../SelectCategories";
import SelectPrice from "../SelectPrice";
import Checkbox from "../Checkbox";
import Button from "../Button";
import { containerStyles } from "../../styles";
import { useGetRestaurantsQuery } from "../../dal/restaurant";
import { IForm } from "../SearchFilter";
import * as Text from "../Text";
import SearchResult from "../SearchResult";

export const LOCATION = "Las Vegas";

export interface IProps {
  filter: IForm;
}

export default function SearchResultContainer({ filter }: IProps) {
  const { loading, error, data } = useGetRestaurantsQuery({
    variables: {
      location: LOCATION,
      openNow: filter.isOpen,
      categories: filter.category?.alias,
      price: filter.price,
    },
  });

  if (loading) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>Error</p>
      </Container>
    );
  }

  const business = data?.search?.business || [];

  return (
    <Container>
      <Text.H2>All Restaurants</Text.H2>

      <Grid>
        {business.map((business, index) => (
          <SearchResult key={index} restaurant={business} />
        ))}
      </Grid>
    </Container>
  );
}

export const Container = styled.div`
  ${containerStyles}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
`;
