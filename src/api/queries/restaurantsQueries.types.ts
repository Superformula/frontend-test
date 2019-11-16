type Business = {
  id: string;
  name: string;
  price: string;
  rating: number;
  is_closed: boolean;
  photos: string;
  categories: {
    title: string;
  }[];
};

export type SearchRestaurantsResponse = {
  search: {
    business: Business[];
  };
};
