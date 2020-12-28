import { Category } from '~/models';

export interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  rating: number;
  price: string;
  categories: Category[];
  review_count: number;
  photos: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  location: {
    display_address: string[];
  };
}
