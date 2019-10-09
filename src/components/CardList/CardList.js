import React, { useEffect } from "react";
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import PropTypes from "prop-types";
import useGlobalHook from '../../hooks/globalHooks';

import Card from "../Card/Card";

import "./CardList.scss";
import Heading from "../Heading/Heading";
import Loading from "../Loading/Loading";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const RESTAURANT_LIST = gql`
  query Restaurants($limit:Int, $categories:String $price:String, $is_open_now:Boolean){
    search(categories:$categories, location:"Las Vegas", limit:$limit, price:$price, open_now:$is_open_now){
      business{
        id
        name
        rating
        price
        photos
        categories{
          title
        }
        hours {
          is_open_now
        }
      }
      total
    }
  }
`;

const CardList = () => {
  const [globalState, setGlobalState] = useGlobalHook()

  const { loading, error, data, refetch } = useQuery(
    RESTAURANT_LIST,
    { 
      variables: { limit: 16 },
    }
  );

  useEffect(() => {
    refetch({
      price: globalState.price.toString(),
      categories: globalState.categories,
      is_open_now: globalState.is_open_now
    })
  });

  if(loading) return <Loading />;
  if(error) return `Error ${error}`;

  if(data.search.total === 0) return (
    <SectionWrapper>
      <Heading level={2}>No Results</Heading>
    </SectionWrapper>
  );

  return ( 
    <ul className="cardlist-list">
      {data.search.business.map(({ categories, id, hours, name, rating, photos, price }) => (
        <li className="cardlist-list-item" key={id}>
          <Card
            image={photos.toString()}
            name={name}
            rating={rating}
            category={categories[0].title}
            price={price}
            status={hours[0].is_open_now}
            key={id}
            id={id}
          />
        </li>
      ))}
  </ul>
  )
};

CardList.protoTypes = {
  children: PropTypes.node
};

export default CardList;
