import React from "react";
import styled from "@emotion/styled";
import { ITheme } from "../../theme";

export enum EVenueStatus {
  open = "open",
  closed = "closed",
}

export type Size = "small" | "medium" | "large";

export interface IProps {
  status: EVenueStatus;
  size?: Size;
  className?: string;
}

export default function VenueStatus(props: IProps): JSX.Element {
  return (
    <Container className={props.className}>
      <Circle status={props.status} size={props.size} />
      <Label size={props.size}>{mapStatusToLabel(props.status)}</Label>
    </Container>
  );
}

export const Container = styled.span`
  display: flex;
  align-items: center;
`;

export const Label = styled.label<{ size?: Size }>`
  color: ${({ theme }) => theme.colors.grey500};
  text-transform: uppercase;
  font-size: ${({ theme, size }) => {
    switch (size) {
      case "large": {
        return theme.fontSize.x900;
      }
      case "medium": {
        return theme.fontSize.x600;
      }

      default: {
        return theme.fontSize.x300;
      }
    }
  }};
`;

// TODO abstract the status to color matching logic
// into its own function and unit test
export const Circle = styled.span<{ status: EVenueStatus; size?: Size }>`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({ theme, status }) => mapStatusToColor(status, theme)};

  ${({ size }) => {
    switch (size) {
      case "large": {
        return `
          width: 22px;
          height: 22px;
          margin-right: 11px;
        `;
      }
      case "medium": {
        //TODO
        return `
          width: 8px;
          height: 8px;
          margin-right: 4px;
        `;
      }

      default: {
        return `
          width: 8px;
          height: 8px;
          margin-right: 4px;
        `;
      }
    }
  }}
`;

export const STATUS_LABEL: Record<EVenueStatus, string> = {
  [EVenueStatus.open]: "open now",
  [EVenueStatus.closed]: "closed",
};

export function mapStatusToLabel(status: EVenueStatus): string {
  const label = STATUS_LABEL[status];
  if (!label) {
    throw new Error("bad status");
  }

  return label;
}

export function mapStatusToColor(status: EVenueStatus, theme: ITheme): string {
  switch (status) {
    case EVenueStatus.open: {
      return theme.colors.green;
    }

    case EVenueStatus.closed: {
      return theme.colors.fuchsia;
    }

    default: {
      throw new Error("bad status");
    }
  }
}
