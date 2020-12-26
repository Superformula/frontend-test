import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { COLORS } from 'consts/colors';

export const MapWrapper = styled.div`
  background-color: ${COLORS.GRAY_300};
  width: 100%;
  height: 228px;
  margin-bottom: 20px;

  ${MEDIA_MIN.MD`
    min-width: 640px;
    margin-bottom: 15px;
    margin-right: 32px;
  `}
`;
