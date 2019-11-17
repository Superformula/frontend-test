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

export type RestaurantDetailsResponse = {
  business: {
    name: string;
    rating: number;
    price: string;
    photos: string[];
    categories: {
      title: string;
    }[];
    is_closed: boolean;
    review_count: number;
    reviews: {
      id: string;
      rating: number;
      text: string;
      time_created: string;
      user: {
        name: string;
        image_url: string;
      };
    }[];
  };
};
