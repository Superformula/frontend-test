/* eslint-disable no-console */
import { GetStaticProps } from 'next';
import React, { FC, useState } from 'react';

import {
  FilterData,
  Main,
  RestaurantItemData,
  SelectOption,
} from '~/components';
import { BusinessService, CategoryService } from '~/services';
import { mapBusinessToMain } from '~/utils/map';

interface MainPageProps {
  categoryOptions?: SelectOption[];
  loadedItems?: RestaurantItemData[];
}

const MainPage: FC<MainPageProps> = ({ categoryOptions = [], loadedItems = [] }) => {
  const [items] = useState<RestaurantItemData[]>(loadedItems);

  const priceOptions: SelectOption[] = [{
    id: 'all',
    text: 'All',
  }, {
    id: '1',
    text: '$',
  }, {
    id: '2',
    text: '$$',
  }, {
    id: '3',
    text: '$$$',
  }, {
    id: '4',
    text: '$$$$',
  }];

  const handleItemClick = (id: string) => {
    console.log(id);
  };

  const handleFilterChange = (value: FilterData) => {
    console.log(value);
  };

  const handleLoadMoreClick = () => {
    console.log('load more');
  };

  return (
    <Main
      title="Restaurants"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      priceOptions={priceOptions}
      categoryOptions={categoryOptions}
      items={items}
      onItemClick={handleItemClick}
      onFilterChange={handleFilterChange}
      onLoadMoreClick={handleLoadMoreClick}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { categories } = await CategoryService.getAll();
  const categoryOptions = categories.map(({ alias, title }) => ({ id: alias, text: title }));

  const { businesses } = await BusinessService.getAll();

  return {
    props: {
      categoryOptions,
      loadedItems: mapBusinessToMain(businesses),
    },
  };
};

export default MainPage;
