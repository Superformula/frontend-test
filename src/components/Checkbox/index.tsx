import React from "react";
import styled from "@emotion/styled";

// if we need super extra flexibilty we could
// accept a prop called inputProps of the type
// React.InputHTMLAttributes<HTMLInputElement>
// and so we can give full control of the underlying
// component but Im going to take a more minimalistic
// approach of only accepting the needed props
export interface IProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  /* specify the label */
  children: React.ReactNode;
}

// TODO improve the internal layout so that it is
// probably relative and avoids using so many hardcoded values.
// The approach I am taking is similar to that which Ant design
// uses and a lot of resources in the internet point out as the
// main way of achieving this, but with more time I would attempt
// to rely more on relative values and avoid harcoded values.
export default function Checkbox(props: IProps) {
  return (
    <LabelStyled>
      <CheckboxStyled
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <FakeCheckbox />
      <InputLabel>{props.children}</InputLabel>
    </LabelStyled>
  );
}

export const CIRCLE_SIZE_PX = 16;

export const InputLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.x600};
`;

export const FakeCheckbox = styled.span`
  position: absolute;
  left: 0px;
  // TODO I don't live this hardcoded pixels
  top: calc(50% - ${CIRCLE_SIZE_PX / 2}px);
  height: ${CIRCLE_SIZE_PX}px;
  width: ${CIRCLE_SIZE_PX}px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 50%;

  /* Create the checkmark/indicator (hidden when not checked) */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const LabelStyled = styled.label`
  position: relative;
  // 8 is the padding between the circle
  // and the label
  // TODO un hardcode this
  padding-left: ${CIRCLE_SIZE_PX + 8}px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.x600};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* On mouse-over, add a grey background color */
  &:hover input ~ ${FakeCheckbox} {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  & input:checked ~ ${FakeCheckbox} {
  }

  /* Show the checkmark when checked */
  & input:checked ~ ${FakeCheckbox}:after {
    display: block;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  /* Style the checkmark/indicator */
  & ${FakeCheckbox}:after {
    // TODO more magic constants!
    left: 1px;
    top: 1px;
    width: 8px;
    height: 8px;
    border: solid white;
    border-radius: 50%;
  }
`;

// Hide the real checkbox and only rely
// on it's internal state
export const CheckboxStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
