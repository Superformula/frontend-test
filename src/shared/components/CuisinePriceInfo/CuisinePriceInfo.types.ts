export enum Size {
  SMALL = 'small',
  BIG = 'big',
}

export type CuisinePriceInfoProps = {
  /** Name of cuisine. */
  cuisineName: string;
  /** Price range. */
  priceRange: string;
  /** Defines the size of the component. */
  size?: Size;
};
