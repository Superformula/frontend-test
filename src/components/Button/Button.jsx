import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

const buttonStyle = variant({
  key: 'buttons',
});

const Button = styled.button`
  ${buttonStyle}
  display: inline-flex;
  justify-content: center;
  width: ${props => props.block ? '100%' : 'auto'}
  padding: 12px 24px;
  outline: 0;
  font-size: ${props => props.small ? props.theme.fontSizes[0] : props.theme.fontSizes[1]};
  font-stretch:normal;
  text-transform: uppercase;
  border-radius: 2px;
  transition: all cubic-bezier(0.4, 0.0, 0.2, 1) 0.25s;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
  &:hover:not(:disabled) {
    transform: translateY(2px);
  }
`;

Button.defaultProps = {
  secondary: false,
  block: false,
};

Button.propTypes = {
  secondary: PropTypes.bool,
  block: PropTypes.bool,
};

export default Button;
