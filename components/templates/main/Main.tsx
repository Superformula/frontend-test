import classNames from 'classnames';
import React, { FC } from 'react';

import { Button, Typography } from '~/components/atoms';

import {
  Filter,
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

export interface MainProps extends FilterProps {
  title: string;
  body: string;
  subtitle: string;
  items: RestaurantItemData[];
  loading?: boolean;
  showLoadMore?: boolean;
  onItemClick: (id: string) => void;
  onLoadMoreClick: () => void;
}

export const Main: FC<MainProps> = ({
  body,
  title,
  subtitle,
  items,
  loading,
  showLoadMore,
  categoryOptions,
  priceOptions,
  onChange,
  onItemClick,
  onLoadMoreClick,
}) => {
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
          onChange={onChange}
        />
      </div>

      <div className={subtitleClass}>
        <Typography variant="subtitle">{subtitle}</Typography>
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
