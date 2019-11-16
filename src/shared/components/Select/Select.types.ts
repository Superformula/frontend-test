import { CSSProperties } from 'react';

type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  title: string;
  options: Option[];
  values?: string[];
  targetClassName?: string;
  optionsClassName?: string;
  targetStyle?: CSSProperties;
  optionsStyle?: CSSProperties;
  onChange(values: string[]): void;
};
