import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from 'consts/colors';

export const LearnMoreLink = styled(Link)`
  display: inline-block;
  width: fit-content;
  border-bottom: 1px solid ${COLORS.GRAY_200};
  font-size: 16px;
  padding-bottom: 3px;
  text-decoration: none;
  text-transform: capitalize;
  color: ${COLORS.PRIMARY};

  &::after {
    content: '>';
    display: inline-block;
    position: absolute;
    margin-left: 8px;
    font-size: 16px;
    transition: 0.3s margin-left;
  }

  &:hover::after {
    margin-left: 12px;
  }
`;
