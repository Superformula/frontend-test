import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import { Label } from './Label';
import CheckImage from 'assets/check.svg';
import Oval from 'assets/oval.svg';

export const Input = styled.input`
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;

  &:checked + ${Label} {
    color: ${COLORS.PRIMARY};
  }

  &[type='checkbox']:checked + ${Label}::before {
    background-image: url(${CheckImage});
    background-color: ${COLORS.BLACK};
    border-color: ${COLORS.BLACK};
  }

  &[type='radio']:checked + ${Label}::before {
    background-image: url(${Oval});
    background-size: 10px;
    background-color: ${COLORS.WHITE};
    border-color: ${COLORS.GRAY_400};
  }

  &:focus + ${Label}::before {
    outline: auto;
  }
`;
