import styled from 'styled-components';
import { Label } from './Label';
import { COLORS } from 'consts/colors';

export const Input = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;

  &:checked + ${Label} {
    &:after {
      background-color: ${COLORS.GREEN};
      left: 100%;
    }
  }
`;
