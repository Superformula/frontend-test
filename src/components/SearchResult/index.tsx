import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { SearchRestaurantFragmentFragment } from "../../generated/graphql";
import * as Text from "../Text";
import Rating from "../Rating";
import VenueStatus, { EVenueStatus } from "../VenueStatus";
import Button from "../Button";

export interface IProps {
  restaurant?: SearchRestaurantFragmentFragment | null;
}

export default function SearchResult(props: IProps): JSX.Element | null {
  const { restaurant } = props;
  // Very edge case
  if (!restaurant) {
    return null;
  }

  const image = restaurant.photos?.[0];
  const rating = restaurant.rating || 0;
  const score = (rating / 5) * 100;
  const cat = restaurant.categories?.[0]?.title;

  return (
    <Container>
      <ImgContainer>
        <Img src={image || ""} />
      </ImgContainer>
      <Text.H3>{restaurant?.name}</Text.H3>
      <div>
        <Rating score={score} />
      </div>
      <SpreadContainer>
        <CatAndPrice>{`${cat} • ${restaurant.price}`}</CatAndPrice>
        <VenueStatus
          status={
            restaurant.is_closed ? EVenueStatus.closed : EVenueStatus.open
          }
        />
      </SpreadContainer>

      <Link href={`/restaurants/${restaurant.id}`} passHref>
        <Button type="button" as="a">
          Learn more
        </Button>
      </Link>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-bottom: 16px;
  }

  & > ${Button} {
    margin-top: auto;
    margin-bottom: 0;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.grey300};
  max-height: 228px;
  text-align: center;
`;

export const Img = styled.img`
  max-width: 300px;
  height: 228px;
`;

export const CatAndPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.x300};
  color: ${({ theme }) => theme.colors.grey500};
  text-transform: uppercase;
`;

export const SpreadContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
