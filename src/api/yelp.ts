import {
  ICategoriesResponse,
  ICategoryData,
  ICategory,
  ISearchResponse,
  ISearchData,
  ISearchRestaurant,
  IDetailResponse,
  IRestaurantDetail,
  IReview,
} from "../declarations";

const MOCK_API = true;

const fetchData = async (query: string) => {
  const res = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
      Authorization: `Bearer ${process.env.YELP_ACCESS_TOKEN}`,
      "Accept-Language": "en_US",
    },
    body: query,
  });

  const json = await res.json();
  return json.data;
};

export const fetchCategories = async (): Promise<ICategory[]> => {
  // Request limit reached, mocking this endpoint to save requests
  if (MOCK_API) {
    return [
      {
        title: "Category 1",
        alias: "category-1",
      },
      {
        title: "Category 2",
        alias: "category-2",
      },
    ];
  }

  const data: ICategoriesResponse = await fetchData(`
      {
        categories(country: "US", locale: "en_US") {
          category {
            title
            alias
            parent_categories {
              title
            }
          }
        }
      }
    `);

  return data.categories.category
    .filter((category: ICategoryData) => {
      return (
        category.title.match(/restaurant/i) ||
        category.parent_categories.some((parent_category: ICategory) =>
          parent_category.title.match(/restaurant/i)
        )
      );
    })
    .map(({ title, alias }: ICategoryData) => {
      return { title, alias };
    });
};

export const fetchRestaurants = async (
  offset: number = undefined,
  category: string = undefined
): Promise<ISearchRestaurant[]> => {
  const newOffset = offset ? `, offset: ${offset}` : ``;
  const newCategory = category ? `, categories: "${category}"` : "";

  if (MOCK_API) {
    return [testRestaurant];
  }

  const data: ISearchResponse = await fetchData(`
    {
      search(term: "restaurants", location: "Las Vegas"${newOffset}${newCategory}) {
        business {
          id
          name
          is_closed
          hours {
            is_open_now
          }
          rating
          price
          photos
          categories {
            title
          }
        }
      }
    }
  `);

  return data.search.business.map(
    ({ id, name, is_closed, hours, rating, price, photos, categories }: ISearchData) => ({
      id,
      name,
      isOpen: !is_closed && hours[0].is_open_now,
      rating,
      price,
      photo: photos[0],
      category: categories[0].title,
    })
  );
};

export const fetchRestaurant = async (restaurantID: string): Promise<IRestaurantDetail> => {
  if (MOCK_API) {
    return testRestaurantDetail;
  }

  const data: IDetailResponse = await fetchData(`
    {
      business(id: "${restaurantID}") {
        id
        name
        is_closed
        rating
        price
        review_count
        categories {
          title
        }
        location {
          formatted_address
        }
        coordinates {
          latitude
          longitude
        }
        photos
        hours {
          is_open_now
        }
        reviews {
          id
          text
          rating
          time_created
          user {
            id
            name
            image_url
          }
        }
      }
    }
  `);

  const {
    id,
    name,
    is_closed,
    rating,
    price,
    review_count,
    categories,
    location,
    coordinates,
    photos,
    hours,
    reviews,
  } = data.business;

  return {
    id,
    name,
    isOpen: !is_closed && hours[0].is_open_now,
    rating,
    price,
    review_count,
    category: categories[0].title,
    address: location.formatted_address,
    coordinates,
    photos,
    reviews: reviews.map((r: IReview) => {
      return {
        ...r,
        time_created: new Date(r.time_created).toLocaleDateString(),
      };
    }),
  };
};

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
