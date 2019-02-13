export const createSearchQuery = (category, offset) => {
  const optionalCategory = category ? `, categories: "${category}"` : '';
  const optionalOffset = offset ? `, offset: ${offset}` : '';

  return `
    {
      search(location: "Las Vegas"${optionalCategory}${optionalOffset}) {
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
          categories {
            title
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
};

export const createBusinessQuery = id => {
  return `
    {
      business(id: "${id}") {
        name
        id
        alias
        rating
        url
        price
        photos
        review_count
        location {
          formatted_address
        }
        coordinates {
          latitude
          longitude
        }
        hours {
          is_open_now
        }
        categories {
          title
        }
        reviews {
          id
          text
          rating
          time_created
          user {
            name
            image_url
            id
          }
        }
      }
    }
  `;
};