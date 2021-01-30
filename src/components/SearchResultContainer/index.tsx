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

      {business.map((business, index) => (
        <div key={index}>
          <h3>{business?.name}</h3>
          <p>{business?.price}</p>
          <p>{business?.rating}</p>
          <p>{business?.is_closed}</p>
          <p>{JSON.stringify(business?.categories)}</p>
        </div>
      ))}
    </Container>
  );
}

export const Container = styled.div`
  ${containerStyles}
`;
