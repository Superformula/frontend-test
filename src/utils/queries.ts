import { gql } from '@apollo/client'

export const GET_CATEGORIES = gql`
  query GetCategories($term: String!, $location: String!) {
    search(term: $term, location: $location) {
      business {
        categories {
          alias,
          title
        }
      }
    } 
  }
`

export const GET_RESTAURANTS = gql`
  query GetRestaurants($term: String!, $location: String!, $limit: Int, $offset: Int, $categories: String) {
    search(term: $term, location: $location, limit: $limit, offset: $offset, categories: $categories) {
      business{
        name,
        is_closed,
        rating,
        price,
        photos,
        categories {
          alias,
          title
        }
      }
    }
  }
`

export const GET_RESTAURANT = `
  query GetRestaurant($term: String!, $location: String!, $limit: Int!) {
    search(term: $term, location: $location, limit: $limit) {
      business{
        name,
        is_closed,
        rating,
        price,
        photos,
        review_count,
        hours {
          is_open_now
        },
        categories {
          alias,
          title
        },
        coordinates {
          latitude,
          longitude
        },
        location {
          formatted_address
        },
        reviews{
          rating,
          text,
          time_created,
          user {
            image_url,
            name
          }
        }
      }
    }
  }
`