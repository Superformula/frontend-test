export const createSearchQuery = category => {
  const optionalCategory = category ? `, categories: "${category}"` : '';
  return `
    {
      search(location: "Las Vegas"${optionalCategory}) {
        total
        business {
          name
          id
          alias
          rating
          url
          price
          photos
          hours {
            is_open_now
          }
        }
      }
    }
  `;
};

export const createCategoriesQuery = () => {
  return `
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
  `;
}