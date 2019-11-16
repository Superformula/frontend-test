import { useRef, useEffect } from 'react';

const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);

  return rootContainer;
};

const addRootElementToBody = (element: Element) => {
  document.body.insertBefore(
    element,
    document.body.lastElementChild ? document.body.lastElementChild.nextElementSibling : null,
  );
};

export const usePortal = (elementId: string) => {
  const rootElemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const existingParent = document.getElementById(elementId);
    const parentElem = existingParent || createRootElement(elementId);

    if (!existingParent) {
      addRootElementToBody(parentElem);
    }

    if (rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current);
    }

    return () => {
      if (rootElemRef.current) {
        rootElemRef.current.remove();
      }

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [elementId]);

  if (!rootElemRef.current) {
    rootElemRef.current = document.createElement('div');
  }

  return rootElemRef.current;
};
