export interface ReviewItem {
  id: string;
  rating: number;
  user: {
    id: string;
    imageUrl: string;
    name: string;
  };
  text: string;
  timeCreated: string;
}

export interface RestaurantDetail {
  id: string;
  name: string;
  rating: number;
  categories: Array<{ alias: string; title: string }>;
  price: string;
  isClosed: boolean;
  location: {
    formattedAddress: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  photos: Array<string>;
  reviewCount: number;
  reviews: Array<ReviewItem>;
}
