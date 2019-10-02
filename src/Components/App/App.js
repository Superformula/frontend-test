import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "./App.scss";

import Card from "../Card/Card";
import CardList from "../CardList/CardList";
import Divider from "../Divider/Divider";
import Hero from "../Hero/Hero";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Spacer from "../Spacer/Spacer";

const subtext = "Don't be fooled by the French name, this place oozes with Californian flair.";

const RESTAURANT_LIST = gql`
{
  search(categories:"Food", location:"Las Vegas"){
    business{
      name
      rating
      price
      photos
    }
  }
}
`;

const App = () => {
  const {loading, error, data } = useQuery(RESTAURANT_LIST);

  if(loading) return <p>Loading!!</p>;
  if(error) return <p>ERROR!</p>;

  return (
    <div className="App">
      <SectionWrapper>
        <Hero subtext={subtext}>Restaurants</Hero>
      </SectionWrapper>

      <Spacer size="medium" />
      <Divider />
      <Spacer size="medium" />

      <SectionWrapper>
        <CardList> 
        {data.search.business.map(({name, rating, photos, price, i}) => (
          <Card
            image={photos}
            name={name}
            rating={rating}
            category="thai"
            price={price}
            status={true}
            key={i}
          />
        ))}
        </CardList>
      </SectionWrapper>
    </div>
  );
}

export default App;