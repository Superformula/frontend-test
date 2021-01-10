import * as React from 'react';

export interface FillStarProps {
  className?: string;
}

function FillStar({ className }: FillStarProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99999 0.140015L12.76 7.54001H19.76L13.86 11.98L16.72 19.44L9.99999 14.4L3.29999 19.44L6.13999 11.98L0.23999 7.54001H7.21999L9.99999 0.140015Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default FillStar;
