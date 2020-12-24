import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const Title = styled.h4`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-bottom: 8px;

  /* Adds ellipsis after 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${MEDIA_MIN.MD`
    line-height: 28px;
    margin: 16px 0 8px;
  `}
`;
