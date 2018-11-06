import React, { useContext } from "react";
import { AppContext } from "AppContext";
import { Query } from "react-apollo";
import styled from "styled-components";

import FlatButton from "components/FlatButton";
import { Grid, Item } from "components/ItemGrid";
import PaddedSection from "components/PaddedSection";

import FilterNav from "../components/FilterNav";
import RestaurantCard from "../components/RestaurantCard";
import { LIST_RESTAURANTS } from "./gql";

const Centered = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const RestaurantsList = () => {
  const appContext = useContext(AppContext);
  const { loadMore, location, openNow, price, category } = appContext;

  const variables = {
    location,
    limit: 12,
    offset: 0,
    open_now: openNow === true,
    price: price.length ? price.length.toString() : null,
    category: category.length ? category : null
  };

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
      <Query
        query={LIST_RESTAURANTS}
        variables={variables}
        notifyOnNetworkStatusChange={true}
      >
        {({ loading, error, data: { search }, fetchMore }) => {
          if (loading && !search) return <Centered>Loading...</Centered>;
          if (error) {
            console.log("error: ", error);
            return <Centered>Error :(</Centered>;
          }
          if (!search.business.length) {
            return <Centered>No Results Found</Centered>;
          }

          return (
            <div>
              <Grid>
                {search.business.map((business, index) => (
                  <Item height="430" key={business.name + index}>
                    <RestaurantCard {...business} />
                  </Item>
                ))}
              </Grid>
              <Centered>
                <FlatButton
                  style={{ width: 300 }}
                  onClick={() => {
                    fetchMore({
                      variables: {
                        ...variables,
                        offset: loadMore()
                      },
                      updateQuery: ({ search }, { fetchMoreResult }) => {
                        return {
                          search: {
                            ...search,
                            business: [
                              ...search.business,
                              ...fetchMoreResult.search.business
                            ]
                          }
                        };
                      }
                    });
                  }}
                >
                  {loading ? "loading..." : "load more"}
                </FlatButton>
              </Centered>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default RestaurantsList;
