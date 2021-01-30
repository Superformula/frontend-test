import React, { useEffect, useRef, useState } from "react";
import TooltipPortal from "./TooltipPortal";

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

  return (
    <>
      {props.children({ ref })}
      <TooltipPortal open={props.open} triggerRect={triggerBoundingRect}>
        {props.renderContent()}
      </TooltipPortal>
    </>
  );
}
