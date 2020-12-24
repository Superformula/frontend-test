import styled from 'styled-components';
import { COLORS } from 'consts/colors';

export const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  margin: 5px 10px;
  width: 30px;
  height: 10px;
  background: ${COLORS.GRAY_200};
  border-radius: 100px;
  display: inline-block;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 20px;
    height: 20px;
    background: ${COLORS.GRAY_500};
    border-radius: 90px;
    transition: 0.3s;
    transform: translate(-50%, -50%);
  }
`;
