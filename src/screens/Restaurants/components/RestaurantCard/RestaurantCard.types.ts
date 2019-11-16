export type RestaurantCardDetails = {
  name: string;
  photo: string;
  photoAlt: string;
  rating: number;
  price: string;
  cuisineName: string;
  isOpen: boolean;
};

export type RestaurantCardProps = RestaurantCardDetails;
