import styled from 'styled-components';
import { COLORS } from 'consts/colors';

export const Trigger = styled.button`
  display: block;
  position: relative;
  border: 0;
  background: none;
  appearance: none;
  text-transform: capitalize;
  padding-right: 50px;
  cursor: pointer;

  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.PRIMARY};
`;

Trigger.displayName = 'Trigger';
