import React, { useState } from "react";
import styled from "@emotion/styled";

import Button from "../Button";
import { containerStyles } from "../../styles";
import { useSearchRestaurantsQuery } from "../../dal/restaurant";
import { IForm } from "../SearchFilter";
import * as Text from "../Text";
import SearchResult from "../SearchResult";

export const LOCATION = "Las Vegas";
export const LIMIT = 20;

export interface IProps {
  filter: IForm;
}

export default function SearchResultContainer({ filter }: IProps): JSX.Element {
  const [offset, setOffset] = useState(LIMIT);
  const { loading, error, data, fetchMore } = useSearchRestaurantsQuery({
    variables: {
      location: LOCATION,
      openNow: filter.isOpen,
      categories: filter.category?.alias,
      price: filter.price,
      limit: LIMIT,
    },
  });

  function loadMore() {
    fetchMore({
      variables: {
        limit: LIMIT,
        offset: offset,
      },
    });

    setOffset((offset) => offset + LIMIT);
  }

  if (!data && loading) {
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

      <LoadMore>
        <Button inverse onClick={() => loadMore()}>
          Load More
        </Button>
      </LoadMore>
    </Container>
  );
}

export const Container = styled.div`
  ${containerStyles}

  & > ${Text.H2} {
    margin-bottom: 42px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
`;

export const LoadMore = styled.div`
  ${containerStyles}
  text-align: center;

  & > ${Button} {
    margin-top: 80px;
    width: 400px;
  }
`;
