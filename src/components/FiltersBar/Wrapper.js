import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const Wrapper = styled.div`
  display: none;

  ${MEDIA_MIN.MD`
    display: block;
  `}
`;

Wrapper.displayName = 'Wrapper';
