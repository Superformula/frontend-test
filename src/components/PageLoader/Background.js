import styled from 'styled-components';
import { COLORS } from 'consts/colors';

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
