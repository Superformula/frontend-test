import classNames from 'classnames';
import React, { FC, useState } from 'react';

import { Button, Typography } from '~/components/atoms';

import {
  Filter,
  FilterData,
  FilterProps,
  RestaurantItem,
  RestaurantItemProps,
} from '~/components/organisms';

import styles from './Main.module.scss';

export type RestaurantItemData = {
  id: RestaurantItemProps['id'];
  imageUrl: RestaurantItemProps['imageUrl'];
  title: RestaurantItemProps['title'];
  rating: RestaurantItemProps['rating'];
  category: RestaurantItemProps['category'];
  price: RestaurantItemProps['price'];
  status: RestaurantItemProps['status'];
};

export interface MainProps {
  title: string;
  body: string;
  items: RestaurantItemData[];
  loading?: boolean;
  showLoadMore?: boolean;
  categoryOptions: FilterProps['categoryOptions'];
  priceOptions: FilterProps['priceOptions'];
  onItemClick: (id: string) => void;
  onLoadMoreClick: () => void;
  onFilterChange: (value: FilterData) => void;
}

export const Main: FC<MainProps> = ({
  body,
  title,
  items,
  loading,
  showLoadMore,
  categoryOptions,
  priceOptions,
  onItemClick,
  onFilterChange,
  onLoadMoreClick,
}) => {
  const [subtitle, setSubtitle] = useState<string>('All');

  const elementClass = classNames({
    [styles.main]: true,
  });

  const titleClass = classNames({
    [styles['main-title']]: true,
  });

  const bodyClass = classNames({
    [styles['main-body']]: true,
  });

  const filterClass = classNames({
    [styles['main-filter']]: true,
  });

  const subtitleClass = classNames({
    [styles['main-subtitle']]: true,
  });

  const buttonClass = classNames({
    [styles['main-button']]: true,
  });

  const handleFilterChange = (value: FilterData) => {
    const { label } = value;

    if (!label) setSubtitle('All');
    else setSubtitle(label);

    onFilterChange(value);
  };

  return (
    <div className={elementClass}>
      <div className={titleClass}>
        <Typography variant="title">{title}</Typography>
      </div>

      <div className={bodyClass}>
        <Typography variant="body">{body}</Typography>
      </div>

      <div className={filterClass}>
        <Filter
          categoryOptions={categoryOptions}
          priceOptions={priceOptions}
          onChange={handleFilterChange}
        />
      </div>

      <div className={subtitleClass}>
        <Typography variant="subtitle">{`${subtitle} Restaurants`}</Typography>
      </div>

      <div className="grid">
        {items.map((item) => (
          <div className="col" key={item.id}>
            <RestaurantItem
              {...item}
              loading={loading}
              onClick={onItemClick}
            />
          </div>
        ))}
      </div>

      {
        items.length === 0 && (
          <div className={bodyClass}>
            <Typography variant="headline">No items were found.</Typography>
          </div>
        )
      }

      <div className={buttonClass}>
        {
          showLoadMore && (
            <Button
              size="normal"
              color="secondary"
              disabled={loading}
              onClick={onLoadMoreClick}
            >
              Load More
            </Button>
          )
        }
      </div>
    </div>
  );
};
