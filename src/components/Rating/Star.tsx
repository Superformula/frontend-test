import React from "react";
import { useTheme } from "@emotion/react";

export interface IProps {
  fullness: number;
}

function useGetGrad(fullness: number): [grad: React.ReactNode, gradId: number] {
  const theme = useTheme();

  const grad = (
    <>
      <stop offset="0%" stopColor={theme.colors.primary} />
      <stop offset={`${fullness}%`} stopColor={theme.colors.primary} />
      <stop offset={`${fullness}%`} stopColor="white" />
      <stop offset="100%" stopColor="white" />
    </>
  );

  return [grad, Math.floor(fullness)];
}

export default function Star(props: IProps) {
  const theme = useTheme();

  // Ensure the fullness is between 0 and 100
  const fullness = Math.max(0, Math.min(100, props.fullness));
  const [grad, gradId] = useGetGrad(fullness);

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId.toString()}>{grad}</linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0L12.8279 7.66839H20L13.9549 12.2694L16.8852 20L10 14.7772L3.13525 20L6.04508 12.2694L0 7.66839H7.15164L10 0Z"
        stroke={theme.colors.primary}
        strokeWidth="1"
        fill={`url(#${gradId})`}
      />
    </svg>
  );
}
