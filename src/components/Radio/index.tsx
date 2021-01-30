import React from "react";
import styled from "@emotion/styled";
import CheckMark from "../Icons/CheckMark.svg";
import { Label } from "../Text";

// if we need super extra flexibilty we could
// accept a prop called inputProps of the type
// React.InputHTMLAttributes<HTMLInputElement>
// and so we can give full control of the underlying
// component but Im going to take a more minimalistic
// approach of only accepting the needed props
export interface IProps {
  id?: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  /* specify the label */
  children: React.ReactNode;
}

// TODO check comments in Checkbox
// TODO this thing resembles a lot to what we do in
// Radio, it would be nice to unify and abstract
// the common parts away but at this point I don't
// feel confortable with that because they might be
// just coincidentally similar and might evolve apart
export default function Radio(props: IProps) {
  return (
    <LabelStyled htmlFor={props.id}>
      <RadioStyled
        id={props.id}
        type="radio"
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      <FakeRadio />
      <Label as="span">{props.children}</Label>
    </LabelStyled>
  );
}

export const CIRCLE_SIZE_PX = 16;

export const FakeRadio = styled.span`
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
    content: url(${CheckMark});
    position: absolute;
    display: none;
    text-align: center;
    // TODO avoid magic constants
    line-height: 12px;
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
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.x600};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* On mouse-over, add a grey background color */
  &:hover input ~ ${FakeRadio} {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  & input:checked ~ ${FakeRadio} {
  }

  /* Show the checkmark when checked */
  & input:checked ~ ${FakeRadio}:after {
    display: block;
    background-color: #000000;
  }

  /* Style the checkmark/indicator */
  & ${FakeRadio}:after {
    // TODO more magic constants!
    width: ${CIRCLE_SIZE_PX}px;
    height: ${CIRCLE_SIZE_PX}px;
    border-radius: 50%;
  }
`;

// Hide the real checkbox and only rely
// on it's internal state
export const RadioStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
