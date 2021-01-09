import Title from 'design-system/Title';
import WelcomeText from 'design-system/WelcomeText';
import * as React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: ${({ theme: { px2rem } }) => `${px2rem(36)} ${px2rem(64)}`};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.divider1};
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Restaurants</Title>
      <WelcomeText>
        Welcome to the Resto Explorer! You can use this page to find restaurants
        in the Las Vegas area. Happy exploring!
      </WelcomeText>
    </HeaderWrapper>
  );
}

export default Header;
