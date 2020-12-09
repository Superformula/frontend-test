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

export const testRestaurant: ISearchRestaurant = {
  id: "test",
  name: "Very Long Restaurant Name Somewhere In The World",
  isOpen: true,
  rating: 3.5,
  price: "$$$",
  photo:
    "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,g_auto:subject,q_auto,f_auto/restaurant/f73fc7e2-51be-43d8-ac9f-83d8b5bafde8/63e1ff08-421a-469f-b9a8-1a736dc1e930.jpg",
  category: "Thai",
};
