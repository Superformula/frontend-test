/* eslint-disable jsx-a11y/label-has-for */
// TODO: ^ we shouldn't have to do this.
// inspiration for this component was drawn from:
// https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borders, borderColor } from 'styled-system';

import { Label } from '../..';

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  ${borders}
  ${borderColor}
  position: relative;
`;

const Icon = styled.svg`
  position: absolute;
  > circle {
     transition: all ease .25s;
     stroke: ${props => props.theme.colors.secondary};
     stroke-width: ${props => props.checked ? '4px' : '0'};
     fill: ${props => props.checked ? props.theme.colors.primary : props.theme.colors.secondary};
  }
`;

const Checkbox = ({
  checked,
  label,
  name,
  ...props
}) => (
  <CheckboxContainer>
    <Label
      htmlFor={name}
      borderBottom="1px solid"
      borderColor="black21"
      pb={2}
    >
      <HiddenCheckbox checked={checked} name={name} {...props} />
      <StyledCheckbox
        checked={checked}
        border="1px solid"
        borderColor="black21"
      >
        <Icon viewBox="0 0 24 24" checked={checked}>
          <circle cx="12" cy="12" r="10" />
        </Icon>
      </StyledCheckbox>
      <span>{label}</span>
    </Label>
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  label: undefined,
  checked: false,
  isDisabled: false,
  className: undefined,
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Checkbox;
