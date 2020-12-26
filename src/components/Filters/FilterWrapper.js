import styled from 'styled-components';
import { COLORS } from 'consts/colors';

export const FilterWrapper = styled.div`
  margin-right: 33px;
  position: relative;
  color: ${COLORS.PRIMARY};
  font-size: 16px;
  line-height: 24px;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    top: calc(100% + 7px);
    background-color: ${COLORS.GRAY_400};
  }
`;
