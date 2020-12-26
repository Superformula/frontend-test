import styled from 'styled-components';
import { COLORS } from 'consts/colors';

export const Options = styled.div`
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GRAY_400};
  position: absolute;
  min-width: 100%;
  max-height: 296px;
  overflow: auto;
  top: calc(100% + 7px);
  padding: 16px 20px 16px 16px;
  z-index: 1;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1),
    inset 0px -1px 0px ${COLORS.GRAY_400};
`;
