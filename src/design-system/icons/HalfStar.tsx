import * as React from 'react';

export interface HalfStarProps {
  className?: string;
}

function HalfStar({ className }: HalfStarProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <path
        d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z"
        stroke="currentColor"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20">
        <path
          d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z"
          fill="white"
          stroke="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect width="10" height="20" fill="currentColor" />
      </g>
    </svg>
  );
}

export default HalfStar;
