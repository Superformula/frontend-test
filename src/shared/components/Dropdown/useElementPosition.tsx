import { useState, RefObject, useEffect, useCallback } from 'react';

export const useElementPosition = (targetRef: RefObject<HTMLDivElement>) => {
  const [targetPosition, setTargetPosition] = useState<{ top?: number; left?: number }>({});

  const recalculatePosition = useCallback(() => {
    if (!targetRef.current) {
      return;
    }

    const bounding = targetRef.current.getBoundingClientRect();
    let top = targetRef.current.offsetTop + bounding.height;
    let parent = targetRef.current.offsetParent;

    while (parent !== null) {
      if (parent instanceof HTMLElement) {
        top += parent.offsetTop;
        parent = parent.offsetParent;
      } else {
        parent = null;
      }
    }

    setTargetPosition({
      left: bounding.left,
      top,
    });
  }, [targetRef]);

  useEffect(() => {
    recalculatePosition();
  }, [recalculatePosition, targetRef]);

  useEffect(() => {
    window.addEventListener('resize', recalculatePosition);

    return () => window.removeEventListener('resize', recalculatePosition);
  }, [recalculatePosition]);

  return {
    targetPosition,
    recalculatePosition,
  };
};
