export type ILoadingState = "SUCCESS" | "LOADING" | "ERROR";

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

export interface IDetailResponse {
  business: IDetailData;
}

export interface IDetailData {
  id: string;
  name: string;
  is_closed: boolean;
  rating: number;
  price: string;
  review_count: number;
  categories: ICategoryTitle[];
  location: ILocation;
  coordinates: ICoordinates;
  photos: string[];
  hours: IHours;
  reviews: IReview[];
}

interface ILocation {
  formatted_address: string;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IReview {
  id: string;
  text: string;
  rating: number;
  time_created: string;
  user: IUser;
}

interface IUser {
  id: string;
  name: string;
  image_url: string;
}

export interface IRestaurantDetail {
  id: string;
  name: string;
  isOpen: boolean;
  rating: number;
  price: string;
  review_count: number;
  category: string;
  address: string;
  coordinates: ICoordinates;
  photos: string[];
  reviews: IReview[];
}
