import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  background-color: ${({ isOpen }) => (isOpen ? COLORS.GREEN : COLORS.RED)};
`;

Dot.displayName = 'Dot';
