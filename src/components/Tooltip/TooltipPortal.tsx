import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

export interface IProps {
  open?: boolean;
  triggerRect: DOMRect | undefined;
  children: React.ReactNode;
}

export default function TooltipPortal(props: IProps) {
  let tooltip = null;

  if (props.open) {
    // In here we do all the calculations to find out
    // what is the bottom of the Trigger element,
    // TODO this should refresh when the screen adjusts
    const triggerY = props.triggerRect?.y || 0;
    const triggerHeight = props.triggerRect?.height || 0;
    // TODO abstract the "-1" somehow,
    // this is here because of the border bottom that we want
    // to overlap with
    const triggerBottom = triggerY + triggerHeight - 1;
    const triggerLeft = props.triggerRect?.left || 0;

    tooltip = (
      <Container
        style={
          { "--top": `${triggerBottom}px`, "--left": `${triggerLeft}px` } as any
        }
      >
        {props.children}
      </Container>
    );
  }

  return ReactDOM.createPortal(tooltip, document.body);
}

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  // TODO abstract this
  padding: 16px;
  position: absolute;
  left: var(--left);
  top: var(--top);
  // TODO make this part of the theme
  z-index: 1000;
  background: ${({ theme }) => theme.colors.white};
`;
