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

interface ICoordinates {
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

export const testRestaurantDetail = {
  id: "test",
  name: "Very Long Restaurant Name Somewhere In The World",
  isOpen: true,
  rating: 3.5,
  price: "$$$",
  review_count: 359,
  category: "Thai",
  address: "624 S La Brea Ave Los Angeles, CA 90036",
  coordinates: {
    latitude: 35,
    longitude: -100,
  },
  photos: [
    "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,g_auto:subject,q_auto,f_auto/restaurant/f73fc7e2-51be-43d8-ac9f-83d8b5bafde8/63e1ff08-421a-469f-b9a8-1a736dc1e930.jpg",
    "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,g_auto:subject,q_auto,f_auto/restaurant/81ae139b-38a9-48ba-bec5-e356a8c282ca/22f9063d-330e-4a5d-a6de-cbe700667853.jpg",
    "https://images.adsttc.com/media/images/5d80/6cc7/284d/d15e/5d00/05f0/newsletter/feature_-_003.jpg?1568697523",
  ],
  reviews: [
    {
      id: "review 1",
      text: "Really good restaurant",
      rating: 3.5,
      time_created: "2020-01-01",
      user: {
        id: "user 1",
        name: "Martin R.",
        image_url:
          "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
      },
    },
  ],
};
