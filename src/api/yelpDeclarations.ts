export interface ICategoriesResponse {
  categories: ICategories;
}

export interface ICategories {
  category: ICategory[];
}

export interface ICategoryData {
  title: string;
  alias: string;
  parent_categories: ICategory[];
}

export interface ICategory {
  title: string;
  alias: string;
}

export interface ISearchResponse {
  search: ISearchBusiness;
}

interface ISearchBusiness {
  business: ISearchData[];
}

export interface ISearchData {
  id: string;
  name: string;
  is_closed: boolean;
  hours: IHours;
  rating: number;
  price: string;
  photos: string[];
  categories: ICategoryTitle[];
}

export interface ISearchRestaurant {
  id: string;
  name: string;
  isOpen: boolean;
  rating: number;
  price: string;
  photo: string;
  category: string;
}

interface IHours {
  is_open_now: boolean;
}

interface ICategoryTitle {
  title: string;
}
