import React, { useState } from "react";
import styled from "@emotion/styled";
import { containerStyles } from "../../styles";
import { ReviewFragmentFragment } from "../../generated/graphql";
import Rating from "../Rating";

export interface IProps {
  review?: ReviewFragmentFragment | null;
}

const dateFormatter = new Intl.DateTimeFormat("en-US");

export default function Review(props: IProps) {
  const review = props.review;
  const date = dateFormatter.format(new Date(review?.time_created as string));
  // TODO abstract this away and reuse
  const rating = review?.rating || 0;
  const score = (rating / 5) * 100;
  return (
    <Container>
      <Left>
        <Avatar src={review?.user?.image_url!} />
        <NameAndDate>
          <Name>{review?.user?.name}</Name>
          <DateStyled>{date}</DateStyled>
        </NameAndDate>
      </Left>

      <Right>
        <div>
          <Rating score={score} />
        </div>
        <ReviewText>{review?.text}</ReviewText>
      </Right>
    </Container>
  );
}

export const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Left = styled.div`
  flex: 0 0 300px;
  display: flex;
  gap: 32px;
`;

// TODO magic constants
export const Right = styled.div`
  min-width: calc(100% - 332px);
  flex: 1 0 332px;
  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 80px;
  height: fit-content;
`;
export const NameAndDate = styled.div`
  flex: 1;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.x900};
`;

export const DateStyled = styled.p`
  margin: 0;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.grey500};
`;

export const ReviewText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.x800};
`;
