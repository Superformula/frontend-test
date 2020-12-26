import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 10px;
  margin: 10px 0 auto;

  ${MEDIA_MIN.MD`
    padding-bottom: 20px;
  `}
`;
