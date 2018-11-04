import React, { useContext } from "react";
import { AppContext } from "AppContext";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import FilterNav from "components/FilterNav";
import { Grid, Item } from "components/ItemGrid";
require("./main.css");

const RestaurantsList = () => {
  const appContext = useContext(AppContext);
  const { setPrice, setOpenNow, setCategory } = appContext;

  return (
    <div>
      <div className="top-section">
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

      <Grid>
        <Query
          query={gql`
            {
              search(location: "las vegas", limit: 12) {
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

            return data.search.business.map(({ name, photos, rating, categories, price, is_closed }) => (
              <Item key={name}>
                {photos.length ? (
                  <div
                    style={{
                      background: `url(${photos[0]})`,
                      backgroundSize: "300px 230px",
                      width: 300,
                      height: 230
                    }}
                  />
                ) : (
                  <div>no photo</div>
                )}

                <p>{name}</p>
                <p>{rating}</p>

                <p>{categories[0].title} - {price}     ----- {is_closed ? "Closed" : "Open"}</p>
              </Item>
            ));
          }}
        </Query>
      </Grid>
    </div>
  );
};

export default RestaurantsList;
