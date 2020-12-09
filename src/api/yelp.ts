import {
  ICategoriesResponse,
  ICategoryData,
  ICategory,
  ISearchResponse,
  ISearchData,
  ISearchRestaurant,
  testRestaurant,
  IDetailResponse,
  IRestaurantDetail,
  IReview,
  testRestaurantDetail,
} from "./yelpDeclarations";

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
      isOpen: !is_closed && hours.is_open_now,
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
    isOpen: !is_closed && hours.is_open_now,
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
