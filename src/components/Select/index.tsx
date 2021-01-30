import React, { useState } from "react";
import styled from "@emotion/styled";
import Radio from "../Radio";
import { Label } from "../Text";
import Tooltip from "../Tooltip";

export interface IProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  label: React.ReactNode;
}

export default function Select(props: IProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Tooltip
      open={isOpen}
      renderContent={() => {
        return (
          <>
            <Radio name="test" value="1" onChange={() => {}}>
              One
            </Radio>
            <Radio name="test" value="2" onChange={() => {}}>
              Two
            </Radio>
            <Radio name="test" value="3" onChange={() => {}}>
              Three
            </Radio>
          </>
        );
      }}
    >
      {({ ref }) => (
        <Container onClick={() => setIsOpen((isOpen) => !isOpen)} ref={ref}>
          <Label>{props.label}</Label>
        </Container>
      )}
    </Tooltip>
  );
}

export const Container = styled.div`
  display: inline;
  // TODO this is shared with the Checkbox
  // abstract away
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
  cursor: pointer;
`;
