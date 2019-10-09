import React from "react";
import { Query } from "react-apollo";
import {gql} from 'apollo-boost';
import { storiesOf } from "@storybook/react";
import apolloStorybookDecorator from "apollo-storybook-react";
import Card from "../Card/Card";
import CardList from './CardList' // For styles

import notes from './CardList.md';

const typeDefs = `
  type Query {
    id: String
    categories: String
    photos: String
    name: String
    rating: Float
    price: String
    hours: Boolean
  }

  schema {
    query: Query
  }
`;

const mocks = {
  Query: () => {
    return {
      id: () => {
        return Math.random();
      },
      categories: () => {
        return "Thai"
      },
      photos: () => {
        return "https://s3-media3.fl.yelpcdn.com/bphoto/ja1-oE6RiIWorNzty-A4Eg/o.jpg"
      },
      name: () => {
        return "Mon Ami Gabi"
      },
      rating: () => {
        return 4.5
      },
      price: () => {
        return "$$$"
      },
      hours: () => {
        return true
      }
    };
  }
};

function CardListStory() {
  return (
    <Query
      query={gql`
        query hello {
          id
          categories
          photos
          name
          rating
          price
          hours
        }
      `}
    >
      {({ loading, data }) => {
        const hello = data && data.id;
        console.log(hello)

        if (loading) {
          return <h1>Loading one second please!</h1>;
        }

        // category, image, id, name, rating, price, status
        return (
          <ul className="cardlist-list">
            <li className="cardlist-list-item" key={data.id}>
              <Card
                image={data.photos}
                name={data.name}
                rating={data.rating}
                category={data.categories}
                price={data.price}
                status={data.hours}
                id={data.id}
                key={data.id}
              />
            </li>
            <li className="cardlist-list-item" key={data.id}>
              <Card
                image={data.photos}
                name={data.name}
                rating={data.rating}
                category={data.categories}
                price={data.price}
                status={data.hours}
                id={data.id}
                key={data.id}
              />
            </li>
          </ul>
        );
      }}
    </Query>
  );
}

storiesOf("CardList", module)
  .addDecorator(
    apolloStorybookDecorator({
      typeDefs,
      mocks
    })
  )
  .add("A CardList", () => 
    <CardListStory />, 
    {notes: {notes}}
);
