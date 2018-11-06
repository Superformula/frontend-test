import React, { useContext } from "react";
import { AppContext } from "AppContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Grid, Item } from "components/ItemGrid";
import PaddedSection from "components/PaddedSection";

import FilterNav from "../components/FilterNav";
import RestaurantCard from "../components/RestaurantCard";

const LIST_RESTAURANTS = gql`
  query ListRestaurants(
    $location: String!
    $limit: Int!
    $open_now: Boolean
    $price: String
    $category: String
  ) {
    search(
      location: $location
      limit: $limit
      open_now: $open_now
      price: $price
      categories: $category
    ) {
      total
      business {
        alias
        photos
        name
        rating
        categories {
          title
        }
        price
        is_closed
      }
    }
  }
`;

const RestaurantsList = () => {
  const appContext = useContext(AppContext);
  const { location, openNow, price, category } = appContext;

  // console.log("appContext: ", appContext);

  return (
    <div>
      <PaddedSection>
        <h1>Restaurants</h1>
        <p>
          Green juice mustache adaptogen air plant single-origin coffee. <br />
          Beard yuccie succulents listicle, pickled gluten-free shaman YOLO
          intelligentsia occupy.
        </p>
      </PaddedSection>

      <FilterNav />

      <PaddedSection>
        <h2>All Restaurants</h2>
      </PaddedSection>

      <Grid>
        <Query
          query={LIST_RESTAURANTS}
          variables={{
            location,
            limit: 10,
            open_now: openNow === true,
            price: price.length ? price.length.toString() : null,
            category: category.length ? category : null
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              console.log("error: ", error);
              return <p>Error :(</p>;
            }

            if (!data.search.business.length) {
              return <div>No Results Found</div>;
            }

            return data.search.business.map((business, index) => (
              <Item key={business.name + index}>
                <RestaurantCard {...business} />
              </Item>
            ));
          }}
        </Query>
      </Grid>
    </div>
  );
};

export default RestaurantsList;
