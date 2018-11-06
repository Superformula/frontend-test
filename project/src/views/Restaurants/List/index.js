import React, { useContext } from "react";
import { AppContext } from "AppContext";
import { Query } from "react-apollo";

import { Grid, Item } from "components/ItemGrid";
import PaddedSection from "components/PaddedSection";

import FilterNav from "../components/FilterNav";
import RestaurantCard from "../components/RestaurantCard";
import { LIST_RESTAURANTS } from "./gql";

const RestaurantsList = () => {
  const appContext = useContext(AppContext);
  const { location, openNow, price, category } = appContext;

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
            limit: 12,
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
              <Item height="430" key={business.name + index}>
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
