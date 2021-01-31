import { gql } from "@apollo/client";
import { GetCategoriesQuery, Category } from "../../generated/graphql";

export { useGetCategoriesQuery } from "../../generated/graphql";
export type { Category } from "../../generated/graphql";

// We need to find all the categories for restaurants,
// but the categories queries don't allow this type of
// search, so what we do is we search all the business
// that match with the search them "restaurant" and we
// extract the categories out of them.
export const GET_CATEGORIES = gql`
  query GetCategories($location: String!) {
    search(term: "restaurants", location: $location) {
      business {
        categories {
          alias
          title
        }
      }
    }
  }
`;

export function getUniqueCategories(
  data?: GetCategoriesQuery
): Record<string, Category> {
  const businessList = data?.search?.business || [];
  const totalCategories: Record<string, Category> = {};
  for (const business of businessList) {
    const categories = business?.categories;
    if (!categories) {
      continue;
    }

    for (const cat of categories) {
      if (!cat) {
        continue;
      }

      totalCategories[cat.alias!] = cat;
    }
  }

  return totalCategories;
}
