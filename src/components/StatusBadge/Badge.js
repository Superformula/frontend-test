import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Badge = styled.span`
  display: inline-block;
  border-radius: 40px;
  padding: 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.57px;
  line-height: 16px;
  font-size: 8px;
  font-weight: 500;
  ${({ isOpen }) => (isOpen ? OPEN : CLOSED)}
`;

const OPEN = css`
  background-color: ${COLORS.GREEN};
  color: ${COLORS.PRIMARY};
`;

const CLOSED = css`
  background-color: ${COLORS.RED};
  color: ${COLORS.WHITE};
`;

Badge.displayName = 'Badge';
