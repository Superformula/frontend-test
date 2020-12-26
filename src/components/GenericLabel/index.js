import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from 'consts/colors';

export const GenericLabel = styled.span`
  text-transform: ${({ uppercase }) =>
    uppercase ? 'uppercase' : 'capitalize'};
  font-size: ${({ xl }) => (xl ? '22px' : '12px')};
  font-weight: ${({ xl }) => (xl ? '300' : '400')};
  color: ${COLORS.GRAY_600};
`;

GenericLabel.displayName = 'GenericLabel';

GenericLabel.propTypes = {
  xl: PropTypes.bool,
  uppercase: PropTypes.bool,
};
