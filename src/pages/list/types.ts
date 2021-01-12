export interface Category {
  alias: string;
  title: string;
}

export interface RestaurantResult {
  id: string;
  name: string;
  rating: number;
  categories: Array<Category>;
  price: string;
  isClosed: boolean;
  photos: Array<string>;
}

export interface FilterValue {
  openNow: boolean;
  price: string;
  category: string;
}
