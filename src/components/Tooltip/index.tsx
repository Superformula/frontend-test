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

/**
 * A simple implementation of a tooltip.
 *
 * It has some limitations but mainly due to
 * lack of time to solve them (i.e. not adapting to screen changes),
 * but it is a really simple but powerful way of
 * building a tooltip mainly due to Fragments and Portals.
 * By using Portals I can easily make the tooltip
 * a child of the document.body and this in turn allows
 * the tooltip to require basically nothing from the
 * TooltipTrigger (i.e. a button, a text, whatever).
 *
 * @dev a nice real world use case for portals plus
 * a nice way of showing off how good react compoisiton is
 *
 *
 */
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
