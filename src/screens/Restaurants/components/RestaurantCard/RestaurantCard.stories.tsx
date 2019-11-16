import React from 'react';
import { storiesOf } from '@storybook/react';

import { RestaurantCard } from './RestaurantCard';

storiesOf('RestaurantCard', module)
  .addDecorator(storyFn => <div style={{ margin: 10, width: 300 }}>{storyFn()}</div>)
  .add('Default', () => (
    <RestaurantCard
      name="Very Long Name Restaurants Number 1 In List"
      photo="https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg"
      photoAlt="burger with juice"
      rating={4}
      price="$$"
      cuisineName="Thai"
      isOpen
    />
  ));
