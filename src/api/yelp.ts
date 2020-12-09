import {
  ICategoriesResponse,
  ICategories,
  ICategoryData,
  ICategory,
  ISearchResponse,
  ISearchData,
  ISearchRestaurant,
} from "./yelpDeclarations";

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
