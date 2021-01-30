import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

export interface IRenderChildrenProps {
  // TODO improve this typing
  ref: React.RefObject<any>;
}

export interface IProps {
  open?: boolean;
  renderContent: () => React.ReactNode | null;
  /* the trigger render propo */
  children: (props: IRenderChildrenProps) => React.ReactNode | null;
}

export default function Tooltip(props: IProps) {
  const [triggerBoundingRect, setTriggerBoundingRect] = useState<
    DOMRect | undefined
  >();
  const ref = useRef();
  useEffect(() => {
    const rect = ((ref.current as unknown) as HTMLElement)?.getBoundingClientRect?.();
    setTriggerBoundingRect(rect);
  }, []);

  let tooltip = null;
  if (props.open) {
    tooltip = (
      <ContentContainer
        style={{ "--triggerHeight": `${triggerBoundingRect?.height}px` } as any}
      >
        {props.renderContent()}
      </ContentContainer>
    );
  }

  return (
    <Container>
      {props.children({ ref })}
      {tooltip}
    </Container>
  );
}

export const ContentContainer = styled.div`
  border: 1px solid grey;
  position: absolute;
  left: 0;
  top: var(--triggerHeight);
`;

export const Container = styled.div`
  position: relative;
  display: inline;
  padding: 0;
  border: 0;
  margin: 0;
`;
