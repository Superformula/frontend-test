import React, { Fragment } from 'react';
import { array, number, string, bool } from 'prop-types';
import cx from 'classnames';

import Stars from 'components/Stars';
import OpenStatus from 'components/OpenStatus';

export default function Meta(props) {
  const { className, is_closed, rating, categories, price } = props;
  return (
    <Fragment>
      <Stars rating={rating} />
      <div className={cx('meta', className)}>
        <span className="meta__item">
          {categories.length && categories[0].title}
          &nbsp;•&nbsp;
          {price}
        </span>
        <OpenStatus isClosed={is_closed} />
      </div>
    </Fragment>
  );
}

Meta.propTypes = {
  is_closed: bool,
  rating: number,
  categories: array,
  price: string,
  className: string,
};

Meta.defaultProps = {
  categories: [],
};
