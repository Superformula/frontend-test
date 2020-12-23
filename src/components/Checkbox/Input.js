import styled from 'styled-components';
import { Label } from './Label';
import { COLORS } from '../../constants/colors';

export const Input = styled.input.attrs({type: 'checkbox'})`
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;

  &:checked + ${Label}::before {
    background-color: ${COLORS.BLACK};
    border: 2px solid ${COLORS.BLACK};
  }

  &:focus + ${Label}::before {
    outline: auto;
  }
`;