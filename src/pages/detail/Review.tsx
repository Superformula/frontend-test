import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import StarRating from 'design-system/StarRating';
import * as React from 'react';
import styled from 'styled-components';

import { ReviewItem } from './types';

const ReviewContainer = styled.article`
  padding-top: ${({ theme: { px2rem } }) => px2rem(80)};
  padding-bottom: ${({ theme: { px2rem } }) => px2rem(80)};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.divider1};
  display: grid;
  grid-template-columns: auto ${({ theme: { px2rem } }) => px2rem(224)} 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'img name stars'
    'img date text'
    'img .    text ';

  &:first-child {
    padding-top: ${({ theme: { px2rem } }) => px2rem(48)};
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: ${({ theme: { px2rem } }) => px2rem(48)};
  }
`;

const Img = styled.img`
  grid-area: img;
  width: ${({ theme: { px2rem } }) => px2rem(80)};
  height: ${({ theme: { px2rem } }) => px2rem(80)};
  margin-right: ${({ theme: { px2rem } }) => px2rem(32)};
`;

const Name = styled.span`
  grid-area: name;
  font-size: ${({ theme: { px2rem } }) => px2rem(22)};
  line-height: ${({ theme: { px2rem } }) => px2rem(24)};
  letter-spacing: ${({ theme: { px2rem } }) => px2rem(1)};
  color: ${({ theme: { colors } }) => colors.black};
`;

const Date = styled.time`
  grid-area: date;
  font-size: ${({ theme: { px2rem } }) => px2rem(16)};
  line-height: ${({ theme: { px2rem } }) => px2rem(24)};
  color: ${({ theme: { colors } }) => colors.textSecondary};
`;

const Stars = styled(StarRating)`
  grid-area: stars;
`;

const Text = styled.p`
  grid-area: text;
  font-size: ${({ theme: { px2rem } }) => px2rem(20)};
  line-height: ${({ theme: { px2rem } }) => px2rem(28)};
  letter-spacing: ${({ theme: { px2rem } }) => px2rem(1)};
  color: ${({ theme: { colors } }) => colors.black};
  margin-top: ${({ theme: { px2rem } }) => px2rem(20)};
`;

function Review({
  user: { name, imageUrl },
  timeCreated,
  rating,
  text,
}: ReviewItem) {
  const parsedDate = format(parseISO(timeCreated), 'MM/dd/yyy');

  return (
    <ReviewContainer>
      <Img src={imageUrl} />
      <Name>{name}</Name>
      <Date dateTime={timeCreated}>{parsedDate}</Date>
      <Stars rating={rating} />
      <Text>{text}</Text>
    </ReviewContainer>
  );
}

export default Review;
