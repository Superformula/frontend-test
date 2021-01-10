export interface Category {
  alias: string;
  title: string;
  parent_categories: Array<Category>;
}

export interface FilterValue {
  openNow: boolean;
  price: string;
  category: string;
}
