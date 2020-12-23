import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants/colors';
import { MEDIA_MIN } from '../../utils/mediaQuery';

export const Button = styled.button.attrs({ type: 'button' })`
  padding: 11px 5px;
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

  /* Only apply styles if button is not disabled */
  ${({ secondary, disabled }) => !disabled && (secondary ? SECONDARY : PRIMARY)}
  ${({ disabled }) => disabled && DISABLED}
`;

const PRIMARY = css`
  color: ${COLORS.WHITE};
  background-color: ${COLORS.PRIMARY};
`;

const SECONDARY = css`
  color: ${COLORS.PRIMARY};
  background-color: ${COLORS.WHITE};

  &:hover {
    background-color: ${COLORS.GRAY_100};
  }
`;

const DISABLED = css`
  background-color: ${({ secondary }) =>
    secondary ? COLORS.WHITE : COLORS.GRAY_400};
  color: ${({ secondary }) => (secondary ? COLORS.GRAY_400 : COLORS.WHITE)};
  border-color: ${COLORS.GRAY_400};
  cursor: not-allowed;
`;

Button.displayName = 'Button';

Button.propTypes = {
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  secondary: false,
  disabled: false,
};
