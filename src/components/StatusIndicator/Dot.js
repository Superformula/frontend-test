import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from 'consts/colors';

export const Dot = styled.span`
  width: ${({ xl }) => (xl ? '22px' : '8px')};
  height: ${({ xl }) => (xl ? '22px' : '8px')};
  border-radius: 50%;
  margin-right: ${({ xl }) => (xl ? '8px' : '4px')};
  background-color: ${({ isOpen }) => (isOpen ? COLORS.GREEN : COLORS.RED)};
`;

Dot.displayName = 'Dot';

Dot.propTypes = {
  isOpen: PropTypes.bool,
  xl: PropTypes.bool,
};
