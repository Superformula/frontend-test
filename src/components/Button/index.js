import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants/colors';
import { MEDIA_MIN } from '../../utils/mediaQuery';

export const Button = styled.button`
  color: ${COLORS.WHITE};
  padding: 11px 5px;
  background-color: ${COLORS.PRIMARY};
  border: 1px solid ${COLORS.PRIMARY};
  border-radius: 2px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.85px;
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;

  ${MEDIA_MIN.MD`
    padding: 16px 5px;
    font-size: 14px;
    letter-spacing: 1px;
  `}

  ${({ secondary }) => secondary && SECONDARY}
`;

const SECONDARY = css`
  color: ${COLORS.PRIMARY};
  background-color: ${COLORS.WHITE};

  &:hover {
    background-color: ${COLORS.GRAY_100};
  }
`;

Button.displayName = 'Button';

Button.propTypes = {
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  secondary: false,
};
