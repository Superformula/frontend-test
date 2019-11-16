export enum Variant {
  EMPTY = 'empty',
  HALF = 'half',
  FULL = 'full',
}

export enum Size {
  SMALL = 'small',
  BIG = 'big',
}

export type StarProps = {
  variant?: Variant;
  size: Size;
};
