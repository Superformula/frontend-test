import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "./App.scss";

import Button from "../Button/Button";
import Card from "../Card/Card";
import CardList from "../CardList/CardList";
import Divider from "../Divider/Divider";
import Hero from "../Hero/Hero";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Spacer from "../Spacer/Spacer";

const subtext = "Don't be fooled by the French name, this place oozes with Californian flair.";

const App = () => {

  const RESTAURANT_LIST = gql`
  query Restaurants($offset:Int, $limit:Int){
    search(categories:"Food", location:"Las Vegas", offset: $offset, limit:$limit){
      business{
        id
        name
        rating
        price
        photos
        categories{
          title
        }
      }
      total
    }
  }
  `;

  const getID = (e, id) => {
    e.preventDefault();
    console.log("Restaurant ID:" + id);
  }

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    RESTAURANT_LIST,
    {
      variables: {
        offset: 0,
        limit: 8
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  const onFetchMore = () => {
    fetchMore({
      variables: {
        offset: 8
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          data: [...prev.data, ...fetchMoreResult.data]
        });
      },
    });
  };

  if(networkStatus === 3) return 'Fetching More';
  if(loading) return 'Loading';
  if(error) return `Error ${error}`;

  return (
    <div className="app">
      <SectionWrapper>
        <Hero subtext={subtext}>Restaurants</Hero>
      </SectionWrapper>

      <Spacer size="medium" />
      <Divider />
      <Spacer size="medium" />

      <SectionWrapper>
        <CardList> 
        {data.search.business.map(({ categories, id, name, rating, photos, price }) => (
          <Card
            image={photos.toString()}
            name={name}
            rating={rating}
            category={categories[0].title}
            price={price}
            status={true}
            key={id}
            onClick={(e) => getID(e, id)}
          />
        ))}
        </CardList>

        <div className="app-button-container">
          <Button inverted onClick={onFetchMore}>Load More</Button>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default App;