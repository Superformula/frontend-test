import styled, { css } from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const GridWrapper = styled.div`
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  position: relative;

  ${MEDIA_MIN.MD`
    padding-right: 64px;
    padding-left: 64px;
  `}

  ${({ flex }) => flex && FLEX}
`;

const FLEX = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

GridWrapper.displayName = 'GridWrapper';
