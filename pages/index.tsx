/* eslint-disable no-console */
import React, { FC, useEffect, useState } from 'react';

import {
  FilterData,
  Main,
  RestaurantItemData,
  SelectOption,
} from '~/components';
import { CategoryService } from '~/services';

interface MainPageProps {
  categoryOptions?: SelectOption[];
}

const MainPage: FC<MainPageProps> = ({ categoryOptions = [] }) => {
  const [items, setItems] = useState<RestaurantItemData[]>([]);

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

  useEffect(() => {
    setItems([]);
  }, []);

  return (
    <Main
      title="Restaurants"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      subtitle="All Restaurants"
      priceOptions={priceOptions}
      categoryOptions={categoryOptions}
      items={items}
      onItemClick={handleItemClick}
      onChange={handleFilterChange}
      onLoadMoreClick={handleLoadMoreClick}
    />
  );
};

export async function getStaticProps() {
  const { categories } = await CategoryService.getAll();
  const categoryOptions = categories.map(({ alias, title }) => ({ id: alias, text: title }));

  return {
    props: {
      categoryOptions,
    },
  };
}

export default MainPage;
