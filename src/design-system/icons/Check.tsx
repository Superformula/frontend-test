import * as React from 'react';

export interface CheckProps {
  className?: string;
}

function Check({ className }: CheckProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        fill="currentColor"
      />
      <path
        d="M7.21427 10.0739L12.5372 4.55377L13.4627 5.44623L7.21427 11.9261L3.53723 8.1129L4.46275 7.22044L7.21427 10.0739Z"
        fill="white"
      />
    </svg>
  );
}

export default Check;
