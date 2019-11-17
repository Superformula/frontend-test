export type RestaurantInfo = {
  id: string;
  name: string;
  photo: string;
  rating: number;
  price: string;
  cuisineName: string;
  isOpen: boolean;
  photoAlt?: string;
};

export type Review = {
  dateCreated: string;
  rating: number;
  comment: string;
  user: {
    name: string;
    imageUrl: string;
  };
};

export type RestaurantDetailedInfo = {
  name: string;
  rating: number;
  cuisineName: string;
  priceRange: string;
  isOpen: boolean;
  reviewsCount: number;
  images: string[];
  reviews: Review[];
};
