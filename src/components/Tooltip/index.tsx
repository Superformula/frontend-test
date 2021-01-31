import React, { useEffect, useRef, useState } from "react";
import TooltipPortal from "./TooltipPortal";

export interface IRenderChildrenProps {
  // TODO improve this typing
  ref: React.RefObject<any>;
}

export interface IProps {
  open?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose?: () => any;
  renderContent: () => React.ReactNode | null;
  /* the trigger render prop */
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
 * a nice way of showing off how good react composition is
 *
 * TODO make it autoclose when clicking outside of it
 *
 */
export default function Tooltip(props: IProps): JSX.Element {
  const triggerRef = useRef<HTMLElement | undefined>();
  const tooltipRef = useRef<HTMLElement | undefined>();
  const [triggerBoundingRect, setTriggerBoundingRect] = useState<
    DOMRect | undefined
  >();

  // TODO the rect is extracted everytime the tooltip is opened or closed
  // but we probably should do it also when the screen changes sizes
  useEffect(() => {
    const rect = triggerRef.current?.getBoundingClientRect?.();
    setTriggerBoundingRect(rect);
  }, [props.open]);

  useOnClickOutside([triggerRef, tooltipRef], () => {
    if (props.open) {
      props.onClose?.();
    }
  });

  return (
    <>
      {props.children({ ref: triggerRef })}
      <TooltipPortal
        ref={tooltipRef}
        open={props.open}
        triggerRect={triggerBoundingRect}
      >
        {props.renderContent()}
      </TooltipPortal>
    </>
  );
}

/**
 * A nice little hook that takes a list of refs to
 * html elements and whenever a click is done "outside"
 * of those elements (it has to be outside of all) then
 * the `onClick` callback will be called
 *
 * TODO move this to `./src/hooks`
 */
function useOnClickOutside(
  refs: Array<React.RefObject<HTMLElement | undefined>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: () => any
): void {
  // Wrap the parameter onClick callback
  // with a ref as a way of providing a stable reference to it
  const onClickRef = useRef(onClick);
  useEffect(() => {
    onClickRef.current = onClick;
  }, [onClick]);

  useEffect(() => {
    function onClickWrapper(event: MouseEvent) {
      // if the event was not triggered inside the element
      // then run the handler
      const isClickInside = refs
        // we only care about refs with values
        .filter((ref) => !!ref.current)
        // check if at least one contains the event triggered
        // i.e. if the event was triggered inside of at least
        // one of the members of the list
        // TODO fix any
        .some((ref) => ref.current?.contains(event.target as any));
      if (!isClickInside) {
        onClickRef.current?.();
      }
    }

    // Bind the event listener
    document.addEventListener("click", onClickWrapper);
    return () => document.removeEventListener("click", onClickWrapper);
  }, [...refs]);
}
