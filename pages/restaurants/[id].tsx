import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useGetRestaurantQuery } from "../../src/dal/restaurant";
import { containerStyles } from "../../src/styles";
import * as Text from "../../src/components/Text";
import Rating from "../../src/components/Rating";
import VenueStatus, { EVenueStatus } from "../../src/components/VenueStatus";
import PhotosAndMap from "../../src/components/PhotosAndMap";
import Reviews from "../../src/components/Reviews";

export default function RestaurantPage(): JSX.Element {
  const router = useRouter();
  const businessId = router.query.id;
  // TODO fetch this data from the server
  const { data, loading, error } = useGetRestaurantQuery({
    variables: { id: businessId as string },
  });
  const resto = data?.business;

  const rating = resto?.rating || 0;
  const score = (rating / 5) * 100;
  const cat = resto?.categories?.[0]?.title;

  if (loading) {
    return <Header>Loading...</Header>;
  }

  if (error) {
    return <Header>Error</Header>;
  }

  return (
    <>
      <Header>
        <Text.H1>{resto?.name}</Text.H1>
        <Rating score={score} />
        <SpreadContainer>
          <CatAndPrice>{`${cat} • ${resto?.price}`}</CatAndPrice>
          <VenueStatus
            size="large"
            status={resto?.is_closed ? EVenueStatus.closed : EVenueStatus.open}
          />
        </SpreadContainer>
      </Header>

      <PhotosAndMap resto={resto} />

      <Reviews resto={resto} />
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

// TODO this shares a lot of styles with SearchResult
// try to reuse / unify / abstract
export const CatAndPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.x900};
  color: ${({ theme }) => theme.colors.grey500};
  text-transform: uppercase;
`;

// TODO this shares a lot of styles with SearchResult
// try to reuse / unify / abstract
export const SpreadContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
