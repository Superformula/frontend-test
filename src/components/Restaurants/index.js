import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const Restaurants = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  padding-bottom: 48px;

  ${MEDIA_MIN.MD`
    padding-bottom: 80px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 80px 32px;
  `}

  ${MEDIA_MIN.LG`
    grid-template-columns: repeat(4, 1fr);
  `}

  ${MEDIA_MIN.XXL`
    grid-template-columns: repeat(6, 1fr);
  `}
`;
