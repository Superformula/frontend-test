import * as React from 'react';

export interface CaretProps {
  className?: string;
}

function Caret({ className }: CaretProps) {
  return (
    <svg
      className={className}
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none">
      <path
        d="M6.75 0L7.5455 0.795495L3.77275 4.56824L0 0.795495L0.795495 0L3.77275 2.97725L6.75 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Caret;
