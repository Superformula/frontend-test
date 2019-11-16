import React, { FC } from 'react';

import { OptionIconProps } from './OptionIcon.types';

export const OptionIcon: FC<OptionIconProps> = ({ checked }) => (
  <>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {checked ? (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
            fill="black"
          />
          <path
            d="M7.21427 10.0739L12.5372 4.55377L13.4627 5.44623L7.21427 11.9261L3.53723 8.1129L4.46275 7.22044L7.21427 10.0739Z"
            fill="white"
          />
        </>
      ) : (
        <path
          d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
          fill="white"
          stroke="#C8C8C8"
        />
      )}
    </svg>
  </>
);
