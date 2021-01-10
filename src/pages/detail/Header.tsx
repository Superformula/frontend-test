import StarRating from 'design-system/StarRating';
import Title from 'design-system/Title';
import * as React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: ${({ theme: { px2rem } }) => `${px2rem(36)} ${px2rem(64)}`};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.divider1};
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'name name name'
    'stars stars stars'
    'category open-indicator open-caption';
`;

const Name = styled(Title)`
  grid-area: name;
`;

const Stars = styled(StarRating)`
  grid-area: stars;
  margin-top: ${({ theme: { px2rem } }) => px2rem(16)};
  margin-bottom: ${({ theme: { px2rem } }) => px2rem(24)};
`;

const Caption = styled.span`
  font-size: ${({ theme: { px2rem } }) => px2rem(22)};
  line-height: ${({ theme: { px2rem } }) => px2rem(32)};
  letter-spacing: ${({ theme: { px2rem } }) => px2rem(1)};
  color: ${({ theme: { colors } }) => colors.textSecondary};
`;

const Category = styled(Caption)`
  grid-area: category;
`;

const OpenIndicator = styled.div<{ isClosed: boolean }>`
  grid-area: open-indicator;
  grid-area: open-indicator;
  height: ${({ theme: { px2rem } }) => px2rem(22)};
  width: ${({ theme: { px2rem } }) => px2rem(22)};
  margin-right: ${({ theme: { px2rem } }) => px2rem(8)};
  align-self: center;
  border-radius: 50%;
  background-color: ${({ isClosed, theme: { colors } }) =>
    isClosed ? colors.closed : colors.open};
`;

const OpenCaption = styled(Caption)`
  grid-area: open-caption;
`;

interface HeaderProps {
  name: string;
  rating: number;
  category: string;
  price: string;
  isClosed: boolean;
}

function Header({ name, rating, category, price, isClosed }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Name>{name}</Name>
      <Stars rating={rating} starHeight={30} starWidth={30} />
      <Category>
        {category} &#xB7; {price}
      </Category>
      <OpenIndicator isClosed={isClosed} />
      <OpenCaption>{isClosed ? 'Closed' : 'Open now'}</OpenCaption>
    </HeaderWrapper>
  );
}

export default Header;
