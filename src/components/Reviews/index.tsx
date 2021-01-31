import React from "react";
import styled from "@emotion/styled";
import { containerStyles } from "../../styles";
import { RestaurantFragmentFragment } from "../../generated/graphql";
import Review from "./Review";

export interface IProps {
  resto?: RestaurantFragmentFragment | null;
}

export default function Reviews(props: IProps): JSX.Element {
  const { resto } = props;

  const reviews = resto?.reviews || [];

  return (
    <Container>
      <Count>{`${resto?.review_count} Reviews`}</Count>
      <Grid>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </Grid>
    </Container>
  );
}

export const Container = styled.div`
  ${containerStyles}
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
  border-top: 1px solid ${({ theme }) => theme.colors.grey100};
`;

export const Count = styled.h3`
  margin: 0;
  font-size: 1px solid ${({ theme }) => theme.fontSize.x900};
  color: ${({ theme }) => theme.colors.grey500};
`;

export const Grid = styled.div``;

export const Img = styled.img`
  max-width: 300px;
  height: 228px;
`;

export const Address = styled.p`
  font-size: 1px solid ${({ theme }) => theme.fontSize.x800};
`;
