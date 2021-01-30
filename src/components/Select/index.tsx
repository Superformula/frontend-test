import React, { useState } from "react";
import styled from "@emotion/styled";
import Radio from "../Radio";
import { Label } from "../Text";
import Tooltip from "../Tooltip";
import CaretUp from "../Icons/CaretUp.svg";
import CaretDown from "../Icons/CaretDown.svg";

export interface IOption {
  value: string;
  id?: string;
  label: React.ReactNode;
}

export interface IProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  label: React.ReactNode;
  options: Array<IOption>;
}

export default function Select(props: IProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Tooltip
      open={isOpen}
      renderContent={() => {
        return (
          <>
            {props.options.map((option, index) => (
              <Separator key={index} index={index}>
                <Radio
                  id={option.id}
                  name={props.name}
                  value={option.value}
                  checked={props.value === option.value}
                  onChange={props.onChange}
                >
                  {option.label}
                </Radio>
              </Separator>
            ))}
          </>
        );
      }}
    >
      {({ ref }) => (
        <Container onClick={() => setIsOpen((isOpen) => !isOpen)} ref={ref}>
          <Label>
            {props.label}
            <IconContainer src={isOpen ? CaretUp : CaretDown} />
          </Label>
        </Container>
      )}
    </Tooltip>
  );
}

export const Container = styled.div`
  display: inline-block;
  // TODO this is shared with the Checkbox
  // abstract away
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
  cursor: pointer;
  position: relative;
  padding-right: 20px;
`;

export interface ISeparatorProps {
  index: number;
}

export const Separator = styled.div<ISeparatorProps>`
  ${(p) => (p.index !== 0 ? "margin-top: 12px;" : "")}
`;

export const IconContainer = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;
