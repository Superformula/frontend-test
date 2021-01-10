import Button from 'design-system/Button';
import StarRating from 'design-system/StarRating';
import * as React from 'react';
import styled from 'styled-components';

import { RestaurantResult } from './types';

const Container = styled.div`
  width: ${({ theme: { px2rem } }) => px2rem(304)};
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto auto auto 1fr auto;
  grid-template-areas:
    'img img img'
    'name name name'
    'stars stars stars'
    'category open-indicator open-caption'
    'learn-more learn-more learn-more';
`;

const Img = styled.img`
  height: ${({ theme: { px2rem } }) => px2rem(228)};
  width: ${({ theme: { px2rem } }) => px2rem(304)};
  grid-area: img;
`;

const Name = styled.p`
  font-size: ${({ theme: { px2rem } }) => px2rem(20)};
  line-height: ${({ theme: { px2rem } }) => px2rem(28)};
  letter-spacing: ${({ theme: { px2rem } }) => px2rem(1)};
  color: ${({ theme: { colors } }) => colors.black};
  grid-area: name;
  margin-top: ${({ theme: { px2rem } }) => px2rem(16)};
`;

const Stars = styled(StarRating)`
  grid-area: stars;
  margin-top: ${({ theme: { px2rem } }) => px2rem(8)};
  margin-bottom: ${({ theme: { px2rem } }) => px2rem(16)};
`;

const Caption = styled.span`
  font-size: ${({ theme: { px2rem } }) => px2rem(12)};
  line-height: ${({ theme: { px2rem } }) => px2rem(16)};
  letter-spacing: ${({ theme: { px2rem } }) => px2rem(0.5)};
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.caption};
`;

const Category = styled(Caption)`
  grid-area: category;
`;

const OpenIndicator = styled.div<{ isClosed: boolean }>`
  grid-area: open-indicator;
  height: ${({ theme: { px2rem } }) => px2rem(8)};
  width: ${({ theme: { px2rem } }) => px2rem(8)};
  margin-right: ${({ theme: { px2rem } }) => px2rem(4)};
  align-self: start;
  border-radius: 50%;
  background-color: ${({ isClosed, theme: { colors } }) =>
    isClosed ? colors.closed : colors.open};
  margin-top: ${({ theme: { px2rem } }) => px2rem(4)};
`;

const OpenCaption = styled(Caption)`
  grid-area: open-caption;
`;

const LearnMoreButton = styled(Button)`
  grid-area: learn-more;
  height: ${({ theme: { px2rem } }) => px2rem(48)};
  margin-top: ${({ theme: { px2rem } }) => px2rem(20)};
`;

function RestaurantTile({
  name,
  rating,
  categories,
  price,
  isClosed,
  photos,
}: RestaurantResult) {
  // Get the first category that it's not restaurants
  const category = categories.find(({ alias }) => alias !== 'restaurants')
    .title;

  return (
    <Container>
      <Img src={photos[0]} />
      <Name>{name}</Name>
      <Stars rating={rating} />
      <Category>
        {category} &#xB7; {price}
      </Category>
      <OpenIndicator isClosed={isClosed} />
      <OpenCaption>{isClosed ? 'Closed' : 'Open now'}</OpenCaption>
      <LearnMoreButton
        variant="filled"
        onClick={() => console.log('Learn more!')}>
        Learn More
      </LearnMoreButton>
    </Container>
  );
}

export default RestaurantTile;
