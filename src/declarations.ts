export interface IRestaurantInfo {
  name: string;
  rating: number;
  price: string;
  category: string;
  isOpen: boolean;
}

// TODO: Mock restaurant example, removed once connected with server
export const restaurantInfoExample = {
  name: "Very Long Name Restaurants Number 1 In List",
  rating: 3.5,
  price: "$$$",
  category: "Thai",
  isOpen: true,
};
