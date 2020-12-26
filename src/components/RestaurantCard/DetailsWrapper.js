import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { SpaceBetween } from '../SpaceBetween';

export const DetailsWrapper = styled(SpaceBetween)`
  padding-bottom: 10px;
  margin: 10px 0 auto;

  ${MEDIA_MIN.MD`
    padding-bottom: 20px;
  `}
`;
