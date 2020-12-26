import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import CheckImage from 'assets/check.svg';

export const Label = styled.label`
  cursor: pointer;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.GRAY_800};

  &::before {
    content: '';
    flex-shrink: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.GRAY_400};
    margin-right: 8px;
    border-radius: 50%;
    transition: 0.2s background-color, 0.2s border-color;

    background-image: url(${CheckImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 11px;
  }
`;
