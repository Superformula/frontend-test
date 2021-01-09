import * as React from 'react';

export interface OvalProps {
  className?: string;
}

function Oval({ className }: OvalProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none">
      <path
        d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
        fill="white"
        stroke="currentColor"
      />
    </svg>
  );
}

export default Oval;
