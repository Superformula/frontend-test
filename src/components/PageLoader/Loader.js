import styled, { keyframes } from 'styled-components';
import { COLORS } from 'consts/colors';

const rotate = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(359deg);}
`;

export const Loader = styled.div.attrs({ role: 'progressbar' })`
  width: 80px;
  height: 80px;
  border: 2px solid ${COLORS.PRIMARY};
  border-bottom-color: ${COLORS.GRAY_200};
  animation: ${rotate} 0.8s linear infinite;
  border-radius: 50%;
  transition: 0.5s;
`;
