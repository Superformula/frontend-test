import React, { useContext } from "react";
import { AppContext } from "AppContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import FilterNav from "components/FilterNav";
import { Grid, Item } from "components/ItemGrid";
import RestaurantCard from "./components/RestaurantCard";
require("./main.scss");

const RestaurantsList = () => {
  const appContext = useContext(AppContext);
  console.log("appContext: ", appContext)

  const { setPrice, setOpenNow, setCategory } = appContext;

  return (
    <div>
      <div className="padded-section">
        <h1>Restaurants</h1>
        <p>
          Green juice mustache adaptogen air plant single-origin coffee. <br />
          Beard yuccie succulents listicle, pickled gluten-free shaman YOLO
          intelligentsia occupy.
        </p>
      </div>

      <FilterNav
        setPrice={setPrice}
        setOpenNow={setOpenNow}
        setCategory={setCategory}
      />

      <h2 className="padded-section">
        All Restaurants
      </h2>
      <Grid>
        <Query
          query={gql`
            {
              search(location: "${appContext.location}", limit: 12) {
                total
                business {
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
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.search.business.map((business) => (
              <Item key={business.name}>
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
