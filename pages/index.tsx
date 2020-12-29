import axios from 'axios';
import { GetStaticProps } from 'next';
import Router from 'next/router';

import React, {
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  FilterData,
  Main,
  RestaurantItemData,
  SelectOption,
} from '~/components';

import { Business } from '~/models';
import { BusinessService, CategoryService } from '~/services';
import { ErrorBoundary } from '~/utils/error';
import { useIsMount } from '~/utils/hooks';
import { mapBusinessToMain } from '~/utils/map';

interface MainPageProps {
  categoryOptions?: SelectOption[];
  loadedItems?: RestaurantItemData[];
}

const MainPage: FC<MainPageProps> = ({ categoryOptions = [], loadedItems = [] }) => {
  const isMount = useIsMount();

  const [category, setCategory] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [openNow, setOpenNow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<RestaurantItemData[]>(loadedItems);
  const [filteredItems, setFilteredItems] = useState<RestaurantItemData[]>([]);

  const priceOptions: SelectOption[] = [
    { id: 'all', text: 'All' },
    { id: '1', text: '$' },
    { id: '2', text: '$$' },
    { id: '3', text: '$$$' },
    { id: '4', text: '$$$$' },
  ];

  const requestBusinesses = useCallback(async (append?: boolean, offset?: number) => {
    setLoading(true);

    const params = { category, offset };
    if (category === null || category === 'all') params.category = undefined;

    const { data } = await axios.get<{ businesses: Business[] }>('/api/businesses', { params });

    setItems((value) => {
      const list = mapBusinessToMain(data.businesses);

      if (append) return [...value, ...list];
      return list;
    });

    setLoading(false);
  }, [category]);

  const handleItemClick = (id: string) => {
    Router.push(`/${id}`).then(() => window.scrollTo(0, 0));
  };

  const handleFilterChange = (value: FilterData) => {
    setCategory(value.category);
    setPrice(value.price);
    setOpenNow(value.open);
  };

  const handleLoadMoreClick = () => {
    requestBusinesses(true, items.length);
  };

  useEffect(() => {
    if (!isMount) requestBusinesses();
  }, [requestBusinesses]);

  useEffect(() => {
    setLoading(true);

    setFilteredItems(items.filter((item) => {
      const isOpen = item.status === 'open';
      const allPrices = price === 'all' || price === null;
      const matchesPrice = item.price.toString() === price;

      if (openNow) {
        if (allPrices) return isOpen;
        return isOpen && matchesPrice;
      }

      if (allPrices) return true;
      return matchesPrice;
    }));

    setLoading(false);
  }, [items, price, openNow]);

  return (
    <ErrorBoundary>
      <Main
        showLoadMore
        loading={loading}
        title="Restaurants"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        priceOptions={priceOptions}
        categoryOptions={categoryOptions}
        items={filteredItems}
        onItemClick={handleItemClick}
        onFilterChange={handleFilterChange}
        onLoadMoreClick={handleLoadMoreClick}
      />
    </ErrorBoundary>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [{ categories }, { businesses }] = await Promise.all([
    CategoryService.getAll(),
    BusinessService.getAll(),
  ]);

  const categoryOptions = categories.map(({ alias, title }) => ({ id: alias, text: title }));

  return {
    props: {
      categoryOptions,
      loadedItems: mapBusinessToMain(businesses),
    },
    revalidate: 60 * 5,
  };
};

export default MainPage;
