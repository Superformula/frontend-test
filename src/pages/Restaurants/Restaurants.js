import React from 'react';

import CardList from "../../components/CardList/CardList";
import Divider from "../../components/Divider/Divider";
import Hero from "../../components/Hero/Hero";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Spacer from "../../components/Spacer/Spacer";
import Filter from '../../components/Filter/Filter';
import Heading from '../../components/Heading/Heading';

import useGlobalHook from '../../hooks/globalHooks';

import './Restaurants.scss';

const subtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const Restaurants = () => {
  const [globalState, setGlobalState] = useGlobalHook();

  return (
    <div className="page-restaurants">
      <SectionWrapper>
        <Hero subtext={subtext}>Restaurants</Hero>
      </SectionWrapper>

      <Spacer size="medium" />
      <Divider />
      <Spacer size="medium" />

      <SectionWrapper>
        <Filter />
      </SectionWrapper>

      <Spacer size="medium" />
      <Divider />

      <SectionWrapper>
        <Spacer size="large" />
        <Heading level={2}>{globalState.categories} Restaurants</Heading>
        <CardList />
      </SectionWrapper>
    </div>
  );
}

export default Restaurants;