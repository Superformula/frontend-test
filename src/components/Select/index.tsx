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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  label: React.ReactNode;
  options: Array<IOption>;
  className?: string;
}

export default function Select(props: IProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tooltip
      open={isOpen}
      onClose={() => setIsOpen(false)}
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
                  aria-selected={props.value === option.value}
                  onChange={(e) => {
                    props.onChange(e);
                    // close tooltip when selecting
                    setIsOpen(false);
                  }}
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
        <Container
          role="button"
          aria-label={props.name}
          aria-expanded={isOpen}
          className={props.className}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          ref={ref}
        >
          <Label>
            {props.label}
            <IconContainer
              src={isOpen ? CaretUp : CaretDown}
              alt="caret-decoration"
            />
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
