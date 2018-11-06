import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

import PaddedSection from "components/PaddedSection";

require("./main.scss");

const RESTAURANT_DETAILS = gql`
  query RestaurantDetails($alias: String!) {
    business(id: $alias) {
      name
      rating
      categories {
        title
      }
      price
      is_closed
      photos
      location {
        formatted_address
      }
      review_count
      reviews {
        user {
          name
          image_url
        }
        rating
        text
        time_created
      }
    }
  }
`;

const RestaurantDetail = ({
  match: {
    params: { alias }
  }
}) => {
  return (
    <div>
      <Query query={RESTAURANT_DETAILS} variables={{ alias }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log("error: ", error);
            return <p>Error :(</p>;
          }

          const {
            business: {
              name,
              rating,
              categories,
              price,
              is_closed,
              photos,
              location,
              review_count,
              reviews
            }
          } = data;

          return (
            <div>
              <PaddedSection>
                <h1>{name}</h1>
                <p>{rating} stars</p>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>
                    {categories.length ? categories[0].title : null} - {price}
                  </p>

                  <p>
                    {is_closed ? (
                      <span>
                        <span className="red-dot" /> CLOSED
                      </span>
                    ) : (
                      <span>
                        <span className="green-dot" /> OPEN NOW
                      </span>
                    )}
                  </p>
                </div>
              </PaddedSection>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default withRouter(RestaurantDetail);
