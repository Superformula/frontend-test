import { ICategoriesData, ICategories, ICategory, IParentCategory } from "./yelpDeclarations";

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

export const fetchCategories = async (): Promise<string[]> => {
  const data: ICategoriesData = await fetchData(`
    {
        categories {
            total
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
    .filter((category: ICategory) => {
      return (
        category.title.match(/restaurant/i) ||
        category.parent_categories.some((parent_category: IParentCategory) =>
          parent_category.title.match(/restaurant/i)
        )
      );
    })
    .map((category: ICategory) => category.title);
};
