import { Size } from './Star/Star.types';

export type StarRatingProps = {
  /** Rating from 0 to 5 */
  rating: number;
  /** Size of component */
  size?: Size;
  /** Defines and override a class name */
  className?: string;
};
