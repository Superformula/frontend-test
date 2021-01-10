import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const FirstRipple = styled.div`
  position: absolute;
  border: 4px solid ${({ theme: { colors } }) => colors.caption};
  opacity: 1;
  border-radius: 50%;
  animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

const SecondRipple = styled(FirstRipple)`
  animation-delay: -0.5s;
`;

function LoadingIndicator() {
  return (
    <Wrapper>
      <FirstRipple />
      <SecondRipple />
    </Wrapper>
  );
}

export default LoadingIndicator;
