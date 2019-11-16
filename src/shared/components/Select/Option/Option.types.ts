import React from 'react';

export type OptionProps = {
  value: string;
  children: React.ReactNode;
  onSelect(value: string): void;
  selected?: boolean;
};
