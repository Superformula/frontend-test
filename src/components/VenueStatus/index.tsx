import React from "react";
import styled from "@emotion/styled";
import { ITheme } from "../../theme";

export enum EVenueStatus {
  open = "open",
  closed = "closed",
}

export interface IProps {
  status: EVenueStatus;
}

export default function VenueStatus(props: IProps) {
  return (
    <Container>
      <Circle status={props.status} />
      <Label>{mapStatusToLabel(props.status)}</Label>
    </Container>
  );
}

export const Container = styled.span``;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey500};
  font-size: ${({ theme }) => theme.fontSize.x300};
  text-transform: uppercase;
`;

// TODO abstract the status to color matching logic
// into its own function and unit test
export const Circle = styled.span<{ status: EVenueStatus }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  background-color: ${({ theme, status }) => mapStatusToColor(status, theme)};
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
