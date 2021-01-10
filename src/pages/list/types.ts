export interface Category {
  alias: string;
  title: string;
  parentCategories: Array<Category>;
}

export interface RestaurantResult {
  id: string;
  name: string;
  rating: number;
  categories: Array<Pick<Category, 'alias' | 'title'>>;
  price: string;
  isClosed: boolean;
  photos: Array<string>;
}

export interface FilterValue {
  openNow: boolean;
  price: string;
  category: string;
}
