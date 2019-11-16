export enum Size {
  SMALL = 'small',
  BIG = 'big',
}

export type RestaurantStatusProps = {
  isOpen: boolean;
  size?: Size;
};
