import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from 'consts/colors';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const Button = styled.button.attrs({ type: 'button' })`
  padding: 11px 5px;
  border: 1px solid ${COLORS.PRIMARY};
  border-radius: 2px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.85px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;

  /* Clears default button appearence */
  appearance: none !important;
  -webkit-appearance: none !important;

  ${MEDIA_MIN.MD`
    padding: 16px 5px;
    font-size: 14px;
    letter-spacing: 1px;
  `}

  /* Only apply styles if button is not disabled */
  ${({ $secondary, disabled }) =>
    !disabled && ($secondary ? SECONDARY : PRIMARY)}
  ${({ disabled }) => disabled && DISABLED}
  ${({ $fill }) => $fill && FILL}
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
  background-color: ${({ $secondary }) =>
    $secondary ? COLORS.WHITE : COLORS.GRAY_400};
  color: ${({ $secondary }) => ($secondary ? COLORS.GRAY_400 : COLORS.WHITE)};
  border-color: ${COLORS.GRAY_400};
  cursor: not-allowed;
`;

const FILL = css`
  width: 100%;
`;

Button.displayName = 'Button';

Button.propTypes = {
  disabled: PropTypes.bool,
  $secondary: PropTypes.bool,
  $fill: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  $secondary: false,
  $fill: false,
};
