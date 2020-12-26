import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { COLORS } from 'consts/colors';

export const Wrapper = styled.div`
  display: none;

  ${MEDIA_MIN.MD`
    display: block;
    position: sticky;
    top: 0;
    background-color: ${COLORS.WHITE};
    z-index: 1;
  `}
`;

Wrapper.displayName = 'Wrapper';
