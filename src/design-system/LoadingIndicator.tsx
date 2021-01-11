import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ size: number }>`
  display: inline-block;
  position: relative;
  width: ${({ size, theme: { px2rem } }) => px2rem(size)};
  height: ${({ size, theme: { px2rem } }) => px2rem(size)};
`;

const FirstRipple = styled.div<{ size: number }>`
  position: absolute;
  border: 4px solid ${({ theme: { colors } }) => colors.caption};
  opacity: 1;
  border-radius: 50%;
  animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  @keyframes ripple {
    0% {
      top: ${({ size, theme: { px2rem } }) => px2rem(size / 2)};
      left: ${({ size, theme: { px2rem } }) => px2rem(size / 2)};
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: ${({ size, theme: { px2rem } }) => px2rem(size)};
      height: ${({ size, theme: { px2rem } }) => px2rem(size)};
      opacity: 0;
    }
  }
`;

const SecondRipple = styled(FirstRipple)`
  animation-delay: -0.5s;
`;

interface LoadingIndicatorProps {
  size?: number;
  rippleSize?: number;
}

function LoadingIndicator({
  size = 80,
  rippleSize = 72,
}: LoadingIndicatorProps) {
  return (
    <Wrapper size={size}>
      <FirstRipple size={rippleSize} />
      <SecondRipple size={rippleSize} />
    </Wrapper>
  );
}

export default LoadingIndicator;
